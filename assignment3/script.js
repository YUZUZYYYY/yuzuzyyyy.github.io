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