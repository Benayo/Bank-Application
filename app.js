const splashScreen = document.querySelector('#splash');
const progressIndicator = document.querySelector('.indicator');
const app = document.querySelector('#app')
var modal = document.getElementById("myModal");
var btn = document.getElementById("create");
var span = document.getElementsByClassName("close")[0]
let unit = 10;

let interval = setInterval( function(){
    progressIndicator.style.width = `${unit += 10}%`;
    if (unit >= 100) {
        clearInterval(interval);
        splashScreen.style.display = 'none';
        app.style.opacity = 1
    }
}, 400);

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

modal.onclick = function(event) {
    const bg = document.querySelector('.modal-centre');
    if (event.target == bg) {
        modal.style.display = "none"
    }
}

