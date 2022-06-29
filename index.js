const express = require('express')
const app = express()
const port = 3000
const albunsRoute = require('./routes/albunsRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());

app.use('/albuns', albunsRoute);

app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))