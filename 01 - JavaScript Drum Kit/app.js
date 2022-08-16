window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    if(!audio) return;
    key.classList.add("playing")

})

function removeTransition(e){
    if(e.propertyName !== "transform") return
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))