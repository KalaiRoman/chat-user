import React, { useState, useEffect } from 'react'
import './Signin.scss';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterAction } from '../../redux/actions/LoginActions';
function Signup() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  const [error, setError] = useState(false);
  const [passworderror, setPasswordError] = useState("");

  const { email, password, username, confirmpassword } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigtate = useNavigate();
  const SubmitData = (e) => {
    e.preventDefault();
    if (email?.length === 0 || password?.length === 0 || username?.length === 0 || confirmpassword?.length === 0) {
      setError(true);
    }

    if (email && password && username) {
      if (password === confirmpassword) {
        const data = {
          email: email,
          userName: username,
          password: password
        }
        dispatch(RegisterAction(data, navigate))
      }
      else {
        setPasswordError("Password Not Matched")
      }
    }
  }
  const SignupPath = () => {
    navigtate("/");
  }
  return (
    <div className='main-sigin'>
      <div className='inside-main-signin'>
        <div className='left-sigin'>
          <div className='fw-bold fs-3 mb-3 mt-4'>
            Signup
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='mb-2'>UserName</Form.Label>
              <Form.Control type="email" placeholder="Enter Username" className='form-box' name="username" value={username} onChange={handleChange} />
              <Form.Text className="text-muted">
                {error && username?.length <= 0 ? <span className='text-danger'>User Name is Required</span> : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='mb-2'>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className='form-box' name="email" value={email} onChange={handleChange} />
              <Form.Text className="text-muted">
                {error && email?.length <= 0 ? <span className='text-danger'>Email is Required</span> : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='mb-2'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className='form-box' name="password" value={password} onChange={handleChange} />
              <Form.Text className="text-muted">
                {error && password?.length <= 0 ? <span className='text-danger'>Password is Required</span> : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='mb-2'>Conform Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" className='form-box' name="confirmpassword" value={confirmpassword} onChange={handleChange} />
              <Form.Text className="text-muted">
                {error && confirmpassword?.length <= 0 ? <span className='text-danger'>Confirmpassword is Required</span> : null}
              </Form.Text>
            </Form.Group>

            <div className='text-danger mb-2 mt-2'>
              {passworderror}
            </div>
            <button className='submit-button' onClick={SubmitData}>
              Signup
            </button>
          </Form>

          <div className='mb-5'>
            <div className='mt-4'>
              Or Login Using
            </div>
            <div className='text-center cursor mt-3 fs-5 fw-bold' onClick={SignupPath}>
              Login
            </div>
          </div>
        </div>
        <div className='right-sigin'>
        </div>
      </div>
    </div>
  )
}

export default Signup