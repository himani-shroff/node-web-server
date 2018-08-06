const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');

/* Under Maintenance Call */
// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// })

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getYear',()=>{
    return new Date().getFullYear();
})

app.use(express.static(__dirname+'/public'));
app.get('/', (req,res)=>{
    //res.send('Hello Express!');
    res.send({
        name: "Himani"
    })
})


app.get('/about', (req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page'
    });
})
app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
}); 