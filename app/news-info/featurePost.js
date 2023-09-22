"use client";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector, useDispatch } from "react-redux";
import { newsUpdate } from "../redux/news/NewsSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image'

const FeaturePost = () => {
  const {
    travellingNewsOne,
    foodNewsOne,
    healthNewsOne,
    latestNewsFive,
    sliderNews,
  } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const router = useRouter();


  const handleclick = (news) => {
    router.push(`/news-info/${news.slugUrl}`);
  };

  return (
    <>
      <section className="utf_featured_post_area pt-4 no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 pad-r mb-1">
              <Swiper
                draggable={true}
                spaceBetween={10}
              // modules={Autoplay}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              //   pauseOnMouseEnter: true,
              // }}
              >
                {sliderNews.map((news, index) => (
                  <SwiperSlide key={news._id}>
                    <div
                      id="utf_featured_slider"
                      className="utf_featured_slider"
                      key={news._id}
                    >
                      <div className="item" style={{ cursor: "pointer" }} onClick={() => handleclick(news)}>
                        {/* <Link
                        href={`/news-post-info/${news.slugUrl}`}
                        onClick={(e) => viewCount(e, news)}
                      > */}
                        <img src={news.thumbnail} style={{ width: "100%" }} />
                        {/* </Link> */}
                        <div className="utf_featured_post">
                          <div className="utf_post_content">
                            {/* <a className="utf_post_cat">{news.category}</a> */}
                            <h2 className="utf_post_title title-extra-large">
                              {/* <Link
                              href={`/news-post-info/${news.slugUrl}`}
                              onClick={(e) => viewCount(e, news)}
                            > */}
                              {news.newsTitle}
                              {/* </Link> */}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-5 col-md-12 pad-l">
              <div className="row">
                <div className="col-md-12">
                  {healthNewsOne.map((news, index) => (
                    <div
                      className="utf_post_overaly_style contentTop hot-post-top clearfix"
                      key={news._id}
                      onClick={() => handleclick(news)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* <Link
                        href={`/news-post-info/${news.slugUrl}`}
                        onClick={(e) => viewCount(e, news)}
                      > */}
                      <div className="utf_post_thumb">
                        <a>
                          <img className="img-fluid" src={news.thumbnail} alt="" />
                        </a>
                      </div>
                      {/* </Link> */}
                      <div className="utf_post_content">
                        {/* <a className="utf_post_cat">{news.category}</a> */}
                        <h2 className="utf_post_title title-large">
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
                </div>
                <div className="col-md-6 pad-r-small">
                  {foodNewsOne.map((news, index) => (
                    <div
                      className="utf_post_overaly_style contentTop utf_hot_post_bottom clearfix"
                      key={news._id}
                      onClick={() => handleclick(news)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="utf_post_thumb">
                        <a>
                          <img className="img-fluid" src={news.thumbnail} alt="" />
                        </a>
                      </div>
                      <div className="utf_post_content">
                        {/* <a className="utf_post_cat">{news.category}</a> */}
                        <h2 className="utf_post_title title-medium">
                          {/* <Link
                            href={`/news-post-info/${news.slugUrl}`}
                            onClick={(e) => viewCount(e, news)}
                          > */}
                          <a>{news.newsTitle.slice(0, 40) + "..."}</a>
                          {/* </Link> */}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-6 pad-l-small">
                  {foodNewsOne.map((news, index) => (
                    <div
                      className="utf_post_overaly_style contentTop utf_hot_post_bottom clearfix"
                      key={news._id}
                      onClick={() => handleclick(news)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="utf_post_thumb">
                        <a>
                          <img className="img-fluid" src={news.thumbnail} alt="" />
                        </a>
                      </div>
                      <div className="utf_post_content">
                        {/* <a className="utf_post_cat">{news.category}</a> */}
                        <h2 className="utf_post_title title-medium">
                          {/* <Link
                            href={`/news-post-info/${news.slugUrl}`}
                            onClick={(e) => viewCount(e, news)}
                          > */}
                          <a>{news.newsTitle.slice(0, 40) + "..."}</a>
                          {/* </Link> */}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturePost;
