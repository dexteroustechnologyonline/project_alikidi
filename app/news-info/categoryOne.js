"use client";
import { useSelector, useDispatch } from "react-redux";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { newsUpdate } from "../redux/news/NewsSlice";
import Link from "next/link";

const CategoryOne = () => {
  const {
    technologyNewsFour,
    latestFourNews,
    latestNewxtFourNews,
    foodNewsOne,
    healthNewsOne,
    travellingNewsOne,
  } = useSelector((store) => store.news);

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
              <div className="utf_featured_tab color-blue">
                <h3 className="utf_block_title">
                  <span>Technology News</span>
                </h3>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link animated fadeIn active show"
                      
                      data-toggle="tab"
                    >
                      <span className="tab-head">
                        <span className="tab-text-title">Lifestyle</span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link animated fadeIn show"
                      //
                      data-toggle="tab"
                    >
                      <span className="tab-head">
                        <span className="tab-text-title">Traveling</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane animated fadeInRight active show"
                    id="tab_a"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        {foodNewsOne.map((news, index) => (
                          <div
                            className="utf_post_block_style clearfix"
                            key={index}
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
                              <h2
                                className="utf_post_title"
                                style={{ cursor: "pointer" }}
                              >
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
                      <div className="col-lg-6 col-md-6">
                        <div className="utf_list_post_block">
                          <ul className="utf_list_post">
                            {technologyNewsFour.map((news, index) => (
                              <li className="clearfix" key={index}>
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
                                          style={{ cursor: "pointer" }}
                                        />
                                      </a>
                                    </div>
                                  {/* </Link> */}
                                  <div className="utf_post_content">
                                    <h2 className="utf_post_title title-small">
                                      {/* <Link
                                        href={`/news-post-info/${news.slugUrl}`}
                                        onClick={(e) => viewCount(e, news)}
                                      > */}
                                        <a style={{ cursor: "pointer" }}>
                                          {news.newsTitle}
                                        </a>
                                      {/* </Link> */}
                                    </h2>
                                    
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane animated fadeInLeft  show"
                    id="tab_b"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="utf_post_block_style clearfix">
                          <div className="utf_post_thumb">
                            <a>
                              <img
                                className="img-fluid"
                                src="images/news/tech/robot1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="utf_post_cat">Traveling</a>
                          <div className="utf_post_content">
                            <h2 className="utf_post_title">
                              <a>
                                Ratcliffe to be Director nation intelligence
                                Trump ignored...
                              </a>
                            </h2>
                            <div className="utf_post_meta">
                              <span className="utf_post_author">
                                <a>John Wick</a>
                              </span>
                              <span className="utf_post_date">
                                25 Jan, 2022
                              </span>
                            </div>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text since has five...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="utf_list_post_block">
                          <ul className="utf_list_post">
                            <li className="clearfix">
                              <div className="utf_post_block_style post-float clearfix">
                                <div className="utf_post_thumb">
                                  <a>
                                    <img
                                      className="img-fluid"
                                      src="images/news/tech/robot2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="utf_post_content">
                                  <h2 className="utf_post_title title-small">
                                    <a>
                                      Zhang social media pop also known when
                                      smart innocent...
                                    </a>
                                  </h2>
                                  <div className="utf_post_meta">
                                    <span className="utf_post_author">
                                      <i className="fa fa-user" />
                                      <a>John Wick</a>
                                    </span>
                                    <span className="utf_post_date">
                                      <i className="fa fa-clock-o" /> 25 Jan,
                                      2022
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="clearfix">
                              <div className="utf_post_block_style post-float clearfix">
                                <div className="utf_post_thumb">
                                  <a>
                                    <img
                                      className="img-fluid"
                                      src="images/news/tech/robot3.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="utf_post_content">
                                  <h2 className="utf_post_title title-small">
                                    <a>
                                      Zhang social media pop also known when
                                      smart innocent...
                                    </a>
                                  </h2>
                                  <div className="utf_post_meta">
                                    <span className="utf_post_author">
                                      <i className="fa fa-user" />
                                      <a>John Wick</a>
                                    </span>
                                    <span className="utf_post_date">
                                      <i className="fa fa-clock-o" /> 25 Jan,
                                      2022
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="clearfix">
                              <div className="utf_post_block_style post-float clearfix">
                                <div className="utf_post_thumb">
                                  <a>
                                    <img
                                      className="img-fluid"
                                      src="images/news/tech/robot4.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="utf_post_content">
                                  <h2 className="utf_post_title title-small">
                                    <a>
                                      Zhang social media pop also known when
                                      smart innocent...
                                    </a>
                                  </h2>
                                  <div className="utf_post_meta">
                                    <span className="utf_post_author">
                                      <i className="fa fa-user" />
                                      <a>John Wick</a>
                                    </span>
                                    <span className="utf_post_date">
                                      <i className="fa fa-clock-o" /> 25 Jan,
                                      2022
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="clearfix">
                              <div className="utf_post_block_style post-float clearfix">
                                <div className="utf_post_thumb">
                                  <a>
                                    <img
                                      className="img-fluid"
                                      src="images/news/tech/robot5.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="utf_post_content">
                                  <h2 className="utf_post_title title-small">
                                    <a>
                                      Zhang social media pop also known when
                                      smart innocent...
                                    </a>
                                  </h2>
                                  <div className="utf_post_meta">
                                    <span className="utf_post_author">
                                      <i className="fa fa-user" />
                                      <a>John Wick</a>
                                    </span>
                                    <span className="utf_post_date">
                                      <i className="fa fa-clock-o" /> 25 Jan,
                                      2022
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-30" />
              <div className="block color-orange">
                <h3 className="utf_block_title">
                  <span>Lifestyle News</span>
                </h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    {healthNewsOne.map((news, index) => (
                      <div
                        className="utf_post_overaly_style clearfix"
                        key={index}
                      >
                        {/* <Link
                          href={`/news-post-info/${news.slugUrl}`}
                          onClick={(e) => viewCount(e, news)}
                          style={{ cursor: "pointer" }}
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
                          <h2
                            className="utf_post_title"
                            style={{ cursor: "pointer" }}
                          >
                            {/* <Link
                              href={`/news-post-info/${news.slugUrl}`}
                              onClick={(e) => viewCount(e, news)}
                            > */}
                              <a>{news.newsTitle}</a>
                            {/* </Link> */}
                          </h2>
                   
                        </div>
                      </div>
                    ))}
                    <div className="utf_list_post_block">
                      <ul className="utf_list_post">
                        {latestFourNews.map((news, index) => (
                          <li className="clearfix" key={index}>
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
                                      style={{ cursor: "pointer" }}
                                    />
                                  </a>
                                  {/* <a
                                    className="utf_post_cat"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {news.category}
                                  </a> */}
                                </div>
                              {/* </Link> */}
                              <div className="utf_post_content">
                                <h2 className="utf_post_title title-small">
                                  {/* <Link
                                    to={`/news-post-info/${news.slugUrl}`}
                                    onClick={(e) => viewCount(e, news)}
                                  > */}
                                    <a style={{ cursor: "pointer" }}>
                                      {news.newsTitle}
                                    </a>
                                  {/* </Link> */}
                                </h2>
                               
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    {travellingNewsOne.map((news, index) => (
                      <div
                        className="utf_post_overaly_style clearfix"
                        key={index}
                      >
                        {/* <Link
                          href={`/news-post-info/${news.slugUrl}`}
                          onClick={(e) => viewCount(e, news)}
                          style={{ cursor: "pointer" }}
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
                          <h2
                            className="utf_post_title"
                            style={{ cursor: "pointer" }}
                          >
                            {/* <Link
                              href={`/news-post-info/${news.slugUrl}`}
                              onClick={(e) => viewCount(e, news)}
                            > */}
                              <a>{news.newsTitle}</a>
                            {/* </Link> */}
                          </h2>
                          
                        </div>
                      </div>
                    ))}
                    <div className="utf_list_post_block">
                      <ul className="utf_list_post">
                        {latestNewxtFourNews.map((news, index) => (
                          <li className="clearfix" key={index}>
                            <div className="utf_post_block_style post-float clearfix">
                              <div className="utf_post_thumb">
                                <a>
                                  <img
                                    className="img-fluid"
                                    src={news.thumbnail}
                                    alt=""
                                    style={{ cursor: "pointer" }}
                                  />
                                </a>
                           
                              </div>
                              <div className="utf_post_content">
                                <h2 className="utf_post_title title-small">
                                  {/* <Link
                                    href={`/news-post-info/${news.slugUrl}`}
                                    onClick={(e) => viewCount(e, news)}
                                  > */}
                                    <a style={{ cursor: "pointer" }}>
                                      {news.newsTitle}
                                    </a>
                                  {/* </Link> */}
                                </h2>
                                {/* <div className="utf_post_meta">
                                  <span className="utf_post_author">
                                    <i className="fa fa-user" />
                                    <a style={{ cursor: "pointer" }}>
                                      {news.reporterName}
                                    </a>
                                  </span>
                                  <span className="utf_post_date">
                                    <i className="fa fa-clock-o" />
                                    {moment(news.createdAt).format(
                                      "MMM DD, YYYY"
                                    )}
                                  </span>
                                </div> */}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="sidebar utf_sidebar_right">
                <div className="widget">
                  <h3 className="utf_block_title">
                    <span>Follow Us</span>
                  </h3>
                  <ul className="social-icon">
                    <li>
                      <a target="_blank">
                        <i className="fa fa-rss" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <i className="fa fa-vimeo-square" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget color-default">
                  <h3 className="utf_block_title">
                    <span>Popular News</span>
                  </h3>
                  <Swiper
                    draggable={true}
                    spaceBetween={10}
                    modules={Autoplay}
                    // loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                  >
                    {latestFourNews.map((news, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="utf_post_overaly_style clearfix"
                         
                        >
                          <div className="utf_post_thumb">
                            <a>
                              <img
                                className="img-fluid"
                                src={news.thumbnail}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="utf_post_content">
                            <a className="utf_post_cat">{news.category}</a>
                            <h2 className="utf_post_title">
                              {/* <Link
                                href={`/news-post-info/${news.slugUrl}`}
                                onClick={(e) => viewCount(e, news)}
                              > */}
                                <a>{news.newsTitle}</a>
                              {/* </Link> */}
                            </h2>
                       
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="utf_list_post_block">
                    <ul className="utf_list_post">
                      {latestFourNews.map((news, index) => (
                        <li className="clearfix" key={index}>
                          <div className="utf_post_block_style post-float clearfix">
                            <div className="utf_post_thumb">
                              <a>
                                <img
                                  className="img-fluid"
                                  src={news.thumbnail}
                                  alt=""
                                  style={{ cursor: "pointer" }}
                                />
                              </a>
                            
                            </div>
                            <div className="utf_post_content">
                              <h2 className="utf_post_title title-small">
                                {/* <Link
                                  href={`/news-post-info/${news.slugUrl}`}
                                  onClick={(e) => viewCount(e, news)}
                                > */}
                                  <a style={{ cursor: "pointer" }}>
                                    {news.newsTitle}
                                  </a>
                                {/* </Link> */}
                              </h2>
                             
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="widget color-default m-bottom-0">
                  <h3 className="utf_block_title">
                    <span>Trending News</span>
                  </h3>
                  <Swiper
                    draggable={true}
                    spaceBetween={10}
                    modules={Autoplay}
                    // loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                  >
                    {technologyNewsFour.map((news, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="utf_post_overaly_style clearfix"
                          
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
                        
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryOne;
