import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utilts";

const PasswordErrorMessage = () => {
  return (
    <p className='FieldError'>Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return true;
  };

  const clearForm = () => {
    // Implement this function
  };

  const handleSubmit = () => {
    alert("Account created!");
    clearForm();
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className='Field'>
            <label htmlFor='firstName'>
              First name <sup>*</sup>
            </label>
            <input id='firstName' placeholder='First name' />
          </div>
          <div className='Field'>
            <label htmlFor='firstName'>Last name</label>
            <input id='firstName' placeholder='Last name' />
          </div>
          <div className='Field'>
            <label htmlFor='email'>
              Email address <sup>*</sup>
            </label>
            <input id='email' placeholder='Email address' />
          </div>
          <div className='Field'>
            <label htmlFor='password'>
              Password <sup>*</sup>
            </label>
            <input id='password' placeholder='Password' />
          </div>
          <div className='Field'>
            <label>
              Role <sup>*</sup>
            </label>
            <select>
              <option value='role'>Role</option>
              <option value='individual'>Individual</option>
              <option value='business'>Business</option>
            </select>
          </div>
          <button type='submit' disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
