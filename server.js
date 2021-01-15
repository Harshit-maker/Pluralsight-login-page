const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/'));
app.listen(PORT, () => console.log('server start'));
