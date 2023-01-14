const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let one = document.getElementById("random1");
let two= document.getElementById("random2");
let pwLength = document.getElementById("length");
let announce = document.getElementById("announcement");
let warning = document.getElementById("warning");
let generated = document.getElementById("generate");


//how to generate a password
function generatePW(){
    let password = "";
    let a = "";
    for (let i = 0; i < pwLength.value; i++){
        let index = Math.floor(Math.random()* characters.length);
        a = characters[index];
        password += a;
    }
    return password;
}

//generate 2 new passwords to the desired buttons
generated.addEventListener("click",function(){
    warning.textContent ="";
    //input roubleshoot
    if (pwLength.value < 1){
        warning.textContent = "Password length is too short.";
        return 1;
    }
    if (pwLength.value > 15){
        warning.textContent = "Password length is too long.";
        return 1;
    }

    //generate passwords
    announce.textContent ="";
    one.textContent = generatePW();
    one.value = one.textContent;
    two.textContent = generatePW();
    two.value = two.textContent;


})

// function for copy password

function copy1(){
  // Copy the text inside the text field
 navigator.clipboard.writeText(one.textContent);

 // Alert the copied text
 announce.textContent = "Left password copied :)";
}

function copy2(){
  // Copy the text inside the text field
 navigator.clipboard.writeText(two.textContent);

 // Alert the copied text
 announce.textContent = "Right password copied :)";
}


