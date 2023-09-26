"use client";
import { useSelector, useDispatch } from "react-redux";
import { newsUpdate } from "../redux/news/NewsSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LatestNews = () => {
  const { latestNews } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleclick = (news) => {
    router.push(`/news-info/${news.slugUrl}`);
  };
  return (
    <>
      <section className="utf_latest_new_area pb-bottom-20">
        <div className="container">
          <div className="utf_latest_news block color-red">
            <h3 className="utf_block_title">
              <span>Latest News</span>
            </h3>

            <div
              id="utf_latest_news_slide"
              className=" owl-carousel owl-theme utf_latest_news_slide owl-loaded "
            >
              <div className="item">
                <ul className="utf_list_post d-flex flex-wrap">
                  {latestNews.map((news) => (
                    <li
                      className="clearfix col-lg-3 col-md-4 col-sm-6 my-1"
                      key={news._id}
                      style={{ cursor: "pointer" }} onClick={() => handleclick(news)}
                    >
                      <div className="utf_post_block_style clearfix">
                        {/* <Link
                          href={`/news-post-info/${news.slugUrl}`}
                          onClick={(e) => viewCount(e, news)}
                        > */}
                        <div
                          className="utf_post_thumb"
                          style={{ position: "relative" }}
                        >
                          <a style={{ cursor: "pointer" }}>
                            <img
                              className="img-fluid"
                              src={news.thumbnail}
                              alt=""
                            />
                          </a>
                          <img
                            style={{
                              position: "absolute",
                              top: 0,
                              right: 3,
                              height: "60px",
                              width: "100px",
                            }}
                            src="assets/images/transpimg.png"
                            alt=""
                          />
                        </div>
                        {/* </Link> */}

                        <div className="utf_post_content">
                          <h2
                            className="utf_post_title title-medium"
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
