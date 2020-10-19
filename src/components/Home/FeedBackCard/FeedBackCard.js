import React from 'react';

const FeedBackCard = ({ info }) => {
    return (
        <div className="col-md-4" >
            <div>
                <h3><img className="customerImage img-fluid " src={info.img} alt="" width="50" />{info.name}</h3><br/><h5>{info.title}</h5>   
                <small>{info.description}</small> 
            </div>
            
        </div>
    );
};

export default FeedBackCard;




