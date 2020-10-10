import React  from 'react'

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password:""
        }
    }

    handleLogin = () =>{
        console.log(this.state.email, this.state.password)
    }

    handleChange = (e) =>{
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        const {handleLogin, handleChange} = this
        const {email, password} = this.state
        return (
            <div style={{padding:"2%", border:"2px solid black" , width:"50%", marginLeft:"20%",marginBottom:"9%", borderRadius:"5px", marginTop:"5%"}}>
                <h1> Login Here! </h1>
                Email:
                <input value={email} 
                onChange={handleChange}
                name="email"
                />
                <br/>
                password
                <input value={password} 
                onChange={handleChange}
                name="password"
                />
                <br/>
                <button onClick={handleLogin} >Login</button>
            </div>
        )
    }
}


