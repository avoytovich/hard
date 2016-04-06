// JavaScript File

document.getElementById("decor").addEventListener("click", myFunction);


function myFunction() {
    var enterprise = prompt('Enter name of your enterprise:');
    document.getElementById("demo").innerHTML = "Production of " + enterprise 
    document.getElementById("demo").style.background="#ffffff"
    document.getElementById("decor").removeEventListener("click", myFunction);
}