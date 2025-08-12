import React from 'react';
import { socialLinks } from '../data';
const SocialLinkm = () => {
  return (
       <ul className="icon-list">
        {socialLinds.map((link) => (
            <li className="icon-item" key={link.id}>
                <a href={link.href}><i className={link.icon}>
                    </i>
                    </a>
                    </li>
            
                        
                    
        );

        };
                    
         </ul>
  )
}

export default SocialLinkm