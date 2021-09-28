const button = document.querySelector('button');
const aside = document.querySelector('aside');
const doc = document.querySelector('html');

const main = document.querySelector('main');
const themeButton = document.querySelector('.theme-toggle');

const openSideBar = () => aside.classList.toggle('open');

const toggleDarkMode = () => doc.classList.toggle('dark'); 



button.addEventListener('click', openSideBar);
themeButton.addEventListener('click', toggleDarkMode);