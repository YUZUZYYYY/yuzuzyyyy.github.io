let isDarkMode = false;

/*A boolean data type to keep track of dark and light modes, involving 'if' and 'else' below.
= to define
=== to check*/

function switchModes(){
    if(isDarkMode === false){
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.documentElement.style.setProperty("--col-02", "#171219");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDarkMode = true;
    } else {
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#f2fbeb");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDarkMode = false;
    }
}
/*The above triggers dark or light mode when the button is clicked. 
When it checks for dark mode, if its false that its dark mode (so its light mode), it will run the code for changing to dark mode.
If its true that its dark mode, run another set of code to reverse into light mode*/

function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}