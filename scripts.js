const slider = document.querySelector('.items');
let isDown = false;
let startX; //when someone clicks down it records it before they start to move to the left or to the right
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
        isDown = true; //mousedown = true
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;//handles the offset
        scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
        isDown = false; //mousedown == false
        slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
        isDown = false; //mousedown == false
        slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;  // stop the fn from running
        e.preventDefault(); //stops any selecting of text, etc.
        const x = e.pageX - slider.offsetLeft; //know where the cursor is when it's moved to the left and to the right
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;//scroll
});