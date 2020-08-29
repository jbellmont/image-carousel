const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const frame = document.querySelector('.frame');
const images = document.querySelector('.images');
const row = document.querySelector('.row'); // used for storing image width
const buttons = document.querySelector('.buttons');
let imageRight = 0;

function nextImage() {
  if (images.style.right === `${row.offsetWidth * 3}px`) return;
  imageRight += row.offsetWidth;
  images.style.right = imageRight + 'px';

  selectActiveButton();
}

function previousImage() {
  if (images.style.right === "0px") return;
  imageRight -= row.offsetWidth;
  images.style.right = imageRight + 'px';

  selectActiveButton();

}

function selectImageViaButtons(event) {
  // remove active button class from all buttons
  const iterableButtons = document.querySelectorAll('[data-number]');
  iterableButtons.forEach(button => button.classList.remove('active-button'));

  // display correct image based on which button was clicked
  imageRight = (event.target.dataset.number - 1) * row.offsetWidth;
  images.style.right = imageRight + 'px';

  // update button to be active for current image
  event.target.classList.add('active-button');
}

function selectActiveButton() {
  // remove active button class from all buttons
  const iterableButtons = document.querySelectorAll('[data-number]');
  iterableButtons.forEach(button => button.classList.remove('active-button'));

  // add active button class to the corresponding button
  const whichImage = (imageRight / row.offsetWidth);
  iterableButtons[whichImage].classList.add('active-button');

}

// Event listeners
nextBtn.addEventListener('click', nextImage);
previousBtn.addEventListener('click', previousImage);
buttons.addEventListener('click', selectImageViaButtons);