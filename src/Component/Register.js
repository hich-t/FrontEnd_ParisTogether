import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [emailExist, setEmailExist] = useState(false);
  const [differentPassword, setDifferentPassword] = useState(false);
  const [register, setRegister] = useState("");
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    setRegister((register) => ({
      ...register,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRegister = async (e) => {
    e.preventDefault();
    setEmailExist(false);
    setDifferentPassword(false);
   await axios
      .post("http://localhost:3001/request/register", register)
      .then((res) => {
        localStorage.setItem("auth-token",res.data)
        navigate("/registertwo");
      })
      .catch((err) => {
        console.log(err.response);
        if (err && err.response.data === "Email already exist") {
          setEmailExist(true);
        }
        if (err && err.response.data === "Confirmation password is not Ok") {
          setDifferentPassword(true);
        }
      });
  };
  return (
    <div className="registerpage ">
      <div className="registerleftside">
      <h1 className="titleregister">Rejoins la communauté <br/>Paris Together et tous nos membres dès maintenant !</h1>
        <div className="registerframeform">
        <h1 className='registerformtitle'>Première étape, <br/>Faisons conaissance !</h1>
          <form className='registerform' onSubmit={sendRegister}>
          <label>Pseudo</label>
            <input
              className="inputforms"
              type="text"
              name="pseudo"
             
              onChange={ (e) => registerUser(e)}

            />
            <label>Prénom</label>
            <input
              className="inputforms"
              type="text"
              name="first_name"
              onChange={ (e) => registerUser(e)}
            />
            <label>Nom de Famille</label>{" "}
            <input
              className="inputforms"
              type="text"
              name="last_name"
              onChange={ (e) => registerUser(e)}
            />
            <label>E-mail</label>{" "}
            <input
              className="inputforms"
              type="email"
              name="email"
              onChange={ (e) => registerUser(e)}
            />
            <label>Mot de Passe</label>{" "}
            <input
              className="inputforms"
              type="password"
              placeholder="5 charac. min."
              name="password"
              onChange={ (e) => registerUser(e)}
            />
            <label>Confirmer le Mot de Passe</label>{" "}
            <input
              className="inputforms"
              type="password"
              name="confirm_password"
              onChange={ (e) => registerUser(e)}
            />
            
            <button className="registerbuttons" type="submit">
              Prochaine étape !
            </button>
          </form>

          {emailExist && <p style={{ color: "red" }}>Email déjà utilisé</p>}
          {differentPassword && (
            <p style={{ color: "red" }}>Mot de passe renseignés différents</p>
          )}
        </div>
      </div>
      <div className="registerrightside"></div>
    </div>
  );
};

export default Register;