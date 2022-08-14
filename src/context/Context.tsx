import React from "react";
import { ContextType } from "../@types/context.d";

export const Context = React.createContext<ContextType | null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
  let [fName, setFName] = React.useState("");
  let [lName, setLName] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [showPassword, setShowPassword] = React.useState(false);
  let [loginBtn, setLoginBtn] = React.useState(false);
  let [note, setNote] = React.useState({ noteName: "", noteDescription: "" });
  let [showCreate, setShowCreate] = React.useState(false);
  let [showEdit, setShowEdit] = React.useState({ status: false, uuid: "" });
  let [confirmVerified, setConfirmVerified] = React.useState(false);
  let [type, setType] = React.useState("");
  let [currency, setCurrency] = React.useState("USD");
  let [phone, setPhone] = React.useState("");
  let [loggedInUser, setLoggedInUser] = React.useState<any>({});

  let register = {
    fName,
    setFName,
    lName,
    setLName,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    type,
    setType,
    currency,
    setCurrency,
    loggedInUser,
    setLoggedInUser,
  };
  let login = {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    loggedInUser,
    setLoggedInUser,
  };
  let dashboard = {
    loginBtn,
    setLoginBtn,
    note,
    setNote,
    showCreate,
    setShowCreate,
    showEdit,
    setShowEdit,
    confirmVerified,
    setConfirmVerified,
    loggedInUser,
  };
  // React.useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     setLoggedInUser({});
  //   }
  // },[]);
  const value = { register, login, dashboard };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
