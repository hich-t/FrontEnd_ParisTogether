import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [emailExist, setEmailExist] = useState(false);
  const [differentPassword, setDifferentPassword] = useState(false);
  const [registrer, setRegistrer] = useState("");
  const navigate = useNavigate();

  const registreUser = (e) => {
    e.preventDefault();
    setRegistrer((registrer) => ({
      ...registrer,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRegistrer = async (e) => {
    e.preventDefault();
    setEmailExist(false);
    setDifferentPassword(false);
   await axios
      .post("http://localhost:3001/request/login", registrer)
      .then((res) => {
        console.log()
        localStorage.setItem("auth-token",res.data);
        navigate("/mainPage");
      })
      .catch((err) => {
        console.log(err.response);
        if (err && err.response.data === "Email not found") {
          setEmailExist(true);
        }
        if (err && err.response.data === "Password is not valid") {
          setDifferentPassword(true);
        }
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form className="form" onSubmit={sendRegistrer}>
        <label>
         <div>
            <h2>Email :</h2>
            <input type="text" name="email" onChange={(e) => registreUser(e)} />
          </div>
          <div>
            <h2>Mot de passe :</h2>
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              onChange={(e) => registreUser(e)}
            />
          </div>
          <div>
            <input
              style={{ marginTop: "10%" }}
              className="button"
              type="submit"
              value="Enregistrement"
            />
          </div>
        </label>
      </form>
      {emailExist && <p style={{ color: "red" }}>Email non trouvé</p>}
      {differentPassword && (
        <p style={{ color: "red" }}>Mauvais password réesayer</p>
      )}
    </>
  );
};

export default Login;