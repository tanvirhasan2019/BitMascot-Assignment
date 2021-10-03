import React, { useState } from "react";
import './Style.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {signup} from '../actions/auth';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";




export default function Register() {

    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setstate] = useState({firstName:'', lastName:'', email:'', password:'', phone:'', address:'', birthDate:new Date()})
    const HandleChange = (e) =>{
        setstate({...state, [e.target.name]: e.target.value})

    }

    const HandleSubmit = (e) =>{
    
       dispatch(signup(state, history));
    }

    return (
        <div className="registraction-panel">
            <div className="row d-flex justify-content-center">
                <div className="row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                    </svg>
                </div>
                <div className="row"> 
                    <Typography className="d-flex justify-content-center" variant="h5" gutterBottom component="div">
                            Registraction Panel
                    </Typography>
                </div>

                <div className="row login-main-div d-flex justify-content-center"> 
                    
                    <div style={{width:'100%', marginTop:'10px'}} className="row align-items-center">
                        <div className="col-md-2"> 
                           First Name 
                        </div>
                        <div className="col-md-10"> 
                          <TextField onChange={HandleChange} name="firstName" style={{width:'100%'}} className="input-login" id="outlined-search" label="" type="text" />
                        </div>
                    </div>

                    <div style={{width:'100%', marginTop:'10px'}} className="row align-items-center">
                        <div className="col-md-2"> 
                           Last Name 
                        </div>
                        <div className="col-md-10"> 
                          <TextField onChange={HandleChange} name="lastName" style={{width:'100%'}} className="input-login" id="outlined-search" label="" type="text" />
                        </div>
                    </div>


                    <div style={{width:'100%', marginTop:'10px'}} className="row align-items-center">
                        <div className="col-md-2"> 
                           Address 
                        </div>
                        <div className="col-md-10"> 
                          <TextField onChange={HandleChange} name="address" style={{width:'100%'}} className="input-login" id="outlined-search" label="" type="text" />
                        </div>
                    </div>

                    <div style={{width:'100%', marginTop:'10px'}} className="row align-items-center">
                        <div className="col-md-2"> 
                           Phone 
                        </div>
                        <div className="col-md-10"> 
                          <TextField onChange={HandleChange} name="phone" style={{width:'100%'}} className="input-login" id="outlined-search" label="" type="text" />
                        </div>
                    </div>

                    <div style={{width:'100%', marginTop:'10px'}} className="row align-items-center">
                        <div className="col-md-2"> 
                           Email 
                        </div>
                        <div className="col-md-10"> 
                          <TextField onChange={HandleChange} name="email" style={{width:'100%'}} className="input-login" id="outlined-search" label="" type="text" />
                        </div>
                    </div>

                    <div style={{width:'100%', marginTop:'10px'}} className="row align-items-center">
                        <div className="col-md-2"> 
                           BirthDate 
                        </div>
                        <div className="col-md-10"> 
                          <DatePicker selected={startDate} onChange={(date) => setstate({...state, birthDate:date })} style={{margin:'10px'}} />
                        </div>
                    </div>


                    <div style={{width:'100%', marginTop:'10px'}} className="row align-items-center">
                        <div className="col-md-2"> 
                           Password 
                        </div>
                        <div className="col-md-10"> 
                          <TextField onChange={HandleChange} name="password" style={{width:'100%'}} className="input-login" id="outlined-search" label="" type="password" />
                        </div>
                    </div>


                    <div style={{margin:'10px 0px'}} className="row">
                        <div className="d-flex justify-content-around">
                            <Button onClick={HandleSubmit} variant="outlined" size="medium">
                                Register
                            </Button>

                            <Button variant="outlined" size="medium">
                                cancel
                            </Button>
                        </div>
                    </div>

                    
                </div>    
            </div>
    </div>
    )
}
