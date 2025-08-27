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
       
       callingAlert(name,number)

       let callCoin=converted-20;
       coinValue.innerText=callCoin;
        
       }
       else{
        alert("insufficient funds")
       }
    })
    
}