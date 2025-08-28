function toggleChatbot() {
    const chatbot = document.querySelector('.chatbot');
    chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
}

function addMessage(type, text) {
    const chatbox = document.querySelector('.chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat', type);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

async function quickAction(action) {
    if (action === 'translate') {
        addMessage('outgoing', 'Quiero traducir un término legal.');
        addMessage('incoming', 'Claro. Escribe el término en español o chino:');
    } else if (action === 'verify') {
        addMessage('outgoing', 'Quiero verificar un contrato.');
        addMessage('incoming', 'Función en desarrollo. Próximamente...');
    } else if (action === 'upload') {
        addMessage('outgoing', 'Quiero subir un contrato.');
        addMessage('incoming', 'Función en desarrollo. Próximamente...');
    }
}

document.getElementById('send-btn').addEventListener('click', function() {
    const textarea = document.querySelector('.chat-input textarea');
    const message = textarea.value.trim();
    
    if (message) {
        addMessage('outgoing', message);
        textarea.value = '';
        
        // Simular respuesta automática
        setTimeout(() => {
            addMessage('incoming', 'Recibí tu mensaje. Estoy procesando tu solicitud...');
        }, 1000);
    }
});