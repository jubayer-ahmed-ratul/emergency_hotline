//////////PROPERTY CHANGE FUNCTION








////////////BUTTON CLICKED FUNCTION

////////////LOVE BUTTON

let loveValue=0;
let loveIcons = document.getElementsByClassName('love-icon');
for (let i = 0; i < loveIcons.length; i++) {
    loveIcons[i].addEventListener('click', function() {

        loveValue++;
        // console.log(loveValue);

        
        const loveText=document.getElementById('love-text')

        let converted =parseInt(loveText.innerText)
        // console.log(converted)

        const newValue=converted+1;
        

        
        loveText.innerText=newValue
      
    });
}


////////////CALL BUTTON



function callingAlert(name, number) {
    alert(`CALLING: ${name}\nNUMBER: ${number}`);
}



let coinValue=document.getElementById('coin-id');


let callButtons=document.getElementsByClassName('call-btn');
for (const btn of callButtons) {

    btn.addEventListener('click',function(e){
        e.stopPropagation();
       
        let converted=parseInt(coinValue.innerText);

       if (converted>19) {
       const card = btn.parentNode.parentNode;
      
       const name = card.getElementsByTagName('h2')[0].innerText;
       const number = card.getElementsByTagName('h1')[0].innerText;
       
       alert(`calling : ${name}\nnumber: ${number}`)

       let callCoin=converted-20;
       coinValue.innerText=callCoin;


       const historyAdd = document.getElementById('history-container');
 const currentTime = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });

    let newEntry = document.createElement('div');

    newEntry.innerHTML = `
      <div class="mt-7 bg-gray-100 flex items-center justify-between rounded-lg p-2 entry">
        <div>
          <h2 class="font-medium">${name}</h2>
          <p>${number}</p>
        </div>
        <p>${currentTime}</p>
      </div>
    `;

    historyAdd.appendChild(newEntry);
        
       }
       else{
        alert("insufficient funds")
       }


    })
    
}

////////////////////COPY BUTTON

let copyCount = document.getElementById('copy-button');
let copyButtons = document.getElementsByClassName('copy-btn');

for (const btn of copyButtons) {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();

       
        const card = btn.parentNode.parentNode;

        const name = card.getElementsByTagName('h2')[0].innerText;
        const number = card.getElementsByTagName('h1')[0].innerText;


        navigator.clipboard.writeText(number);


        alert(`Copied number of ${name} (${number})`);

     
        let currentCount = parseInt(copyCount.innerText);
        copyCount.innerText = currentCount + 1;
    });
}







///////////////CLEAR BUTTON

let clearHistory = document.getElementById('history-clear');

clearHistory.addEventListener('click', function(e) {
    e.stopPropagation();

    const historyAdd = document.getElementById('history-container');

    const entries = historyAdd.querySelectorAll('div.mt-7');

    for (const entry of entries) {
        entry.remove(); // removes the element from the DOM safely
    }

    console.log('History entries cleared!');
});


