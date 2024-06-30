//search-button
let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-input");
window.onscroll = () => {
    searchBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');

    loginBtn.classList.remove('fa-times');

    menuBtn.classList.remove('active');
    menuBar.classList.remove('fa-times');

}
searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
});
//login-button
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');
let closeForm = document.querySelector('#close-from')

loginBtn.addEventListener('click', () => {
    loginBtn.classList.toggle('fa-times');
    loginForm.classList.add('active');
});
//close-button
closeForm.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
let menuBar = document.querySelector('#menu-bar');
let menuBtn = document.querySelector('.nav ul');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    menuBtn.classList.toggle('active');
});