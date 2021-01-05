import React from 'react'


    const moneyFormatter = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency:'BRL',
    });
       
    function formatMoneyPositiveNegative(value){
        const money = moneyFormatter.format(value);

        if (value>=0){
            return `+${money}` 
        }

        return money;  
    }
function formatMoney (value){   
     return moneyFormatter.format(value);
}

function formatPercent (value){
    return value.toFixed(2).replace('.',',') + '%';
}

export default function installment({data}) {
    const { id, value, difference, percentage, profit } = data;

    const classGoodValue = 'green-text darken-4';
    const classGoodPercent = 'blue-text darken-4';
    const classBadValue = 'red-text darken-4';
    const classbadPercent = 'orange-text darken-4';

    const classValue = profit ? classGoodValue : classBadValue;
    const classPercent = profit ? classGoodPercent : classBadValue;

    return (
         <div className='col s6 m3 l2'> 
        <div style={styleMedia.flexRow}>            
             <span style={{marginRight:'5px'}}> <strong>{id}</strong> 
             </span>

             <div>
                 <div className={classValue}> 
                 <strong>{formatMoney(value)}</strong>
                 </div>
                 <div className={classValue}> 
                <strong> {formatMoneyPositiveNegative(difference)} {difference}</strong>
                 </div>
                 <div className={classPercent}>
                     <strong> {formatPercent (percentage)}</strong>
                     </div>
              </div>
         </div>
     </div>
    );
}
    
    const style = {
        flexRow:   {
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',

            border: '1px solid black',
            borderRadius: '4px',
            padding: '4px',
            margin: '4px',
        },

    }

