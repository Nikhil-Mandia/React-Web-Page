import React from 'react';
import CheckIcon from '@mui/icons-material/Check';


const KeyTopics = () => {
  const content = {
    "html_content": "<ol><li>10 written and audio sessions guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li><li>Intuitive exercises and homework walk you through the energies and values of numbers and number sequences so you can become your own authority.</li><li>Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li><li>Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.</li></ol>"
  };

  // Parse the HTML content and extract the list items
  const parser = new DOMParser();
  const doc = parser.parseFromString(content.html_content, 'text/html');
  const listItems = Array.from(doc.querySelectorAll('li')).map(li => li.textContent);

  // Use map to create React elements for each list item
  const listElements = listItems.map((item, index) => (
    <div className='flex'>
    <CheckIcon className='mr-3'/> <li className='mb-2' key={index}>{item}</li></div>
  ));

  // Render the ordered list
  return (
    <div className='w-[50%]'>
    <ol className='ml-[90px]'>
       <h2 className='font-bold text-xl mb-3 mt-6'>What to Expact from the Course</h2> 

      {listElements}
    </ol>
    </div>
  );
};

export default KeyTopics;
