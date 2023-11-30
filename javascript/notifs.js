notifNum = document.getElementById("n_num");
notifNum.textContent = ("2");



function addNotifs(){
    let num = parseInt(notifNum.textContent, 10);
    
     // notifNum.textContent = num + 1;

    
    // const n_span = document.createElement('span');
    // n_span.classList.add("n-text");
    // n_span.textContent = "Уведомление";

    // const n_li= document.createElement('li');
    // const n_ul = document.querySelector(".n-ulist");

    // n_li.appendChild (n_span);
    // n_ul.appendChild(n_li);
}

document.querySelector('.notifs').addEventListener('click', function (event) {
    if (event.target.classList.contains('close-btn')) {
        
        // event.target.closest('li').style.display = 'none';
        event.target.closest('li').classList.add('closed');

        let num = parseInt(notifNum.textContent, 10);
    
     notifNum.textContent = num - 1;


    }
});

let timerId;
let paused = false;
function hoverNotif() {
    timerId = setInterval(() => {if (!paused) {addNotifs();}}, 3000);


    const nbox = document.querySelector('.n-box');

    nbox.addEventListener('mouseenter', () => {
        paused = true;
        clearInterval(timerId);
    });

    nbox.addEventListener('mouseleave', () => {
        paused = false;
        setTimeout(() => {
            timerId = setInterval(() => {if (!paused) {addNotifs();}}, 3000);}, 10000);
    });
}

hoverNotif();
