import React from 'react';
import Frame from '../../../images/logos/Frame.png'

const HeaderMain = (handleSignIn) => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#111430'}}>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p className="text-secondary"><small>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Nesciunt tempore nostrum <br/>praesentium fugiat animi aut.</small></p>
               
                <button style={{backgroundColor:'#2D2D2D', color:'white'}}>Hire us</button>
            
            </div>
            <div className="col-md-6">
                <img src={Frame} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;