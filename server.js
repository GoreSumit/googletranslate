const express = require('express');
const server = express();
const PORT = 4000;

const projectId = 'YOUR_PROJECT_ID';

const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate({projectId});

async function quickStart() {
    // The text to translate
    const text = 'Hello, world!';
  
    // The target language
    const target = 'ru';
  
    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);


    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  }
  



server.use(express.json());



server.get('/',(req,res)=>{
    res.send({
        message:'Hello Medi-Serve'
    });
});


server.post('/post',(req,res)=>{
    console.log(req.body );
    // quickStart();

    res.send({
        message:"post method recieved",
        data:req.body
    })
})







server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});