//Variables

let express = require('express');
let app = express();
const PORT = 5001;
let bodyParser = require('body-parser');
// this is need for jquery it check the code for the message 
app.use(bodyParser.urlencoded({extended:true}));
//use before the app.
app.use(express.static('server/public'));
//access the public folder in server folder.
//get
app.get('', (req,res) => {
    res.send(object/array)
});

//post
app.post('', (req,res) =>{
    res.sendStatus(200);
});

//listen 
app.listen(PORT, () => {
    console.log('server is running on port', + PORT);
})


