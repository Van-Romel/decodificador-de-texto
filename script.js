console.log("ol[á")


let entrada = document.getElementById('entrada');
let asideNoMsg = document.getElementById('div-aside-no-msg');
let asideMsg = document.getElementById('div-aside-msg');
let textValue = document.getElementById('text-value');

document.getElementById('codifica_button').addEventListener("click", function (event) {
    event.preventDefault()
})
document.getElementById('decodifica_button').addEventListener("click", function (event) {
    event.preventDefault()
})

let encrypter = message => {
    const messageArr = message.split('');
    let encryptedMessageArr = [];

    for (let i = 0; i < messageArr.length; i++) {
        let letter;
        switch (messageArr[i]) {
            case "a":
                letter = "±";
                break;
            case "b":
                letter = "!";
                break;
            case "c":
                letter = "@";
                break;
            case "d":
                letter = "#";
                break;
            case "e":
                letter = "$";
                break;
            case "f":
                letter = "%";
                break;
            case "g":
                letter = "^";
                break;
            case "h":
                letter = "&";
                break;
            case "i":
                letter = "*";
                break;
            case "j":
                letter = "(";
                break;
            case "k":
                letter = ")";
                break;
            case "l":
                letter = "_";
                break;
            case "m":
                letter = "+";
                break;
            case "n":
                letter = "º";
                break;
            case "o":
                letter = "=";
                break;
            case "p":
                letter = "{";
                break;
            case "q":
                letter = "}";
                break;
            case "r":
                letter = "[";
                break;
            case "s":
                letter = "]";
                break;
            case "t":
                letter = "|";
                break;
            case "u":
                letter = "\\";
                break;
            case "v":
                letter = ";";
                break;
            case "w":
                letter = ":";
                break;
            case "x":
                letter = "'";
                break;
            case "y":
                letter = "\"";
                break;
            case "z":
                letter = ",";
                break;
            default:
                letter = messageArr[i];
                break;
        }
        encryptedMessageArr.push(letter);
    }
    return encryptedMessageArr.join('');
}

let decrypter = message => {
    const messageArr = message.split('');

    let decryptedMessageArr = [];

    for (let i = 0; i < messageArr.length; i++) {
        let letter;
        switch (messageArr[i]) {
            case "±":
                letter = "a";
                break;
            case "!":
                letter = "b";
                break;
            case "@":
                letter = "c";
                break;
            case "#":
                letter = "d";
                break;
            case "$":
                letter = "e";
                break;
            case "%":
                letter = "f";
                break;
            case "^":
                letter = "g";
                break;
            case "&":
                letter = "h";
                break;
            case "*":
                letter = "i";
                break;
            case "(":
                letter = "j";
                break;
            case ")":
                letter = "k";
                break;
            case "_":
                letter = "l";
                break;
            case "+":
                letter = "m";
                break;
            case "º":
                letter = "n";
                break;
            case "=":
                letter = "o";
                break;
            case "{":
                letter = "p";
                break;
            case "}":
                letter = "q";
                break;
            case "[":
                letter = "r";
                break;
            case "]":
                letter = "s";
                break;
            case "|":
                letter = "t";
                break;
            case "\\":
                letter = "u";
                break;
            case ";":
                letter = "v";
                break;
            case ":":
                letter = "w";
                break;
            case "'":
                letter = "x";
                break;
            case "\"":
                letter = "y";
                break;
            case ",":
                letter = "z";
                break;
            default:
                letter = messageArr[i];
                break;
        }
        decryptedMessageArr.push(letter);
    }
    return decryptedMessageArr.join('');
}


function trocaMensagem() {
    asideNoMsg.style.display = "none";
    asideMsg.style.display = "block";
}

function codifica() {
    trocaMensagem();
    textValue.textContent = encrypter(entrada.value);
}

function decodifica() {
    trocaMensagem();
    textValue.textContent = decrypter(entrada.value);
}

console.log("encryptedMessage", encrypter("Meu nome é Van-Romel"));
console.log("decryptedMessage", decrypter(encrypter("Meu nome é Van-Romel")));