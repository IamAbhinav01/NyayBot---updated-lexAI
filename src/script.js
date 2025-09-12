window.onload = function () {
  const chatWindow = document.getElementById('chatWindow');

  function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = sender === 'user' 
      ? 'flex justify-end mb-4'
      : 'flex justify-start mb-4';
    
    if (sender === 'user') {
      msg.innerHTML = `
        <div class="max-w-xs lg:max-w-md bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl rounded-br-sm shadow-lg">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <i class="fas fa-user text-sm"></i>
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium mb-1">You</div>
              <div class="text-sm">${text}</div>
            </div>
          </div>
        </div>
      `;
    } else {
      msg.innerHTML = `
        <div class="max-w-xs lg:max-w-md bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-2xl rounded-bl-sm shadow-lg border border-white/20">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <i class="fas fa-robot text-sm"></i>
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium mb-1">NyayBot</div>
              <div class="text-sm">${text}</div>
            </div>
          </div>
        </div>
      `;
    }
    
    // Add message to chat window (newest at top due to flex-col-reverse)
    chatWindow.insertBefore(msg, chatWindow.firstChild);
    
    // Scroll to show latest message (scrollTop = 0 shows bottom in reverse flex)
    chatWindow.scrollTop = 0;
  }

  // Add initial welcome message
  addMessage('bot', '👋 Welcome to NyayBot! I\'m your AI legal assistant, ready to help you with legal questions, document analysis, and legal guidance. What would you like to know?');

  // Handle form submission
  const form = document.querySelector('form');
  const input = document.getElementById('legalQuery');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
      addMessage('user', query);
      input.value = '';

        // Simulate bot response (replace with actual AI integration)
        setTimeout(() => {
          addMessage(
            'bot',
            `I understand you're asking about: "${query}"<br><br>🔍 Let me analyze this legal question for you. In a real implementation, I would connect to my AI backend to provide detailed legal assistance, case law references, and actionable guidance.`
          );
        }, 1000);
    }
  });
};
