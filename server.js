import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';

let app = express();
const URL = 'mongodb://127.0.0.1:27017/';

app.use(express.static('public'));

(async () => {
    let client = await MongoClient.connect(URL, { useNewUrlParser: true });
    let db = client.db('rgrjs');
    let schema = Schema(db);

    app.use('/graphql', GraphQLHTTP({
        schema,
        graphiql: true
    }));

    app.listen(3000, () => console.log('Listening on port 3000'));

    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
        if(err) throw err;

        console.log("JSON schema created");
    });
})();








