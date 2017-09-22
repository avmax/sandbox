import some from './some';
import other from './other';

console.log('app!');
other();

let btn = document.getElementById('btn1');

btn.onclick = (e) => {
    other();
};