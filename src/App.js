import React, { useState } from 'react';
import { useEffect } from 'react';
import Form from './components/Form';
import Instalments from './components/installments';

export default function App () {

  const [initalValue, setInitalValue] = useState (1000);
  const [monthlyInterest, setMonthlyInterest] = useState (1);
  const [monthlyPeriod, setMontlyPeriod] = useState (1);
  const [installments, setInstalments] = useState ([]);

useEffect(() => {
 calculateInterest(initalValue, monthlyInterest, monthlyPeriod);
}, [ initalValue , monthlyInterest , monthlyPeriod]);
 
 

const calculateInterest = (InitalValue,monthlyInterest,monthlyPeriod) => {
    
  const newInstalments = [];

  let currentId = 1;
  let currentValue = initalValue;
  let percentage = 0;

  for (let i = 1; i <= monthlyPeriod; i++) {
    const percentValue =  (currentValue * Math.abs(monthlyInterest)) / 100;

    currentValue = 
      monthlyInterest >= 0
        ? currentValue + percentValue
        : currentValue - percentValue;

        percentage =  (currentValue / initalValue -1) * 100;

        newInstalments.push({
          id: currentId++,
          value: currentValue,
          difference: currentValue - initalValue,
          percentage,
          profit:monthlyInterest > 0,
    });
  }
  setInstalments(newInstalments);
};

  const handleChangeData = (newValue, newInterest, newPeriod) => {
  if (newValue !== null) {
    setInitalValue(newValue);
    return;
  }

    if (newInterest !== null ){
    setMonthlyInterest(newInterest);
    return;
  }

  setMontlyPeriod(newPeriod); 

};
  
  return ( 
  <div className='container'> 
    <h1 className='center'>Calcula Juros Compostos</h1>  

    <Form
    data={{ initalValue, monthlyInterest, monthlyPeriod }} 
    onChangeData={handleChangeData} 
    />
    <installments data={installments} />
    </div> 
  );
}



