# Gallerie Ce La Vie

The goal of this recap project is not necessarily to finish all features, but to write clean code with isolated components that are tested well.

---

## User Stories

### User Story 1: List of all Art Pieces

#### Value Proposition

**As an** art enthusiast

**I want to** see a list of all art pieces

**so that** I can get an overview of all art pieces.

#### Acceptance Criteria

- [x] All art pieces are displayed as a list 🖼️
- [x] Each art piece's image is displayed 🖼️
- [x] Each art piece's title is displayed 🖼️
- [x] Each art piece's artist is displayed 🖼️

#### Tasks

- [x] Fetch all art pieces with `SWR` in `pages/index.js`
- [x] Create the component `ArtPieces` to render a list
- [x] `ArtPieces` props: `pieces`
- [x] Create the component `ArtPiecePreview`
- [x] `ArtPiecePreview` props: `image`, `title`, `artist`
- [x] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 2: Spotlight Piece

#### Value Proposition

**As an** art enthusiast

**I want to** see a spotlight piece

**so that** I can get inspirational highlights.

#### Acceptance Criteria

- [x] One art piece is picked at random to show as a spotlight piece
- [x] The art piece image is displayed 🖼️
- [x] The art piece artist is displayed 🖼️

#### Tasks

- [x] Write function to pick one art piece [at random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples)
- [x] Create the component `Spotlight`
- [x] `Spotlight` props: `image`, `artist`
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 3: Separate Pages and Navigation Bar

#### Value Proposition

**As an** art enthusiast

**I want to** be able to switch between the spotlight and list view

**so that** I can navigate the app easier.

#### Acceptance Criteria

- [x] A navigation link labeled "Spotlight" is displayed 🖼️
- [x] A navigation link labeled "Pieces" is displayed 🖼️
- [x] Clicking "Spotlight" shows the SpotlightPage
- [x] Clicking "Pieces" shows the ArtPiecesPage

#### Tasks

- [x] Move the data fetching logic to `pages/_app`
- [x] Find a solution for global state handling to have the art pieces available on all pages
- [x] Adapt the page `pages/index`: rename the function to `SpotlightPage` and have it render only the `Spotlight` component
- [x] Create the page `pages/art-pieces/index` that renders the `ArtPieces` component
- [x] Create the component `Navigation` that renders all navigation links
- [x] Create the component `Layout` that renders the `Navigation` component
- [x] Apply the `Layout` component in `pages/_app`
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 4: Art Piece Details Page

#### Value Proposition

**As an** art enthusiast

**I want to** be able to see the full art piece with detail information

**so that** I can learn everything about the piece.

#### Acceptance Criteria

- [x] Clicking an art piece from the list shows the detail page
- [x] The art piece image is displayed 🖼️
- [x] The art piece title is displayed 🖼️
- [x] The art piece artist is displayed 🖼️
- [x] The art piece year is displayed 🖼️
- [x] The art piece genre is displayed 🖼️
- [x] A back-button is displayed 🖼️
- [x] Clicking the back-button shows the list view

#### Tasks

- [x] Create the component `ArtPieceDetails`
- [x] `ArtPieceDetails` props: `image`, `title`, `artist`, `year`, `genre`
- [x] Create the page `pages/art-pieces/[slug]` that renders `ArtPieceDetails`
- [x] Read the query parameter `slug` from `next/router`
- [x] Use the `slug` to find the art piece to display
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 5: Favorites

#### Value Proposition

**As an** art enthusiast

**I want to** mark art piece pieces as favorites

**so that** I can find them easier.

#### Acceptance Criteria

- [x] The favorite-button is displayed in the spotlight view 🖼️
- [x] The favorite-button is displayed in each entry in the list view 🖼️
- [x] The favorite-button is displayed in the details view 🖼️
- [x] Clicking the favorite-button on a non-favorite piece saves it as a favorite 🖼️
- [x] Clicking the favorite-button on a favorite piece removes it from favorites 🖼️

#### Tasks

- [x] Create an additional state `artPiecesInfo` to save further information for art pieces
- [x] Make the `artPiecesInfo` state globally available for all pages
- [x] Store the favorite flag in the `artPiecesInfo`
- [x] Reference art pieces by `slug` in the additional state
- [x] Create the component `FavoriteButton`
- [x] `FavoriteButton` props: `isFavorite`, `onToggleFavorite`
- [x] Render the `FavoriteButton` component in the `Spotlight`, `ArtPiecePreview` and `ArtPieceDetails` component
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 6: Favorite Listing Page

#### Value Proposition

**As an** art enthusiast

**I want to** see a comprehensive list of all my favorite art pieces

**so that** I can have an overview of all of my favorites.

#### Acceptance Criteria

- [x] A navigation link labeled "Favorites" is displayed 🖼️
- [x] Clicking the "Favorites" shows the FavoritesPage
- [x] All favorite art pieces are displayed as a list 🖼️
- [x] Each art piece's image is displayed 🖼️
- [x] Each art piece's title is displayed 🖼️
- [x] Each art piece's artist is displayed 🖼️
- [x] Each art piece's is displayed with active favorite-button 🖼️

#### Tasks

- [x] Create the page `pages/favorites` that renders the `ArtPieces` component
- [x] Use data from the `artPiecesInfo` state to filter for all favorite art pieces
- [x] Pass the list of all favorite art pieces via prop `pieces` to the `ArtPieces` component
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 7: Comments for Art Pieces

#### Value Proposition

**As an** art enthusiast

**I want to** write comments for art pieces

**so that** I can note my ideas regarding the work.

#### Acceptance Criteria

- [x] The detail view has a list of comments for this art piece with the headline "Comments" 🖼️
- [x] Each comment's text is displayed 🖼️
- [x] Each comment's date and time is displayed 🖼️
- [x] The detail view has an input field to write a comment 🖼️
- [x] The detail view has a submit button labeled "Send" 🖼️
- [x] After submitting the form, the comment is appended to the list of comments 🖼️

#### Tasks

- [x] Store comments per art piece in the `artPiecesInfo` state
- [x] Create a `CommentForm` component
- [x] `CommentForm` props: `onSubmitComment`
- [x] Create a `Comments` components
- [x] `Comments` props: `comments`
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 8: Persist Favorites and Comments in the Browser

#### Value Proposition

**As an** art enthusiast

**I want to** persist my favorites and comments

**so that** the data will not be lost when I close the app.

#### Acceptance Criteria

- [x] All favorite flags and comments added to art pieces are persisted across browser reloads

#### Tasks

- [x] Install the package `use-local-storage-state`
- [x] Use the `useLocalStorageState` hook to store the `artPiecesInfo` state

---

### User Story 9: Show Color Palette

#### Value Proposition

**As an** art enthusiast

**I want to** see the color palette of an art piece

**so that** I can find color inspiration.

#### Acceptance Criteria

- [x] The art piece detail page shows a list of all colors used in the image
- [x] The colors may be displayed as circles, squares, ...

#### Tasks

- [x] Pass the `colors` given by the API to the `ArtPieceDetails` component 🖼️
- [x] Use the color hex-code in a styled component to render an element with this color as background
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing
