import React from 'react';
const Footer=()=>{
    return(
        <>
        <footer id="footer" className="footer-2">
          {/* Top footer */}
          <div className="top-footer">
            <div className="container">
              <div className="row">
                {/* - - - - - - - - - - - - - Widget - - - - - - - - - - - - - - - - */}
                <div className="col-sm-3 col-xs-6">
                  <div className="widget">
                    <h5 className="widget-title">About Us</h5>
                    <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl.</p>
                    <ul className="social-icons style-2">
                      <li className="fb-icon"><a href="#"><i className="icon-facebook" /></a></li>
                      <li className="google-icon"><a href="#"><i className="icon-gplus" /></a></li>
                      <li className="tweet-icon"><a href="#"><i className="icon-twitter" /></a></li>
                      <li className="insta-icon"><a href="#"><i className="icon-instagram-4" /></a></li>
                    </ul>
                    <p className="copyright">Copyright <span>SuperOwl</span> © 2017. <br /> All Rights Reserved</p>
                  </div>
                </div>
                {/* - - - - - - - - - - - - - Widget - - - - - - - - - - - - - - - - */}
                {/* - - - - - - - - - - - - - Widget - - - - - - - - - - - - - - - - */}
                <div className="col-sm-6 col-xs-6">
                  <center><div className="widget">
                      <h5 className="widget-title">Quick Links</h5>
                      <ul className="info-links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="parents_corner.html">Parents corner</a></li>
                        <li><a href="our_programs.html">Our Programs</a></li>
                        <li><a href="gallery_grid.html">Gallery</a></li>
                        <li><a href="News.html">News</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </div>
                  </center>
                </div>
                {/* - - - - - - - - - - - - - Widget - - - - - - - - - - - - - - - - */}
                <div className="col-sm-3 col-xs-6">
                  <div className="widget">
                    <h5 className="widget-title">Latest News</h5>
                    <ul className="news-list">
                      <li>
                        <article className="entry">
                          {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                          <div className="entry-body">
                            {/* - - - - - - - - - - - - - Entry Meta - - - - - - - - - - - - - - - - */}
                            <div className="entry-meta">
                              <time className="entry-date" dateTime="2016-01-27">December 28, 2017</time>
                            </div>
                            {/* - - - - - - - - - - - - - End of Meta - - - - - - - - - - - - - - - - */}
                            <h6 className="entry-title"><a href="#">Vestibulum Sed Ante</a></h6>
                          </div>
                          {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                        </article>
                      </li>
                      <li>
                        <article className="entry">
                          {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                          <div className="entry-body">
                            {/* - - - - - - - - - - - - - Entry Meta - - - - - - - - - - - - - - - - */}
                            <div className="entry-meta">
                              <time className="entry-date" dateTime="2016-01-21">December 21, 2017</time>
                            </div>
                            {/* - - - - - - - - - - - - - End of Meta - - - - - - - - - - - - - - - - */}
                            <h6 className="entry-title"><a href="#">Nam Elit Agna Endrerit Sit Amet</a></h6>
                          </div>
                          {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                        </article>
                      </li>
                      <li>
                        <article className="entry">
                          {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                          <div className="entry-body">
                            {/* - - - - - - - - - - - - - Entry Meta - - - - - - - - - - - - - - - - */}
                            <div className="entry-meta">
                              <time className="entry-date" dateTime="2016-01-17">December 17, 2017</time>
                            </div>
                            {/* - - - - - - - - - - - - - End of Meta - - - - - - - - - - - - - - - - */}
                            <h6 className="entry-title"><a href="#">Donec Porta Diam Eu</a></h6>
                          </div>
                          {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                        </article>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div id="footer-scroll"></div>
        </>
        );
         }
export default Footer;