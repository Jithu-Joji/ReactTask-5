import React, { useState } from "react";
import "./Age-Calculator.css";

function AgeCalculator() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const today = new Date();
        const bd = new Date(birthdate);

        let age = today.getFullYear() - bd.getFullYear();
        const monthdiff = today.getMonth() - bd.getMonth();

        if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < bd.getDate())) {
            age--;
        }

        setAge(age);
    }

    return (
        <div className="Container">
            <h1>Age Calculator</h1>
            <h4>Enter your date of birth</h4>
            <input
                type="date"
                name="date"
                id="date"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)}
            />
            <button className="btn" onClick={calculateAge}>Calculate Age</button>

            <h3>You are {age > 0 ? `${age}` : ''} years old</h3>
            
        </div>
    );
}

export default AgeCalculator;
