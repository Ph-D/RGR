import express from 'express';

let app = express();

//app.get('/', (req, res) => res.send('hello express!'));

app.use(express.static('public'));
app.listen(3000);
console.log('listening on port 3000...')
