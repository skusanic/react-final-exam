import { useState } from "react";
import { useNavigate } from "react-router";

function InputForm() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleFetch = () => {
    if (user.trim()) {
      navigate(`/user/${user}`);
    }
  };

  return (
    <>
      <hr></hr>
      <p>GitHub username:</p>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={handleFetch}>GO!</button>
      <br />
      <hr></hr>
    </>
  );
}

export default InputForm;
