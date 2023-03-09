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

  const onChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    switch (target.id) {
      case "firstName": {
        setFirstName(target.value);
        break;
      }
      case "lastName": {
        setLastName(target.value);
        break;
      }
      case "email": {
        setEmail(target.value);
        break;
      }
      case "role": {
        setRole(target.value);
        break;
      }
      case "password": {
        setPassword({ value: target.value, isTouched: true });
        break;
      }
    }
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
            <input
              required
              value={firstName}
              id='firstName'
              onChange={onChange}
              placeholder='First name'
            />
          </div>
          <div className='Field'>
            <label htmlFor='lastName'>Last name</label>
            <input
              value={lastName}
              id='lastName'
              onChange={onChange}
              placeholder='Last name'
            />
          </div>
          <div className='Field'>
            <label htmlFor='email'>
              Email address <sup>*</sup>
            </label>
            <input
              required
              value={email}
              id='email'
              onChange={onChange}
              placeholder='Email address'
            />
          </div>
          <div className='Field'>
            <label htmlFor='password'>
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}
              required
              id='password'
              onChange={onChange}
              placeholder='Password'
            />
          </div>
          <div className='Field'>
            <label htmlFor='role'>
              Role <sup>*</sup>
            </label>
            <select required id='role' value={role} onChange={onChange}>
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
