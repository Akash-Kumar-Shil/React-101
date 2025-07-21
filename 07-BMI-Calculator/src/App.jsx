import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [formData, setFormData] = useState({
    age: 0,
    gender: 'male',
    height: 0,
    weight: 0,
  });

  const [bmi, setBmi] = useState(0);
  const [bmiInfo, setBmiInfo] = useState('Unknown');

  const { age, gender, height, weight } = formData;

  // Generic handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) || value }));
  };

  // Calculate BMI whenever height or weight changes
  useEffect(() => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters ** 2);
      setBmi(calculatedBMI);
    } else {
      setBmi(0);
    }
  }, [height, weight]);

  // Update BMI info based on BMI value
  useEffect(() => {
    if (bmi === 0) {
      setBmiInfo('Unknown');
    } else if (bmi < 18.5) {
      setBmiInfo('Underweight');
    } else if (bmi < 25) {
      setBmiInfo('Normal Weight');
    } else if (bmi < 30) {
      setBmiInfo('Overweight');
    } else {
      setBmiInfo('Obese');
    }
  }, [bmi]);

  return (
    <div className="container">
      <div className="options">
        <div className="optionBox">
          <label>Age</label>
          <input
            type="number"
            name="age"
            min={18}
            value={age}
            onChange={handleChange}
          />
        </div>
        <div className="optionBox">
          <label>Gender</label>
          <select name="gender" value={gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="operationBox">
        <div className="optionBox">
          <label>Height (cm)</label>
          <input
            type="number"
            name="height"
            min={100}
            value={height}
            onChange={handleChange}
          />
        </div>
        <div className="optionBox">
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            min={10}
            value={weight}
            onChange={handleChange}
          />
        </div>
      </div>
      <hr />
      <div className="resultBox">
        <div>
          <p>Your BMI is: <span className="result">{bmi.toFixed(2)}</span></p>
          <p>You are {bmiInfo}</p>
        </div>
      </div>
    </div>
  );
}
