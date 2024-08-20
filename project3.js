document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.getElementById('container');

    let isToggled = false;

    button.addEventListener('click', () => {
        if (isToggled) {
            text.textContent = 'Initial Text';
            button.textContent = 'Click Me';
            container.style.backgroundColor = 'lightblue';
        } else {
            text.textContent = 'Toggled Text';
            button.textContent = 'Undo';
            container.style.backgroundColor = 'lightcoral';
        }
        isToggled = !isToggled;
    });
});