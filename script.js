const drumIcons = document.querySelectorAll(".drums_icon");

for (var i = 0; i < drumIcons.length; i++) {
    drumIcons[i].addEventListener("click", function() {
        const dataKey = this.getAttribute("data-key");
        const clickAudio = document.querySelector(`audio[data-key="${dataKey}"]`);
        if (!clickAudio) return;
        clickAudio.currentTime = 0;
        clickAudio.play();
        // Add the "click" class
        this.classList.add("click");
        // Remove the "click" class after 500 milliseconds (0.5 seconds)
        setTimeout(function () {
            this.classList.remove("click");
        }.bind(this), 500);

        const border1 = document.querySelectorAll(".drum_icon_border");
        for (var i=0; i<=border1.length;i++){
        border1[i].addEventListener("click", function(){
        this.classList.add("border");
        setTimeout(function () {
            this.classList.remove("border");
        }.bind(this), 500);
    })
}
    });
}



// const border1 = document.querySelectorAll(".drum_icon_border");
// for (var i=0; i<=border1.length;i++){
//     border1[i].addEventListener("click", function(){
//         this.classList.add("border");
//         setTimeout(function () {
//             this.classList.remove("border");
//         }.bind(this), 500);
//     })
// }


window.addEventListener('keydown',function(e){
    const audioSelector = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    if(!audioSelector) return;
    audioSelector.currentTime = 0;
    audioSelector.play();
    console.log(audioSelector);
    drumIcons.classList.add("click");
    setTimeout(function () {
        drumIcons.classList.remove("click");
    }.bind(this), 500);
})
