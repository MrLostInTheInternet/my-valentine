let hoverCount = 0;
const maxHoverCount = 5;
let movingEnabled = true;

function resetHoverCount() {
    hoverCount = 0;
    movingEnabled = true;
}

document.getElementById('movingButton').addEventListener('mouseover', function() {
    if (movingEnabled) {
        const container = document.querySelector('.relative');
        const maxX = container.clientWidth - this.offsetWidth;
        const maxY = container.clientHeight - this.offsetHeight;

        const newX = Math.random() * maxX ;
        const newY = Math.random() * maxY ;

        this.style.transform = `translate(${newX}px, ${newY}px)`;
        hoverCount++;

        if (hoverCount >= maxHoverCount) {
            movingEnabled = false;
            setTimeout(resetHoverCount, 1000);
        }
    }
});


document.getElementById('movingButton').addEventListener('click', function() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.classList.toggle('hidden');
});

window.addEventListener('click', function(e) {
    const popupContainer = document.getElementById('popupContainer');
    if (!popupContainer.contains(e.target) && !document.getElementById('movingButton').contains(e.target)) {
        popupContainer.classList.add('hidden');
    }
    setTimeout(function() {
        popupContainer.classList.add('hidden');
    }, 2000);
});

document.getElementById('popupButton').addEventListener('click', function() {
    const popupContainer = document.getElementById('popupContainerBig');
    const largerGif = document.getElementById('largerGif');

    popupContainer.classList.remove('hidden');

    setTimeout(function() {
        popupContainer.classList.add('hidden');
    }, 2000);
});
