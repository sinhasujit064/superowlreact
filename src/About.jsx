import React from 'react';
import Footer from './Footer';


const About=()=>{
    return(
       
<>
<div id="content">
        {/* - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - */}
        <div className="breadcrumbs-wrap" style={{background: 'url(https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/courses-to-help-you-improve-the-lives-of-children-FutureLearn.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container">
            <h1 className="page-title">About Us</h1>
            <ul className="breadcrumbs">
              <li><a href="index.html">Home</a></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        {/* - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - */}
        <div className="page-content-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
              </div>
              {/* Main content */}		        
              <main id="main" className="col-md-8">
                {/* content element */}
                <div className="content-element">
                  <center><h3 style={{marginBottom: '20px'}}>Welcome to SuperOwl Kindergarten</h3></center>
                  <div className="responsive-iframe content-element3">
                    <img src="https://www.babycouture.in/blog/wp-content/uploads/2017/07/cover-bbc.jpg" style={{backgroundSize: 'cover'}} />
                  </div>
                  <div className="text-wrap content-element3">
                    <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. </p>
                    <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. </p>
                  </div>
                  <center><h3 style={{marginBottom: '20px'}}>Our Mission and Vision</h3></center> 
                  <div className="responsive-iframe content-element3">
                    <img src="https://www.sheknows.com/wp-content/uploads/2018/08/xaragccui9re4xy6nuce.jpeg" style={{backgroundSize: 'cover'}} />
                  </div>
                  <div className="text-wrap content-element3">
                    <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. </p>
                    <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. </p>
                  </div>
                  <div className="blockquote-holder with-bg">
                    <blockquote>
                      <p>
                        “Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scel<br />erisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel<br /> metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis.”
                      </p>
                      <div className="author">Jessica Smith,<span>Principal and Owner</span></div>
                    </blockquote>
                  </div>
                </div>
                {/* content element */}
                {/* content element */}
                {/* content element */}
                {/* - - - - - - - - - - - - - Testimonial - - - - - - - - - - - - - - - - */}							
              </main>
              <div className="col-md-2">
              </div>
            </div>
          </div>
        </div>
        <div className="section-with-carousel with-bg parallax-section" data-bg="assets/pic/school_kids.jpeg">
          <div className="comment-section align-center">
            <div className="container">
              <h2 className="section-title">What Parents Say</h2>
              {/* - - - - - - - - - - - - Owl-Carousel - - - - - - - - - - - - - - - */}
              <div className="carousel-type-1">
                <div className="owl-carousel testimonial type-2" data-max-items={3} data-item-margin={30} data-autoplay="true">
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}
                    <div className="comment-item">
                      <div className="comment-holder">
                        <blockquote>
                          <p>“Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum.”</p>
                        </blockquote>
                      </div>
                      {/* bottom-separator */}
                      <div className="bottom-separator" />
                    </div>
                    <div className="author-box">
                      <a  className="avatar">
                        <img src="assets/pic/1.png" alt="" />
                      </a>
                      <div className="author-info">
                        <span className="author-name">Amanda Johnson</span>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}
                    <div className="comment-item">
                      <div className="comment-holder">
                        <blockquote>
                          <p>“”Fusce euismod consequat ante. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in.”</p>
                        </blockquote>
                      </div>
                      {/* bottom-separator */}
                      <div className="bottom-separator" />
                    </div>
                    <div className="author-box">
                      <a  className="avatar">
                        <img src="assets/pic/2.png" alt="" />
                      </a>
                      <div className="author-info">
                        <span className="author-name">John Franklin</span>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}
                    <div className="comment-item">
                      <div className="comment-holder">
                        <blockquote>
                          <p>“Vestibulum iaculis lacinia est. Proin dictum. Fusce euismod consequat ante. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis.”</p>
                        </blockquote>
                      </div>
                      {/* bottom-separator */}
                      <div className="bottom-separator" />
                    </div>
                    <div className="author-box">
                      <a  className="avatar">
                        <img src="assets/pic/3.png" alt="" />
                      </a>
                      <div className="author-info">
                        <span className="author-name">Camala Haddon</span>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}
                    <div className="comment-item">
                      <div className="comment-holder">
                        <blockquote>
                          <p>“Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum.”</p>
                        </blockquote>
                      </div>
                      {/* bottom-separator */}
                      <div className="bottom-separator" />
                    </div>
                    <div className="author-box">
                      <a  className="avatar">
                        <img src="assets/pic/1.png" alt="" />
                      </a>
                      <div className="author-info">
                        <span className="author-name">Amanda Johnson</span>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}
                    <div className="comment-item">
                      <div className="comment-holder">
                        <blockquote>
                          <p>“”Fusce euismod consequat ante. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in.”</p>
                        </blockquote>
                      </div>
                      {/* bottom-separator */}
                      <div className="bottom-separator" />
                    </div>
                    <div className="author-box">
                      <a  className="avatar">
                        <img src="assets/pic/2.png" alt="" />
                      </a>
                      <div className="author-info">
                        <span className="author-name">John Franklin</span>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}
                    <div className="comment-item">
                      <div className="comment-holder">
                        <blockquote>
                          <p>“Vestibulum iaculis lacinia est. Proin dictum. Fusce euismod consequat ante. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis.”</p>
                        </blockquote>
                      </div>
                      {/* bottom-separator */}
                      <div className="bottom-separator" />
                    </div>
                    <div className="author-box">
                      <a  className="avatar">
                        <img src="assets/pic/3.png" alt="" />
                      </a>
                      <div className="author-info">
                        <span className="author-name">Camala Haddon</span>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}
                  {/* Slide */}				          
                  {/* /Slide */}
                  {/* Slide */}				          
                  {/* /Slide */}
                  {/* Slide */}				          
                  {/* /Slide */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call-out type-2">
          <div className="container">
            <div className="row table-row">
              <div className="col-sm-8">
                <h2>Enrol Your Child For 2017-2018</h2>
              </div>
              <div className="col-sm-4">
                <div className="align-right">
                  <div className="button-holder">
                    <a  className="btn btn-big">Enrol Now!</a>
                    <p>Or Call <span>855-605-8080</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
       
</>
    
    );
}
export default About;