import React from 'react'
import Home from './Home'
import {Button} from '@carbon/react'

function SignIn() {
  return (
    <div>
      <Home/>
      <form>
        <label>Name: <input type="text"></input></label>
        <br/>
        <label>pw: <input type="text"></input></label>
        <br/>
        <label><input type="submit"></input></label>
        <br/>
      </form>
      <Button>Example usage</Button>
    </div>
  )
}

export default SignIn