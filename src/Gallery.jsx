import React from 'react';
const Gallery=()=>{
    return(
        <>
 
 <div id="content">
        {/* - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - */}
        <div className="breadcrumbs-wrap" style={{background: 'url(https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/courses-to-help-you-improve-the-lives-of-children-FutureLearn.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container">
            <h1 className="page-title">Gallery</h1>
            <ul className="breadcrumbs">
              <li><a href="index.html">Home</a></li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
        {/* - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - */}
        {/* page-section */}
        <div className="page-section">
          <div className="container">
            {/* - - - - - - - - - - - - - Filter - - - - - - - - - - - - - - - - */}    	
            <div id="options">
              <div id="filters" className="isotope-nav">
                <button className="is-checked" data-filter="*">All</button>
                <button data-filter=".category_2">Meals</button>
                <button data-filter=".category_3">Classes</button>
                <button data-filter=".category_4">Leisure</button>
              </div>
            </div>
            {/* - - - - - - - - - - - - - End of Filter - - - - - - - - - - - - - - - - */}    	
            <div className="isotope three-collumn clearfix portfolio-holder" data-isotope-options="{&quot;itemSelector&quot; : &quot;.item&quot;,&quot;layoutMode&quot; : &quot;masonry&quot;,&quot;transitionDuration&quot;:&quot;0.7s&quot;,&quot;masonry&quot; : {&quot;columnWidth&quot;:&quot;.item&quot;}}">
              <div className="item category_3">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/11.png" alt="" />
                    <a href="assets/pic/11.png" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_2">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/12.png" alt="" />
                    <a href="assets/pic/12.png" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_4">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/13.jpg" alt="" />
                    <a href="assets/pic/13.jpg" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_3">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/14.jpeg" alt="" />
                    <a href="assets/pic/14.jpeg" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_2">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/15.png" alt="" />
                    <a href="assets/pic/15.png" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_4">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/16.jpeg" alt="" />
                    <a href="assets/pic/16.jpeg" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_2">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/17.jpg" alt="" />
                    <a href="assets/pic/17.jpg" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_3">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/18.png" alt="" />
                    <a href="assets/pic/18.png" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_2">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/19.png" alt="" />
                    <a href="assets/pic/19.png" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
              <div className="item category_3">
                {/* - - - - - - - - - - - - - Project - - - - - - - - - - - - - - - - */}
                <div className="project">
                  {/* - - - - - - - - - - - - - Project Image - - - - - - - - - - - - - - - - */}
                  <div className="project-image">
                    <img src="assets/pic/20.png" alt="" />
                    <a href="assets/pic/20.png" className="project-link project-action " title="Title 1" rel="category" />
                  </div>
                  {/* - - - - - - - - - - - - - End of Project Image - - - - - - - - - - - - - - - - */}
                </div>
                {/* - - - - - - - - - - - - - End of Project - - - - - - - - - - - - - - - - */}
              </div>
            </div>
            <ul className="pagination">
              <li>
                <a href="#" className="prev-page" />
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#" className="next-page" />
              </li>
            </ul>
          </div>
        </div>
      </div>
        </>
    );
}
export default Gallery;