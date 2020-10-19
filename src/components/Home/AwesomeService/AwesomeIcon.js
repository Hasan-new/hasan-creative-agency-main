import React from 'react';
import { Link } from 'react-router-dom';

const AwesomeIcon = ({ details}) => {
    return (
            <div className="col-md-4 mt-5" >
               <Link to ={'/detail/'+details._id}>
               <div style={{marginBottom:'50px'}} className="text-center">
            <img className="iconImage img-fluid" src={details.img} alt="" width="70" />
                <h3 style={{ color:'#4D4D4D'}} className="text-center">{details.title}</h3><br/>   
                <p className="text-center">{details.description}</p>
            </div>
               </Link>
            
            
        </div>
      
    );
};

export default AwesomeIcon;