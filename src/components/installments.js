import React from 'react';
import installment from './installment';

export default function installments({ data }) {
    return ( 
        <div className='row'>
        {data.map((item) => { 
            const { id } = item;
            return <installment key={id} data ={item} />;
        })}
    </div> 
    );
}
