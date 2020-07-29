const express = require('express');


const app = express()
const PORT = 3000
app.use(express.static('public'))

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

app.get('/adder',function(req,res){
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;
    let data = {
        result:sum
    }

    res.json(data)
})

app.get('/weather', function(req, res){
    let weatherArray = ['cloudy','sunny','rainy']
    let randomNumber = getRandomInt(2)
    res.send(weatherArray[randomNumber]);

})
app.get('/test', function (req, res) {
    console.log('Text page hitted')
    res.send('Week 3 prac text page')
})
app.get('/random',(req,res)=>{
    let randomeInt = getRandomInt(100);
    res.json(randomeInt)
})
app.listen(PORT,()=>{
    console.log('server started on port 3000')
})