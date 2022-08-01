function generateQuote(){
fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
        const quote = data.content;
        const quoteP = document.getElementById('quoteText');

        quoteP.textContent = quote
        
    })
    .catch(function(err) {
        console.log(err); 
        });
     }
    
    setInterval(generateQuote() ,10);