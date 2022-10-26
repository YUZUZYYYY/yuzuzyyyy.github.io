//Here is the code for the random movement of the dragonflies.//
window.onload = function(){
    var specimen = document.getElementsByClassName("dragonfly");

    for(var species of specimen){
        var speciesStartPos = makeNewPosition();
        species.style.left = speciesStartPos[0];
        species.style.top = speciesStartPos[1];
        animateSpecimen(species, speciesStartPos);
    }



    function makeNewPosition(){
        var randomX = `${Math.random()*100}%`;
        var randomY = `${Math.random()*100}%`;
        return [randomX, randomY];
    }
    
    function animateSpecimen(elementToAnimate, endPos){
        var randomPos = makeNewPosition();
        var startPos = endPos;
        var randomTime = 2000 + (Math.random()*2000);
        elementToAnimate.animate([
            {//0%
                left: startPos[0],
                top: startPos[1]
            },
            {//0%
                left: randomPos[0],
                top: randomPos[1]
            }
        ], randomTime).onfinish = function(){
            animateSpecimen(elementToAnimate, randomPos)
        };


    }

    console.log(makeNewPosition());

}

//Here is the code for the distortion of the buttons that have been stylised to look like lilypads.//
const buttons = document.querySelectorAll('button');
const turbulence = document.querySelectorAll('feTurbulence');
let verticalFrequency = 0.00001;
turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
const steps = 30;
const interval = 10;

buttons.forEach(function(button){
    button.addEventListner('mouseover', function(){
        verticalFrequency = 0.00001;
        
        for(i = 0; i < steps; i++){
            setTimeout(function(){
                verticalFrequency += 0.009;
                turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
            }, i * interval);  
        }
        setTimeout(function(){
            verticalFrequency = 0.00001;
            turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
        }, steps * interval)
    })
});




