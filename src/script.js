/* 	Scroll Animations
	Some important screen widths (need to be updated if header is updated, here and in CSS):
		- Minimum size to fit navbar and title in one row when not scrolled: 906px
		- Minimum size to fit navbar and title in one row when scrolled: 651px
		- Minimum size to fit navbar in one row: 466px
*/
var title = document.getElementById('title');
var buttons = document.getElementById('buttons');

let ticking = false;
window.onscroll = function() {
	if (!ticking) {
		window.requestAnimationFrame(function() {
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
		}
		else {
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
		}
		else {
			title.classList.remove('scrolled');
			buttons.classList.remove('scrolled');
		}
	}
}

// Render React elements from projects.json
function renderProjects(data) {
	const root = ReactDOM.createRoot(document.getElementById('reactapp'))
	let elements = []
	elements = data.projects.map(({visible, title, language, github, site, photo, alt, description, width, height}, index) => {
		return <Project key={title} visible={visible} title={title} lang={language} github={github} site={site} photo={photo} alt={alt} desc={description} width={width} height={height} />
	})
	root.render(elements);
}
fetch("./projects.json").then(response => response.json()).then(obj => renderProjects(obj))

// Format text color for various prgramming languages or frameworks
const LANGUAGE_COLORS = {
	"Arduino": {color: "#4db6ac"},	// Teal 300
	"Assembly": {color: "#90a4ae"},	// Blue Gray 300
	"Bash": {color: "#aed581"},		// Light Green 300
	"C++": {color: "#f06292"},		// Pink 300
	"Flutter": {color: "#4dd0e1"},	// Cyan 300
	"Java": {color: "#ff8a65"},		// Deep Orange 300
	"JS": {color: "#ffd54f"},			// Amber 300
	"Python": {color: "#7986cb"},		// Indigo 300
	"VHDL": {color: "#9575cd"}		// Deep Purple 300
};

function setTextColor(language) {
	return LANGUAGE_COLORS[language];
}

// Define React Component
function Project(props) {
	// Skip rendering elements not set to visible and elements with an empty description
	if (props.visible == "false" || props.desc == "") return null;

	// Template for cards
	return (
		<div className="grid-item">
			<div className="card">
				<div className="info">
					<h3 className="title">{props.title}</h3>
					<h3 className="language" style={setTextColor(props.lang)}>{props.lang}</h3>
				</div>
				{props.photo != "" &&
					<img className="featured-image" src={props.photo} alt={props.alt} loading="lazy" decoding="async" width={props.width} height={props.height}></img>
				}
				
				<p className="desc" dangerouslySetInnerHTML={{ __html: props.desc.replace(/\\n/g, '<br />') }}></p>
				{props.site == ""
					? <a className="site button" href={props.github} target="_blank" rel="noopener noreferrer" aria-label={`See ${props.title} on GitHub`}>See it on GitHub</a>
					: <div>
						<a className="site site-left button" href={props.github} target="_blank" rel="noopener noreferrer" aria-label={`See ${props.title} on GitHub`}>See it on GitHub</a>
						<a className="site site-right button" href={props.site} target="_blank" rel="noopener noreferrer" aria-label={`Try out ${props.title}`}>Try it out!</a>
					  </div>
				}
			</div>
		</div>
	);
}
