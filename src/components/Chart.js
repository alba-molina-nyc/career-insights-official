import React from 'react';
import { useState } from 'react';
import { Bar } 
from 'react-chartjs-2';



const Chart = (props) => {

    const handleLabels = props.contacts.map(contact =>  contact.companyName)
    console.log(handleLabels)

    const handleSingleLabel =  props.contacts.map(contact =>  contact.linkedInConnection)
    console.log(handleSingleLabel)

    const handleData = props.contacts.map(contact =>  contact.linkedInConnection)
    console.log(handleData)

    const [ chartState, setChartState ] = useState({
        
                labels: handleLabels,
                datasets: [
                    {
                        label: handleSingleLabel, handleLabels,
                        data: handleData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                    
                        
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                     
                        borderWidth: 1,
                  
                        
            
               
                        
                       

                     }]
                })

               
         

                     return(


  
                    
                        <div className="chart">
                        <Bar
                        data={chartState}
                        setChartState={setChartState}
                        options={{
                        }}
                        />
                       
                       
                    </div>
        
                )
            }


export default Chart;