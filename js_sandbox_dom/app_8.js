const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse Events
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}