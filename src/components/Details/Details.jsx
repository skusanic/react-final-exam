const Details = ({ user, repos }) => {
  if (!user) return <></>;

  return (
    <div>
      <hr />
      <img src={user?.avatar_url} alt="User avatar" height={200} width={200} />
      <p>Name: {user?.name}</p>
      <p>Bio: {user?.bio}</p>
      <p>Location: {user?.location}</p>
      <p>Repositiories:</p>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Details;
