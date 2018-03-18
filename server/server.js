//Variables
let num = [];
let express = require('express');
let app = express();
const PORT = 5001;
let bodyParser = require('body-parser');
// this is need for jquery it check the code for the message 

app.use(bodyParser.urlencoded({extended:true}));

//use before the app.
app.use(express.static('server/public'));

function doMath (){
    
}


//access the public folder in server folder.
//get

//post


app.get('/calc', (req,res) => {
    // let NumebersToSend = req.body;
    console.log(req.body, '31');
    res.send(req.body);

});

app.post('/calc', (req,res) => {
    console.log(req.body, '4');
    let numbersToSend = req.body;
    num.push(numbersToSend);
    //console.log(num);
    res.sendStatus(200);
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
    console.log(num);
})


