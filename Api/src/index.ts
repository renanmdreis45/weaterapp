/* eslint-disable linebreak-style */

import express from 'express';

const app = express();

const port = 3002;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


