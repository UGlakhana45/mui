


//just tried Firebse authentication for personal reference and it's working so had it as a reference in ref folder.



import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Input } from "@mui/material";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    console.log(auth, email, password)
    await createUserWithEmailAndPassword(auth, email, password);
    
  };

  return (
    <div>
      <Input type="email" onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button color='inherit' onClick={onSubmit}>signin</Button>
    </div>
  );
};

export default Signin;
