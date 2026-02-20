import { useParams } from "react-router";
import useFetch from "../../shared/hooks/useFetch";

const Details = () => {
  const { username } = useParams();
  const { data: user, isLoading: isUserLoading } = useFetch(username, true);
  const { data: repos, isLoading: isReposLoading } = useFetch(
    `${username}/repos`,
    false,
  );

  if (isUserLoading || isReposLoading) return <p>Loading...</p>;

  return (
    <div>
      <hr />
      <img src={user?.avatar_url} alt="User avatar" height={200} width={200} />
      <p>Name: {user?.name}</p>
      <p>Bio: {user?.bio}</p>
      <p>Location: {user?.location}</p>
      <p>Repositiories:</p>
      {!repos || repos.length === 0 ? (
        <p>This user has no repositories.</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

export default Details;
