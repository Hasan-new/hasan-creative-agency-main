import React, { useEffect, useState } from 'react';
import AwesomeIcon from './AwesomeIcon';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';






const AwesomeService = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`https://last-assignmet.herokuapp.com/AllServices`)
            .then(response => response.json())
            .then(data => setDetails(data))

    }, [])
    return (

        <section>
            <h2 style={{ marginTop: '50px', color: '#2D2D2D' }} className="text-center">Provide awesome Services</h2>
            <div className="row mt-5">
                {
                    details.map(details => <AwesomeIcon details={details}></AwesomeIcon>)
                }
            </div>
        </section>
    );
};

export default AwesomeService;