import React from "react";
import { CREATEUSER } from "../../graphql/schema/account.schema";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useMutation } from "@apollo/client";
import { Context } from "../../context/Context";
import { ContextType } from "../../@types/context.d";
import "./style.scss";

export default function Register() {
  const { register } = React.useContext(Context) as ContextType;
  let {
    fName,
    setFName,
    lName,
    setLName,
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    phone,
    setPhone,
    type,
    setType,
    setCurrency,
    setLoggedInUser,
  } = register;
  let navigate = useNavigate();
  let regexFinal =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*., ?])(?=.*[\d]).+$/;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexUpper = /^(?=.*[A-Z]).+$/;
  let regexNum = /\d/;
  let regexSym = /^(?=.*[-+_!@#$%^&*., ?]).+$/;
  const [createUser, { data, loading, error }] = useMutation(CREATEUSER);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUser({
      variables: {
        name: `${fName} ${lName}`,
        phone,
        password,
        type,
        email,
      },
      onCompleted: ({createUser}) => {
        console.log(createUser);
        setLoggedInUser(createUser.user);
        localStorage.setItem("user", JSON.stringify(createUser.user));
        if (localStorage.getItem("user")) {
          navigate("/dashboard");
        }
      }
    })
      .then((res: any) => {
        // console.log(res, "res", res.data.createUser.token);
        // console.log(res, "res", res.data.createUser.user);

        localStorage.setItem("token", res.data.createUser.token);
        localStorage.setItem("user", JSON.stringify(res.data.createUser.user));
        setLoggedInUser(res.data.createUser.user);
        if (localStorage.getItem("token")) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFName("");
        setLName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setType("");
      });
  };
  React.useEffect(() => {
    if (data && !error) {
      navigate("/dashboard");
    }
  }, [data, error, navigate]);
  return (
    // <button onClick={handleSubmit}>Register</button>
    <div className="register">
      <div className="register-card">
        <div className="heading">
          <h2>Create an Account</h2>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
        <form>
          <div className="form-row">
            <div className="form-item">
              <p>First Name</p>
              <input
                type="text"
                placeholder="Type here"
                value={fName}
                onChange={(e: any) => {
                  setFName(e.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <p>Last Name</p>
              <input
                type="text"
                placeholder="Type here"
                value={lName}
                onChange={(e: any) => {
                  setLName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-item">
              <p>Account Type</p>
              <select
                onChange={(e: any) => {
                  setType(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="savings">Savings</option>
                <option value="current">Corporate</option>
              </select>
            </div>
            <div className="form-item">
              <p>Currency</p>
              <select
                onChange={(e: any) => {
                  setCurrency(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="">NGN</option>
                <option value="">USD</option>
              </select>
            </div>
          </div>
          <div className="form-item">
            <p>Phone Number</p>
            <input
              type="text"
              placeholder="Type here"
              value={phone}
              onChange={(e: any) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="form-item">
            <p>Email Address</p>
            <input
              type="email"
              placeholder="Type here"
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
            <p
              className={`prompt ${
                !regexEmail.test(email) && email.length > 0
                  ? "visible"
                  : "hidden"
              }`}
              style={{ padding: "2px 0", fontSize: "80%", color: "red" }}
            >
              Wrong email format!
            </p>
          </div>
          <div className="form-item">
            <p>Password</p>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Type your password here"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
              <p
                className="hover"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {" "}
              </p>
            </div>
            {password.length > 0 && (
              <div className="password-validation">
                <ul>
                  <li className={`${regexUpper.test(password) ? "check" : ""}`}>
                    Contains at least one uppercase letter
                  </li>
                  <li className={`${password.length > 7 ? "check" : ""}`}>
                    Contains eight characters
                  </li>
                  <li className={`${regexNum.test(password) ? "check" : ""}`}>
                    Contains at least one number
                  </li>
                  <li className={`${regexSym.test(password) ? "check" : ""}`}>
                    Contains at least one symbol
                  </li>
                </ul>
              </div>
            )}
            <p>&nbsp;</p>
          </div>
          <div className="form-item">
            {loading && <p>Loading.....</p>}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
            {(!regexEmail.test(email) ||
              !regexFinal.test(password) ||
              password.length < 8 ||
              fName.length < 1 ||
              lName.length < 1) && (
              <Button
                title="Register"
                className="disabled"
                onClick={(e: any) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              />
            )}
            {regexEmail.test(email) &&
              regexFinal.test(password) &&
              password.length > 7 &&
              fName.length > 1 &&
              lName.length > 1 && (
                <Button
                  title="Register"
                  className="sec"
                  onClick={(e: any) => {
                    handleSubmit(e);
                  }}
                />
              )}
          </div>
        </form>
      </div>
    </div>
  );
}
