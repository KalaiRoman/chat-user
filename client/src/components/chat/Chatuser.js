import React, { useEffect, useState } from 'react'
import './Chatuser.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AllUsers, CommandCreateActions } from '../../redux/actions/AllusersActions';
import { SingleuserActionData } from '../../redux/actions/SingleuserAction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { jwtDecode } from "jwt-decode";
import EmojiPicker from 'emoji-picker-react';
import { GetmessagesActions } from '../../redux/actions/ChatMessageActions';
import moment from 'moment'
function Chatuser() {

  const navigate = useNavigate();


  const usertoken = localStorage.getItem("user_token");
  const final = jwtDecode(usertoken);

  const [command, setCommand] = useState("");
  const [commanderror, setCommandError] = useState("");

  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);


  const dispatch = useDispatch();
  const chatuser = useSelector((state) => state?.allusers?.Alluser);
  const singleuserchat = useSelector((state) => state?.singleuser?.Singleuser);
  const chatmessages = useSelector((state) => state?.userchat?.Chatmessage);

  console.log(chatmessages, 'chatmessages')

  const [postcm, setPostcm] = useState("");

  useEffect(() => {
    dispatch(AllUsers())

  }, [singleuserchat])


  const Singleuser = (id) => {
    const data = {
      to: id
    }
    dispatch(GetmessagesActions(data))
    dispatch(SingleuserActionData(id))
  }

  const SumbmitCommand = () => {
    if (command?.length === 0) {
      setCommandError("Command is Required")
    }
    if (command) {
      const datas = {
        message: command,
        to: singleuserchat?._id
      }
      setPostcm([...postcm, datas]);
      setCommand("");
      dispatch(CommandCreateActions(datas))
    }
  }

  const logoutuser = () => {
    localStorage.clear();
    navigate("/");
  }

  const handleEmojiClick = (emoji) => {
    var message = command + emoji?.emoji;
    setCommand(message)
  }
  if (usertoken) {
    return (
      <div className='main-chatbox'>
        <div className='inside-chatbox'>
          <div className='left-chatbox'>
            <div className='inside-left-chatbox'>
              <div className='left-chatbox-header'>

              </div>
              <div className='left-chatbox-body'>
                <div className='mt-2 mb-1'>
                  {chatuser?.map((item, index) => {
                    return (
                      <div className='user-box mb-1' key={index} onClick={() => Singleuser(item?._id)}>
                        <div>
                          {item?.avatar ? <>
                            <img src={item?.avatar} alt="no image" className='user-image' />
                          </> : <>
                            <img src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"} alt="no image" className='user-image' />
                          </>}
                        </div>
                        <div className='chat-border-user'>
                          <div>
                            {item?.userName}
                          </div>
                          <div>

                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='right-chatbox'>
            {singleuserchat?.userName ? <>
              <div className='inside-right-chatbox'>
                <div className='right-chatbox-header'>
                  {singleuserchat?.userName}
                  <div className='logout-btn' onClick={logoutuser}>
                    <ion-icon name="log-out-outline"></ion-icon>
                  </div>
                </div>
                <div className='right-chatbox-body'>
                  {chatmessages?.map((item, index) => {
                    return (
                      <div className={item?.fromself ? "sender" : "receiver"} key={index}>

                        <div className='messagebox'>
                          <div>
                            <h6> {item?.message}</h6>
                          </div>
                          <div className='date-box'>
                            {moment(item?.createdAt).format('LT')}
                          </div>
                        </div>

                      </div>
                    )
                  })}
                </div>
                <div className='right-chatbox-message'>
                  <div className='d-flex align-items-center mt-2 mb-4 border-chat'>
                    <div className='emoji' onClick={handleShow}>
                      {show ? <>
                        <EmojiPicker className='box-emojies' onEmojiClick={handleEmojiClick} />
                      </> : <>
                        😀
                      </>}
                    </div>
                    <div className='mt-3'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <input type="text" placeholder="Type a message"
                          value={command}
                          onChange={(e) => setCommand(e?.target?.value)}
                          className='chat-form'
                        />
                        <Form.Text className=" text-danger mt-2">
                          {command?.length > 0 ? <></> : <>
                            {commanderror}
                          </>}
                        </Form.Text>
                      </Form.Group>
                    </div>
                    <div onClick={SumbmitCommand}>
                      {/* <Button variant="primary" onClick={SumbmitCommand}>Send Command</Button> */}
                      <ion-icon name="send-outline"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>
            </> : <>

              <div>
                <img src="https://unblast.com/wp-content/uploads/2020/05/Group-Chat-Illustration.jpg" alt="no image"
                  className='chat-image'
                />
              </div>

            </>}

          </div>
        </div>
      </div>
    )
  }
  else {
    return <Navigate to="/" />
  }

}

export default Chatuser