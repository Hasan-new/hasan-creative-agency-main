import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import OrderHeader from '../OrderHeader/OrderHeader';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const { loggedInUser } = useContext(UserContext);
    const onSubmit = data => {
        
        const orderDetails = { ...loggedInUser, data }

        fetch('https://last-assignmet.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your review was successfully placed')
                }
            })
    };

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh', height: '100%' }}>
            <OrderHeader></OrderHeader>
            <div className="d-flex">
                <Sidebar />
                <main className='container d-flex  mt-2'>
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="clientName" className='form-control' style={{ width: '550px', height: '60px' }} ref={register({ required: true })} placeholder="your name" defaultValue={loggedInUser.name} /> <br />
                        {errors.name && <span className="error">Name is required</span>}

                        <input name="workingPosition" className='form-control' style={{ width: '550px', height: '60px' }} ref={register({ required: true })} placeholder='Company’s name, Designation' /> <br />

                        <textarea name="details" className='form-control' style={{ width: '550px', height: '30%' }} ref={register({ required: true })} placeholder="Product Details" /> <br />
                        <br />
                        <input id='send' type="submit" value="Send" />
                    </form>
                </main>
            </div>

        </div>
    );
};

export default Review;