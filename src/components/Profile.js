import {React,useState} from 'react'
import Orders from "./Orders";
import {Form ,Button} from "react-bootstrap";
import "../css/home.css";
import { useDispatch, useSelector } from 'react-redux';
import {updatevendor} from '../actions/auth';

function Profile() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const dispatch = useDispatch();

    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(updatevendor(username,email,contact));

    }

    const state = useSelector(state => state.auth);
    return (
        <div className="profile">
            {/* <Vendor/> */}
            <div className="update_form">
            <Form className="form" >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder={state.user.email} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder={state.user.username} value={username}  onChange={(e)=>setUsername(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>contact</Form.Label>
                    <Form.Control type="text" placeholder={state.user?.contact} value={contact}  onChange={(e)=>setContact(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                
            <Button variant="primary" type="submit" onClick={handleUpdate}>
             Update
            </Button>
        </Form>
        </div>
            <h1>orders</h1>
            <Orders/>
        </div>
    )
}

export default Profile
