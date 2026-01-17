# Swagarika Giri - Personal Website

A simple, clean React website inspired by modern academic personal websites. This website can be easily deployed to GitHub Pages.

## Features

- Clean, modern design
- Responsive navigation menu
- Multiple pages: Home, Experience, Projects, CV, Publications
- Easy to customize with your own content
- GitHub Pages ready

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`

### Customization

1. **Home Page** (`src/pages/Home.js`): Update the introduction text and social media links
2. **Experience** (`src/pages/Experience.js`): Add your work experience
3. **Projects** (`src/pages/Projects.js`): Add your projects
4. **Publications** (`src/pages/Publications.js`): Add your publications
5. **CV**: The CV page is already set up to display your PDF resume

### Deployment to GitHub Pages

Follow these steps to deploy your website to GitHub Pages:

#### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `Swagarika-Website` (or any name you prefer)
3. **Do NOT** initialize it with a README, .gitignore, or license (if you already have these files)

#### Step 2: Update the Homepage URL

1. Open `package.json`
2. Update the `homepage` field with your GitHub username and repository name:
```json
"homepage": "https://YOUR_USERNAME.github.io/Swagarika-Website"
```
Replace `YOUR_USERNAME` with your actual GitHub username.

#### Step 3: Initialize Git and Push to GitHub

If you haven't already initialized git, run these commands in your project directory:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Swagarika-Website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 4: Deploy to GitHub Pages

Run the deploy command:

```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Deploy your site to GitHub Pages

#### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select the `gh-pages` branch
5. Click **Save**

#### Step 6: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/Swagarika-Website
```

**Note:** It may take a few minutes for the site to be live after deployment.

#### Updating Your Website

Whenever you make changes to your website:

1. Make your changes
2. Commit and push to main:
```bash
git add .
git commit -m "Update website"
git push
```

3. Deploy again:
```bash
npm run deploy
```

## Project Structure

```
Swagarika-Website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Experience.js
│   │   ├── Experience.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── CV.js
│   │   ├── CV.css
│   │   ├── Publications.js
│   │   └── Publications.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## License

This project is open source and available under the MIT License.

