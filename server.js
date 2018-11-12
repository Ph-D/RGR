import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

let app = express();
const URL = 'mongodb://127.0.0.1:27017/';

app.use(express.static('public'));

(async () => {
    let client = await MongoClient.connect(URL, { useNewUrlParser: true });

    let db = client.db('rgrjs');

    app.use('/graphql', GraphQLHTTP({
        schema: schema(db),
        graphiql: true
    }));

    app.listen(3000, () => console.log('Listening on port 3000'));
})();








