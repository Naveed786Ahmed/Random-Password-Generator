
document.getElementById("search").onclick = function(){
    let = randomValue = "abcTI123$|nwjdfn*hfewgQS457#@FQGAf"
    let pass = "";

    for(let i = 0; i < 10; i++){
            randomPass = Math.floor(Math.random() * randomValue.length)
            pass += randomValue[randomPass];
    }
    document.getElementById("pass").value = pass;
}

