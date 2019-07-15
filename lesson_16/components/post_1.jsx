import React from 'react';
import '../css/style_post_1.css';
import Radium from 'radium';

function ReadBook(props){
    return(
        <div className="main-box">
            <div className="read-group">
                <div className="read-group-item-1">
                    <svg id='book' width="88" height="88" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M83 13h-2v51c0 2-2 4-4 4-22 0-31 6-31 6l-2 2-2-2s-9-6-31-6c-2 0-4-2-4-4V13H6c-3 0-4 1-4 3v63c0 2 1 3 4 3h77c2 0 3-1 3-3V16c0-2-1-3-3-3z" fill="url(#paint0_linear)"/><path d="M42 12c-3-2-12-6-29-6-1-1-2 0-2 1v55l2 2c17 0 26 4 29 6V12z" fill="url(#paint1_linear)"/><path d="M75 6c-17 0-26 4-29 6v58c3-2 12-6 29-6l2-2V7c0-1-1-2-2-1z" fill="url(#paint2_linear)"/><defs><linearGradient id="paint0_linear" x1="44" y1="13" x2="44" y2="82" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="paint1_linear" x1="27" y1="6" x2="27" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="paint2_linear" x1="61" y1="6" x2="61" y2="70" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></svg>
                </div>
                <h2>Read Books</h2>
                <div className="content-text">Create your account to get started. After that,
                            you can share books and make friends.</div>
            </div>

            <div className="buttonDiv" onClick={props.changePost}>
                <svg className="arrow" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20" stroke="#fff" stroke-width="2" stroke-miterlimit="10"/><path d="M15 19l7-7-7-7" stroke="#fff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/></svg>
            </div>
            <div className="elips1"></div>
            <div className="elips2"></div>
            <div className="elips3"></div>
        </div>
    )
}

export default Radium(ReadBook)