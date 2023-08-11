import React ,{useState} from 'react';
import { TextField, Button, Grid, Paper,FormControlLabel ,Checkbox ,FormGroup } from '@mui/material';
import { useNavigate,Link, redirect } from 'react-router-dom';
interface Users {
    name: string,
    email:string,
    pwd:string
}

const Login = () => {
    const paperStyle={padding: 20, height:'70vh', width:280, margin:"20px auto"}
    
    const [userLogin, setUserLogin] = useState<Users>({
        name:'', email:'', pwd:''
    });
        
    const navigate = useNavigate();

    const onInputChanged = (fieldName: string,value:string) => {
        setUserLogin((prev) => ({...prev,[fieldName]:value}))
    }

    const login=(e:any)=>{      
        e.preventDefault();
        localStorage.setItem('loginuser', JSON.stringify(userLogin));
     
            navigate('/',{state:{userLogin}})
      
        

    }
// To match the user details with already registered user
    const handleLogin=(e:any)=>{
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem('loginuser'));
        if(userLogin.email === loggedUser.email && userLogin.pwd ===loggedUser.pwd)
        {
            redirect('/')
        }
        else{
            alert('wrong email and password')
        }

    }

const logout=()=>{
    
    localStorage.removeItem('loginuser' );
}


  return (
    <form onSubmit={handleLogin}>  
        <Link to='/logout' >Logout</Link>
        <Link to='/login' >Sign in</Link>
        <Grid>
            <Paper elevation={10} style={paperStyle}>

            <Grid alignItems="center"><h2>Sign in</h2></Grid>
            <TextField id="standard-basic" label="Name" variant="standard" value={userLogin.name} onChange={(e:any)=>{onInputChanged('name', e.target.value)}} fullWidth required/>
            <TextField id="standard-basic" label="email" variant="standard" value={userLogin.email} onChange={(e:any)=>{onInputChanged('email', e.target.value)}} fullWidth required/>
            <TextField id="standard-password-input" label="Password" type="password" variant="standard" fullWidth required/>
            <FormGroup>
  <FormControlLabel control={
  <Checkbox name="checkedB" color='primary'/>
  } label="Remember me" />
  </FormGroup>
  <Button variant="contained" onClick={login} color='primary' type='submit' fullWidth>Login</Button>
  {/* <Button variant="text" onClick={logout} color='danger' type='submit'>Login</Button> */}
            </Paper>
        </Grid>

            
    </form>
  )
}

export default Login