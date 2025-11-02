// script.js - JavaScript functionality for Space Deck flashcard website

console.log('Script loaded, starting initialization');

// Embedded flashcard data
let flashcards = [
  {
    "front": "Name all planets in order, with one unique feature for each.",
    "back": "Mercury (smallest), Venus (hottest thick CO2 atmosphere), Earth (liquid surface water), Mars (0.38 g gravity), Jupiter (largest, Great Red Spot), Saturn (prominent rings), Uranus (axial tilt ~98°), Neptune (strong winds); mnemonic: \"My Very Educated Mother Just Served Us Noodles.\"​"
  },
  {
    "front": "What is the surface gravity on Mars vs Earth? (in m/s²)",
    "back": "Mars ≈ 3.71 m/s²; Earth ≈ 9.81 m/s², so Mars is about 0.38 g.​"
  },
  {
    "front": "What is a planetary transit? Give a solar system example.",
    "back": "A transit is when a planet passes between the Sun and observer, appearing as a small disk crossing the Sun; example: transit of Venus (last in 2012).​"
  },
  {
    "front": "Which planet's largest moon is called Ganymede?",
    "back": "Jupiter; Ganymede is the largest moon in the solar system.​"
  },
  {
    "front": "What spacecraft first visited Pluto, and when?",
    "back": "NASA's New Horizons flew by Pluto on July 14, 2015.​"
  },
  {
    "front": "Draw and label: LEO, MEO, GEO, HEO, SSO, Molniya.",
    "back": "LEO: ~200–2,000 km; MEO: ~2,000–35,786 km (e.g., GPS ~20,200 km); GEO: 35,786 km equatorial; HEO: highly elliptical orbits; SSO: near‑polar with constant local solar time; Molniya: highly elliptical, 63.4° inclination, ~12‑hour period.​"
  },
  {
    "front": "What determines a satellite's orbital period? Apply Kepler's third law.",
    "back": "Period depends on the semi‑major axis and central body mass: \nT\n2\n=\n4\nπ\n2\na\n3\nG\nM\nT \n2\n = \nGM\n4π \n2\n a \n3\n .​"
  },
  {
    "front": "What is the difference between true anomaly and mean anomaly?",
    "back": "True anomaly is the actual angle from periapsis to the spacecraft's position; mean anomaly parameterizes time since periapsis assuming uniform angular motion.​"
  },
  {
    "front": "What causes orbital precession? Provide one real-world example.",
    "back": "Non‑spherical gravity (Earth's J2 oblateness), third‑body tugs, and drag cause node/apsidal precession; SSO exploits J2 to keep a consistent local solar time.​"
  },
  {
    "front": "Problem: Calculate the delta‑v for a Hohmann transfer from a 300 km circular orbit to GEO.",
    "back": "Typical total is ~3.9–4.1 km/s (including perigee raise to transfer and circularization at apogee near GEO).​"
  },
  {
    "front": "What year did Sputnik launch? What did it transmit?",
    "back": "1957; it transmitted simple radio beeps that were tracked worldwide.​"
  },
  {
    "front": "Name the world's first space station and the country that built it.",
    "back": "Salyut 1 by the Soviet Union (launched 1971).​"
  },
  {
    "front": "What was the primary discovery of the Pioneer Venus mission?",
    "back": "Characterized Venus's thick atmosphere and sulfuric acid cloud structure using probes and an orbiter.​"
  },
  {
    "front": "Which Mars rover confirmed evidence of past water, and in what form?",
    "back": "Opportunity found hematite \"blueberries\" and sedimentary features indicating past liquid water.​"
  },
  {
    "front": "Which mission took the first \"Earthrise\" photo?",
    "back": "Apollo 8 in 1968 during lunar orbit.​"
  },
  {
    "front": "What orbit does Landsat‑8 use and why?",
    "back": "Sun‑synchronous ~705 km for consistent lighting in repeat Earth imaging.​"
  },
  {
    "front": "What is unique about the Iridium constellation's architecture?",
    "back": "66 active satellites in near‑polar LEO with inter‑satellite crosslinks for global coverage.​"
  },
  {
    "front": "Describe the role of GNSS systems – GPS, Galileo, GLONASS, BeiDou.",
    "back": "They are global navigation satellite systems in MEO providing positioning, navigation, and timing worldwide.​"
  },
  {
    "front": "Which satellite is critical for US hurricane tracking and why?",
    "back": "GOES in GEO provides near‑real‑time weather imagery over the same region for storm monitoring.​"
  },
  {
    "front": "What synthetic aperture radar satellites are used for disaster mapping?",
    "back": "Sentinel‑1, RADARSAT series, and others provide all‑weather day/night imaging.​"
  },
  {
    "front": "What is the resolution of Hubble's main camera?",
    "back": "About 0.05 arcseconds with instruments like WFC3/ACS enabling fine spatial detail.​"
  },
  {
    "front": "What does a redshift in a distant galaxy's spectrum indicate?",
    "back": "Recession due to cosmic expansion and/or Doppler motion away from the observer.​"
  },
  {
    "front": "What is a barycenter and where is the Sun–Jupiter barycenter located?",
    "back": "The system's center of mass; for Sun–Jupiter it lies just outside or near the Sun's center, offset within or near the solar radius depending on definition.​"
  },
  {
    "front": "What is gravitational lensing and what mission uses it?",
    "back": "Deflection and magnification of light by mass along the line of sight; used by space observatories like Hubble and Euclid to study dark matter and distant galaxies.​"
  },
  {
    "front": "Why is JWST located at the Sun–Earth L2 point?",
    "back": "Stable thermal environment with continuous Sun‑Earth alignment and efficient sunshield orientation for infrared observations.​"
  },
  {
    "front": "Compare the efficiency of ion thrusters vs. chemical rockets.",
    "back": "Ion thrusters have much higher specific impulse (efficiency) but low thrust; chemical rockets have high thrust but lower specific impulse.​"
  },
  {
    "front": "What is a parking orbit, and why is it used?",
    "back": "A temporary low orbit used to wait for precise timing or alignment before final burns or transfers.​"
  },
  {
    "front": "Describe continuous‑thrust (low‑thrust) vs. staged‑burn trajectory.",
    "back": "Continuous thrust applies small acceleration over long durations; staged/impulsive burns apply short, high‑thrust maneuvers at specific orbital points.​"
  },
  {
    "front": "Calculate escape velocity from Earth's surface.",
    "back": "About 11.2 km/s from Earth's surface using \nv\ne\n=\n2\nG\nM\n/\nR\nv \ne\n = \n2GM/R\n .​"
  },
  {
    "front": "Explain why gravity assists save fuel and how they work.",
    "back": "They exchange momentum with a planet to bend trajectory and change heliocentric speed without propellant expenditure.​"
  },
  {
    "front": "How are launch windows determined for Mars missions?",
    "back": "By planetary geometry and energy constraints near favorable synodic alignments roughly every 26 months.​"
  },
  {
    "front": "What are the main failure modes for CubeSats in orbit?",
    "back": "Power (insufficient generation/charging), communication issues, deployment anomalies, and attitude control failures.​"
  },
  {
    "front": "What does \"loss of signal\" mean for spacecraft ops?",
    "back": "A planned or unplanned communications gap when a spacecraft is not in contact with ground stations.​"
  },
  {
    "front": "What are the functions of NASA's DSN?",
    "back": "Tracking, telemetry, command, and radio science for deep‑space missions via global dish networks.​"
  },
  {
    "front": "How are old satellites decommissioned? What is a graveyard orbit?",
    "back": "LEO craft deorbit and burn up; GEO craft are boosted ~300 km above GEO into a disposal \"graveyard\" orbit.​"
  },
  {
    "front": "What causes signal latency between Earth and Mars?",
    "back": "Finite light speed over varying distance, leading to one‑way delays of several to tens of minutes.​"
  },
  {
    "front": "What is a Two‑Line Element (TLE) set and what data does it encode?",
    "back": "A standard format encoding orbital elements like inclination, RAAN, eccentricity, argument of perigee, mean anomaly, and mean motion.​"
  },
  {
    "front": "Describe the difference between active and passive remote sensing.",
    "back": "Active sensors emit signals (e.g., radar/SAR) and measure returns; passive sensors measure natural radiation like reflected sunlight or thermal emission.​"
  },
  {
    "front": "What type of payload does Sentinel‑2 carry?",
    "back": "A multispectral imager (MSI) for high‑resolution optical Earth observation.​"
  },
  {
    "front": "Explain radio blackout during atmospheric reentry.",
    "back": "Ionized plasma sheath around the vehicle attenuates radio signals, temporarily blocking communications.​"
  },
  {
    "front": "What is the Outer Space Treaty and its main principle?",
    "back": "The 1967 treaty sets peaceful use, non‑appropriation of celestial bodies, and responsibility/liability for national activities.​"
  },
  {
    "front": "Which types of orbits are individually licensed due to congestion?",
    "back": "GEO slots and many NGSO constellations are coordinated/licensed to manage spectrum and collision risk.​"
  },
  {
    "front": "Summarize the Artemis Accords.",
    "back": "Non‑binding principles on transparency, interoperability, resource utilization, deconfliction, and debris mitigation among partner nations.​"
  },
  {
    "front": "What are frequency bands X, S, and Ka used for in satellite comms?",
    "back": "S‑band for telemetry/command, X‑band for deep‑space and Earth observation downlinks, Ka‑band for high‑rate data.​"
  },
  {
    "front": "Who coordinates international rescue for crewed space missions?",
    "back": "Under the Rescue Agreement, states assist astronauts in distress; broader SAR for distress beacons is coordinated by COSPAS‑SARSAT internationally.​"
  },
  {
    "front": "Name the main asteroid belt's location and two largest members.",
    "back": "Between Mars and Jupiter; Ceres and Vesta are among the largest bodies.​"
  },
  {
    "front": "What is the transit method in exoplanet discovery?",
    "back": "Detecting periodic dips in a star's brightness as a planet crosses its disk.​"
  },
  {
    "front": "What is the main goal of the DART mission?",
    "back": "To test kinetic impactor deflection by altering an asteroid moonlet's orbit.​"
  },
  {
    "front": "Define habitable zone in extrasolar systems.",
    "back": "The orbital region where liquid water could exist on a planet's surface given sufficient atmospheric conditions.​"
  },
  {
    "front": "Who discovered the first extrasolar planet?",
    "back": "1995: Mayor and Queloz announced 51 Pegasi b around a Sun‑like star.​"
  },
  {
    "front": "What is the mnemonic for planet order from the Sun?",
    "back": "My Very Educated Mother Just Served Us Noodles (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)"
  },
  {
    "front": "List the 8 planets in order from the Sun.",
    "back": "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune"
  },
  {
    "front": "Which planets are gas giants?",
    "back": "Jupiter and Saturn"
  },
  {
    "front": "Which planets are ice giants?",
    "back": "Uranus and Neptune"
  },
  {
    "front": "What is Mercury known for?",
    "back": "Smallest planet, closest to the Sun, no atmosphere, extreme temperature swings"
  },
  {
    "front": "What is Venus known for?",
    "back": "Hottest planet, thick toxic atmosphere (CO₂), retrograde rotation"
  },
  {
    "front": "What is Mars known for?",
    "back": "Red planet (iron oxide), thin atmosphere, largest volcano (Olympus Mons), past water"
  },
  {
    "front": "What is Jupiter known for?",
    "back": "Largest planet, gas giant, Great Red Spot storm, strong magnetosphere, 79+ moons"
  },
  {
    "front": "What is LEO?",
    "back": "Low Earth Orbit: 200–2,000 km altitude; used for ISS, Earth observation, imaging"
  },
  {
    "front": "What is MEO?",
    "back": "Medium Earth Orbit: ~20,000 km altitude; used for GPS, Galileo, navigation constellations"
  },
  {
    "front": "What is GEO?",
    "back": "Geostationary Orbit: 35,786 km altitude; satellite appears fixed over one longitude; used for weather & comms"
  },
  {
    "front": "What is SSO?",
    "back": "Sun-Synchronous Orbit: polar orbit at ~98° inclination; consistent lighting angle for Earth imaging"
  },
  {
    "front": "Define perigee.",
    "back": "Closest point to Earth in an orbit; lowest altitude of an elliptical orbit"
  },
  {
    "front": "Define apogee.",
    "back": "Farthest point from Earth in an orbit; highest altitude of an elliptical orbit"
  },
  {
    "front": "Define periapsis and apoapsis.",
    "back": "Periapsis: closest point to any orbited body; Apoapsis: farthest point (generic terms for any orbit)"
  },
  {
    "front": "What is orbital inclination?",
    "back": "Angle between an orbit plane and the equatorial plane; determines latitude coverage"
  },
  {
    "front": "What is eccentricity?",
    "back": "Measure of orbit shape; 0 = circle, <1 = ellipse, closer to 1 = more elongated"
  },
  {
    "front": "What is true anomaly?",
    "back": "Angular position of a spacecraft along its orbit, measured from periapsis"
  },
  {
    "front": "What is the argument of periapsis?",
    "back": "Angle in the orbit plane from ascending node to periapsis; defines orbit orientation"
  },
  {
    "front": "What is the ascending node?",
    "back": "Point where an orbit crosses the equatorial plane going northward"
  },
  {
    "front": "What is Hubble?",
    "back": "Space telescope in LEO (~610 km); iconic visible-light imaging since 1990; accessible for servicing missions"
  },
  {
    "front": "What is JWST?",
    "back": "James Webb Space Telescope; infrared observatory at Sun-Earth L2; detects early galaxies & exoplanet atmospheres"
  },
  {
    "front": "What is Landsat?",
    "back": "Earth observation constellation in sun-synchronous orbit; longest continuous land-imaging record (since 1972)"
  },
  {
    "front": "What is Sentinel-2?",
    "back": "Copernicus Earth-imaging satellite; high-resolution multispectral imagery for agriculture, disaster response, land use"
  },
  {
    "front": "What is Terra?",
    "back": "NASA Earth observation satellite; MODIS instrument for climate, vegetation, aerosols; polar sun-synchronous orbit"
  },
  {
    "front": "What is GOES?",
    "back": "Geostationary Operational Environmental Satellites; U.S. weather monitoring & early warning in GEO"
  },
  {
    "front": "What is Himawari?",
    "back": "Japanese geostationary weather satellite; covers Asia-Pacific region; operates in GEO"
  },
  {
    "front": "What is GPS?",
    "back": "Global Positioning System; constellation of ~30 satellites in MEO (~20,200 km); global navigation & timing"
  },
  {
    "front": "What is Galileo?",
    "back": "European global navigation satellite system; constellation in MEO; provides positioning & communication resilience"
  },
  {
    "front": "What is Starlink?",
    "back": "SpaceX mega-constellation of thousands of satellites in LEO; provides global broadband internet coverage"
  },
  {
    "front": "What is Copernicus Sentinel-1?",
    "back": "Synthetic aperture radar (SAR) satellite; all-weather Earth imaging in SSO; operates day/night"
  },
  {
    "front": "What is ICESat-2?",
    "back": "NASA laser altimetry satellite; measures ice sheet & sea ice elevation; monitors polar climate change"
  },
  {
    "front": "What orbit does Hubble use?",
    "back": "Low Earth Orbit (~610 km, ~97° inclination)"
  },
  {
    "front": "What orbit does JWST use?",
    "back": "Sun-Earth Lagrange point L2 (~1.5 million km from Earth); maintains thermal isolation"
  },
  {
    "front": "What orbits do GPS satellites use?",
    "back": "Medium Earth Orbit (~20,200 km, ~55° inclination); orbital period ~12 hours"
  },
  {
    "front": "What is delta-v?",
    "back": "Change in velocity needed for a maneuver; measured in m/s; determines fuel cost & mission feasibility"
  },
  {
    "front": "What is a Hohmann transfer?",
    "back": "Two-burn, fuel-efficient transfer between circular coplanar orbits; burns at periapsis & apoapsis of transfer ellipse"
  },
  {
    "front": "Why is a plane change expensive?",
    "back": "Requires velocity change perpendicular to orbit; consumes large delta-v; typically done at high apoapsis to minimize cost"
  },
  {
    "front": "What is a gravity assist (or swing-by)?",
    "back": "Spacecraft trades momentum with a planet to gain speed & bend trajectory; enables interplanetary travel without fuel"
  },
  {
    "front": "Explain a launch window.",
    "back": "Time period when launch geometry aligns with target orbit energy & position; misses require waiting for next window"
  },
  {
    "front": "What is orbital decay?",
    "back": "Gradual loss of altitude due to atmospheric drag in low orbits; satellites eventually re-enter & burn up"
  },
  {
    "front": "What is circularization burn?",
    "back": "Engine burn to change elliptical orbit into circular; usually at apoapsis to raise perigee to orbital altitude"
  },
  {
    "front": "What is the vis-viva equation used for?",
    "back": "Calculates orbital velocity at any point; v² = GM(2/r - 1/a), where r is position, a is semi-major axis"
  },
  {
    "front": "What is an escape velocity?",
    "back": "Minimum velocity to break free from a body's gravity; ~11.2 km/s from Earth's surface"
  },
  {
    "front": "Define orbital period.",
    "back": "Time for one complete orbit; related to semi-major axis by Kepler's third law; T² ∝ a³"
  },
  {
    "front": "What is the DSN?",
    "back": "Deep Space Network; global system of giant radio dishes for communicating with distant spacecraft; operated by NASA/JPL"
  },
  {
    "front": "What does LEO stand for?",
    "back": "Low Earth Orbit"
  },
  {
    "front": "What does MEO stand for?",
    "back": "Medium Earth Orbit"
  },
  {
    "front": "What does GEO stand for?",
    "back": "Geostationary Orbit"
  },
  {
    "front": "What does SSO stand for?",
    "back": "Sun-Synchronous Orbit"
  },
  {
    "front": "What does TLE stand for?",
    "back": "Two-Line Element; orbital parameters for tracking satellites; updated frequently"
  },
  {
    "front": "What does NORAD stand for?",
    "back": "North American Aerospace Defense Command; maintains space object catalog & publishes TLEs"
  },
  {
    "front": "What does L2 mean?",
    "back": "Sun-Earth Lagrange point 2; location ~1.5 million km from Earth on night side; stable point for telescopes like JWST"
  },
  {
    "front": "What are the main phases of a space mission?",
    "back": "Launch, ascent, orbit insertion, cruise, encounter/arrival, operations, end-of-life"
  },
  {
    "front": "What is a mission profile?",
    "back": "Detailed plan of spacecraft trajectory, burns, maneuvers, & communication schedule from launch to end"
  },
  {
    "front": "What is TRL?",
    "back": "Technology Readiness Level; scale 1–9 indicating maturity from concept to operational deployment"
  },
  {
    "front": "What is the Barycenter?",
    "back": "Center of mass of a system; two bodies orbit their shared barycenter"
  },
  {
    "front": "What is continuous thrusting?",
    "back": "Low-thrust propulsion (ion drive, solar sail) over long duration; different from impulsive burns"
  },
  {
    "front": "What is a ballistic trajectory?",
    "back": "Unpowered path followed by a spacecraft under gravity alone after a burn"
  },
  {
    "front": "What does 'capture orbit' mean?",
    "back": "Orbit spacecraft enters after deceleration burn at a destination planet or moon"
  }
];

let currentIndex = 0;
let isFlipped = false;
let starredCards = new Set(); // Track starred card indices
let showingStarredOnly = false; // View mode flag
let allCards = []; // Store all cards
let displayedCards = []; // Currently displayed cards (all or starred)

console.log('Getting DOM elements');
const flashcard = document.getElementById('flashcard');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const cardCounter = document.getElementById('card-counter');
const starBtn = document.getElementById('star-btn');
const starIcon = document.querySelector('.star-icon');
const viewStarredBtn = document.getElementById('view-starred-btn');
const starredCounter = document.getElementById('starred-counter');

const frontText = document.getElementById('frontText');
const backText = document.getElementById('backText');
console.log('DOM elements retrieved:', {flashcard, prevBtn, nextBtn, shuffleBtn, frontText, backText, cardCounter, starBtn, viewStarredBtn, starredCounter});

// Load starred cards from localStorage
function loadStarredCards() {
    try {
        const saved = localStorage.getItem('spaceDeckStarred');
        if (saved) {
            const savedArray = JSON.parse(saved);
            starredCards = new Set(savedArray);
            console.log('Loaded starred cards:', starredCards);
        }
    } catch (e) {
        console.error('Error loading starred cards:', e);
        starredCards = new Set();
    }
    updateStarredCounter();
}

// Save starred cards to localStorage
function saveStarredCards() {
    try {
        const starredArray = Array.from(starredCards);
        localStorage.setItem('spaceDeckStarred', JSON.stringify(starredArray));
        console.log('Saved starred cards:', starredArray);
    } catch (e) {
        console.error('Error saving starred cards:', e);
    }
}

// Update starred counter display
function updateStarredCounter() {
    if (starredCounter) {
        const count = starredCards.size;
        starredCounter.textContent = `★ ${count} starred`;
        console.log('Updated starred counter:', count);
    }
}

// Initialize flashcards
function initializeFlashcards() {
    console.log('Initializing flashcards, count:', flashcards.length, 'cards');
    allCards = [...flashcards]; // Store original cards
    displayedCards = [...flashcards]; // Initially show all cards
    
    if (flashcards.length === 0) {
        console.log('No flashcards found, disabling buttons');
        showEmptyState('No flashcards available.');
        disableButtons();
        return;
    }
    
    loadStarredCards();
    console.log('Flashcards loaded successfully, displaying first card');
    displayCard();
}

// Get the actual index in allCards for current displayed card
function getActualCardIndex() {
    const currentCard = displayedCards[currentIndex];
    return allCards.findIndex(card => card === currentCard);
}

// Show empty state message
function showEmptyState(message) {
    frontText.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">☆</div>
            <div class="empty-state-message">${message}</div>
            <div class="empty-state-hint">Star some cards to see them here!</div>
        </div>
    `;
    backText.innerHTML = frontText.innerHTML;
    if (starBtn) starBtn.style.display = 'none';
}

// Display current card
function displayCard() {
    console.log('displayCard called, currentIndex:', currentIndex, 'displayedCards.length:', displayedCards.length);
    
    if (displayedCards.length === 0) {
        console.log('No cards to display');
        if (showingStarredOnly) {
            showEmptyState('No starred cards');
        } else {
            showEmptyState('No flashcards available');
        }
        return;
    }
    
    const card = displayedCards[currentIndex];
    const actualIndex = getActualCardIndex();
    
    console.log('Displaying card:', currentIndex, 'Actual index:', actualIndex, 'Front:', card.front, 'Back:', card.back);
    
    // Show star button
    if (starBtn) starBtn.style.display = 'flex';
    
    // Display card content
    frontText.innerHTML = `<p>${card.front}</p>`;
    backText.innerHTML = `<p>${card.back}</p>`;
    
    // Reset flip state
    isFlipped = false;
    flashcard.classList.remove('flipped');
    flashcard.style.transform = 'rotateY(0deg)';
    
    // Update star button state
    updateStarButton(actualIndex);
    
    // Update card counter
    updateCardCounter();
    
    console.log('Card displayed successfully');
}

// Update card counter display
function updateCardCounter() {
    if (cardCounter && displayedCards.length > 0) {
        const viewLabel = showingStarredOnly ? ' (Starred)' : '';
        cardCounter.textContent = `Card ${currentIndex + 1} of ${displayedCards.length}${viewLabel}`;
        console.log('Card counter updated:', cardCounter.textContent);
    }
}

// Update star button visual state
function updateStarButton(actualIndex) {
    if (!starBtn || !starIcon) return;
    
    const isStarred = starredCards.has(actualIndex);
    
    if (isStarred) {
        starBtn.classList.add('starred');
        starIcon.textContent = '★';
    } else {
        starBtn.classList.remove('starred');
        starIcon.textContent = '☆';
    }
    
    console.log('Star button updated for index:', actualIndex, 'isStarred:', isStarred);
}

// Toggle star for current card
function toggleStar() {
    if (displayedCards.length === 0) return;
    
    const actualIndex = getActualCardIndex();
    console.log('Toggling star for actual index:', actualIndex);
    
    if (starredCards.has(actualIndex)) {
        starredCards.delete(actualIndex);
        console.log('Removed star from card:', actualIndex);
    } else {
        starredCards.add(actualIndex);
        console.log('Added star to card:', actualIndex);
    }
    
    saveStarredCards();
    updateStarredCounter();
    updateStarButton(actualIndex);
    
    // If viewing starred only and we just unstarred, update view
    if (showingStarredOnly && !starredCards.has(actualIndex)) {
        updateDisplayedCards();
        if (displayedCards.length === 0) {
            showEmptyState('No starred cards');
        } else {
            // Adjust current index if needed
            if (currentIndex >= displayedCards.length) {
                currentIndex = displayedCards.length - 1;
            }
            displayCard();
        }
    }
}

// Update displayed cards based on view mode
function updateDisplayedCards() {
    if (showingStarredOnly) {
        // Show only starred cards
        displayedCards = allCards.filter((card, index) => starredCards.has(index));
        console.log('Showing starred cards only:', displayedCards.length);
    } else {
        // Show all cards
        displayedCards = [...allCards];
        console.log('Showing all cards:', displayedCards.length);
    }
    currentIndex = 0;
}

// Toggle between all cards and starred cards view
function toggleStarredView() {
    showingStarredOnly = !showingStarredOnly;
    console.log('Toggling view, showingStarredOnly:', showingStarredOnly);
    
    updateDisplayedCards();
    
    // Update button appearance
    if (showingStarredOnly) {
        viewStarredBtn.classList.add('active');
        viewStarredBtn.textContent = 'View All';
    } else {
        viewStarredBtn.classList.remove('active');
        viewStarredBtn.textContent = 'View Starred';
    }
    
    // Display appropriate content
    if (displayedCards.length === 0 && showingStarredOnly) {
        showEmptyState('No starred cards');
    } else {
        displayCard();
    }
}

// Flip card on click with AnimeJS animation
flashcard.addEventListener('click', () => {
    console.log('Flashcard clicked, isFlipped:', isFlipped);
    
    // Toggle state immediately
    isFlipped = !isFlipped;
    
    if (isFlipped) {
        // Flip to back
        console.log('Flipping to back');
        flashcard.classList.add('flipped');
        anime({
            targets: flashcard,
            rotateY: [0, 180],
            duration: 600,
            easing: 'easeInOutQuad',
            complete: () => {
                console.log('Flip to back animation complete');
                // Ensure transform persists after animation
                flashcard.style.transform = 'rotateY(180deg)';
            }
        });
    } else {
        // Flip back to front
        console.log('Flipping back to front');
        flashcard.classList.remove('flipped');
        anime({
            targets: flashcard,
            rotateY: [180, 0],
            duration: 600,
            easing: 'easeInOutQuad',
            complete: () => {
                console.log('Flip back animation complete');
                // Ensure transform persists after animation
                flashcard.style.transform = 'rotateY(0deg)';
            }
        });
    }
});

// Star button click handler
starBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent card flip when clicking star
    console.log('Star button clicked');
    toggleStar();
});

// View starred button click handler
viewStarredBtn.addEventListener('click', () => {
    console.log('View starred button clicked');
    toggleStarredView();
});

// Previous button
prevBtn.addEventListener('click', () => {
    console.log('Previous button clicked');
    if (displayedCards.length === 0) return;
    currentIndex = (currentIndex - 1 + displayedCards.length) % displayedCards.length;
    displayCard();
});

// Next button
nextBtn.addEventListener('click', () => {
    console.log('Next button clicked');
    if (displayedCards.length === 0) return;
    currentIndex = (currentIndex + 1) % displayedCards.length;
    displayCard();
});

// Shuffle button
shuffleBtn.addEventListener('click', () => {
    console.log('Shuffle button clicked');
    if (displayedCards.length === 0) return;
    
    // Shuffle displayed cards
    for (let i = displayedCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [displayedCards[i], displayedCards[j]] = [displayedCards[j], displayedCards[i]];
    }
    
    currentIndex = 0;
    displayCard();
});

// Disable buttons if no cards
function disableButtons() {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    shuffleBtn.disabled = true;
    console.log('Buttons disabled due to no flashcards');
}



// Initialize
console.log('Initializing Space Deck application');
initializeFlashcards();
console.log('Application initialized');