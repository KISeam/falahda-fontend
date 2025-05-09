import React, { useEffect, useState } from 'react';
import MarketingAndOperationCard from './MarketingAndOperationCard';

const MarketingAndOperation = () => {
    const [marketers,SetMarketer] = useState([])
            useEffect(()=>{
                fetch('MarketingAndOperation.json')
                .then(res=>res.json())
                .then(data => SetMarketer(data))
            },[])
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10'>
            {
                marketers.map(marketer => (
                    <MarketingAndOperationCard marketer={marketer}></MarketingAndOperationCard>
                ))
            }
        </div>
    );
};

export default MarketingAndOperation;