// variables needed
var currentDiv = 1;
var numDiv = 5;


// navigate divs when left or right button clicked on html
function navigate(num){
    // left button clicked
    if(num < 0){
        // go left
        if(currentDiv != 1){
            currentDiv--;
        }
        // loop from first to last
        else if(currentDiv == 1){
            currentDiv = numDiv;
        }
    }
    // right button clicked
    else if(num > 0){
        // go right
        if(currentDiv != numDiv){
            currentDiv++;
        }
        // loop from last to first
        else if(currentDiv == numDiv){
            currentDiv = 1;
        }
    }
    changeDiv();
}

// changediv
function changeDiv(){
    // loop through all divs
    for(var i = 1; i <= numDiv; i++){
        // if the current div is the one we want to show, show it
        if(i == currentDiv){
            document.getElementById("slide" + i).style.display = "block";
        }
        // else hide it
        else{
            document.getElementById("slide" + i).style.display = "none";
        }
    }
}