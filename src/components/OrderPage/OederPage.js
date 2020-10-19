import React, { useContext } from 'react';
// import OrderHeader from './OrderHeader/OrderHeader';

import { UserContext } from '../../App';
import AddOrderForm from '../AddOrderForm/AddOrderForm';


import OrderHeader from '../OrderHeader/OrderHeader';
import Sidebar from '../Sidebar/Sidebar';
import Table from '../Table/Table';

const Order = () => {
    const { admin } = useContext(UserContext);

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
            <OrderHeader />
            <div className="d-flex">

                <Sidebar></Sidebar>
                {
                    admin.length ? <Table></Table> : <AddOrderForm></AddOrderForm>
                }



            </div>
        </div>
    );
};

export default Order;