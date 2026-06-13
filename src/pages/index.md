---
layout: ../layouts/Portfolio.astro
author: "Alexander Mot"

hero:
  title: "Hey! It's Alex."
  subtitle: "Computer Engineer invested in the Future"

about:
  paragraphs:
    - "Hey! It's Alex."
    - "Like many of my peers, I am driven by curiosity. The urge to tinker. It's taken me from deciding to seek a degree in Computer Engineering to varied co-op experiences. Both in firmware testing for machine vision cameras, as well as in the physical design of microchip components. Now, it's brought me to TELUS, where I've evolved from building infrastructure as code to my current work alongside network engineers in automation testing. The thread connecting all the experiences is my continuous desire to learn and challenge myself."
    - "My strong background in low-level programming has shaped a technical philosophy where efficiency and reliability are the baseline. Further knowledge in RTL and even physical layout help my intuition for how software really interacts with hardware. While my work today involves higher-level languages and more abstract systems, I still approach problems with that same resource-conscious discipline."
    - "Outside of work, that same drive for reliability led me to architecting a homelab from the ground up. By using NixOS and Docker, I've moved toward a fully declarative setup where my infrastructure is versioned and reproducible. On my other machines, scripts work tirelessly with various automation tasks, and I'm constantly prototyping new thoughts and ideas, especially when they involve technologies I haven't used before."
    - "At the end of the day, I'm at my best when navigating the space where hardware and software collide. I look forward to the challenge of mastering new technical landscapes and integrating emerging technologies into robust, reliable systems."
    - "Bring on the future."

projects:
  - title: "MotoTwist"
    visible: true
    description:
      - "MotoTwist is a self-hosted, containerized service to track and rate motorcycle roads. It allows you to define and rate motorcycle roads, both paved and unpaved, on various criteria. Weather conditions at the time of ride are also recorded: maybe a rainy day ruined a certain ride, but it's amazing in the sun!"
      - "Started as a simple hobby project for me to keep track of my own favourite motorcycle roads, I quickly realized that beyond forums and some curated print media, there isn't a great place for motorcylists to share the hidden gems around them. So, I made it."
      - "MotoTwist has support for multiple users, advanced filters help anyone find the exact road for them and the current conditions, and an ability to export it all to GPX and take it with you! Anyone can deploy an instance within minutes via Docker, and plans are underway for a central deployment."
    language: "Python"
    github: "https://github.com/amot-dev/mototwist"
    site: "https://docs.mototwist.app"
    photo: "/projects/mototwist.png"
    width: 1908
    height: 920
    alt: "A screenshot of MotoTwist, depicting the main UI elements, the map and the sidebar, and focused on a 'Twist' in BC, Canada. Various information and ratings are shown for this 'Twist' via a map popup."

  - title: "Endshards"
    visible: true
    description:
      - "Endshards is a Minecraft Mod intended to overhaul the endgame progression with by upgrading the existing Netherite gear, and by adding 3 new sets of gear, a new dimension, and a new boss. Of course, this is all still in development, but the idea is to diversify some of the tools and armour with some special abilities, making different sets better for different tasks."
      - "For example, Ender gear is best suited for exploration, Netherite is best for combat, and Sculk is best for mining. The final Nightmare tier will be a jack of all trades, but master of none. This project was initially intended for me to learn Minecraft modding, but that turned out to be fairly simple so I expanded my goals. For more info and a download link, see the wiki linked below!"
    language: "Java"
    github: "https://github.com/amot-dev/endshards"
    site: "/endshards"
    photo: "/projects/endshards.png"
    width: 1920
    height: 1057
    alt: "A Minecraft screenshot of a display of all the items, blocks, and armours added to the game by Endshards."

  - title: "timestamp"
    visible: true
    description:
      - "For the longest time, my way to organize photos was a mostly unreliable bash script that would often result in lost files if date metadata, especially on videos, was missing. This new and improved timestamp tool was developed to fix all reliability issues, improve speed, and add some customizability. In short, I wanted to make something that would be useful for others too."
      - "The new and improved timestamp tool allows you to rename EXIF and XMP files to reflect date found in metadata. The specific tag used to extract data from the file can be changed, as can the final date format used in the file rename. And, to make it easier for others to discover, I've published it to the Arch Linux AUR!"
    language: "C++"
    github: "https://github.com/amot-dev/timestamp"
    site: "https://aur.archlinux.org/packages/timestamp"
    photo: "/projects/timestamp.png"
    width: 1908
    height: 1036
    alt: "A screenshot of a terminal running Timestamp in interactive mode. It shows off the various ways Timestamp can be used."

  - title: "Cursed Table Revamped"
    visible: true
    description:
      - "Cursed Table Revamped is another Minecraft Mod, though quite a bit smaller than Endshards. In the unmodified game, treasure and curse enchantments do not appear in the Enchanting Table at all."
      - "With Cursed Table Revamped, by default, curses are added to the list of possible enchants. For me, that wasn't quite enough though, so I added a few custom game rules that allow the player to pick and choose exactly which enchants can appear."
    language: "Java"
    github: "https://github.com/amot-dev/cursed-table-revamped"
    site: "https://modrinth.com/mod/cursed-table-revamped"
    photo: "/projects/cursed-table-revamped.png"
    width: 1920
    height: 1057
    alt: "A Minecraft screenshot showing the player adding a curse to a pair of Diamond Boots via the Enchanting Table, functionality added by this mod."

  - title: "Ez-Note"
    visible: true
    description:
      - "Ez-Note is a note storing app built around individuals with cognitive disabilities. Its primary features include speech-to-text transcription of recorded notes, image-to-text conversion of photos of text, AI text note summarization, and text-to-speech dictation of notes."
      - "Ez-Note provides a way for users to run all this processing on their input files, and store everything in a central location. This app was developed in 8 hours for the Western Engineering Competition 2024, where it won my team and I first place in the Programming Competition."
    language: "Python"
    github: "https://github.com/christophertesar/wec_2024"
    site: ""
    photo: "/projects/ez-note.png"
    width: 1920
    height: 1080
    alt: "A screenshot of the main Ez-Note UI, showing two uploaded notes and the options that can be taken for them."

  - title: "RescueReady"
    visible: "false"
    description:
      - "RescueReady is a Flutter application designed to assist in emergency situations. The app provides a platform for users to request help, offer assistance, and access information about local emergencies and emergency guides."
      - "This mainly serves as a means to reduce burden on the 911 lines during natural disasters or other emergencies. If you are simply trapped, and not in any imminent danger, a trained and vetted volunteer can be dispatched to your location, rather than having to burden official emergency response teams with your call."
    language: "Flutter"
    github: "https://github.com/amot-dev/RescueReady"
    site: ""
    photo: "/projects/rescue-ready.png"
    width: 1914
    height: 984
    alt: "A screenshot of the main page of RescueReady, showing the main possible functions of the prototype app."

  - title: "Star Trek Episodes"
    visible: true
    description:
      - "This website was a personal project of mine intended to sort through all Star Trek episodes based on various character, planet, and ship appearances (and eventually mood/tone as well). Currently, it's possible to select multiple tags to include or not include. These are searchable, or can simply be picked from a list of all tags appearing in the selected show."
      - "At the moment, it is left as a proof of concept (with TOS and TAS done, and TNG partially done) due to the large amount of Star Trek episodes, though I am planning to eventually overhaul everything using ReactJS to be less manual."
    language: "JS"
    github: "https://github.com/amot-dev/star-trek-episodes"
    site: "/star-trek-episodes"
    photo: "/projects/star-trek-episodes.png"
    width: 1919
    height: 668
    alt: "A screenshot of the Star Trek Episodes site, showcasing the filtering ability in action."

  - title: "2048"
    visible: true
    description:
      - "This is yet another implementation of 2048, back from when I was first learning JavaScript. It keeps track of current and high score, and generally works, but has some odd quirks. Features? Bugs? Play it and decide for yourself."
    language: "JS"
    github: "https://github.com/amot-dev/2048"
    site: "/2048"
    photo: "/projects/2048.png"
    width: 959
    height: 503
    alt: "A screenshot of my custom 2048 game implementation."

  - title: "CPU Simulator"
    visible: true
    description:
      - "CPU Simulator does exactly what the name implies: simulates a computer processor. The program takes an input of a series of numbers (given as a csv), which it translates into binary. These binary numbers are all parsed as instructions by a simple ISA (instruction set architecture), then executed by the program. Through the use of C++ preprocessor directives, it's possible to change how many instructions are fetched, executed, and removed from the queue each 'clock cycle.'"
    language: "C++"
    github: "https://github.com/amot-dev/cpu-simulator"
    site: ""
    photo: ""
    alt: ""

  - title: "Vending Machine"
    visible: true
    description:
      - "Vending Machine is a program intended to run on a physical vending machine FPGA. It provides all the necessary functions, including setting prices, purchasing products, and even a backdoor to receive products for free :)."
      - "Without a physical vending machine, the input must be set prior to runtime and the output is in a form of a digital signal graph, but of course, when ran on a physical machine, inputs would be relayed from the PIN pad, and outputs would trigger mechanisms to process payment or release a product."
    language: "VHDL"
    github: "https://github.com/amot-dev/vending-machine"
    site: ""
    photo: ""
    alt: ""

  - title: "Multithread Game (unnamed)"
    visible: false
    description:
      - "This game is very much a work in progress, but is intended to test out what I've learned about testing and threads in C++. Currently, threads have not been implemented yet, though the game is separated into different components which will be run on different threads. The idea of the game is a 2D tile-based adventure/exploration game with NPCs and quests. Currently, the game is able to randomly generate a world with cities based on a given seed, and test that the pathing and generation algorithms work properly. For now, the game is on pause because Endshards is more exciting to work on."
    language: "C++"
    github: "https://github.com/amot-dev/multithread-game"
    site: ""
    photo: ""
    alt: ""

  - title: "Translink Buzzer Downloader"
    visible: true
    description:
      - "This is a fun script I made with a story behind it. Essentially, a local bus makes a slightly longer trip every Sunday/Holiday at 6am. I never knew why this was, and being an introvert, asking was not an option. Instead, I wrote this script (which sadly no longer works) to download every article of the transit company's news letter, and compact them into easily CTRL-F-abble decade-long PDFs. In the end, I learnt a lot about the history of this bus, but the mystery remains unsolved..."
    language: "Bash"
    github: "https://github.com/amot-dev/get-translink-buzzer"
    site: ""
    photo: ""
    alt: ""

  - title: "Big Add"
    visible: true
    description:
      - "Big Add is an assembly (ARM 32-bit) subroutine that performs arbitrary-sized unsigned addition. This was made as my first big assignment for a course on Assembly programming in Big Endien Arm."
    language: "Assembly"
    github: "https://github.com/amot-dev/big-add"
    site: ""
    photo: ""
    alt: ""

  - title: "Cycle Vest"
    visible: true
    description:
      - "Cycle Vest was a project I, along with a few others, made in my first engineering design course. Essentially, it's a jacket with lights for cycling. A palm-attached control panel allows the user to light up the arm they are using to signal, making it more visible to other vehicles. Additionally, more lights on the back of the jacket light up automatically in low-light conditions, triggered by a photoresistor."
    language: "Arduino"
    github: "https://github.com/amot-dev/cycle-vest"
    site: ""
    photo: ""
    alt: ""

contact:
  placeholder: "Hi Alex! I was thinking..."
  formspree_endpoint: "https://formspree.io/f/xgejqaew"
---