import React, {Component} from 'react';
import { useState } from 'react';
import {Bar, Line, Pie, Scatter, Radar, PolarArea} 
from 'react-chartjs-2';
import ApplicationDashboard from '../pages/ApplicationDashboard';

const ChartApp = (props) => {

    const handleLabels = props.applications.map(application =>  application.companyName)
    console.log(handleLabels)

    const handleSingleLabel =  props.applications.map(application =>  application.companySize)
    console.log(handleSingleLabel)

    const handleData = props.applications.map(application  =>  application.companySize)
    console.log(handleData)

    const [ chartAppState, setChartAppState ] = useState({
        
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
                data={chartAppState}
                options={{
                }}
                />
               
                <Pie
                data={chartAppState}
                options={{
                }}
                />


                
               
               
            </div>

        )
    }




export default ChartApp;