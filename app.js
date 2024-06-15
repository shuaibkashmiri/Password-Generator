const req=document.querySelector('.pass');
const rg = document.querySelector("#value");
const input = document.querySelector("#rangeinput");
rg.textContent = input.value;


const range =function (event){
    rg.textContent = event.target.value;
    var text = input.value;
    function generatePassword(){
        let passChar='1234567890#$%&ahiekjshgaAGIRTX!BNQP';
        let pass="";
        for(i=0;i<text;i++){
            pass += passChar[Math.floor(Math.random()*passChar.length)];
        }
        req.innerHTML=pass
    }
    return generatePassword();
    
}

input.addEventListener("input",range)









