// Import stylesheets
import './style.css';
import randomColor from 'randomcolor';


const setStyles = () => {
  const heading: HTMLElement = document.getElementById('heading');
  heading.style.color = randomColor();
}

const trigger = () => {
  setTimeout(() => {
    setStyles();
    trigger();
  }, 2000);
}

setStyles();
trigger();