import React from 'react'
import SocialLink from './SocialLink'
import PageLink from './PageLink'
function Footer() {
  return (
          <footer className="footer">
          <div className="footer-menu">
                <PageLink groupName="menu-list" className="menu-item" />
            </div>
         <div className="footer-icon-menu">
           <SocialLink />
        </div> 
                <p>Copyright &copy <span id="date"></span>  All Rights Reserved</p>  
      </footer>
  )
}

export default Footer