document.getElementById('donate-noakhali-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const donateAmountNoakhali = getInputFieldValueById('donate-noakhali-amount')

    const noakhaliBDT = getTextValueById('noakhali-BDT');

    const noakhaliNewBDT = noakhaliBDT + donateAmountNoakhali;

    document.getElementById('noakhali-BDT').innerText=noakhaliNewBDT;



})

document.getElementById('donate-feni-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const donateAmountFeni = getInputFieldValueById('donate-feni-amount')

    const feniBDT = getTextValueById('feni-BDT');

    const feniNewBDT = feniBDT + donateAmountFeni;

    document.getElementById('feni-BDT').innerText=feniNewBDT;




})



document.getElementById('donate-injured-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const donateAmountInjured = getInputFieldValueById('donate-injured-amount')

    const injuredBDT = getTextValueById('injured-BDT');

    const injuredNewBDT = injuredBDT + donateAmountInjured;

    document.getElementById('injured-BDT').innerText=injuredNewBDT;




})

