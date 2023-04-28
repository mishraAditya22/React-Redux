import React from 'react';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import './users.css';
import { useSelector } from 'react-redux';

const User = ()=>{
    
    const data =  useSelector((state)=>{
        return state.users;
    });

    console.log(data);

    const clickHandler = ()=>{
        setTimeout(()=>{
            alert('Deleted all the users data !!!')
        },200);
    }

    return (
        <>
            <div className='user-details'>
                <table border="3" height="50%" width="101%"
bordercolor="blue" cellpadding ="10">
                <tr>
                    <th id="left">Name</th>
                    <th id='right'><btn className="btn-class" onClick={clickHandler}><PersonRemoveIcon/></btn></th>
                </tr>
                 <hr/>
            </table>
            </div>
        </>
    )
};

export default User;