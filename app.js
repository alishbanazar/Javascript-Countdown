//----------task---------------
//Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter
//value in browser.


var counter = 0;
function increase(){
    document.getElementById("counter").innerText = counter++
  increase.style.backgroundColor = "pink"
    
}

function decrease(){
    if(counter<0){
        counter = 0;
    }
    document.getElementById("counter").innerText = counter--
    
}