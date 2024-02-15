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

    </div>
  )
}
export default SignIn;