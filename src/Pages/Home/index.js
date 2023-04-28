import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import './home.css';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import fakeUserData from '../../api/index.js';
import { addUser , removeUser ,deleteUsers } from '../../store/slices/UserSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const Home = ()=>{

    const data =  useSelector((state)=>{
        return state.users;
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const dispatch = useDispatch();

    const AddNewUser = ()=>{
        const payload = fakeUserData();
        dispatch(addUser(payload));
    }

    const deleteUser = (id)=>{
        dispatch(removeUser(id))
    }

    const deleteAllUsers = ()=>{
        dispatch(deleteUsers());
    }

    return(
        <>
            <div className='main-body'>
                <h6 className='sec-body'>Welcome to User Details</h6>
                <h1 className='sec-body'>ADMIN TABLE</h1>
                <h6 className='sec-body'>One Destination for all Users !</h6>


                <Navbar>
                    <NavbarBrand href="/">HOME</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                        <NavLink href="/about/">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/mishraAditya22?tab=repositories">
                            GitHub
                        </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>

                <div className='list-user'>
                    <h3 id='left'>List of User Details</h3>
                    <button id='right' className='btn-class' onClick={AddNewUser}>Add new users</button>
                </div>
                <hr/>
                {data.map((x,id)=>{
                    return (<li key={id} className='diff'> 
                        {x}
                        <button className='btn-class' onClick={()=>deleteUser(id)}><PersonRemoveIcon/></button>
                        <hr/>
                    </li>)
                })}
                <button className='btn-class' onClick={deleteAllUsers}><DeleteIcon/></button>
            </div>

    
        </>
    )
}

export default Home;