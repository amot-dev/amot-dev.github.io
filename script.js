/* 	Scroll Animations
	Some important screen widths (need to be updated if header is updated, here and in CSS):
		- Minimum size to fit navbar and title in one row when not scrolled: 906px
		- Minimum size to fit navbar and title in one row when scrolled: 651px
		- Minimum size to fit navbar in one row: 466px
*/
'use strict';

var title = document.getElementById('title');
var buttons = document.getElementById('buttons');

var ticking = false;
window.onscroll = function () {
	if (!ticking) {
		window.requestAnimationFrame(function () {
			scrollFunction();
			ticking = false;
		});
		ticking = true;
	}
};
function scrollFunction() {

	// Scrolling down
	if (document.body.scrollTop > 0.8 * window.innerHeight || document.documentElement.scrollTop > 0.8 * window.innerHeight) {
		// Need to transition display style between 651px and 905px (done by making buttons transparent during display change)
		// This is because between those sizes, the navbar needs to move from inline to a new row or vice versa
		if (window.matchMedia('(min-width: 651px) and (max-width: 905px)').matches && !buttons.classList.contains('scrolled')) {
			// Start scroll animation
			buttons.classList.add('display-transitioning');
			title.classList.add('scrolled');
			buttons.classList.add('scrolled');
			// Wait until there's enough room for both title and navbar before completing button transition
			requestAnimationFrame(function checkWidth() {
				var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
				if (title.offsetWidth + buttons.offsetWidth < viewportWidth) {
					buttons.classList.remove('display-transitioning');
				}
				// If there's no room, check again on the next animation frame
				else {
						requestAnimationFrame(checkWidth);
					}
			});
		} else {
			title.classList.add('scrolled');
			buttons.classList.add('scrolled');
		}
	}
	// Scrolling up
	else {
			if (window.matchMedia('(min-width: 651px) and (max-width: 905px)').matches && buttons.classList.contains('scrolled')) {
				// Start scroll animation
				buttons.classList.add('display-transitioning');
				title.classList.remove('scrolled');
				buttons.classList.remove('scrolled');
				// Wait until there's not enough room for both title and navbar before completing button transition
				requestAnimationFrame(function checkWidth() {
					var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
					if (title.offsetWidth + buttons.offsetWidth > viewportWidth) {
						buttons.classList.remove('display-transitioning');
					}
					// If there's still room, check again on the next animation frame
					else {
							requestAnimationFrame(checkWidth);
						}
				});
			} else {
				title.classList.remove('scrolled');
				buttons.classList.remove('scrolled');
			}
		}
}

// Render React elements from projects.json
function renderProjects(data) {
	var root = ReactDOM.createRoot(document.getElementById('reactapp'));
	var elements = [];
	elements = data.projects.map(function (_ref, index) {
		var visible = _ref.visible;
		var title = _ref.title;
		var language = _ref.language;
		var github = _ref.github;
		var site = _ref.site;
		var photo = _ref.photo;
		var alt = _ref.alt;
		var description = _ref.description;
		var width = _ref.width;
		var height = _ref.height;

		return React.createElement(Project, { key: title, visible: visible, title: title, lang: language, github: github, site: site, photo: photo, alt: alt, desc: description, width: width, height: height });
	});
	root.render(elements);
}
fetch("./projects.json").then(function (response) {
	return response.json();
}).then(function (obj) {
	return renderProjects(obj);
});

// Format text color for various prgramming languages or frameworks
var LANGUAGE_COLORS = {
	"Arduino": { color: "#4db6ac" }, // Teal 300
	"Assembly": { color: "#90a4ae" }, // Blue Gray 300
	"Bash": { color: "#aed581" }, // Light Green 300
	"C++": { color: "#f06292" }, // Pink 300
	"Flutter": { color: "#4dd0e1" }, // Cyan 300
	"Java": { color: "#ff8a65" }, // Deep Orange 300
	"JS": { color: "#ffd54f" }, // Amber 300
	"Python": { color: "#7986cb" }, // Indigo 300
	"VHDL": { color: "#9575cd" } // Deep Purple 300
};

function setTextColor(language) {
	return LANGUAGE_COLORS[language];
}

// Define React Component
function Project(props) {
	// Skip rendering elements not set to visible and elements with an empty description
	if (props.visible == "false" || props.desc == "") return null;

	// Template for cards
	return React.createElement(
		'div',
		{ className: 'grid-item' },
		React.createElement(
			'div',
			{ className: 'card' },
			React.createElement(
				'div',
				{ className: 'info' },
				React.createElement(
					'h3',
					{ className: 'title' },
					props.title
				),
				React.createElement(
					'h3',
					{ className: 'language', style: setTextColor(props.lang) },
					props.lang
				)
			),
			props.photo != "" && React.createElement('img', { className: 'featured-image', src: props.photo, alt: props.alt, loading: 'lazy', decoding: 'async', width: props.width, height: props.height }),
			React.createElement('p', { className: 'desc', dangerouslySetInnerHTML: { __html: props.desc.replace(/\\n/g, '<br />') } }),
			props.site == "" ? React.createElement(
				'a',
				{ className: 'site button', href: props.github, target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'See ' + props.title + ' on GitHub' },
				'See it on GitHub'
			) : React.createElement(
				'div',
				null,
				React.createElement(
					'a',
					{ className: 'site site-left button', href: props.github, target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'See ' + props.title + ' on GitHub' },
					'See it on GitHub'
				),
				React.createElement(
					'a',
					{ className: 'site site-right button', href: props.site, target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Try out ' + props.title },
					'Try it out!'
				)
			)
		)
	);
}
