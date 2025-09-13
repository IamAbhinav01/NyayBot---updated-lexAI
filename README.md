# ⚖️ NyayBot - Modern Legal AI Assistant

A modern, responsive legal AI assistant built with HTML, CSS, and JavaScript featuring a beautiful chat interface and voice capabilities.

## 🎨 Features

### 🌟 Modern UI/UX
- **Glassmorphism Design**: Beautiful transparent elements with backdrop blur
- **Gradient Backgrounds**: Modern gradient color schemes
- **Responsive Layout**: Works perfectly on desktop and mobile
- **Animated Background**: Custom GIF integration for visual appeal

### 💬 Chat Interface
- **Real-time Messaging**: Instant chat functionality
- **Message Avatars**: User and bot avatars for better UX
- **Message History**: Persistent conversation history
- **Auto-scroll**: Automatic scrolling to latest messages

### 🎤 Voice & File Features
- **Voice Input**: Microphone button for voice recording
- **File Upload**: Drag and drop file upload capability
- **Audio Playback**: Text-to-speech functionality
- **File Preview**: Display uploaded file names

### 🎯 Legal AI Capabilities
- **Legal Q&A**: Ask questions about law and legal procedures
- **Document Analysis**: Upload and analyze legal documents
- **Context Awareness**: Maintains conversation context
- **Professional Responses**: Structured legal guidance

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Python, Node.js, or any HTTP server)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/IamAbhinav01/-LexAI-Justice-AI-Legal-Assistant-for-Indian-Law.git
cd -LexAI-Justice-AI-Legal-Assistant-for-Indian-Law
```

2. **Switch to the NyayBot branch**
```bash
git checkout -b nyaybot-modern-ui
```

3. **Navigate to the NyayBot directory**
```bash
cd src/
```

4. **Start a local server**
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

5. **Open in browser**
```
http://localhost:8000
```

## 📁 Project Structure

```
src/
├── index.html          # Main HTML file with modern UI
├── script.js           # JavaScript for chat functionality
├── output.css          # Tailwind CSS compiled styles
├── input.css           # Tailwind CSS source
└── README-NyayBot.md   # This documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue to Purple gradients
- **Background**: Dark slate with purple accents
- **Text**: White with gray variations
- **Accents**: Pink and blue highlights

### Components
- **Navigation**: Clean header with branding
- **Hero Section**: Large title with animated background
- **Chat Container**: Glassmorphism chat area
- **Input Bar**: Long prompt bar with integrated buttons
- **Messages**: Bubble-style messages with avatars

## 🔧 Customization

### Changing Colors
Edit the gradient classes in `index.html`:
```html
<!-- Change title gradient -->
class="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"

<!-- Change button gradient -->
class="bg-gradient-to-r from-blue-500 to-purple-600"
```

### Adding Features
Extend the JavaScript in `script.js`:
```javascript
// Add new message types
function addMessage(sender, text, type = 'default') {
    // Custom message handling
}
```

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📱 Mobile Responsive

The interface is fully responsive and includes:
- Touch-friendly buttons
- Optimized input fields
- Mobile-first design approach
- Adaptive typography

## 🔗 Integration

### Backend Integration
To connect with a legal AI backend, modify the form submission handler in `script.js`:

```javascript
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const query = input.value.trim();
    
    if (query) {
        addMessage('user', query);
        input.value = '';
        
        // Replace with actual API call
        const response = await fetch('/api/legal-query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query })
        });
        
        const data = await response.json();
        addMessage('bot', data.response);
    }
});
```

## 🎯 Future Enhancements

- [ ] Real AI backend integration
- [ ] Voice recognition implementation
- [ ] File upload processing
- [ ] User authentication
- [ ] Chat history persistence
- [ ] Multi-language support
- [ ] Legal document parsing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Font Awesome** for the beautiful icons
- **Modern Web APIs** for voice and file capabilities
- **Legal Community** for inspiration and guidance

---

**⚖️ NyayBot** - Making legal guidance accessible through modern technology! 🇮🇳
