
import React, { useState } from "react";
import { auth } from "./../config/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

export default function Register() {

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (event) => {
event.preventDefault();

try {
  const userCredential = await createUserWithEmailAndPassword(auth , email, password);
  console.log(userCredential)
  // User is now registered and logged in
} catch (error) {
  // Handle error
  console.log(error)
}
};

return (
<form onSubmit={handleSubmit}>
<input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
<button type="submit">Register</button>
</form>
);
}





