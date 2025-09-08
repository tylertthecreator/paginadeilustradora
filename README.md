# Task Master AI Workspace

A clean, organized workspace for AI-powered task management and development projects.

## 🚀 Features

- **Task Master AI**: Complete AI-powered task management system
- **Cursor IDE Integration**: Pre-configured MCP (Model Context Protocol) integration
- **Free AI Models**: Configured with Google Gemini and Claude Code models (no API costs!)
- **Project Templates**: Ready-to-use PRD templates and development workflows
- **Clean Architecture**: Minimal, focused setup for productive development

## 📁 Project Structure

```
taskmaster-workspace/
├── .taskmaster/         # Task Master AI configuration and files
│   ├── config.json      # AI model settings and preferences
│   ├── templates/       # PRD templates and examples
│   └── docs/           # Project documentation
├── .cursor/             # Cursor IDE configuration
│   ├── mcp.json        # Model Context Protocol setup
│   └── rules/          # Development rules and guidelines
├── package.json        # Task Master AI dependency
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## 🛠️ Tech Stack

- **Task Management**: Task Master AI with MCP integration
- **AI Models**: Google Gemini 2.5 Pro, Claude Code models
- **IDE**: Cursor with AI-powered development
- **Configuration**: JSON-based setup for models and workflows

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Cursor IDE (recommended) or any editor
- Git for version control

### Quick Setup

1. **Clone this workspace**
   ```bash
   git clone <your-repo-url>
   cd taskmaster-workspace
   ```

2. **Install Task Master AI**
   ```bash
   npm install
   ```

3. **Open in Cursor**
   - The MCP integration will be automatically loaded
   - Task Master AI tools will be available immediately

### Configuration

The workspace is pre-configured with:
- ✅ **Google Gemini API** (add your API key to `.cursor/mcp.json`)
- ✅ **Claude Code models** (free via Cursor)
- ✅ **Optimized settings** for development workflows

## 📋 Using Task Master AI

### Core Commands

1. **Create a Project Requirements Document (PRD)**
   ```bash
   # Use the template in .taskmaster/templates/example_prd.txt
   npx task-master parse-prd your-project.txt
   ```

2. **Manage Tasks**
   ```bash
   npx task-master list          # See all tasks
   npx task-master next          # Get next task to work on
   npx task-master show 1        # View task details
   npx task-master expand --id=1 # Break down complex tasks
   ```

3. **Research & Development**
   ```bash
   npx task-master research "Latest React 19 best practices"
   npx task-master update --from=5 --prompt="Changed to TypeScript"
   ```

### In Cursor IDE

Task Master tools are available directly in the chat:
- Ask questions about your tasks
- Get AI-powered development assistance
- Manage your project workflow seamlessly

## 🎯 Perfect For

- **Solo Developers**: Organize and track development tasks
- **Learning Projects**: Break down complex tutorials into manageable steps
- **Open Source**: Manage contributions and feature development
- **Prototyping**: Quickly organize and execute new ideas

## 🔑 API Setup (Optional)

Add to `.cursor/mcp.json` for full functionality:

```json
{
  "mcpServers": {
    "task-master-ai": {
      "command": "npx",
      "args": ["-y", "task-master-mcp"],
      "env": {
        "GOOGLE_API_KEY": "your-free-google-api-key"
      }
    }
  }
}
```

**Free API Key**: Get yours at [Google AI Studio](https://aistudio.google.com/) (1M tokens/day free!)

## 📖 Documentation

- [Task Master Guide](.cursor/rules/taskmaster/taskmaster.mdc) - Complete command reference
- [Development Workflow](.cursor/rules/taskmaster/dev_workflow.mdc) - Best practices
- [Example PRD](.taskmaster/templates/example_prd.txt) - Template for requirements

## 🤝 Contributing

This workspace is designed to be:
1. **Forked** for your own projects
2. **Customized** with your preferences
3. **Extended** with your own rules and templates

## 📝 License

MIT License - Use this workspace for any project, personal or commercial.

## 📞 Contact

- GitHub: [@aleksandramusijenko](https://github.com/aleksandramusijenko)
- Email: musijenkoaleksandra@gmail.com

---

**🤖 Powered by Task Master AI - Making development workflows intelligent**