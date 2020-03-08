const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ data: 'something' });
});

PORT = process.env.PORT || 5000;
app.listen(PORT, () => `listening on port: ${PORT}`);
