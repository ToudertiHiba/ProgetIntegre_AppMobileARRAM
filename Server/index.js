const  express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const mongo = require('mongodb').MongoClient;
const url = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.s7a2z.mongodb.net/Forum';
const port = 3001



mongo.connect(url,(err) => {
    console.log('connexion réussie')
})

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/find', async (req,res) => {
    //const theme = new ThemeModel({themeName : "X", themeDescription: "description"})
    mongo.connect(url,(err,db)=> {
        if (err) throw err;
        var dbo = db.db("Forum");
        var collection = dbo.collection('themes');
        collection.find({}).toArray((error,docs)=> {
            if(error) throw error;
            res.send(docs);
            db.close();
        })
    })

})

app.listen(port, () => console.log(`Example app listening on port 3001!`))