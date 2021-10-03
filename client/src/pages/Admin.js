import React, { useState } from 'react'
import NavbarMenu from '../components/NavbarMenu'
import './Style.css';
import SearchField from 'react-search-field';
import UserList from '../components/UserList';
import { Search } from '../actions/search';
import { useDispatch } from 'react-redux';


export default function Admin() {
    const [search, setstate] = useState('')
    const dispatch = useDispatch();
    const onChange = (value, event)=>{
        setstate(value);
    } 

    const handleSubmit =() =>{
       
        dispatch(Search(search));
    }

    return (
        <div>
        <NavbarMenu />
         <div className="row profile-page-main">

             <div  className="col-2 sidebar-profile">
                <div style={{height:'100px'}} className="row sidebar-item d-flex justify-content-center align-items-center">
                   User List
                </div>
                
             </div>

             <div className="col-10">
                <div className="row">
                    <div style={{height:'100px', border:'2px solid black'}} className="d-flex justify-content-between align-items-center">
                        <div>
                            User List
                        </div>

                        <div>
                            <SearchField
                                placeholder="Search"
                                onChange={onChange}
                               // searchText="This is initial search text"
                                classNames="test-class"
                                onSearchClick={handleSubmit}
                            />
                        </div>
                    </div>
                    
                </div>
                 
                 <div className="row d-flex justify-content-center align-items-center">
                    <UserList />
                 </div>
             </div>
         </div>
    </div>
    )
}
