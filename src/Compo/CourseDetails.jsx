import React from 'react';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Button from '@mui/material/Button';

const CourseDetails = () => {
  const data = {
    "fee":   {
      "amount":"5,000",
      "currency": "INR"
    },
    "inclusions": {
      
      
    }
  };

  const detailsamount = [
    {  value: `${data.fee.amount}` },
   
  ];

  const renderedDetails = detailsamount.map((detail, index) => (
    <div className='font-extrabold text-3xl' key={index}>
      {detail.label} {detail.value}
    </div>
  ));
  let details=[ { label: '5 On-Demand Videos', value: data.inclusions.on_demand_videos },
  { label: 'Live Q&A Session with Nityanand chand das ', value: data.inclusions.on_demand_videos },
  { label: '2 Live Q&A Sessions', value: data.inclusions.live_qa_sessions ? 'Yes' : '' },
  { label: ' An active WhatsApp Community', value: data.inclusions.whatsapp_community ? 'Yes' : '' }]
  
  const renderedData = details.map((detail, index) => (
    <div className='' key={index}>
      <LiveTvIcon className='mx-2'/>{detail.label} {detail.value}
    </div>
  ));

  return (
    <div className='absolute right-48 w-1/4 top-96 h- bg-lime-100 rounded-lg pl-2'>
      <h3 className='font-bold '>Course Fees</h3>
      {renderedDetails}
      <h3>What's included:</h3>
      {renderedData}
<div className='text-center mt-5 mb-10'>
<Button
sx={{width:300, borderRadius:5}} variant="contained">Register Today</Button>

</div>
    </div>
  );
};

export default CourseDetails;
// { label: '5 On-Demand Videos', value: data.inclusions.on_demand_videos },
// { label: 'Live Q&A Session with NITYANAND CHARAN DAS ', value: data.inclusions.on_demand_videos },
// { label: '2 Live Q&A Sessions', value: data.inclusions.live_qa_sessions ? 'Yes' : '' },
// { label: ' An active WhatsApp Community', value: data.inclusions.whatsapp_community ? 'Yes' : '' }
