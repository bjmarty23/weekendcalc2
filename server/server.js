//Variables
let num = [];
let express = require('express');
let app = express();
const PORT = 5001;
let bodyParser = require('body-parser');
let addition;
// this is need for jquery it check the code for the message 

app.use(bodyParser.urlencoded({extended:true}));

//use before the app.
app.use(express.static('server/public'));

function doMath (add){
    addition = parseInt(add.inputOne) + parseInt(add.InputTwo); 

}

app.get('/calc', (req,res) => {
    // let numebersToSend = req.body;
    
    console.log(addition, '31');
    res.send(addition);

});

app.post('/calc', (req,res) => {
    console.log(req.body, '4');
    let numbersToSend = req.body;
    num.push(numbersToSend);
    //console.log(num);
    res.sendStatus(200);
    console.log(num);
});

// console.log(req.body, '3');
// let guessesToSend = req.body;//body.name & body.cost
// allGuesses.push(guessesToSend);  
// console.log(allGuesses, '2');
// checkPlayers(guessesToSend);
// res.sendStatus(200); 

//listen 
app.listen(PORT, () => {
    console.log('server is running on port', PORT);
   
})


