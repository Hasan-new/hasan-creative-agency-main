import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const AddOrderForm = () => {
    const { loggedInUser, setAdmin } = useContext(UserContext);

    const [file, setFile] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const [serviceData, setServiceData] = useState([]);
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        fetch(`https://last-assignmet.herokuapp.com/Services/${id}`)
            .then(response => response.json())
            .then(data => {
                setServiceData(data)
            })
    }, [])
    useEffect(() => {
        fetch(`https://last-assignmet.herokuapp.com/Alladmin?email=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => setAdmin(data))
    }, [])

    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const onSubmit = (data) => {
        const formData = new FormData();
        const image = JSON.stringify(data.image)
        formData.append('file', file);
        formData.append('image', image);
        formData.append('price', data.price);
        formData.append('email', loggedInUser.email);
        formData.append('name', loggedInUser.name);
        formData.append('description', data.description);
        
        fetch('https://last-assignmet.herokuapp.com/placeOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                alert('Data been send')
                history.push('/ServiceLists')
            })
            
    }
    return (
        <div>
            <main className='container d-flex  mt-2'>
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" className='form-control' style={{ width: '550px', height: '60px' }} ref={register({ required: true })} placeholder="your name / companyName" defaultValue={loggedInUser.name} /> <br />
                    {errors.name && <span className="error">Your name required</span>}

                    <input name="email" className='form-control' style={{ width: '550px', height: '60px' }} ref={register({ required: true })} placeholder="your Email Address" defaultValue={loggedInUser.email} /> <br />
                    {errors.name && <span className="error">Name required</span>}

                    <input name="serviceName" className='form-control' style={{ width: '550px', height: '60px' }} ref={register({ required: true })} placeholder={serviceData.name} value={serviceData.title} /> <br />
                    {errors.email && <span className="error">Email is required</span>}

                    <textarea name="description" className='form-control' style={{ width: '550px', height: '30%' }} ref={register({ required: true })} placeholder="Product Details" defaultValue={serviceData.shortDetail} /> <br />
                    {errors.address && <span className="error">Address required</span>}

                    <div className="d-flex">
                        <input className='form-control mr-2' name='price' ref={register({ required: true })} style={{ height: '60px' }} type="number" placeholder='price' />
                        <input className='form-control ml-2' onChange={fileChange} name='image' type="file" />
                    </div>
                    <br />
                    <input id='send' type="submit" value="Send" />
                </form>
            </main>
        </div>
    );
};

export default AddOrderForm;