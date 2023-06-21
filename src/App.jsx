import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode'

const App = () => {
  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID Token:" +  response.credential) // return encoded jwt token
    // to decode the token - npm i jwt-decode & import jwtDecode from 'jwt-decode'
    const userObject = jwtDecode(response.credential) // decode the token and return an object
    console.log(userObject)
  }
  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id: '365290336516-22h8jsam16h63rhmc08f1mg5sgkg4jme.apps.googleusercontent.com',
      callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size:"large"}
    )
  },[])
  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  )
}

export default App