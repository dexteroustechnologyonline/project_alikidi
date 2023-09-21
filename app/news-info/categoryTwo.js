"use client";
import { useSelector, useDispatch } from "react-redux";
import { newsUpdate } from "../redux/news/NewsSlice";
import Link from "next/link";

const CategoryTwo = () => {
  const {
    travellingNewsThree,
    healthNewsThree,
    foodNewsThree,
    travellingNewsOne,
    foodNewsOne,
    healthNewsOne,
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
            <div className="col-lg-4">
              <div className="block color-dark-blue">
                <h3 className="utf_block_title">
                  <span>Travel News</span>
                </h3>
                {travellingNewsOne.map((news) => (
                  <div
                    className="utf_post_overaly_style clearfix"
                    key={news._id}
                  >
                    <div className="utf_post_thumb">
                      <a>
                        <img className="img-fluid" src={news.thumbnail} alt="" />
                      </a>
                    </div>
                    <div className="utf_post_content">
                      <h2
                        className="utf_post_title"
                        style={{ cursor: "pointer" }}
                      >
                        {/* <Link href={`/news-post-info/${news.slugUrl}`} onClick={(e) => viewCount(e, news)}> */}
                          <a>{news.newsTitle}</a>
                        {/* </Link> */}
                      </h2>
                 
                    </div>
                  </div>
                ))}

                <div className="utf_list_post_block">
                  <ul className="utf_list_post">
                    {travellingNewsThree.map((news) => (
                      <li className="clearfix" key={news._id}>
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
                              {/* <Link href={`/news-post-info/${news.slugUrl}`} onClick={(e) => viewCount(e, news)}> */}
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
            <div className="col-lg-4">
              <div className="block color-aqua">
                <h3 className="utf_block_title">
                  <span>Lifestyle News</span>
                </h3>
                {foodNewsOne.map((news) => (
                  <div
                    className="utf_post_overaly_style clearfix"
                    key={news._id}
                  >
                    <div className="utf_post_thumb">
                      <a>
                        <img className="img-fluid" src={news.thumbnail} alt="" />
                      </a>
                    </div>
                    <div className="utf_post_content">
                      <h2
                        className="utf_post_title"
                        style={{ cursor: "pointer" }}
                      >
                        {/* <Link href={`/news-post-info/${news.slugUrl}`} onClick={(e) => viewCount(e, news)}> */}
                          <a>{news.newsTitle}</a>
                        {/* </Link> */}
                      </h2>
                    
                    </div>
                  </div>
                ))}
                <div className="utf_list_post_block">
                  <ul className="utf_list_post">
                    {foodNewsThree.map((news) => (
                      <li className="clearfix" key={news._id}>
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
                              {/* <Link href={`/news-post-info/${news.slugUrl}`} onClick={(e) => viewCount(e, news)}> */}
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
            <div className="col-lg-4">
              <div className="block color-violet">
                <h3 className="utf_block_title">
                  <span>Health News</span>
                </h3>
                {healthNewsOne.map((news) => (
                  <div
                    className="utf_post_overaly_style clearfix"
                    key={news._id}
                  >
                    <div className="utf_post_thumb">
                      <a>
                        <img className="img-fluid" src={news.thumbnail} alt="" />
                      </a>
                    </div>
                    <div className="utf_post_content">
                      <h2
                        className="utf_post_title"
                        style={{ cursor: "pointer" }}
                      >
                        {/* <Link href={`/news-post-info/${news.slugUrl}`} onClick={(e) => viewCount(e, news)}> */}
                          <a>{news.newsTitle}</a>
                        {/* </Link> */}
                      </h2>
                  
                    </div>
                  </div>
                ))}
                <div className="utf_list_post_block">
                  <ul className="utf_list_post">
                    {healthNewsThree.map((news) => (
                      <li className="clearfix" key={news._id}>
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
                              {/* <Link href={`/news-post-info/${news.slugUrl}`} onClick={(e) => viewCount(e, news)}> */}
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
        </div>
      </section>
    </>
  )
}

export default CategoryTwo