require('dotenv').config();
const app = require('./app');
const http = require('http');
const PORT = process.env.PORT; 
const server = http.createServer(app);
const {mongoConnect} = require('./services/mongo');


async function startLoading() {
    await mongoConnect();
    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}

startLoading();
