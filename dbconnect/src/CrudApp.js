import React, { useState } from 'react';
import axios from 'axios';


function CrudApp() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', rollno: '', age: '', email: '' });
  const [editing, setEditing] = useState(null);
  const [editingStudent, setEditingStudent] = useState({});
  const [searchRollno, setSearchRollno] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:5000/students');
    const sortedStudents = response.data.sort((a, b) => a.name.localeCompare(b.name));
    setStudents(sortedStudents);
  };

  const addStudent = async () => {
    if (newStudent.name && newStudent.rollno && newStudent.age && newStudent.email) {
      const response = await axios.post('http://localhost:5000/students', newStudent);
      setStudents([...students, response.data].sort((a, b) => a.name.localeCompare(b.name)));
      setNewStudent({ name: '', rollno: '', age: '', email: '' });
    }
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    setStudents(students.filter(student => student._id !== id));
  };

  const updateStudent = async (id) => {
    if (editingStudent.name && editingStudent.rollno && editingStudent.age && editingStudent.email) {
      const response = await axios.put(`http://localhost:5000/students/${id}`, editingStudent);
      setStudents(students.map(student => (student._id === id ? response.data : student))
        .sort((a, b) => a.name.localeCompare(b.name)));
      setEditing(null);
      setEditingStudent({});
    }
  };

  const searchByRollno = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/students/search/${searchRollno}`);
      setSearchResult(response.data);
    } catch (error) {
      setSearchResult(null);
      console.error('Student not found');
    }
  };

  return (
    <div className="container">
      <h1>Student Database CRUD</h1>
      
      {/* Add New Student */}
      <div className="form-group">
        <h2>Add Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Roll No"
          value={newStudent.rollno}
          onChange={(e) => setNewStudent({ ...newStudent, rollno: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <button className="btn" onClick={addStudent}>Add Student</button>
      </div>

      {/* Search Student by Rollno */}
      <div className="form-group">
        <h2>Search by Roll No</h2>
        <input
          type="number"
          placeholder="Enter Roll No"
          value={searchRollno}
          onChange={(e) => setSearchRollno(e.target.value)}
        />
        <button className="btn" onClick={searchByRollno}>Search</button>
        {searchResult && (
          <div className="card">
            <h3>Search Result:</h3>
            <p><strong>Name:</strong> {searchResult.name}</p>
            <p><strong>Roll No:</strong> {searchResult.rollno}</p>
            <p><strong>Age:</strong> {searchResult.age}</p>
            <p><strong>Email:</strong> {searchResult.email}</p>
          </div>
        )}
      </div>

      <button className="btn" onClick={fetchStudents}>See all students</button>

      {/* List of Students */}
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {editing === student._id ? (
              <div>
                <input
                  type="text"
                  value={editingStudent.name}
                  onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
                  placeholder="Edit Name"
                />
                <input
                  type="number"
                  value={editingStudent.rollno}
                  onChange={(e) => setEditingStudent({ ...editingStudent, rollno: e.target.value })}
                  placeholder="Edit Roll No"
                />
                <input
                  type="number"
                  value={editingStudent.age}
                  onChange={(e) => setEditingStudent({ ...editingStudent, age: e.target.value })}
                  placeholder="Edit Age"
                />
                <input
                  type="email"
                  value={editingStudent.email}
                  onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })}
                  placeholder="Edit Email"
                />
                <button onClick={() => updateStudent(student._id)}>Save</button>
                <button onClick={() => setEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div className="card">
                {student.name}
                <button onClick={() => { setEditing(student._id); setEditingStudent(student); }}>Edit</button>
                <button onClick={() => deleteStudent(student._id)}>Delete</button>
                <br />Roll No: {student.rollno},<br />Age: {student.age},<br />Email: {student.email}<br /><br />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
