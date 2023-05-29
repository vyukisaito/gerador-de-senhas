
let sliderElement = document.getElementById('slider') ;
let buttonElemnt = document.getElementById('button');

let sizePassword = document.getElementById('valor');
let password = document.getElementById('password');

let containerPassword = document.getElementById('container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function genaratePassword() {

    let pass = '';

    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        // enquanto o i for menor que o sliderElement ele vai acrescentado (i++)

        pass += charset.charAt(Math.floor(Math.random() * n));
        /*ele vai concatenando, ou seja acrescentando. CharAt serve para pegar um elemento em tal posição. o Math.floor serve para que o número sempre seja inteiro. Math.random serve para pegar um número aleatório. Por conta do for() ele vai se repetir a partir de quantas vezes que for o slider*/
    }
    
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!");
}

