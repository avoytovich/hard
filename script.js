// JavaScript File

document.getElementById("decor").addEventListener("click", myFunction);

function myFunction() {
    var name = window.prompt('Please, enter your name');
    document.getElementById("demo").innerHTML = "...Thank's, " + name + ".<br> I am glad to see you...,if you wanna listen to <br> music, click on button in left-top corner like this <img src='images/android-icon-36x36.png'>..."
    document.getElementById("demo1").style.height="350px"
    document.getElementById("demo").style.padding="7%"
    document.getElementById("demo").style.fontSize="61px"
    document.getElementById("demo").style.color="#4CAF50"
    document.getElementById("decor").removeEventListener("click", myFunction);
}

document.getElementById("decor1").addEventListener("click", myAudio);

function myAudio() {
    var audio = document.getElementById("demo2");
    audio.play();
}

document.getElementById("decor2").addEventListener("click", myAnimation);

function myAnimation() {
    document.getElementById("html").style.animation = "mymoveh 5s 1"
    document.getElementById("css").style.animation = "mymovec 5s 1"
    document.getElementById("javascript").style.animation = "mymovej 5s 1"
    document.getElementById("demo").innerHTML = "It is time for search information <br>in the navigation. I hope, you hire me :)"
    document.getElementById("html").innerHTML = "HTML"
    document.getElementById("css").innerHTML = "CSS"
    document.getElementById("javascript").innerHTML = "JavaScript"
}
