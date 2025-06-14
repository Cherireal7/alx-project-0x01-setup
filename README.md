# alx-project-0x01-setup
# Daily Contents Application

A modern Next.js application for browsing and managing user-generated content with a clean, responsive interface.

## Features

- **User-friendly Navigation**: Intuitive header with links to all main sections
- **Content Management**: View and create posts and user profiles
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Clean interface with Tailwind CSS styling
- **Component-based Architecture**: Reusable components for consistent design

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx       # Reusable button component
│   │   └── PostCard.tsx     # Component for displaying posts
│   ├── layout/
│   │   ├── Header.tsx       # Main navigation header
│   │   └── Footer.tsx       # Application footer
│   
├── pages/
│   ├── posts/
│   │   └── index.tsx        # Posts listing page
│   ├── users/
│   │   └── index.tsx        # Users listing page
│   └── index.tsx            # Home page
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/alx-project-0x01-setup.git
```

2. Install dependencies:
```bash
cd alx-project-0x01
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at http://localhost:3000

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React

## Pages

### Home Page
- Welcome screen with call-to-action
- Clean, modern design with gradient background

### Posts Page
- Display content cards in a responsive grid
- Create new posts functionality
- Clean card design with title and content

### Users Page
- View user profiles in card format
- Add new users
- Simple user information display

## Contribution

Contributions are welcome! Please open an issue or submit a pull request.
