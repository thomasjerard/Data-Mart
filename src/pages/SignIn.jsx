import React from 'react'
import Home from './Home'
import {Button} from '@carbon/react'
import '../styles/SignIn.scss';
import { useState } from 'react';

function SignIn() {

  const [username, setUserName] = useState();
  const [password, SetPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    // const token = await loginUser({
    //   username,
    //   password
    // });
    // setToken(token);
  }

  return (
<<<<<<< HEAD
    <div class="signIn">
      <h2>Log In To Proceed</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/><br/>
        </label>
        <label>
          <p>Password:</p>        
          <input type="password" onChange={e => SetPassword(e.target.value)}/><br/>
        </label><br/>
        <label>
          <input type="submit" value="submit"/><br/>
        </label>
      </form>

=======

    <div id="signIn">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div class="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div class="user-name">
       <input type="text" name="User Name" id="User Name" placeholder="User Name" autocomplete="on reuired" onChange={e => setUserName(e.target.value)}></input>
      <i class='bx bxs-user'></i>
      </div>
       <br></br>
       <div class="user-name">
       <input type="password" name="password" id="password" placeholder="Password" autocomplete="on reuired" onChange={e => SetPassword(e.target.value)}></input>
       <i class='bx bxs-lock-alt'></i>
       </div>
      </form>
      <button type="submit" class="btn">Login</button>
      </div>
>>>>>>> upstream/main
    </div>
  )
}
export default SignIn;