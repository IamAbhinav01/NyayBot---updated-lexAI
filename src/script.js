window.onload = function () {
  const chatWindow = document.getElementById('chatWindow');

  function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className =
      sender === 'user' ? 'flex justify-end mb-4' : 'flex justify-start mb-4';

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

  const startButton = document.getElementById('voiceBtn');
  const outputDiv = document.getElementById('legalQuery');

  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();

  recognition.lang = 'en-US';
  recognition.continuous = true; // keeps listening until stopped
  recognition.interimResults = true; // shows partial results

  let isListening = false; // toggle state

  recognition.onstart = () => {
    startButton.innerHTML = '<i class="fas fa-stop text-xl text-red-500"></i>';
  };

  recognition.onresult = (event) => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    outputDiv.value = transcript; // show in input box
  };

  recognition.onend = () => {
    if (isListening) {
      // restart automatically if toggle is ON
      recognition.start();
    } else {
      startButton.innerHTML = '<i class="fas fa-microphone text-xl"></i>';
    }
  };

  startButton.addEventListener('click', () => {
    if (!isListening) {
      isListening = true;
      recognition.start();
    } else {
      isListening = false;
      recognition.stop();
    }
  });
};
