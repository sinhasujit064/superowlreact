import React from 'react';
const Parents =()=>{
    return(
        <>
         <div id="content">
        {/* - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - */}
        <div className="breadcrumbs-wrap" style={{background: 'url(https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/courses-to-help-you-improve-the-lives-of-children-FutureLearn.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container">
            <h1 className="page-title">Parents Corner</h1>
            <ul className="breadcrumbs">
              <li><a href="index.html">Home</a></li>
              <li>Parents Corner</li>
            </ul>
          </div>
        </div>
        {/* - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - */}
        <div className="page-content-wrap">
          <div className="page-section-bg type3 owl-custom custom-style-2">
            <div className="container">
              {/* - - - - - - - - - - - - Owl-Carousel - - - - - - - - - - - - - - - */}
              <div className="carousel-type-2">
                <div className="owl-carousel blog-type" data-max-items={3} data-item-margin={30}>
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}				          
                    <div className="welcome-item">
                      <div className="welcome-inner">
                        <div className="welcome-img">
                          <img src="assets/pic/1.png" alt="" />
                        </div>
                        <div className="welcome-content" style={{height: '330px'}}> 
                          <div className="entry">
                            {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                            <div className="entry-body" style={{textAlign: 'center'}}>
                              <h5 className="entry-title"><a style={{textDecoration: 'none'}}>UNITEDIANS KIDS</a></h5>
                              <p>The Tech bridge is one of the best solution of preschool Software. I research in market of application and Finally I got solution from The Tech Bridge. Quick response from Support team. Recommend to all.. </p>
                            </div>
                            {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Class Information - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Class Information - - - - - - - - - - - - - - - - */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}				          
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}				          
                    <div className="welcome-item">
                      <div className="welcome-inner">
                        <div className="welcome-img">
                          <img src="assets/pic/2.png" alt="" />
                        </div>
                        <div className="welcome-content" style={{height: '330px'}}>
                          <div className="entry">
                            {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                            <div className="entry-body" style={{textAlign: 'center'}}>
                              <h5 className="entry-title"><a style={{textDecoration: 'none'}}>LITTLE MILLENNIUM AIROLI - SECTOR 8</a></h5>
                              <p>The app is very useful and whenever there is an issue or problem it is solved very quickly. Due to this app communication with the parents have become easier. Thanks Alok!!.</p>
                            </div>
                            {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Class Information - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Class Information - - - - - - - - - - - - - - - - */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}
                  {/* Slide */}				          
                  <div className="item-carousel">
                    {/* Carousel Item */}				          
                    <div className="welcome-item">
                      <div className="welcome-inner">
                        <div className="welcome-img" style={{background: 'white'}}>
                          <img src="assets/pic/3.png" alt="" />
                        </div>
                        <div className="welcome-content" style={{height: '330px', overflowY: 'scroll'}}>
                          <div className="entry">
                            {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                            <div className="entry-body" style={{textAlign: 'center'}}>
                              <h5 className="entry-title"><a style={{textDecoration: 'none'}}>CAMBRIDGE MONTESSORI PRESCHOOL KAGGADASAPURA</a></h5>
                              <p>The Tech Bridge is a one stop solution for all your preschool technology need. Their preschool software is the best in the industry. what's really great is , the owner (Mr. Alok) , is always available for any help that you may want regarding the software. In short you can't go wrong with The tech bridge. Just close your eyes and Ake the leap of faith them. I am sure you won't be disappointed.. </p>
                            </div>
                            {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Class Information - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Class Information - - - - - - - - - - - - - - - - */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Carousel Item */} 
                  </div>
                  {/* /Slide */}
                </div>
                <div className="owl-custom-buttons">
                  <div className="custom-owl-prev" />
                  <div className="custom-owl-next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>

    );
}
export default Parents;