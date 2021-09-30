import React from 'react';
import './App.css';
import {useState} from 'react';


const App=()=> {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchUsers=async()=>{
    setLoading(true);
  const response = await fetch('https://reqres.in/api/users?page=1')
  if (response.ok) {
    const data = await response.json()
    setUsers(data.data);
    setLoading(false);
    
  } else {
    setLoading(true);
  }
  }

  return (
    <>
    <div className="head">
            <h1>Lets Grow More </h1>
           <div className="fetchusers">
           <button onClick={()=>fetchUsers()}>GET USERS</button>
           </div>
    </div>
    <div className="main">
    {isLoading?(<div className="loader"></div>):null}
    {users && users.map(user=>{
      return(
        <div className="card">
                            <img src={user.avatar} alt="text" height="90" width="90" style={{borderRadius:'50%'}}/> 
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <div><strong>{user.first_name} {user.last_name}</strong></div>
                            <div>{user.email}</div>
                            </div>
                        </div>
        )
    }
    )}
    </div>
  </>
  );
  
}

export default App;