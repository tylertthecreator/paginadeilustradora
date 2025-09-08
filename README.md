# New Project

A modern web development workspace with multiple portfolio projects and AI-powered task management.

## 🚀 Features

- **Multiple Portfolio Projects**: Different portfolio implementations in `portfolio/`, `glori_webpage/`, and `portfolio_backup/`
- **Next.js Applications**: Modern React applications with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **AI Task Management**: Integrated with Task Master AI for intelligent project management

## 📁 Project Structure

```
newproject/
├── portfolio/           # Main portfolio application
├── glori_webpage/       # Glori webpage project
├── portfolio_backup/    # Backup portfolio version
├── .taskmaster/         # Task Master AI configuration and files
├── .cursor/             # Cursor IDE configuration
├── .gitignore          # Git ignore rules
├── package.json        # Main project dependencies
└── README.md           # This file
```

## 🛠️ Tech Stack

- **Frontend**: Next.js, React 19, TypeScript
- **Styling**: Tailwind CSS
- **AI Tools**: Task Master AI with Google Gemini models
- **Development**: Cursor IDE with MCP integration

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd newproject
```

2. Install dependencies:
```bash
npm install
```

3. Choose which project to work on:

#### For Main Portfolio:
```bash
cd portfolio
npm install
npm run dev
```

#### For Glori Webpage:
```bash
cd glori_webpage  
npm install
npm run dev
```

### 🤖 Task Master AI

This project includes Task Master AI for intelligent task management:

- **Configuration**: `.taskmaster/config.json`
- **Free AI Models**: Uses Google Gemini and Claude Code models
- **MCP Integration**: Configured in `.cursor/mcp.json`

#### Task Master Commands:
```bash
# View current tasks
npx task-master list

# Get next task to work on
npx task-master next

# View specific task
npx task-master show <id>
```

## 📝 Development Workflow

1. Use Task Master AI to manage development tasks
2. Work on individual projects in their respective directories
3. Commit changes regularly with descriptive messages

## 🔧 Configuration

### AI Models (Task Master)
- **Main Model**: Google Gemini 2.5 Pro (Free)
- **Research Model**: Claude Code Sonnet (Free)  
- **Fallback Model**: Claude Code Opus (Free)

### Environment Variables
Required API keys in `.cursor/mcp.json`:
- `GOOGLE_API_KEY`: For Gemini models

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- GitHub: [@aleksandramusijenko](https://github.com/aleksandramusijenko)
- Project Link: [https://github.com/aleksandramusijenko/newproject](https://github.com/aleksandramusijenko/newproject)

---

⭐ **Star this repository if you find it helpful!**
# Personal Project Setup Complete
