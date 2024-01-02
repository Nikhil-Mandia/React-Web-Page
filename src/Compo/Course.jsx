import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const Course = () => {
  const content = {
    "html_content": "<ul><li>Learn to manage your relationships</li><li>Better communication</li><li>Time management</li><li>Forgiveness</li></ul>"
  };

  const parser = new DOMParser();
  const doc = parser.parseFromString(content.html_content, 'text/html');
  const listItems = Array.from(doc.querySelectorAll('li')).map(li => li.textContent);

  const listElements = listItems.map((item, index) => (
    <li className='mb-2' key={index}> <CheckIcon className='mr-3'/>{item}</li>
  ));

  return (
    <div>
    <ul className='ml-[90px]'>
       <h2 className='font-bold text-xl mb-3'>What to Expact from the Course</h2> 
      {listElements}
    </ul>

    </div>
  );
};

export default Course;
