import React from 'react';
const Contact=()=>{
    return(
        <>
        <div id="content">
        {/* - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - */}
        <div className="breadcrumbs-wrap" style={{background: 'url(https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/courses-to-help-you-improve-the-lives-of-children-FutureLearn.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <ul className="breadcrumbs">
              <li><a href="index.html">Home</a></li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        {/* - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - */}
        {/* page-section */}
        <div className="page-section">
          <div className="container">
           
            <div className="content-element2">
              <div className="row">
                <div className="col-sm-4">
                  <h3>Contact Info</h3>
                  <div className="icons-box style-2">
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-map-marker" />
                          <h5 className="icons-box-title">
                            <a >Address</a>
                          </h5>
                          <p>
                            9870 St Vincent Place, Glasgow, <br /> DC 45 Fr 45
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-telephone" />
                          <h5 className="icons-box-title">
                            <a >Phone</a>
                          </h5>
                          <p>
                            800-987-65-43
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-telephone2" />
                          <h5 className="icons-box-title">
                            <a >Fax</a>
                          </h5>
                          <p>
                            800-987-65-43
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-at-sign" />
                          <h5 className="icons-box-title">
                            <a >Email</a>
                          </h5>
                          <p>
                            <a href="mailto:#" className="link-text">mail@companyname.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"><i className="licon-clock3" />
                          <h5 className="icons-box-title">
                            <a >Opening Hours</a>
                          </h5>
                          <p>
                            Monday – Friday <br /> 8:00 AM – 5:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-share2" />
                          <h5 className="icons-box-title">
                            <a >Stay Connected</a>
                          </h5>
                          <ul className="social-icons">
                            <li className="fb-icon"><a ><i className="icon-facebook" /></a></li>
                            <li className="google-icon"><a ><i className="icon-gplus" /></a></li>
                            <li className="tweet-icon"><a ><i className="icon-twitter" /></a></li>
                            <li className="insta-icon"><a ><i className="icon-instagram-4" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <p>If you have any questions, please call us or fill in the form below and we will get back to you very soon.</p>
                  <form id="contact-form" className="contact-form flex-type">
                    <div className="contact-col-2"><input type="text" name="cf-name" placeholder="Your Name (required)" /></div>
                    <div className="contact-col-2"><input type="text" name="cf-email" placeholder="Email (required)" /></div>
                    <div className="contact-col"><input type="email" placeholder="Subject" /></div>
                    <div className="contact-col"><textarea rows={8} name="cf-message" placeholder="Message" defaultValue={""} /></div>
                    <div className="contact-col-submit"><button type="submit" className="btn" data-type="submit">Submit</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div></div>
        </>
    );
}
export default Contact;