const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/student_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define Student schema
const StudentSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
  age: Number,
  email: String,
});

const Student = mongoose.model('Student', StudentSchema);

// CRUD routes

// Get all students
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Add a new student
app.post('/students', async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json(newStudent);
});

// Update a student by ID
app.put('/students/:id', async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedStudent);
});

// Delete a student by ID
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
});

// Search for a student by rollno
app.get('/students/search/:rollno', async (req, res) => {
  const student = await Student.findOne({ rollno: req.params.rollno });
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
