# 🚀 My personal Portfolio Website

A stunning, interactive portfolio website built with Next.js 15. Designed to showcase professional skills and experience with modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-FF69B4)

## ✨ Features

### 🎨 **Interactive Design**
- **Dynamic Background**: Mouse-following gradients with animated blur effects
- **3D Globe Visualization**: Interactive globe with location markers using Cobe
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Responsive Design**: Perfect display across all devices and screen sizes

### 💻 **Interactive Terminal**
- **Live Command Interface**: Fully functional terminal with multiple commands
- **Command History**: Navigate through previous commands with arrow keys
- **Auto-completion**: Smart suggestions and tab completion
- **Expandable UI**: Resizable terminal window for better user experience
- **Custom Commands**: 
  - `help` - Show available commands
  - `about` - Display personal information
  - `skills` - List technical skills
  - `contact` - Show contact details
  - `neofetch` - System information display
  - And more!

### 🌟 **Modern UI Elements**
- **Glass Morphism**: Beautiful frosted glass effects throughout
- **Dark Theme**: Sleek dark design with purple/blue accents

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://reactjs.org/) with Hooks
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) for clean typography

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KnotzerIO/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)


## 🎨 Customization

### **Personal Information**
Update your personal details in the following components:
- `src/components/Hero.js` - Name and title
- `src/components/AboutMe.js` - About text and quotes
- `src/components/InteractiveTerminal.js` - Command responses

### **Styling**
- Modify colors in `tailwind.config.js`
- Adjust animations in component files
- Customize the globe markers in `Globe.js`

### **Terminal Commands**
Add new commands in `InteractiveTerminal.js`:
```javascript
{
    name: "your-command",
    description: "Command description",
    execute: (args) => {
        return "Command output";
    },
}
```

## 🌐 Deployment

### Vercel 
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with every push

### Other Platforms
- **GitHub Pages**: Use `npm run export` for static export

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ **If you found this project helpful, please consider giving it a star!** ⭐