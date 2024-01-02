import React from 'react'
import img from "./WAVo3FHK_400x400.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Instructor = () => {
  return (
    <div className='ml-[90px]'>
    <div className='flex justify-around'>
        <div className='w-2/4 flex'>
            <div className='w-[200px] h-52 mr-3 rounded-[100%] '><img className='rounded-[100%]' src={img} alt="" /></div>
            <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis et quisquam id, debitis molestiae. Aut quisquam error dolore mollitia, quos ea id explicabo neque incidunt quasi? Tempore, laudantium quisquam. Nam aliquam, qui eligendi repudiandae molestias omnis illum exercitationem nulla porro nobis autem iusto nisi non, in ad tempore nesciunt?</p>

             </div>
        
        <div  className='w-2/6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta impedit maxime fugit obcaecati, non incidunt, sunt accusantium cupiditate praesentium ut quasi saepe. Non iusto qui autem consectetur. Soluta corrupti nemo, omnis perspiciatis aspernatur tenetur doloribus laborum est natus. Id, dolorem. Nesciunt, animi molestias et aspernatur cumque beatae ipsam. Nulla, praesentium ipsum dolores temporibus ut nostrum ullam voluptates laboriosam quos ex tempora consequatur quo explicabo laudantium nemo reiciendis mollitia? Itaque, quos.
        </div>
      
    </div>
    <div className='mt-6'>
        <ul className='flex justify-evenly'>
        <li> <FacebookIcon/>FaceBook</li>
        <li><InstagramIcon/>  Instagram</li>
        <li><YouTubeIcon/> Youtube</li>
        <li><TwitterIcon/> Twitter</li>
        </ul>
    </div>
    </div>
  )
}

export default Instructor
