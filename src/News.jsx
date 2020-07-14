import React from 'react';
import Footer from './Footer';
const News=()=>{
    return(
        <>
            <div id="content">
        {/* - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - */}
        <div className="breadcrumbs-wrap" style={{background: 'url(https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/courses-to-help-you-improve-the-lives-of-children-FutureLearn.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container">
            <h1 className="page-title">News</h1>
            <ul className="breadcrumbs">
              <li><a href="index.html">Home</a></li>
              <li>News</li>
            </ul>
          </div>
        </div>
        {/* - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - */}
        <div className="page-content-wrap">
          <div className="page-section-bg type3 owl-custom custom-style-2" style={{background: 'white'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="content-element6">
                    <div className="single-news blog-type type-2 style-2">
                      <div className="welcome-item">
                        <div className="welcome-inner">
                          <center>	<div className="welcome-img">
                              <img src="https://www.joseloffgallery.org/wp-content/uploads/2020/02/be1.jpg" alt="" />
                            </div></center>
                          <div className="welcome-content">
                            <svg className="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path d="M0 100 C40 0 60 0 100 100 Z" />
                            </svg>
                            <div className="entry">
                              {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                              <div className="entry-meta">
                                <a href="#" className="entry-calendar">August 20, 2017</a>
                                <div className="entry-byline"><a href="#">Admin</a></div>
                                <a href="#" className="entry-news">News</a>
                                <a href="#" className="entry-comments-link">3</a>
                                <a href="#" className="entry-share f-right">Share</a>
                              </div>
                              {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                              {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                              <div className="entry-body">
                                <div className="content-element3">
                                  <p>Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante. Donec sagittis euismod purus.Sed ut perspiciatis sit voluptatem accusantium doloremque.</p>
                                  <div className="blockquote-holder with-bg-2">
                                    <blockquote>
                                      <p>
                                        “Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. ”
                                      </p>
                                      <div className="author">John Smith</div>
                                    </blockquote>
                                  </div>
                                  <div className="text-wrap">
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin <a href="#">velit sed leo</a>. Ut pharetra augue nec augue. </p>
                                    <p>Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. </p>
                                    <p>Nulla venenatis. In pede mi, aliquet sit amet, euismod in,auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante. Donec sagittis euismod purus.</p>
                                  </div>
                                </div>
                              </div>
                              {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                              {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                              {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default News;