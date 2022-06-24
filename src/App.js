import "./App.css";
import React, {  useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [onTouch, setOnTouch] = useState(false);

  const validName = name.trim() !== "";
  const inValidName = !validName && onTouch;

  const validEmail = email.trim() !== "";
  const inValidEmail = !validEmail && onTouch;

  const validPassword = password.trim() !== "";
  const inValidPassword = !validPassword && onTouch;

  const submitHandler = (e) => {
    e.priventDefault();
    setOnTouch(true)
    if (!validEmail && !validName && !validPassword) {
      return;
    }
    
    setName("");
    setEmail("");
    setPassword("");
    setOnTouch(false)
  };
  return (
    <main>
      <h4>Login</h4>
      <form action="">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          onBlur={()=>setOnTouch(true)}
        />
        {inValidName && <p>Name is invalid !</p>}
        <br />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={()=>setOnTouch(true)}
        />
        {inValidEmail && <p>Email is invalid !</p>}
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={()=>setOnTouch(true)}
        />
        {inValidPassword && <p>Password is invalid !</p>}
        <div className="buttons">
          <button onSubmit={submitHandler}>Submit</button>
        </div>
      </form>
    </main>
  );
};

export default App;
