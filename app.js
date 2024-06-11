const req=document.querySelector('.pass');

function generatePassword(){
    let passChar='1234567890#$%&ahiekjshgaAGIRTX!BNQP';
    let pass="";
    for(i=0;i<11;i++){
        pass += passChar[Math.floor(Math.random()*passChar.length)];
    }
    req.innerHTML=pass
}
