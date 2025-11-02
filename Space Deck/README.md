# Space Deck

![Space Deck Logo](https://via.placeholder.com/150x50/16213e/ffffff?text=Space+Deck) <!-- Placeholder for logo -->

## Project Description

Space Deck is an interactive flashcard study tool designed to help users master space knowledge through engaging, animated flashcards. With a cosmic theme featuring a starfield background and smooth flip animations, Space Deck makes learning about astronomy, orbital mechanics, space missions, and planetary science both educational and visually appealing.

The application features a collection of over 100 space-themed flashcards covering topics from basic planetary facts to advanced orbital mechanics and space exploration history. Users can navigate through cards, shuffle the deck, and flip cards to reveal answers with smooth 3D animations powered by AnimeJS.

## Features

- **Interactive Flashcards**: Click any card to flip it and reveal the answer with smooth 3D rotation animation
- **Star Important Cards**: Mark cards as important with a star icon for quick access later
- **Starred Cards View**: Filter to view only your starred cards for focused review
- **Persistent Storage**: Your starred cards are saved in browser storage and persist across sessions
- **Navigation Controls**: Previous/Next buttons to browse through the deck sequentially
- **Shuffle Functionality**: Randomize the order of flashcards for varied study sessions
- **Card Counter**: Track your progress with a live counter showing current card position and starred count
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Space Theme**: Immersive cosmic design with animated starfield background and futuristic fonts
- **Smooth Animations**: Powered by AnimeJS for professional-grade transitions

## How to Use

1. **Getting Started**: Open `index.html` in your web browser (double-click the file or use a local server)
2. **Viewing Cards**: The front of each card displays a question or prompt
3. **Flipping Cards**: Click anywhere on the card to flip it and reveal the answer on the back
4. **Starring Cards**: Click the star icon (☆) in the top-right corner of any card to mark it as important
   - The star will turn gold (★) when the card is starred
   - Starred cards are automatically saved to your browser's local storage
5. **Viewing Starred Cards**: Click the "View Starred" button to see only your starred cards
   - Click "View All" to return to viewing all cards
   - The starred count is always visible at the top of the page
6. **Navigation**: Use the Previous/Next buttons to move through the deck sequentially
7. **Shuffling**: Click the Shuffle button to randomize the card order for varied study sessions
8. **Progress Tracking**: Monitor your position with the card counter at the top

## Technical Details

### Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom properties, gradients, animations, and responsive design
- **JavaScript (ES6+)**: DOM manipulation, event handling, and application logic
- **AnimeJS**: High-performance animation library for smooth card flips and transitions
- **Google Fonts**: Orbitron (headings) and Roboto (body text) for space-themed typography

### File Structure

```
Space Deck/
├── index.html          # Main HTML file with application structure
├── styles.css          # CSS stylesheets with space theme and responsive design
├── script.js           # JavaScript logic for card management and interactions
├── flashcards.json     # JSON data file containing all flashcard content
└── README.md           # This documentation file
```

### Browser Compatibility

Space Deck works in all modern web browsers:

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

The application uses modern CSS features like CSS Grid, Flexbox, and CSS custom properties, as well as ES6+ JavaScript features. For the best experience, use the latest version of your preferred browser.

## Installation & Setup

No installation required! Space Deck is a pure web application that runs entirely in the browser.

### Option 1: Direct File Opening
1. Download or clone the repository
2. Navigate to the `Space Deck` folder
3. Double-click `index.html` to open in your default browser

### Option 2: Local Server (Recommended)
For better compatibility and to avoid potential CORS issues:

1. Ensure you have Python installed (comes pre-installed on macOS and Linux)
2. Open a terminal/command prompt
3. Navigate to the `Space Deck` folder
4. Run: `python -m http.server 8000` (or `python3 -m http.server 8000`)
5. Open `http://localhost:8000` in your browser

## Demo

To see Space Deck in action:

1. Open the application using one of the methods above
2. Click on any flashcard to flip it and reveal the answer
3. Use the navigation buttons to browse through different cards
4. Try the shuffle button to randomize the deck order

The application includes sample flashcards covering:
- Planetary science and characteristics
- Orbital mechanics and terminology
- Space missions and spacecraft
- Astronomical concepts and phenomena
- Space exploration history

## Screenshots

*Main Interface*
![Main Interface](https://via.placeholder.com/800x400/0c0c0c/ffffff?text=Space+Deck+Main+Interface)

*Card Flip Animation*
![Card Flip](https://via.placeholder.com/800x400/16213e/ffffff?text=Card+Flip+Animation)

*Mobile View*
![Mobile View](https://via.placeholder.com/400x600/1a1a2e/ffffff?text=Mobile+View)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly across different browsers
5. Submit a pull request

### Adding New Flashcards

To add new flashcards, edit the flashcard array in `script.js` (starting at line 6). Each flashcard should follow this format:

```javascript
{
  "front": "Your question here?",
  "back": "Your answer here."
}
```

Note: Flashcard data is embedded directly in the JavaScript file to avoid CORS issues when opening the HTML file directly in a browser.

### Star Feature Data Storage

The star feature uses browser localStorage to persist starred cards across sessions:
- **Storage Key**: `spaceDeckStarred`
- **Data Format**: JSON array of card indices
- **Persistence**: Data remains until browser cache is cleared
- **Privacy**: All data is stored locally in your browser; no external servers are involved

## License

© 2023 Space Deck. All rights reserved.

This project is provided as-is for educational and personal use. Commercial use requires permission from the copyright holder.

## Acknowledgments

- **AnimeJS**: For providing the smooth animation capabilities
- **Google Fonts**: For the Orbitron and Roboto font families
- **NASA and Space Agencies**: For inspiring the educational content
- **Open Source Community**: For the tools and libraries that made this project possible

---

*Study the cosmos one card at a time with Space Deck!*