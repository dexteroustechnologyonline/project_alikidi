"use client";
import { useSelector, useDispatch } from "react-redux";
import { newsUpdate } from "../redux/news/NewsSlice";
import Link from "next/link";
const SlidingCategory = () => {
  const { latestNewsFive, latestNewsSix } = useSelector((store) => store.news);
  const dispatch = useDispatch();

  const viewCount = (e, news) => {
    const formData = {
      newsid: news._id,
      _id: news._id,
      numberofViews: Number(news.numberofViews) + 1,
    };
    dispatch(newsUpdate(formData));
  };
  return (
    <>
      <section className="utf_block_wrapper p-bottom-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="utf_more_news block color-default">
                <h3 className="utf_block_title">
                  <span>View More News</span>
                </h3>
                <div
                  id="utf_more_news_slide"
                  className=" owl-theme utf_more_news_slide"
                >
                  <div className="item">
                    {latestNewsFive.map((news) => (
                      <div
                        className="utf_post_block_style utf_post_float_half clearfix"
                        key={news._id}
                      >
                        {/* <Link
                          href={`/news-post-info/${news.slugUrl}`}
                          onClick={(e) => viewCount(e, news)}
                        > */}
                          <div className="utf_post_thumb">
                            <a>
                              <img
                                className="img-fluid"
                                src={news.thumbnail}
                                alt=""
                              />
                            </a>
                          </div>
                        {/* </Link> */}
                        <div className="utf_post_content">
                          <h2 className="utf_post_title">
                            {/* <Link
                              href={`/news-post-info/${news.slugUrl}`}
                              onClick={(e) => viewCount(e, news)}
                            > */}
                              <a>{news.newsTitle}</a>
                            {/* </Link> */}
                          </h2>
                          
                          <p style={{ textAlign: "justify" }}>
                            {news.newsMainContent}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="sidebar utf_sidebar_right">
                <div className="widget color-default">
                  <h3 className="utf_block_title">
                    <span>Latest Reviews</span>
                  </h3>
                  <div className="utf_list_post_block">
                    <ul className="utf_list_post review-post-list">
                      {latestNewsSix.map((news) => (
                        <li className="clearfix" key={news._id}>
                          <div className="utf_post_block_style post-float clearfix">
                            {/* <Link
                              href={`/news-post-info/${news.slugUrl}`}
                              onClick={(e) => viewCount(e, news)}
                            > */}
                              <div className="utf_post_thumb">
                                <a>
                                  <img
                                    className="img-fluid"
                                    src={news.thumbnail}
                                    alt=""
                                  />
                                </a>
                              </div>
                            {/* </Link> */}
                            <div className="utf_post_content">
                              <h2 className="utf_post_title">
                                {/* <Link
                                  href={`/news-post-info/${news.slugUrl}`}
                                  onClick={(e) => viewCount(e, news)}
                                > */}
                                  <a>{news.newsTitle.slice(0, 45) + "..."}</a>
                                {/* </Link> */}
                              </h2>
                              <div className="utf_post_meta">
                                <div className="review-stars">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star-half-o" />
                                  <i className="fa fa-star-o" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}

                      
                    </ul>
                  </div>
                </div>
                <div className="widget m-bottom-0">
                  <h3 className="utf_block_title">
                    <span>Newsletter</span>
                  </h3>
                  <div className="utf_newsletter_block">
                    <div className="utf_newsletter_introtext">
                      <h4>Subscribe Newsletter!</h4>
                   
                    </div>
                    <div className="utf_newsletter_form">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="utf_newsletter_form-email"
                          className="form-control form-control-lg"
                          placeholder="E-Mail Address"
                          autoComplete="off"
                        />
                        <button className="btn btn-primary">Subscribe</button>
                      </div>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlidingCategory;
