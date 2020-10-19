import React, { useEffect, useState } from 'react';
import FeedBackCard from '../FeedBackCard/FeedBackCard';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';


const FeedBack = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`https://last-assignmet.herokuapp.com/feedback`)
            .then(response => response.json())
            .then(data => setDetails(data))

    }, [])
    return (
        <section>
            <h2 className="text-center mt-5">Clients Feedback</h2>
            <div className="row mt-5">
            {
               details.map(info => <FeedBackCard info={info}></FeedBackCard>) 
            }
            </div>
        </section>
    );
};

export default FeedBack;