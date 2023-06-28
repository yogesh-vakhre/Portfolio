import React from 'react'
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs'

const BlogDetails = props => {
  return (
    <>
      <Breadcrumbs
        pageTitle="Blog Single"
        imageUrl="assets/images/bg/breadcrumb-bg-1.jpg"
      />
      <section class="blog-details-section pt-120 pb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="post-details-wrapper">
                            <div class="post-thumbnail">
                                <a href="/#"><img src="assets/images/blog/blog-1.jpg" class="img-fluid" alt=""/></a>
                                <a href="/#" class="post-cat">Car Wash</a>
                            </div>
                            <div class="post-meta">
                                <ul>
                                    <li><span class="post-date"><i class="fas fa-calendar-alt"></i><a href="/#">SEP 5 , 2021</a></span></li>
                                    <li><span class="admin"><i class="fas fa-user"></i><a href="/#">Jhon Smith</a></span></li>
                                    <li><span class="view"><i class="fas fa-eye"></i>4263</span></li>
                                    <li><span class="comment"><i class="far fa-comment-alt"></i><a href="/#">68</a></span></li>
                                </ul>
                            </div>
                            <div class="entry-content">
                                <h3 class="title">HOW TO CHOOSE A CAR DETAILING COMPANY</h3>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur et adipisicing  eiLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol aliqu aminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor sit amet, consectetur adipisicing elit tempor incididunt . Lorem ipsum dolor sit amet, consectetur .</p>
                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <div class="block-box">
                                    <h4>Improve Your Car</h4>
                                    <div class="box-list">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <ul class="list">
                                                    <li>Soft - free rinse dolore magna.</li>
                                                    <li>wash et dolore magna aliqua.</li>
                                                    <li>wash et dolore magna aliqua.</li>
                                                    <li>Soft - free rinse dolore magna.</li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-6">
                                                <ul class="list">
                                                    <li>Hand Wash magna aliqua.</li>
                                                    <li>wash et dolore magna aliqua.</li>
                                                    <li>wash et dolore magna aliqua.</li>
                                                    <li>Hand Wash magna aliqua.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-box">
                                    <h4>Daily Car Wash</h4>
                                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor si consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore commodo consequat.</p>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="block-img">
                                                <img src="assets/images/blog/single-blog-1.jpg" class="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="block-img">
                                                <img src="assets/images/blog/single-blog-2.jpg" class="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <blockquote class="block-quote bg_cover mb-45" style={{backgroundImage: "url(assets/images/blog/blockquote-bg.jpg)"}}>
                                    <i class="flaticon-right-quote"></i>
                                    <h3>“Lorem ipsum dolor sit amet, consectetur et adipisicing  eiLorem ipsum dolor sit amet, consectetur adipisicing elit”</h3>
                                    <div class="post-meta">
                                        <ul>
                                            <li><span class="post-date"><i class="fas fa-calendar-alt"></i><a href="/#">SEP 5 , 2021</a></span></li>
                                            <li><span class="admin"><i class="fas fa-user"></i><a href="/#">Jhon Smith</a></span></li>
                                            <li><span class="view"><i class="fas fa-eye"></i>4263</span></li>
                                            <li><span class="comment"><i class="far fa-comment-alt"></i><a href="/#">68</a></span></li>
                                        </ul>
                                    </div>
                                </blockquote>
                                <div class="block-box">
                                    <h4>Multipole Wash Location</h4>
                                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor si consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore commodo consequat.</p>
                                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                            <div class="post-footer mb-60">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="post-tag">
                                            <span class="tags-title">Tags:</span>
                                            <a href="/#">Inttero</a>
                                            <a href="/#">Estario</a>
                                            <a href="/#">Treands</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="post-share">
                                            <ul>
                                                <li><a href="/#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="/#"><i class="fab fa-instagram"></i></a></li>
                                                <li><a href="/#"><i class="fab fa-skype"></i></a></li>
                                                <li><a href="/#"><i class="fab fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="comments-area">
                                <h4 class="comments-title">3 Comments</h4>
                                <ul class="comments-list">
                                    <li class="comment">
                                        <div class="comment-avatar">
                                            <img src="assets/images/blog/comment-1.jpg" alt=""/>
                                        </div>
                                        <div class="comment-wrap">
                                            <div class="comment-author-content">
                                                <span class="author-name">Roe Nurr</span>
                                                <span class="date">Marce 9 , 11:00 PM</span>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.</p>
                                                <a href="/#" class="reply">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="comment">
                                        <div class="comment-avatar">
                                            <img src="assets/images/blog/comment-2.jpg" alt=""/>
                                        </div>
                                        <div class="comment-wrap">
                                            <div class="comment-author-content">
                                                <span class="author-name">Roe Nurr</span>
                                                <span class="date">Marce 9 , 11:00 PM</span>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.</p>
                                                <a href="/#" class="reply">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="comment">
                                        <div class="comment-avatar">
                                            <img src="assets/images/blog/comment-3.jpg" alt=""/>
                                        </div>
                                        <div class="comment-wrap">
                                            <div class="comment-author-content">
                                                <span class="author-name">Roe Nurr</span>
                                                <span class="date">Marce 9 , 11:00 PM</span>
                                                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.</p>
                                                <a href="/#" class="reply">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="comments-respond mb-40">
                                <h4 class="comments-heading">Leave Your  Comment</h4>
                                <p>Your Email addres not be published  adipisicing elit, sed*</p>
                                <form acton="email.html">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="form_group">
                                                <input type="text" class="form_control" placeholder="Your Name" name="name"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form_group">
                                                <input type="email" class="form_control" placeholder="Your Email" name="email"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form_group">
                                                <input type="text" class="form_control" placeholder="Website" name="website"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form_group">
                                                <textarea class="form_control" placeholder="Messege" name="message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form_group">
                                                <button class="main-btn">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="sidebar-widget-area">
                            <div class="widget widget-search mb-50">
                                <form>
                                    <div class="form_group">
                                        <input type="email" class="form_control" placeholder="Search your keyword" name="email"/>
                                        <button class="icon"><i class="flaticon-search-interface-symbol"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div class="widget widget-about mb-50">
                                <img src="assets/images/blog/thumb-1.jpg" class="img-fluid" alt=""/>
                                <h5>Sandara Mrikon</h5>
                                <p>Lorem ipsum dolor amet, Lore ipsum dolor sit amet, consectetur et adipisicing  eiLorem ipsum dolor sit amet</p>
                                <ul>
                                    <li><a href="/#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="/#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="/#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="/#"><i class="fab fa-skype"></i></a></li>
                                    <li><a href="/#"><i class="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                            <div class="widget widget-popular-feeds mb-50">
                                <h4 class="widget-title">Popular Feeds</h4>
                                <ul class="popular-post-widget">
                                    <li class="post-thumbnail-content">
                                        <img src="assets/images/blog/thumb-2.jpg" class="img-fluid" alt=""/>
                                        <div class="post-title-date">
                                            <h6><a href="/#">Lorem ipsum dolor sit amet Lorem ipsum</a></h6>
                                            <span class="posted-on"><i class="fas fa-calendar-alt"></i><a href="/#">SEP 5 , 2021</a></span>
                                        </div>
                                    </li>
                                    <li class="post-thumbnail-content">
                                        <img src="assets/images/blog/thumb-3.jpg" class="img-fluid" alt=""/>
                                        <div class="post-title-date">
                                            <h6><a href="/#">Lorem ipsum dolor sit amet Lorem ipsum</a></h6>
                                            <span class="posted-on"><i class="fas fa-calendar-alt"></i><a href="/#">SEP 5 , 2021</a></span>
                                        </div>
                                    </li>
                                    <li class="post-thumbnail-content">
                                        <img src="assets/images/blog/thumb-4.jpg" class="img-fluid" alt=""/>
                                        <div class="post-title-date">
                                            <h6><a href="/#">Lorem ipsum dolor sit amet Lorem ipsum</a></h6>
                                            <span class="posted-on"><i class="fas fa-calendar-alt"></i><a href="/#">SEP 5 , 2021</a></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="widget widget-categories mb-50">
                                <h4 class="widget-title">Categories</h4>
                                <ul class="categories-list">
                                    <li><a href="/#">Wash<span>26</span></a></li>
                                    <li><a href="/#">Hand Wash<span>21</span></a></li>
                                    <li><a href="/#">Business<span>8</span></a></li>
                                    <li><a href="/#">Booking<span>13</span></a></li>
                                    <li><a href="/#">Branding<span>16</span></a></li>
                                    <li><a href="/#">New Device<span>3</span></a></li>
                                    <li><a href="/#">Treand<span>9</span></a></li>
                                    <li><a href="/#">News<span>36</span></a></li>
                                </ul>
                            </div>
                            <div class="widget subscribe-widget">
                                <div class="subscribe-area">
                                    <h4>Subscrive</h4>
                                    <p>Dont Miss Lattest News</p>
                                    <form class="subscribe-form">
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="First Name" name="name"/>
                                        </div>
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Last Name" name="name"/>
                                        </div>
                                        <div class="form_group">
                                            <input type="text" class="form_control" placeholder="Enter mail" name="email"/>
                                        </div>
                                        <div class="form_group">
                                            <button class="main-btn subscribe-btn">Subscrive</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="widget widget_tag_cloud mb-40">
                                <h4 class="widget-title">Popular Tag</h4>
                                <div class="tagcloud">
                                    <a href="/#">Popular</a>
                                    <a href="/#">Art</a>
                                    <a href="/#">Business</a>
                                    <a href="/#">Design</a>
                                    <a href="/#">Devolper</a>
                                    <a href="/#">Creator</a>
                                    <a href="/#">Art</a>
                                    <a href="/#">Editorse</a>
                                    <a href="/#">Popular</a>
                                    <a href="/#">Art</a>
                                    <a href="/#">Business</a>
                                </div>
                            </div>
                            <div class="widget widget-contact-info">
                                <div class="contact-info-area">
                                    <i class="flaticon-help"></i>
                                    <h3>If You Have any Problem.</h3>
                                    <a href="/#" class="main-btn">Contact Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BlogDetails
