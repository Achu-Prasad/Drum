const drumIcons = document.querySelectorAll(".drums_icon");

for (var i = 0; i < drumIcons.length; i++) {
    
    drumIcons[i].addEventListener("click", function() {
        const dataKey = this.getAttribute("data-key");


        const clickedBorder = document.querySelector(`.drum_icon_border[data-key = "${dataKey}"]`);
        clickedBorder.classList.add("border");
        setTimeout(function() {
            clickedBorder.classList.remove("border");
        }, 500);


        const clickAudio = document.querySelector(`audio[data-key="${dataKey}"]`);
        if (!clickAudio) return;
        clickAudio.currentTime = 0;
        clickAudio.play();


        this.classList.add("click");
        setTimeout(function () {
            this.classList.remove("click");
        }.bind(this), 500);
    });
}





window.addEventListener('keydown', function(e) {
    const audioSelector = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audioSelector) return;

    const pressIcon = document.querySelector(`.drums_icon[data-key="${e.keyCode}"]`);
    if (!pressIcon) return;

    audioSelector.currentTime = 0;
    audioSelector.play();

    pressIcon.classList.add("click");
    setTimeout(function() {
        pressIcon.classList.remove("click");
    }, 500);

    const pressedKey = document.querySelector(`.drum_icon_border[ data-key="${e.keyCode}"]`);
    if(!pressedKey) return;
    pressedKey.classList.add("border");
    setTimeout(function(){
        pressedKey.classList.remove("border");
    },500);
});

