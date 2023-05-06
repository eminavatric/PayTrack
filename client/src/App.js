import React,{useEffect, useState}  from 'react'

const App = () => {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    );
  }, []);
  return (
    
    <div class="container">
      <div class="box">

      <center> <p> Track expenses </p> </center>  
      <center> <i> All in one place </i> </center> 
   
      <center> <p> Sign in to Continue </p> </center>
      <form method="post">
        <div class="txt__field">
          <input type="text" required></input>
          <label>Username </label> 
        </div>

        <div class="txt_field">
          <input type="password" required></input>
          <label>Password </label> 
          
              
            

          
        </div>
        <div class="pass">Forgot <a href="#"> password? </a></div>
        <input type="submit" value="Login"></input>
        </form>  
        </div> 

     
    
            Don't have an account? <b> Sign Up </b>
              
           
            
            </div>
            
    
  )
}

export default App


