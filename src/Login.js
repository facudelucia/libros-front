import React, {useState} from 'react'
import "./Login.css"
import axios from "axios"
import {useHistory} from "react-router-dom"
import { useStateValue } from './StateProvider'
function Login() {
    const history = useHistory()
    const [{ token }, dispatch] = useStateValue()
    const [form, setForm] = useState({
        email:"",
        password:""
    })
    const {email, password} = form
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const headers = {
        'Content-Type': 'application/json' 
    } 
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(email.trim() === ""){ return }
        if(password.trim() === ""){ return }
        await axios.post("https://yapoelpdf.herokuapp.com/admin",{
            "email": `${email}`,
            "password": `${password}`,
            headers
          })
          .then(datos=>{
              dispatch({
                  type:"GET_TOKEN",
                  token: datos.data.token
              })
              history.push("/admin")
          })
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
