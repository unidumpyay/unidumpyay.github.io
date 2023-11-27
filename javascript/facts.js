pText = document.querySelectorAll("#fact");

function truncate(text){
    
    let maxLen = 120;
    for (let i = 0; i < text.length; i++) {
        if (text[i].textContent.length > maxLen){
            text[i].textContent = text[i].textContent.slice(0, maxLen-4) + "...";
        }
    }
}
truncate(pText);
