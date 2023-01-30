import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registrer = () => {
  const [emailExist, setEmailExist] = useState(false);
  const [differentPassword, setDifferentPassword] = useState(false);
  const [register, setRegister] = useState("");
  const navigate = useNavigate();

  const registreUser = (e) => {
    e.preventDefault();
    setRegister((register) => ({
      ...register,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRegistrer = async (e) => {
    e.preventDefault();
    setEmailExist(false);
    setDifferentPassword(false);
    
   await axios
      .post("http://localhost:3001/request/register", register)
      .then((res) => {
        localStorage.setItem("auth-token",res.data)
        navigate("/profile");
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
    <div className="registerframeform">
      <form onSubmit={sendRegistrer}>
        <label>
          <div>
            <h2>First Name :</h2>
            <input className="inputforms"
              type="text"
              name="first_name"
              onChange={(e) => registreUser(e)}
            />
          </div>
          <div>
            <h2>Last Name :</h2>
            <input className="inputforms"
              type="text"
              name="last_name"
              onChange={(e) => registreUser(e)}
            />
          </div>
          <div>
            <h2>Email :</h2>
            <input className="inputforms" type="email" name="email" onChange={(e) => registreUser(e)} />
          </div>
          <div>
            <h2>Mot de passe :</h2>
            <input className="inputforms"
              type="password"
              placeholder="Mot de passe"
              name="password"
              onChange={(e) => registreUser(e)}
            />
          </div>
          <div>
            <h2>Confirmer Mot de passe :</h2>
            <input  className="inputforms"
              type="password"
              placeholder="Confirmer Mot de passe"
              name="confirm_password"
              onChange={(e) => registreUser(e)}
            />
          </div>
          <div>
          <button className="registerbuttons" type="submit">S'Enregistrer</button>

          </div>
        </label>
      </form>
      {emailExist && <p style={{ color: "red" }}>Email déjà utilisé</p>}
      {differentPassword && (
        <p style={{ color: "red" }}>Mot de passe renseignés différents</p>
      )}
      </div>
      <div className="registerrightframe">
      </div>
     </div>
  
  );
};

export default Registrer;
