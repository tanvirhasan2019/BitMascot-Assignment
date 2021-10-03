import React from 'react'

import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Loading from './Loading';


export default function UserList() {

    const {Users , loading } = useSelector(state => state.search);

    return (
        <div>

            {
                loading ? <Loading /> : null

            }

            {
                !Users && !loading ? <h1>Empty List</h1> :

                <Table striped bordered hover size="sm">
                    <thead>
                            <tr>
                            <th>Name</th>
                            <th>address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            </tr>
                    </thead>
                    <tbody>
                        
                          {  Users.map(item=>
                                
                                <tr>
                                <td key={item.id}>{`${item.firstName} ${item.lastName}`}</td>
                                <td key={item.id+2000}>{item.address}</td>
                                <td key={item.id+3000}>{item.email}</td>
                                <td key={item.id+400}>{item.phone}</td>
                                </tr> 
                            )
                          }
                        
                           
                    </tbody>

               </Table>

            }
     
        </div>
    )
}
