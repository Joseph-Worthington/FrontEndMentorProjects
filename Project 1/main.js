let selectContainer = document.getElementsByClassName('rating-wrapper')[0];
let listItems = document.getElementsByTagName('a');
for(let i=0; i < listItems.length; i++){
    listItems[i].addEventListener('click',function(){
        (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : ''; this.classList.add('active')
    });
}

const submitForm = () =>{    
    document.getElementsByClassName("thankyou-wrapper")[0].style.display = "flex";
    document.getElementsByClassName("review-form")[0].style.display = "none";

    let selectedScore = document.querySelector('li .active').getAttribute('value');
    let thankYouScore = document.getElementById('user-score');
    console.log(thankYouScore);
    console.log(selectedScore);
    let userScore = document.createTextNode(selectedScore);
    console.log(userScore);
    thankYouScore.appendChild(userScore);
}

//Main function on click the current output will be hidden and the thank you message will become visable.  

//Create an onclick event that targets the display of wrappers around the submit card and the thank you card.

//The function must also log the number chosen, this must be stored.

// How does the computer know which option was selected?

// Do the buttons need an onlcick, or a change event?

//The stored numebr then needs to be outputed into the html of the thank you message

//Might also wish to include a return button