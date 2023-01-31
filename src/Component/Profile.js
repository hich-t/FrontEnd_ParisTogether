import useLogged from "../logic/useLogged";

const Profile = () => {
  const [user] = useLogged();

  return (
    <>
      <h1>
      
        Welcome {user.last_name} {user.first_name}
      </h1>
    </>
  );
};

export default Profile;
