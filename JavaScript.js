var animationTime = 1;
var dotColor = "#7B1FA2";
// Dot 1 *************************************************************************************** 
//Activate dot
var dot1Activate = gsap.to("#dot0", {
    duration: animationTime,
    backgroundColor: dotColor,
    ease: "bounce",
    paused: true
});
//play animation
document.querySelector("#dot0").onclick = () => {
    dot1Activate.play();
    dot2Activate.reverse();
    dot3Activate.reverse();
    Move("block0");
}

// Dot 2 ************************************************************************************* 
//Activate dot
var dot2Activate = gsap.to("#dot1", {
    duration: animationTime,
    backgroundColor: dotColor,
    ease: "bounce",
    paused: true
});
//play animation
document.querySelector("#dot1").onclick = () => {
    dot2Activate.play();
    dot1Activate.reverse();
    dot3Activate.reverse();
    Move("block1");
}

// Dot 3 **************************************************************************************
//Activate dot
var dot3Activate = gsap.to("#dot2", {
    duration: animationTime,
    backgroundColor: dotColor,
    ease: "bounce",
    paused: true
});
//play animation
document.querySelector("#dot2").onclick = () => {
    dot3Activate.play();
    dot1Activate.reverse();
    dot2Activate.reverse();
    Move("block2");
}


function Move(goTo) {
    switch (goTo) {
        case "block0":
            gsap.to("#board", { duration: animationTime, x: 0, ease: "bounce" });
            break;
        case "block1":
            gsap.to("#board", { duration: animationTime, x: -410, ease: "bounce" });
            break;
        case "block2":
            gsap.to("#board", { duration: animationTime, x: -820, ease: "bounce" });
            break;                
    }
}















