"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var client_1 = require("@apollo/client");
var Context_1 = require("../../context/Context");
require("./style.scss");
var schema_1 = require("../../graphql/schema");
function Login() {
    var navigate = react_router_dom_1.useNavigate();
    // const [login] = useMutation(LOGIN);
    var login = client_1.useMutation(schema_1.LOGIN)[0];
    var loginData = react_1["default"].useContext(Context_1.Context).login;
    var email = loginData.email, setEmail = loginData.setEmail, password = loginData.password, setPassword = loginData.setPassword, showPassword = loginData.showPassword, setShowPassword = loginData.setShowPassword;
    var regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var handleSubmit = function (e) {
        e.preventDefault();
        login({
            variables: {
                phone: email,
                password: password
            }
        })
            .then(function (res) {
            localStorage.setItem("wazoKey", res.data.login.token);
            if (localStorage.getItem("wazoKey")) {
                navigate("/dashboard");
            }
        })
            .then(function () {
            setEmail("");
            setPassword("");
        });
    };
    return (react_1["default"].createElement("button", { onClick: handleSubmit }, "Login")
    // <div className="login">
    //   <div className="login-card">
    //     <div className="heading">
    //       <h2>Login</h2>
    //       <p>
    //         If you have no account <Link to="/register">Sign up</Link>
    //       </p>
    //     </div>
    //     <form>
    //       <div className="form-item">
    //         <p>Email Address</p>
    //         <input
    //           type="email"
    //           placeholder="Type here"
    //           value={email}
    //           onChange={(e: any) => {
    //             setEmail(e.target.value);
    //           }}
    //         />
    //         <p
    //           className={`prompt ${
    //             !regexEmail.test(email) && email.length > 0
    //               ? "visible"
    //               : "hidden"
    //           }`}
    //           style={{ padding: "2px 0", fontSize: "80%", color: "red" }}
    //         >
    //           Wrong email format!
    //         </p>
    //       </div>
    //       <div className="form-item">
    //         <p>Password</p>
    //         <div className="input-wrapper">
    //           <input
    //             type={showPassword ? "text" : "password"}
    //             placeholder="Type your password here"
    //             value={password}
    //             onChange={(e: any) => {
    //               setPassword(e.target.value);
    //             }}
    //           />
    //           <p
    //             className="hover"
    //             onClick={() => {
    //               setShowPassword(!showPassword);
    //             }}
    //           >
    //             {" "}
    //           </p>
    //         </div>
    //         <p>&nbsp;</p>
    //       </div>
    //       <div className="form-item">
    //         {regexEmail.test(email) && (
    //           <Button
    //             title="Log in"
    //             className="sec"
    //             onClick={(e: any) => {
    //               handleSubmit(e);
    //             }}
    //           />
    //         )}
    //         {!regexEmail.test(email) && (
    //           <Button
    //             title="Log in"
    //             className="disabled"
    //             onClick={(e: any) => {
    //               e.preventDefault();
    //             }}
    //           />
    //         )}
    //         <p>&nbsp;</p>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    );
}
exports["default"] = Login;
