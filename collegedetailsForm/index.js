const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect('mongodb+srv://tribhuwanja:tribhuwan@cluster0.ijgu1jf.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define a MongoDB schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

const Item = mongoose.model('Item', itemSchema);

app.use(express.json());

app.post('/api/items', upload.single('image'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const imageUrl = req.file.path;

    const newItem = new Item({
      name,
      description,
      imageUrl,
    });

    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the item.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
