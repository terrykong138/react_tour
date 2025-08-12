import React from 'react'

const PageLink1 = ({itemName, href, text}) => {
  return (
     <li className={itemName} >
        <a href={href}>{text}</a>
     </li>
  );
};


export default PageLink1