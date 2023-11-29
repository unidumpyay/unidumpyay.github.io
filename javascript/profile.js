function checkRegistration() {
    var registrationInput = document.getElementById("registration");
    var resultParagraph = document.getElementById("result");
    
    var userResponse = registrationInput.value.toLowerCase();
    
    if (userResponse === "yes") {
        resultParagraph.textContent = "Nice!";
        checkPassword();
       
    } else {
        resultParagraph.textContent = "Try again";
    }
}

function checkPassword(){
    var login = prompt ("Enter Login", "");

    if(login == "Admin"){
        var password = prompt("Enter Password", "");

        if(password == "Main"){
            alert("Welcome Back!");
        }
        else if(password == null){
            alert("Canceled")
        }
        else{
            alert("Wrong password.")
        }
    }
    else if(login == null){
        alert("Canceled")
    }
    else{
        alert("I don't know you")
    }
}

/////////////////////////////////////////////////   LIKE BUTTON    //////////////////////////////////////////////
var isLiked = false;
function ToggleLikeAndDraw(){
    const btnheart = document.getElementById("btnheart");
    const btnbg = document.getElementById("circle");

    isLiked = !isLiked;

    btnheart.style.color = isLiked ? "red" : "grey";
    btnbg.style.backgroundColor = isLiked ? "rgb(255, 177, 177)" : "aliceblue"
}

/////////////////////////////////////////////////   MOUSE TRAIL    //////////////////////////////////////////////
document.addEventListener('mousemove', function(e){
    if(isLiked){
        let body = document.querySelector('body');
        let heart = document.createElement('span');

        let x = e.offsetX;
        let y = e.offsetY;

        let img = document.createElement('img');
        img.src = 'images/favicon.png'; 

        img.style.width = 40 + 'px';

        heart.style.position = 'absolute';
        heart.style.width = '5px'; 
        heart.style.height = '5px'; 
        heart.style.left = x  + 'px'; 
        heart.style.top = y  + 'px'; 

        heart.appendChild(img);
        body.appendChild(heart);

        setTimeout(function(){
            heart.remove();
        }, 500)
    }
})

///////////////////////////////////////////////    CART    //////////////////////////////////
let cart_add_toggle = false;
function ToggleAddToCart(){
    cart_add_toggle = !cart_add_toggle;

    if(cart_add_toggle){

        let accumulator = new Accumulator(0);
        accumulator.read();
        accumulator.read();
        alert(accumulator.value);

        cart_add_toggle = !cart_add_toggle;
    }
}

function Accumulator(startingValue){
    var cart = document.getElementById("cart");

    this.value = startingValue;
    this.read = function(){
        
        this.value += +prompt("How many to add?",0);
        cart.textContent = this.value;
    }
}

////////////////////////////////////    CAPTCHA     /////////////////////////////////////
function LettersRand(len){
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charsLen = chars.length;
    for(let i = 0; i < len; i++){
        const randId = Math.floor(Math.random() * charsLen);
        result+=chars.charAt(randId);
    }
    return result;
}

function Show_Captcha(){
    const div_form = document.getElementById("captcha-cont");
    div_form.style.display="block";

    label_cap = document.getElementById("gen_cap");
    let cap_str = LettersRand(6);
    label_cap.textContent = cap_str;
}

function Captcha(){

    const userInput = document.getElementById("answer").value;
    if (isEmpty(userInput)) {
        document.getElementById("msg").textContent = 'input cannot be empty';
        return;
      }

    if( label_cap.textContent.toLowerCase() == userInput.toLowerCase()){
        document.getElementById("msg").textContent = '';
        alert("Good");
        document.getElementById("check-for").removeAttribute("disabled");
    }
    else{
        document.getElementById("msg").textContent = '';
        N= Math.floor(Math.random()*10);
        M= Math.floor(Math.random()*10);

        label_cap.textContent = '';
        setTimeout(function () {
            const sumInput = parseInt(prompt(`Please enter the sum of ${M} and ${N}`));
            if (sumInput == M + N) {
              alert("Nice");
              document.getElementById("check-for").removeAttribute("disabled");
            } else {
              alert("Incorrect sum");
            }
          }, 500); 
    }
 
}

function isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

 ///////////////////////////////////////    LIST    ////////////////////////////////////////
function addToList(input){

    const l_p = document.createElement('p');
    l_p.classList.add("list-text");
    l_p.textContent = (input);
    const l_li= document.createElement('li');
    const l_ul = document.querySelector("#ul-list");
    l_li.appendChild (l_p);
    l_ul.appendChild(l_li);

}

function makeList(){
    while (true){
        var input = prompt ("Enter text", "list text");
        if (input == null){break;}
        else{
            addToList(input);
        }
    }
}
makeList();

 ///////////////////////////////////////    NOTIFICATION    ////////////////////////////////////////

 function ShowNotif(userResponse){
    var notifInput = document.getElementById("notif-text");
    var userResponse = notifInput.value;

    const body = document.querySelector('body');

    const n_div = document.createElement('div');
    const n_div_text =  document.createElement('p');
    n_div_text.textContent = userResponse;

    n_div.appendChild(n_div_text);
 
    n_div.style.position = 'fixed';
    n_div.style.top = '-100px'; //Начальное положение за пределами экрана
    n_div.style.left = '50%';
    n_div.style.transform = 'translateX(-50%)';

    n_div.style.width = '50%';

    n_div.style.padding = '10px';
    n_div.style.margin = '5px';
    n_div.style.border = '1px solid #ccc';
    n_div.style.borderRadius = '15px';
    n_div.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
    n_div.style.backdropFilter = "blur(15px)";

    n_div.style.transition = 'top 0.5s ease-in-out';

    body.appendChild(n_div);

    setTimeout(function() {n_div.style.top = '50px'; }, 100);
  
    setTimeout(function() 
    {   n_div.style.top = '-100px';
        setTimeout(function() {body.removeChild(n_div)}, 400);
    }, 
    1500);

    event.preventDefault();
 }



