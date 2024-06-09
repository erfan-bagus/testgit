
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


    initThema();
document.querySelector('#light').addEventListener('click',function(){
    console.log('light')
    localStorage.setItem('theme','light')
    initThema();
})    
document.querySelector('#dark').addEventListener('click',function(){
    console.log('dark')
    localStorage.setItem('theme','dark')
    initThema();
}) 
function initThema(){
    let currentTheme = localStorage.getItem("theme");
    if(!currentTheme){localStorage.setItem('theme','light')}
        if (currentTheme == "dark") {
            document.body.classList.toggle("dark-theme");
            document.body.classList.remove("light-theme");
            document.querySelector("#dark").style.display="none";
            document.querySelector("#light").style.display="block";
        }
      if (currentTheme == "light") {
        document.body.classList.toggle("light-theme");
        document.body.classList.remove("dark-theme");
        document.querySelector("#light").style.display="none";
        document.querySelector("#dark").style.display="block";
      }
}
function login() {
    var data = new FormData(document.querySelector("#form1"));
    console.log(Object.fromEntries(data))
    return false;
}