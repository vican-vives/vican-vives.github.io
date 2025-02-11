const setup = () => {
    let btnSubstring =document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtString=document.getElementById("txtString");
    let txtFirstNumber =document.getElementById("txtFirstNumber");
    let txtLastNumber =document.getElementById("txtLastNumber");
    let txtOutput =document.getElementById("txtOutput");

    let g1=parseInt(txtFirstNumber.value, 10);
    let g2=parseInt(txtLastNumber.value, 10);
    txtOutput.innerHTML= txtString.value.substring(g1, g2);
}

window.addEventListener("load", setup);