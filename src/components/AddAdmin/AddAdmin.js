import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import OrderHeader from '../OrderHeader/OrderHeader';

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        fetch('https://last-assignmet.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order successfully placed')
                }
            })
    };
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
            <OrderHeader />
            <div className="d-flex">
                <Sidebar />
                <main className="container container-fluid" style={{ width: '100%', height: '50%', backgroundColor: '#FFFFFF', borderRadius: '20px', margin: "50px" }}>
                  
                    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px" }} >
                        <div className="d-flex">

                            <div style={{ width: "50%" }} className="col-md-8">
                           
                                <input name="email" placeholder="admin email" ref={register} style={{ width: "100%" }} className="form-control p-4" />
                            </div>
                            <input type="submit" className='btn btn-success' value="submit" />
                        </div>

                    </form>
                </main>
            </div >
        </div>
    );
};

export default AddAdmin;