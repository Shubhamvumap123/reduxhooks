import React,{useState} from 'react'

const Login = () => {
   const [login, setLogin] = useState({
     email: "",
     password: "",
   });
   const handleLogin = (e)=>{
       const {name,value} = e.target;  
       setLogin ({...login,[name]:value});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
   };

    const loginSuccess =(e)=>{
        e.preventDefault();
        axios.post("https://reqres.in/api/login",login)
        .then((res)=>{
           localStorage.setItem("Userdata", JSON.stringify(res.data.user));
           localStorage.setItem("UserToken", JSON.stringify(res.data.token));
        })
    }
  return (
    <div className="login">
      <form className="login_form" action="">
        <input name="email" type="text" value={email} onChange={handleLogin} />
        <input
          name="password"
          type="text"
          value={password}
          onChange={handleLogin}
        />
        <input type="submit" onSubmit={loginSuccess} />
      </form>
    </div>
  );
}

export default Login