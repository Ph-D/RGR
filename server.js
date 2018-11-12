import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

let app = express();
const URL = 'mongodb://127.0.0.1:27017/';

app.use(express.static('public'));


let db;
MongoClient.connect(URL, { useNewUrlParser: true },  (err, client)=>{
    if(err) throw err;
    db = client.db('rgrjs');

    app.use('/graphql', GraphQLHTTP({
        schema: schema(db),
        graphiql: true
    }));

    app.listen(3000, () => console.log('Listening on port 3000'));
});

// app.get("/data/links", (req, res) => {
//     db.collection("links").find({}).toArray(function(err, links){
//         if(err) throw err;
//         res.json(links);
//     });
// });


