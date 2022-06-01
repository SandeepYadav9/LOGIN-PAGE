import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const emailIsVlid = email.trim() !== "";
  const invalidEmail = !emailIsVlid && error;

  const isValidPassword = email.trim() !== "";
  const invalidPassword = !isValidPassword && error;

  const submitHandler = (e) => {
    e.priventDefault();
    setError(true);
    if (!emailIsVlid && !invalidPassword) {
      return;
    }
    setEmail("");
    setPassword("");
    setError(false);
  };
  return (
    <div  className="main">
      <div className="container">
      <form>
        <h3>LoginPage</h3>

        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={() => {
            setError(true);
          }}
          value={email}
          placeholder="Email"
        />

        <br />

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={() => {
            setError(true);
          }}
          value={password}
          placeholder="Password"
        />
        {/* {invalidPassword && <p>Somthing Went Worng</p>} */}
        {invalidEmail && <p>Somthing Went Worng</p>}
        <div>
          <button onSubmit={submitHandler}>Login</button>
        </div>
      </form>

      <div className="imageContent">
        <img src="" alt="" className="image" />
        <p>Lorem ipsum dolor sit, amet</p>
      </div>
      </div>
    </div>
  );
}

export default App;
