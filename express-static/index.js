const path = require('path');
const express = require('express');

const app = express();

const absolutePath = path.join(__dirname, 'public');

const staticExpress = express.static(absolutePath);

app.use(staticExpress);

app.listen(3000);
