import other from './other';

console.log('app!');
other();

let btn = document.getElementById('btn1');

btn.onclick = (e) => {
    console.log('click');
    import('./some.js').then(module => module.default());
};