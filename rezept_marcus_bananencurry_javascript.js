


function calculate_cutlet() {
    const sum = document.getElementById("amount").value;
    document.getElementById("cutlet").innerHTML = sum;
    return sum;
}


function calculate_pepper() {
    const guest = document.getElementById("amount").value;
    sum = guest * 0.5
    console.log("Sum:"+ sum)
    let rest = sum - Math.floor(sum);
    console.log("Rest:" + rest)
    sum = sum - rest;
    console.log("Sum:"+ sum)
    let fraction;
    if (rest > 0){
        fraction="½";
    } else {
        fraction="";
    }

    if (sum < 1){
        document.getElementById("pepper").innerHTML = fraction;
    } 
    else {
        document.getElementById("pepper").innerHTML = sum + fraction;
    }
}


function calculate_onion() {
    const guest = document.getElementById("amount").value;
    sum = guest * 0.25
    console.log("Sum onion:"+ sum)
    let rest = sum - Math.floor(sum);
    console.log("Rest onion:" + rest)
    sum = sum - rest;
    console.log("Sum onion:"+ sum)
    let fraction;

    if (rest == 0.25) {
        fraction="¼"; 

    } else if (rest == 0.5) {
        // fraction="1/2";
        fraction="½";

    } else if (rest == 0.75) {
        fraction="¾";

    } else {
        fraction="";
    }

console.log("fraction onion:" + fraction)

    if (sum < 1) {
        document.getElementById("onion").innerHTML = fraction;
    } 

    else {
        document.getElementById("onion").innerHTML = sum + fraction;
    }
} 

let str="";

function calculate_cocos() {
    const guest = document.getElementById("amount").value;
    let sum = guest * 0.1;
    console.log("Sum cocos:"+ sum.toFixed(3));
    let rest = sum - Math.floor(sum);
    console.log("Rest cocos:" + rest);
    sum = sum - rest;
    console.log("Sum cocos:"+ sum);
    let fraction;

    if (rest != 0 ) {
        fraction= rest*1000;
        fraction = fraction.toFixed(0);
        str = fraction.toString() + " ml";

        console.log(str);


    } else {
        str = "";
        fraction="";
    }  

    sum = Math.round(sum);
    sum.toFixed(3);

    if (sum < 1) {
        document.getElementById("cocos").innerHTML = str;
    } 

    else {
        sumstr = sum.toString() + " l";
        document.getElementById("cocos").innerHTML = sumstr + "&nbsp" + str;
    }
} 

function calculate_banana() {
    const guest = document.getElementById("amount").value;
    sum = guest * 0.75
    console.log("Sum banana:"+ sum)
    let rest = sum - Math.floor(sum);
    console.log("Rest banana:" + rest)
    sum = sum - rest;
    console.log("Sum banana:"+ sum)
    let fraction;

    if (rest == 0.25) {
        fraction="¼"; 

    } else if (rest == 0.5) {
        // fraction="1/2";
        fraction="½";

    } else if (rest == 0.75) {
        fraction="¾";

    } else {
        fraction="";
    }

console.log("fraction banana:" + fraction)

    if (sum < 1) {
        document.getElementById("banana").innerHTML = fraction;
    } 

    else {
        document.getElementById("banana").innerHTML = sum + fraction;
    }
} 

function calculate() {
   calculate_cutlet();
   calculate_pepper(); 
   calculate_onion(); 
   calculate_cocos();
   calculate_banana();
}