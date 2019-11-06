const TOTAL_ROWS = 40;
const TOTAL_BOXES = 40;

const body = document.querySelector('.body');

for (let r = 0; r < TOTAL_ROWS; r++) {
  const row = document.createElement('div');
  row.classList.add('row');
  
  for (let i = 0; i < TOTAL_BOXES; i++) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('box-wrapper');
    const box = document.createElement('div');
    box.classList.add('box');
  
    wrapper.appendChild(box);
    row.appendChild(wrapper);
  }

  body.appendChild(row);
}


const boxes = Array.from(document.querySelectorAll('.box'));
const DURATION = 10000;
const VARIANCE = 4;
let left = 0;

function loop() {
  window.requestAnimationFrame(loop);
  
  const p = (Date.now() % DURATION) / 100;
  boxes.forEach(box => {
    let v = Math.floor(Math.random() * 100) % VARIANCE;
    box.style = `left: ${(p + v) * 25}%;`;

    box.parentElement.style = `margin-top: ${p % 100 / 10}%`;
  });
}
// loop(); 
