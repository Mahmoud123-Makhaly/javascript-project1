let input = document.getElementById("input");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.onclick = function(){
    let inputValue = input.value;
    if(inputValue !=""){
        msg.innerHTML = inputValue;
        input.value = ""
    }
}