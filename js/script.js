
/* Access image by id and change
            the display property to block*/
       
const card =  document.getElementsByClassName("flip-card"); 

Object.entries(card).map((object) => { console.log(object) });

function replaceClass(id, oldClass, newClass) {
    var elem = card[id];
    elem.classList.remove(oldClass);
    elem.classList.add(newClass);
}
/*
document.body.addEventListener('click', function(){
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }

});
*/


card[1].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[1].classList.toggle("flip-card-flipped");
    card[4].classList.toggle("flip-card-flipped");
});
card[4].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }    
    card[1].classList.toggle("flip-card-flipped");
    card[4].classList.toggle("flip-card-flipped");
});
card[0].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[0].classList.toggle("flip-card-flipped");
    card[10].classList.toggle("flip-card-flipped");
    card[17].classList.toggle("flip-card-flipped");
});
card[10].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[0].classList.toggle("flip-card-flipped");
    card[10].classList.toggle("flip-card-flipped");
    card[17].classList.toggle("flip-card-flipped");
});
card[17].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[0].classList.toggle("flip-card-flipped");
    card[10].classList.toggle("flip-card-flipped");
    card[17].classList.toggle("flip-card-flipped");
});
card[2].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[2].classList.toggle("flip-card-flipped");
    card[16].classList.toggle("flip-card-flipped");
});
card[16].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[2].classList.toggle("flip-card-flipped");
    card[16].classList.toggle("flip-card-flipped");
});
card[3].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[3].classList.toggle("flip-card-flipped");
    card[9].classList.toggle("flip-card-flipped");
});
card[9].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[3].classList.toggle("flip-card-flipped");
    card[9].classList.toggle("flip-card-flipped");
});
card[5].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[5].classList.toggle("flip-card-flipped");
    card[11].classList.toggle("flip-card-flipped");
});
card[11].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[5].classList.toggle("flip-card-flipped");
    card[11].classList.toggle("flip-card-flipped");
});
card[6].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[6].classList.toggle("flip-card-flipped");
    card[13].classList.toggle("flip-card-flipped");
});
card[13].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[6].classList.toggle("flip-card-flipped");
    card[13].classList.toggle("flip-card-flipped");
});
card[7].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[7].classList.toggle("flip-card-flipped");
});
card[8].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[8].classList.toggle("flip-card-flipped");
    card[15].classList.toggle("flip-card-flipped");
});
card[15].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[8].classList.toggle("flip-card-flipped");
    card[15].classList.toggle("flip-card-flipped");
});
card[12].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[12].classList.toggle("flip-card-flipped");
    card[14].classList.toggle("flip-card-flipped");
});
card[14].addEventListener("click", function() {
    for (let i = 0, len = card.length; i < len; i++){
        if (card[i].classList.contains("flip-card-flipped")){
            card[i].classList.remove("flip-card-flipped");
            console.log(i);
        }
    }
    card[12].classList.toggle("flip-card-flipped");
    card[14].classList.toggle("flip-card-flipped");
});
/*
for (var i = 0 ; i <  card.length; i++) {
   card[i].addEventListener('click' , flipCard, false); 
}
   
function flipCard() {
    card[0].classList.toggle("flip-card-flipped");
}
*/
          

function show() {
 
	/* Get image and change value
	of src attribute */
            /* Access image by id and change
            the display property to block*/
            document.getElementById('image')
                    .style.display = "block";
}

// Array with all our images
