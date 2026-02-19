import { useState } from "react";
import useFetch from "../../shared/hooks/useFetch";
import Details from "../Details";

function InputForm() {
  const [user, setUser] = useState("");
  const [searchUserUrl, setSearchUserUrl] = useState("");
  const [searchReposUrl, setSearchReposUrl] = useState("");
  const { userData, isUserDataLoading } = useFetch(searchUserUrl, true);
  const { reposData, isReposLoading } = useFetch(searchReposUrl, false);

  const handleFetch = () => {
    if (user.trim()) {
      setSearchUserUrl(`${user}`);
      setSearchReposUrl(`${user}/repos`);
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

      <Details
        user={isUserDataLoading ? null : userData}
        repos={isReposLoading ? null : reposData}
      />
    </>
  );
}

export default InputForm;
