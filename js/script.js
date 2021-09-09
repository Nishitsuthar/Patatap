// document.addEventListener('keydown',pressed);
document.addEventListener('keyup',pressed);

// function check(e){
//     document.write("this is working");
// }

function pressed(e){
    if(keyData[e.key]){
    var me  =e.key;
    keyData[me].audio.pause();
    keyData[me].audio.currentTime = 0;
    keyData[me].audio.play();
    document.body.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }
}





var keyData = {

    a : { audio :  new Audio('sounds/bubbles.mp3')},

    b : { audio :  new Audio('sounds/clay.mp3')},
 
    c : { audio :  new Audio('sounds/confetti.mp3')},

    d : { audio :  new Audio('sounds/corona.mp3')},

    e : { audio :  new Audio('sounds/dotted-spiral.mp3')},

    f : { audio :  new Audio('sounds/flash-1.mp3')},

    g : { audio :  new Audio('sounds/flash-2.mp3')},

    h : { audio :  new Audio('sounds/flash-3.mp3')},

    i : { audio :  new Audio('sounds/glimmer.mp3')},

    j : { audio :  new Audio('sounds/moon.mp3')},

    k : { audio :  new Audio('sounds/pinwheel.mp3')},

    l : { audio :  new Audio('sounds/piston-1.mp3')},

    m : { audio :  new Audio('sounds/piston-2.mp3')},

    n : { audio :  new Audio('sounds/piston-3.mp3')},

    o : { audio :  new Audio('sounds/prism-1.mp3')},

    p : { audio :  new Audio('sounds/prism-2.mp3')},

    q : { audio :  new Audio('sounds/prism-3.mp3')},

    r : { audio :  new Audio('sounds/splits.mp3')},

    s : { audio :  new Audio('sounds/squiggle.mp3')},

    t : { audio :  new Audio('sounds/strike.mp3')},

    u : { audio :  new Audio('sounds/suspension.mp3')},

    v : { audio :  new Audio('sounds/timer.mp3')},

    w : { audio :  new Audio('sounds/ufo.mp3')},

    x : { audio :  new Audio('sounds/veil.mp3')},

    y : { audio :  new Audio('sounds/wipe.mp3')},

    z : { audio :  new Audio('sounds/zig-zag.mp3')}


}