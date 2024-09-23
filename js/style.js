document.getElementById('donate-noakhali-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const donateAmountNoakhali = getInputFieldValueById('donate-noakhali-amount')

    const noakhaliBDT = getTextValueById('noakhali-BDT');

    const noakhaliNewBDT = noakhaliBDT + donateAmountNoakhali;

    document.getElementById('noakhali-BDT').innerText=noakhaliNewBDT;

    const balance = getTextValueById('balance');
    const balanceRemaining = balance - donateAmountNoakhali;
    document.getElementById('balance').innerText=balanceRemaining;

    // add tanjection histry
    const historyItem = document.createElement("div");
historyItem.className="bg-white p-3 rounded-xl border-2 border-gray-200 space-y-4";



historyItem.innerHTML=`
<p class="font-extrabold">${donateAmountNoakhali} taka is Donate for Flood at Noakhali, Bangladesh </p>
<p class="text-xs text-gray-500">Date:${day} ${month} ${date} ${year} ${time} ${timezone}(Bangladesh Standard Time)</p>
`;


const historyContainer = document.getElementById('history-list');

historyContainer.insertBefore(historyItem, historyContainer.firstChild)




})

document.getElementById('donate-feni-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const donateAmountFeni = getInputFieldValueById('donate-feni-amount')

    const feniBDT = getTextValueById('feni-BDT');

    const feniNewBDT = feniBDT + donateAmountFeni;

    document.getElementById('feni-BDT').innerText=feniNewBDT;

    const balance = getTextValueById('balance');
    const balanceRemaining = balance - donateAmountFeni;
    document.getElementById('balance').innerText=balanceRemaining;

// history section
    const historyItem = document.createElement("div");
    historyItem.className="bg-white p-3 rounded-xl border-2 border-gray-200";
    
    
    
    historyItem.innerHTML=`
    <p class="font-extrabold">${donateAmountFeni} taka is Donate for Flood Relief in Feni,Bangladesh</p>
    <p class="text-xs text-gray-500">Date:${day} ${month} ${date} ${year} ${time} ${timezone}(Bangladesh Standard Time)</p>
    `;
    
    
    const historyContainer = document.getElementById('history-list');
    
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)

})



document.getElementById('donate-injured-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const donateAmountInjured = getInputFieldValueById('donate-injured-amount')

    const injuredBDT = getTextValueById('injured-BDT');

    const injuredNewBDT = injuredBDT + donateAmountInjured;

    document.getElementById('injured-BDT').innerText=injuredNewBDT;

    const balance = getTextValueById('balance');
    const balanceRemaining = balance - donateAmountInjured;
    document.getElementById('balance').innerText=balanceRemaining;


    // history section

    const historyItem = document.createElement("div");
historyItem.className="bg-white p-3 rounded-xl border-2 border-gray-200";



historyItem.innerHTML=`
<p class="font-extrabold">${donateAmountInjured} taka is Donate for Aid for Injured in the Quota Movement, Bangladesh</p>
<p class="text-xs text-gray-500">Date:${day} ${month} ${date} ${year} ${time} ${timezone}(Bangladesh Standard Time)</p>
`;


const historyContainer = document.getElementById('history-list');

historyContainer.insertBefore(historyItem, historyContainer.firstChild)



})


const donationTab = document.getElementById('donation-btn')
const historiTab = document.getElementById('history-btn')
historiTab.addEventListener('click',function(){
    historiTab.classList.add(
        "bg-primary-c",
        "font-bold"
    );
    historiTab.classList.remove(
        "btn-text"
    )
    donationTab.classList.remove(
       "bg-primary-c",
    "font-bold",
    
)
donationTab.classList.add(
    "btn-text"
)
document.getElementById('donate-card').classList.add("hidden");
document.getElementById('history-list').classList.remove("hidden");


 

})
