const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());


app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Node.js server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
