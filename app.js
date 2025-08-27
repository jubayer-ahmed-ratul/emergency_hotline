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
        console.log(newValue)

        
        loveText.innerText=newValue
      
    });
}
