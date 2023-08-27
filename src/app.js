import React, { useState } from 'react';
import './index.css';
import SubmitButton from './SubmitButton';

function App() {

  const students = [
    { id: 1, name: 'Anusha', present: false },
    { id: 2, name: 'Ankit', present: false },
    { id: 3, name: 'Dev', present: false },
    { id: 4, name: 'Harshitha', present: false },
    { id: 5, name: 'Jason', present: false },
    { id: 6, name: 'Mohan', present: false },
    { id: 7, name: 'Neha', present: false },
    { id: 8, name: 'Piyush', present: false },
    { id: 9, name: 'Riya', present: false },
    { id: 10, name: 'Sunny', present: false },
  ];

 
  const [attendance, setAttendance] = useState(students);
  const handleCheck = (id) => {
    
    const index = attendance.findIndex((student) => student.id === id);
    const newAttendance = [...attendance];
    newAttendance[index].present = !newAttendance[index].present;
    setAttendance(newAttendance);
  };

  
  const handleSubmit = () => {
    const presentCount = attendance.filter((student) => student.present).length;
    alert(`You have marked ${presentCount} out of ${students.length} students as present.`);
  };

  return (
    <div className="container">
      <h1>Attendance System</h1>
      <p>Please mark your attendance by checking the box next to your name.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleCheck(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SubmitButton onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
