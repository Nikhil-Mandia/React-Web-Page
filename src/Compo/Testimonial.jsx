import { Avatar } from '@mui/material';
import React from 'react';

const TestimonialComponent = () => {
  const data = {
    "testimonial": {
      "text": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
    }
  };

  // Convert the text into an array of paragraphs (assuming paragraphs are separated by newline characters)
  const paragraphs = data.testimonial.text.split('\n').map((paragraph, index) => (
    <p className='w-2/4 font-bold text-2xl  mx-auto' key={index}>{paragraph}</p>
  ));

  return (
    <div className='text-center  w-full '>
      {paragraphs}
      <div className='flex justify-center'>
      <Avatar className='mt-4' />
    <p className='text-start mt-4 ml-2'>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Eum, facere.</p>
    </div>

    </div>
  );
};

export default TestimonialComponent;
