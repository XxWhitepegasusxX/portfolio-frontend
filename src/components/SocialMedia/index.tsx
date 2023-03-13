import React from 'react';

import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a target="_blank" href='https://github.com/XxWhitepegasusxX'><BsGithub/></a>
        </div>
        <div>
            <a target="_blank" href='https://www.facebook.com/profile.php?id=100080593959216'><FaFacebook/></a>
        </div>
        <div>
            <a target="_blank" href='https://www.instagram.com/alexanderalmeida_oficial/'><BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia