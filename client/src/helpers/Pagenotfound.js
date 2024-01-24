import React from 'react'
import './pagenotfount.scss';
import notfound from '../assests/videos/notfound.png';
function Pagenotfound() {
    return (
        <section>
            <div className='main-pagenotfound'>
                <div>
                    <img src={notfound} alt="no image" className='notfound-image' />
                </div>
                <div className='page-not-found text-center'>
                    404 <br />
                    Page Not Found
                </div>
                <div>
                    <button className='reload-btn' onClick={() => window.location.assign("/")}>Reload...</button>
                </div>
            </div>
        </section>
    )
}

export default Pagenotfound