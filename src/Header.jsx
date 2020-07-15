import React from 'react';
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <>
 <nav id="mobile-advanced" className="mobile-advanced" />
        {/* - - - - - - - - - - - - - Header - - - - - - - - - - - - - - - - */}
        <header id="header" className="header">
          {/* search-form */}
          <div className="searchform-wrap">
            <div className="vc-child h-inherit relative">
              <form>
                <input type="text" name="search" placeholder="Start typing..." />
                <button type="button" />
              </form>
            </div>
            <button className="close-search-form" />
          </div>
          {/* top-header */}
          <div className="top-header">
            {/* - - - - - - - - - - - / Mobile Menu - - - - - - - - - - - - - */}
            {/*main menu*/}
            <div className="menu-holder">
              <div className="menu-wrap">
                <div className="table-row">
                  {/* logo */}
                  <div className="logo-wrap">
                    <a href="index.html" className="logo"><img src="assets/images/logo.png" alt="" /></a>
                  </div>
                  {/* Menu & TopBar */}
                  <div className="nav-item">
                    {/* Top Bar */}
                    <div className="contact-info-menu">
                      <div className="contact-info-item">
                        <i className="icon-phone" />
                        <a href="callto:#">800-987-65-43</a>
                      </div>
                      <div className="contact-info-item">
                        <i className="icon-mail-1" />
                        <a href="mailto:#">info@companyname.com</a>
                      </div>
                      <div className="contact-info-item">
                        <i className="icon-location" />
                        <span>9870 St Vincent Place, Glasgow, DC 45 Fr 45</span>
                      </div>
                      <div className="contact-info-item lang-button">
                        <i className="icon-globe-1" />
                        <a >English</a>
                        <ul className="dropdown-list">
                          <li><a >English</a></li>
                          <li><a >German</a></li>
                          <li><a >Spanish</a></li>
                        </ul>
                      </div>
                      <div className="contact-info-item">
                        <i className="icon-globe-1" />
                        <a >Client/Register</a>
                      </div>
                      <div className="contact-info-item">
                        <ul className="social-icons">
                          <li className="fb-icon"><a ><i className="icon-facebook" /></a></li>
                          <li className="google-icon"><a ><i className="icon-gplus" /></a></li>
                          <li className="tweet-icon"><a ><i className="icon-twitter" /></a></li>
                          <li className="insta-icon"><a ><i className="icon-instagram-4" /></a></li>
                        </ul>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Navigation - - - - - - - - - - - - - - - - */}
                    <nav id="main-navigation" className="main-navigation">
                      <ul id="menu" className="clearfix">
                        <li className="current"><Link to="/">Home</Link>
                        </li>
                        <li className="dropdown"><a>About Us</a>
                          {/*sub menu*/}
                          <div className="sub-menu-wrap">
                            <ul>
                              <li><Link to="/About">About Us</Link></li>
                              <li><Link to="/Parents">Parents Corner</Link></li>
                            </ul>
                          </div>
                        </li>
                        <li><Link to="/Members">Our Programs</Link>
                        </li>
                        <li ><Link to="/Gallery">Gallery</Link>
                        </li>
                        <li ><Link to="/News">News</Link>
                        </li>
                        <li ><Link to="/Contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                    {/* - - - - - - - - - - - - end Navigation - - - - - - - - - - - - - - - */}
                    <a  className="btn btn-style-2">Inquire</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom-separator */}
          <div className="bottom-separator" />
        </header>
        </>
    );
}
export default Header;