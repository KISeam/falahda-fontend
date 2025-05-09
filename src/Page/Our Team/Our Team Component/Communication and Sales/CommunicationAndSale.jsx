import React, { useEffect, useState } from 'react';
import CommunicationAndSalesCard from './CommunicationAndSalesCard';

const CommunicationAndSale = () => {
    const [communicators,setCommunicator] = useState([])
            useEffect(()=>{
                fetch('CommunicationAndSales.json')
                .then(res=>res.json())
                .then(data => setCommunicator(data))
            },[])
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10'>
            {
                communicators.map(communicator => (
                    <CommunicationAndSalesCard communicator={communicator}></CommunicationAndSalesCard>
                ))
            }
        </div>
    );
};

export default CommunicationAndSale;