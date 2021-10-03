import React, { useState } from "react";
import './Style.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {signin} from '../actions/auth';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function Login() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setstate] = useState({email:'', password:''})
    const HandleChange = (e) =>{
        setstate({...state, [e.target.name]: e.target.value})

    }

    const handlclear =()=>{
        setstate({email:'', password:''});
    }

    const HandleSubmit = (e) =>{
      
       dispatch(signin(state, history));
    }

    return (

        <div className="center-element-page">
            <div className="row d-flex justify-content-center">
                <div className="row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                    </svg>
                </div>
                <div className="row"> 
                    <Typography className="d-flex justify-content-center" variant="h5" gutterBottom component="div">
                            LOGIN PANEL
                    </Typography>
                </div>

                <div className="row login-main-div d-flex justify-content-center"> 
                    <div style={{marginTop:'10px'}} className="row d-flex justify-content-center">
                        Enter Email
                    </div>

                    <div className="row d-flex justify-content-center">
                       <TextField onChange={HandleChange} value={state.email} name="email" className="input-login" id="outlined-search" label="Search field" type="text" />
                    </div>

                    <div style={{marginTop:'10px'}} className="row d-flex justify-content-center">
                        Password
                    </div>

                    <div className="row d-flex justify-content-center">
                       <TextField onChange={HandleChange} value={state.password} name="password" className="input-login" id="outlined-search" label="Search field" type="password" />
                    </div>

                    <div style={{margin:'10px 0px'}} className="row">
                        <div className="d-flex justify-content-around">
                            <Button onClick={HandleSubmit} variant="outlined" size="medium">
                                Login
                            </Button>

                            <Button onClick={handlclear} variant="outlined" size="medium">
                                Clear
                            </Button>
                        </div>
                    </div>

                    <div style={{margin:'10px 0px'}} className="row">
                        <div className="d-flex justify-content-center">
                          Are you new here ?&nbsp;<Link to="/registraction">Register Now</Link>
                        </div>
                    </div>
                </div>    
            </div>
    </div>
    )
}
