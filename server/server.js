//Variables
let num = [];
let express = require('express');
let app = express();
const PORT = 5001;
let bodyParser = require('body-parser');
let addition;
//let inputX;
//let inputY;
// this is need for jquery it check the code for the message 

app.use(bodyParser.urlencoded({extended:true}));

//use before the app.
app.use(express.static('server/public'));

function doMath (){
    addition = (num.firstchild) + (num.child.next); 
    console.log( '5');
}

app.get('/calc', (req,res) => {
    console.log('in get',);
    res.send(addition);
});

app.post('/calc', (req,res) => {
    console.log(req.body, '2');//object
    let hist = req.body;
    num.push(hist);
    console.log(hist ,'1');
    console.log(num, '3');
    res.sendStatus(200);
   // console.log(num, '3');//in array
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


