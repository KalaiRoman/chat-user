import React, { useEffect, useState } from 'react';
import './Avatar.scss'
import { useDispatch } from 'react-redux';
import { updateProfileActions } from '../../redux/actions/LoginActions';
import { useNavigate } from 'react-router-dom';
function Avatarimages() {


    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [selectimage, setSelectImage] = useState("");
    const [selectimageerror, setSelectImageerror] = useState("");

    const userimages = [
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833560.jpg?size=626&ext=jpg&ga=GA1.1.824583844.1698586702&semt=ais",
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.824583844.1698586702&semt=ais",
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.824583844.1698586702&semt=ais",
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?size=626&ext=jpg&ga=GA1.1.824583844.1698586702&semt=ais",
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?size=626&ext=jpg&ga=GA1.1.824583844.1698586702&semt=ais",
        "https://img.freepik.com/premium-psd/3d-illustration-business-man-with-glasses_23-2149436193.jpg?size=626&ext=jpg&ga=GA1.1.824583844.1698586702&semt=ais",
        "https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436196.jpg?size=626&ext=jpg&ga=GA1.1.824583844.1698586702&semt=ais",
        "https://img.freepik.com/premium-psd/3d-illustration-person-with-purple-hair-glasses_23-2149436204.jpg?size=626&ext=jpg&ga=GA1.1.824583844.1698586702&semt=ais"
    ];

    useEffect(() => {

    }, [userimages]);


    const handleSelectImage = (image) => {
        setSelectImage(image)
    }

    const SubmitAvatar = () => {
        if (selectimage?.length > 0) {
            const data = {
                avatar: selectimage,
                avatarstatus: true
            }
            dispatch(updateProfileActions(data, navigate))
        }
        else {
            setSelectImageerror("Please Select Your Avatar Picture!")
        }
    }

    return (
        <div className='main-avatar-section'>
            <div className='main-box-round-avatar'>
                {userimages?.map((images, index) => (
                    <div className={selectimage == images ? "selected-image-box" : 'main-box-round-avatar'} key={index} onClick={() => handleSelectImage(images)}>
                        <img src={images} alt={"no images"} className='avatar-image' />
                    </div>
                ))}
            </div>

            <div className='text-danger'>
                {selectimage?.length > 0 ? <></> : <>
                    {selectimageerror}
                </>}
            </div>
            <div>
                <button className='selectavatar-btn' onClick={SubmitAvatar}>Select Your Avatar</button>
            </div>
        </div>
    );
}

export default Avatarimages;
