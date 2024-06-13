function detect(){
    const characterinput = document.getElementById("characterinput");
    const result = document.getElementById("result")

    const character = characterinput.value;

    if (isASCII(character)) {
        result.textContent = "The Given Character is ASCII";
    } else {
        result.textContent = "The Given Character is unicode";
    }
}

function isASCII(character){
   return character.charCodeAt(0)<=127;
}