//Basic terminal-style navigation
const inputField = document.getElementById('terminal-input');

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = inputField.value.trim().toLowerCase();
        handleCommand(command);
        inputField.value = ''; // CLear input
    }
});

function handleCommand(command) {
    switch (command) {
        case 'home':
            window.location.href = 'index.html';
            break;
        case 'about':
            window.location.href = 'about.html';
            break;
        case 'projects':
            window.location.href = 'projects.html';
            break;
        case 'contact':
            alert('Contact page coming soon!');
            break;
        default:
            alert('Invalid command: $(command)');
    }
}