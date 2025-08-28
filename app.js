// LOVE BUTTON FUNCTIONALITY
let loveValue = 0;
let loveIcons = document.getElementsByClassName('love-icon');

for (let i = 0; i < loveIcons.length; i++) {
    loveIcons[i].addEventListener('click', function() {
        loveValue++;
        const loveText = document.getElementById('love-text');
        const newValue = parseInt(loveText.innerText) + 1;
        loveText.innerText = newValue;
    });
}

// CALL BUTTON FUNCTIONALITY
let coinValue = document.getElementById('coin-id');
let callButtons = document.getElementsByClassName('call-btn');

for (const btn of callButtons) {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        let converted = parseInt(coinValue.innerText);

        if (converted > 19) {
            const card = btn.parentNode.parentNode;
            const name = card.getElementsByTagName('h2')[0].innerText;
            const number = card.getElementsByTagName('h1')[0].innerText;

            alert(`calling : ${name}\nnumber: ${number}`);
            coinValue.innerText = converted - 20;

            // ADD ENTRY TO HISTORY
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
        } else {
            alert("insufficient funds");
        }
    });
}

// COPY BUTTON FUNCTIONALITY
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

        copyCount.innerText = parseInt(copyCount.innerText) + 1;
    });
}

// CLEAR HISTORY FUNCTIONALITY
let clearHistory = document.getElementById('history-clear');
clearHistory.addEventListener('click', function(e) {
    e.stopPropagation();
    const historyAdd = document.getElementById('history-container');
    const entries = historyAdd.querySelectorAll('div.mt-7');
    for (const entry of entries) {
        entry.remove();
    }
});
