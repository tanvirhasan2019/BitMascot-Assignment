import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import  Error from './pages/Error';

export default function ProtectedRoute(props) {

  const Component = props.component;
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [dispatch])

    return user ? user.user.role == 'Admin' ? (
        <Component />
    ) : (
        <Error message="You Are not an Admin Role" />
    ):
    (
        <Error message="You Are not an Admin Role" />
    );
}
