import React from 'react';
const Members=()=>{
    return(
        <>
          <div id="content">
        {/* - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - */}
        <div className="breadcrumbs-wrap" style={{background: 'url(https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/courses-to-help-you-improve-the-lives-of-children-FutureLearn.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container">
            <h1 className="page-title">Our Programs</h1>
            <ul className="breadcrumbs">
              <li><a href="index.html">Home</a></li>
              <li>Our Programs</li>
            </ul>
          </div>
        </div>
        {/* - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - */}
        <div className="page-content-wrap">
          <div className="page-section-bg type3 owl-custom custom-style-2" style={{background: 'white'}}>
            <div className="container">
              <center>
                <h3>Our Programs</h3>
                <p>The Tech Bridge is a revolution in School management, Preschool management and Institute management sector and like we mentioned the bag of surprises of The Tech Bridge is never going to be empty</p>
              </center>
              <div className="row" style={{marginTop: '30px'}}>
                {/* - - - - - - - - - - - - - Accordions - - - - - - - - - - - - - - - - */}		        
                <div className="col-sm-6">
                  <div className="accordion toggle">
                    {/*accordion item*/}		        
                    <div className="accordion-item">
                      <h6 className="a-title active">Middle wing</h6>
                      <div className="a-content">
                        <div className="wrapper">
                          <img src="https://images.jdmagicbox.com/comp/saharanpur/s2/9999px132.x132.100802164702.m5s2/catalogue/delhi-public-school-saharanpur-ho-saharanpur-schools-m1k50pp.jpg" className="alignleft" alt="" />
                          <p>
                            An exquisite paragon of architecture, the middle block is a huge building with capacious well ventilated classrooms. It is equipped with interactive whiteboards that make learning more captivating for the young minds. Notes, flowcharts, drawings and PPTs used in the course of teaching are saved to be accessed as and when required. There is a spacious and attractive reception with the students’ art work displayed near the entrance. There is proper arrangement for visitors to address their grievances as well as the queries in the separate discussion zone for parents and staff.It has reception assistance area, brainstorming area for students and staff and segregated seating area. An in-house facilities manager is also stationed here to provide seamless infrastructural assistance to the middle block.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*accordion item*/}		        
                  </div>
                </div>
                {/* - - - - - - - - - - - - - Accordions - - - - - - - - - - - - - - - - */}		        
                <div className="col-sm-6">
                  <div className="accordion toggle">
                    {/*accordion item*/}		        
                    <div className="accordion-item">
                      <h6 className="a-title active">Senior Wing</h6>
                      <div className="a-content">
                        <div className="wrapper">
                          <img src="https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/07/15/Pictures/_5575426c-a6bd-11e9-bdb2-acd0277ecbef.jpg" className="alignleft" alt="" />
                          <p>
                            The senior block is an architectural masterpiece which overlooks the beautifully landscaped lush garden. It houses a state of the art reception area with a comfortable and lively space for the visitors providing them with a glimpse of motivational views and blogs on the display board. It houses 40 well ventilated and naturally lighted rooms to accommodate a class of 40 enthusiastic learners. The senior secondary is a microcosm of outside world albeit a sheltering, caring one. The senior school curriculum synergies seamlessly with various social, cultural and sporting activities providing an ambient learning environment. Students have options of Science, Commerce, and Humanities inclusive of current competitive subjects like Informatics Practices, Bio -Technology, Business Studies along with the other technical subjects, preparing the students to venture out and face the world and be an exemplary citizen.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*accordion item*/}		        
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop: '20px'}}>
                {/* - - - - - - - - - - - - - Accordions - - - - - - - - - - - - - - - - */}		        
                <div className="col-sm-6">
                  <div className="accordion toggle">
                    {/*accordion item*/}		        
                    <div className="accordion-item">
                      <h6 className="a-title active">Primary Wing</h6>
                      <div className="a-content">
                        <div className="wrapper">
                          <img src="https://i2.wp.com/studybihar.in/wp-content/uploads/2019/01/dps-gaya.jpg?ssl=1" className="alignleft" alt="" />
                          <p>
                            Every nook of the primary block serves as a purpose, every corner abides by a deep rooted concept. The walls and the galleries are as much part of the pedagogy, so much so, that the infrastructure does no longer remains just a physical structure. To foster growth and achievement by enabling students and provide the support they need to reach the goals they set for themselves, DPS Jodhpur aims to offer services that meet students requirements.The Junior block is ergonomically designed to suit young childrens’ need. The wide corridors, broad staircase, spacious and ventilated classrooms, adequate toilet and drinking water facilities on each floor are tailored according to the size and requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*accordion item*/}		        
                  </div>
                </div>
                {/* - - - - - - - - - - - - - Accordions - - - - - - - - - - - - - - - - */}		        
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
                        <a href="#" className="avatar">
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
                        <a href="#" className="avatar">
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
                        <a href="#" className="avatar">
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
                        <a href="#" className="avatar">
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
                        <a href="#" className="avatar">
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
                        <a href="#" className="avatar">
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
                      <a href="#" className="btn btn-big">Enrol Now!</a>
                      <p>Or Call <span>855-605-8080</span></p>
                    </div>
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
export default Members;