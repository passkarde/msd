const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/meanpractical');

const Student = mongoose.model('Student', {
  name: String,
  age: Number,
  course: String
});

// READ operation
app.get('/students', async (req, res) => {
  const data = await Student.find();
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
