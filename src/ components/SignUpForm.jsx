import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const response = fetch("https://fsa-jwt-practice.herokuapp.com/signup");
  // const result = response.json();
  // console.log(result);

  // ****** This is what Byron went over*******************
  // const handleSubmitForm = (e) {
  //   e.preventDefault();
  //   console.log("Submitting credentials now");
  // };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello!");
    try {
      const response = fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      const result = response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
