import React, { useState } from 'react'
import NavbarMenu from '../components/NavbarMenu'
import './Style.css';

export default function UserProfile() {

   
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
    return (
        <div>
            <NavbarMenu />
             <div className="row profile-page-main">

                 <div  className="col-2 sidebar-profile">
                    <div style={{height:'50px'}} className="row sidebar-item d-flex justify-content-center">
                        Profile Page
                    </div>
                    <div style={{height:'50px'}} className="row sidebar-item d-flex justify-content-center">
                        Change Password
                    </div>
                 </div>

                 <div className="col-10">

                     <div style={{height:'100px', border:'2px solid black'}} className="row d-flex justify-content-center align-items-center">
                         Profile
                     </div>
                     <div className="row d-flex justify-content-center align-items-center">
                         
                       <div className="row justify-content-center prifile-list">
                            First Name : {user ? user.user.firstName : '' }
                         </div>
                         <div className="row justify-content-center prifile-list">
                            Last Name : {user ? user.user.lastName : '' }
                         </div>
                         <div className="row justify-content-center prifile-list">
                            Address : {user ? user.user.address : '' }
                         </div>
                         <div className="row justify-content-center prifile-list">
                            Phone : {user ? user.user.phone : '' }
                         </div>
                         <div className="row justify-content-center prifile-list">
                            Email : {user ? user.user.email : '' }
                         </div>
                         <div className="row justify-content-center prifile-list">
                            BirthDate : {user ? user.user.birthDate : '' }
                         </div>

                     </div>

                 </div>
             </div>
        </div>
    )
}
