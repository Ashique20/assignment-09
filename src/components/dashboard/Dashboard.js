import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line,  Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const[details,setDetail] =useState([]) ;
    useEffect(()=>{
      axios.get("chart.json")
      .then(data=> setDetail(data.data))  
    },[])
    return (
      
      <div>
        <h1>DashBoard</h1>
       <BarChart width={730} height={250} data={details}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" fill="#8884d8" />
      <Bar dataKey="sell" fill="#82ca9d" />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>

    <ComposedChart width={730} height={250} data={details}>
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="sell" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
</ComposedChart>
    </div>
   



     
    );
};

export default Dashboard;