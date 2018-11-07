import express from 'express';
import {MongoClient} from 'mongodb';

let app = express();
const URL = 'mongodb://pdoreau:dadfba16@ds247171.mlab.com:47171/rgrjs';


//app.get('/', (req, res) => res.send('hello express!'));

app.use(express.static('public'));
app.listen(3000);
console.log('listening on port 3000...')
MongoClient.connect(URL, (err, database) => {
    if(err) throw err;

    database.collection("links").find({}).toArray((err, links) => {
        if(err) throw err;

        console.log(links);
    });
});
