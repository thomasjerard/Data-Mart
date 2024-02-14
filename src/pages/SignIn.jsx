import React from 'react'
import Home from './Home'
import {Button} from '@carbon/react'
function SignIn() {
  return (
    <div>
      <Home/>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div class="wrapper">
      <form action="">
        <h1>LOGIN</h1>
        <div class="user-name">
       <input type="text" name="User Name" id="User Name" placeholder="User Name" autocomplete="on reuired"></input>
      <i class='bx bxs-user'></i>
      </div>
       <br></br>
       <div class="user-name">
       <input type="password" name="password" id="password" placeholder="Password" autocomplete="on reuired"></input>
       <i class='bx bxs-lock-alt'></i>
       </div>
      </form>
      <button type="submit" class="btn">Login</button>
      </div>
    </div>
  )
}
export default SignIn