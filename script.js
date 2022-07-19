let mainText = document.querySelector('textarea');
let result = document.querySelector('#result');
let btnEncrypt = document.querySelector('#btn-encrypt');
let btnDecrypt = document.querySelector('#btn-decrypt');
let btnCopy = document.querySelector('#btn-copy');
let encryptedText;

const vowels = ['e','i','a','o','u'];
const replacedVowels = ['enter','imes','ai','ober','ufat'];

function encryptText(){
    encryptedText = mainText.value;
    let i = 0;
    for (let letter of vowels){
        replaceText(letter, replacedVowels[i]);
        i++;
    }   
    result.innerText = encryptedText;
    btnCopy.style.display = 'block'
}

function replaceText(a,b){
    encryptedText = encryptedText.replaceAll(a,b);
}

function decryptText(){
    encryptedText = mainText.value;
    let i = 0;
    for (let l of replacedVowels){
        replaceText(l, vowels[i]);
        i++;
    }   
    result.innerText = encryptedText;
}

function copyText(){
    navigator.clipboard.writeText(result.textContent)
}

btnEncrypt.addEventListener('click',encryptText)
btnDecrypt.addEventListener('click',decryptText)
btnCopy.addEventListener('click',copyText)


