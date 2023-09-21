"use client"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import { newsUpdate, updateNewsComment } from "../redux/news/NewsSlice";
import { Baseurl } from "../../config/BaseUrl";
import Link from "next/link";

const NewsDetails = ({ newsitem, newsUrl }) => {
    const { latestFourNews, latestNews } = useSelector(
        (store) => store.news
    );

    const { universalTags } = useSelector((store) => store.universaltag);
    const { loginData } = useSelector((store) => store.auth);

    // let newsSingle = {};
    // let newsSlider1 = [];
    // let errorMassage1 = "";
    // let whatsappMassage1 = "";
    // let whatsappMas1 = "";
    // let name1 = loginData.name;
    // let email1 = loginData.email;
    // let mobile1 = loginData.mobile;
    // let shareShow1 = false;
    // let comment1 = "";
    // let youtubeLink1 = "";
    // let twitterLink1 = "";
    // let commentArray1 = [];

    const [newsSingle, setNewsSingle] = useState(newsitem);
    const [newsSlider1, setnewsSlider1] = useState(newsitem.slider);
    const [errorMassage, setErrorMassage] = useState("");
    const [whatsappMassage, setWhatsappMassage] = useState(`http://localhost:3000/news-info/${newsUrl}`);
    const [whatsappMas, setWhatsappMas] = useState("");
    const [name, setName] = useState(loginData.name);
    const [email, setEmail] = useState(loginData.email);
    const [mobile, setMobile] = useState(loginData.mobile);
    const [shareShow, setShareShow] = useState(false);
    const [comment, setComment] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [commentArray, setCommentArray] = useState([]);

    const dispatch = useDispatch();

    const viewCount = (e, news) => {
        const formData = {
            newsid: news._id,
            _id: news._id,
            numberofViews: Number(news.numberofViews),
        };
        dispatch(newsUpdate(formData));
    };
    const submit = async (e) => {
        e.preventDefault();
        if (loginData.isAuth === true) {
            try {
                const formData = {
                    userName: name,
                    userEmail: email,
                    newsComment: comment,
                    newsId: newsSingle._id,
                };

                const config = {
                    Headers: { "Content-Type": "application/json" },
                };
                try {
                    const addComment = await axios.put(
                        `${Baseurl}/api/v1/news/newscomment`,
                        formData,
                        config
                    );
                    if (addComment.data.success) {
                        setComment("");
                        const updatednews = addComment.data.news;
                        dispatch(updateNewsComment(updatednews));
                        setCommentArray([...newsSingle.review, formData]);
                    }
                } catch (error) { }
            } catch (error) { }
        } else {
            setErrorMassage("please login first");
        }
    };

    return (
        <>
            <div className="page-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb">
                                <li>
                                    <a>Home</a>
                                </li>
                                <li>News Post Info</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="utf_block_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="single-post">
                                <div className="utf_post_title-area">
                                    <a className="utf_post_cat">{newsSingle.category}</a>
                                    <h2 className="utf_post_title">{newsSingle.newsTitle}</h2>
                                    <div className="utf_post_meta">
                                        <span className="utf_post_author">
                                            By <a>{newsSingle.reporterName}</a>
                                        </span>
                                        {newsSingle.hasOwnProperty("district") ? (
                                            <>
                                                <span className="utf_post_author">
                                                    ,<a>{newsSingle.district}</a>
                                                </span>
                                            </>
                                        ) : (
                                            <></>
                                        )}

                                        {newsSingle.hasOwnProperty("mandal") ? (
                                            <>
                                                <span className="utf_post_author">
                                                    ,<a>{newsSingle.mandal}</a>
                                                </span>
                                            </>
                                        ) : (
                                            <></>
                                        )}

                                        <span className="utf_post_date">
                                            <i className="fa fa-clock-o" />
                                            {moment(newsSingle.createdAt).format("MMM DD, YYYY")}
                                        </span>
                                        <span className="post-hits">
                                            <i className="fa fa-eye" /> {newsSingle.numberofViews}
                                        </span>
                                        <span className="post-comment">
                                            <i className="fa fa-comments-o" />
                                            <a className="comments-link">
                                                <span>{commentArray.length}</span>
                                            </a>
                                        </span>
                                        <span className="utf_post_author">www.alikidi.com</span>
                                    </div>
                                    <div className="utf_post_meta"></div>
                                </div>
                                <div className="utf_post_content-area">
                                    <div className="share-items clearfix">
                                        <ul className="post-social-icons unstyled">
                                            <li
                                                className="alishare"
                                                onClick={() => setShareShow(!shareShow)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <a>
                                                    <i className="fa fa-share-alt" />
                                                    <span className="ts-social-title">Share</span>
                                                </a>
                                            </li>

                                            {shareShow === true ? (
                                                <>
                                                    <li className="whatsup">
                                                        <a>
                                                            <WhatsappShareButton
                                                                url={whatsappMassage}
                                                                quote={"alikidi"}
                                                                hashtag={"#AlikidiNews"}
                                                            >
                                                                <WhatsappIcon
                                                                    size={20}
                                                                    style={{ verticalAlign: "middle" }}
                                                                />
                                                                <span className="ts-social-title">
                                                                    WHAT'S APP
                                                                </span>
                                                            </WhatsappShareButton>
                                                        </a>
                                                    </li>
                                                    <li className="facebook">
                                                        <a
                                                            href="https://www.facebook.com/profile.php?id=100092603236788"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook" />
                                                            <span className="ts-social-title">Facebook</span>
                                                        </a>
                                                    </li>
                                                    <li className="gplus">
                                                        <a
                                                            href="https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ=="
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-instagram" />
                                                            <span className="ts-social-title">Instagram</span>
                                                        </a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a
                                                            href="https://www.youtube.com/@alikidinews"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-youtube" />
                                                            <span className="ts-social-title">Youtube</span>
                                                        </a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a
                                                            href="https://twitter.com/alikidinews"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter" />
                                                            <span className="ts-social-title">Twitter</span>
                                                        </a>
                                                    </li>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </ul>
                                    </div>
                                    <Swiper
                                        grabCursor={true}
                                        navigation={false}
                                        pagination={true}
                                        mousewheel={false}
                                        keyboard={true}
                                        // modules={[
                                        //   Navigation,
                                        //   Pagination,
                                        //   Mousewheel,
                                        //   Keyboard,
                                        //   Autoplay,
                                        // ]}
                                        loop={true}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        }}
                                        className="homeSlider mt-2"
                                    >
                                        {newsSlider1.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="post-media post-featured-image">
                                                    <a className="gallery-popup">
                                                        <img src={image} className="img-fluid" alt="" />
                                                    </a>
                                                    <div className="smallbannerSec">
                                                        <div className="Secheading w-75">
                                                            <p className="text-left pl-3">
                                                                {newsSingle.newsTitle}
                                                            </p>
                                                        </div>
                                                        <div className="d-flex w-25 bottomcontainerimg">
                                                            <div>
                                                                <img
                                                                    src="/assets/images/favlogobanner.png"
                                                                    className="img-fluid news-images"
                                                                    alt="invalid"
                                                                />
                                                            </div>
                                                            <div className="pl-2 mobile">
                                                                <p className="alikidiheading">AlikidiNews</p>
                                                                <p className="indiaread">#IndiaAlikidiNews</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <div className="row">
                                        {newsSingle.hasOwnProperty("newsVideoYouTubeLink") &&
                                            newsSingle.newsVideoYouTubeLink != "" ? (
                                            <>
                                                <div className="col-md-6">
                                                    <div className="utf_post_block_style my-2">
                                                        <a>
                                                            <iframe
                                                                width="360"
                                                                height="239"
                                                                src={newsSingle.newsVideoYouTubeLink}
                                                                title="YouTube video player"
                                                                frameborder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                allowfullscreen
                                                            ></iframe>
                                                        </a>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <></>
                                        )}

                                        {newsSingle.hasOwnProperty("newsVideoTwitterLink") ? (
                                            <></>
                                        ) : (
                                            <>
                                                {newsSingle.hasOwnProperty("newsVideoYouTubeLink") &&
                                                    newsSingle.newsVideoYouTubeLink != "" ? (
                                                    <>
                                                        <div className="col-md-6">
                                                            <div className="utf_post_block_style my-2">
                                                                <a>
                                                                    <iframe
                                                                        width="360"
                                                                        height="239"
                                                                        src={newsSingle.newsVideoYouTubeLink}
                                                                        title="YouTube video player"
                                                                        frameborder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                        allowfullscreen
                                                                    ></iframe>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </>
                                        )}
                                    </div>

                                    <div className="entry-content">
                                        <p style={{ textAlign: "justify" }}>
                                            {newsSingle.newsContent}
                                        </p>
                                    </div>

                                    <div className="share-items clearfix">
                                        <ul className="post-social-icons unstyled">
                                            <li
                                                className="alishare"
                                                onClick={() => setShareShow(!shareShow)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <a>
                                                    <i className="fa fa-share-alt" />
                                                    <span className="ts-social-title">Share</span>
                                                </a>
                                            </li>

                                            {shareShow === true ? (
                                                <>
                                                    <li className="whatsup">
                                                        <a href={`${whatsappMassage}`} target="_blank">
                                                            <i className="fa fa-whatsapp" />
                                                            <span className="ts-social-title">
                                                                what's app
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="facebook">
                                                        <a
                                                            href="https://www.facebook.com/profile.php?id=100092603236788"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-facebook" />
                                                            <span className="ts-social-title">Facebook</span>
                                                        </a>
                                                    </li>
                                                    <li className="gplus">
                                                        <a
                                                            href="https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ=="
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-instagram" />
                                                            <span className="ts-social-title">Instagram</span>
                                                        </a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a
                                                            href="https://www.youtube.com/@alikidinews"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-youtube" />
                                                            <span className="ts-social-title">Youtube</span>
                                                        </a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a
                                                            href="https://twitter.com/alikidinews"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-twitter" />
                                                            <span className="ts-social-title">Twitter</span>
                                                        </a>
                                                    </li>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {commentArray.map((comet, index) => (
                                <div className="author-box" key={index}>
                                    <div className="author-img pull-left">
                                        <img src="images/news/author.png" alt="" />
                                    </div>
                                    <div className="author-info">
                                        <h3>{comet.userName}</h3>
                                        <p style={{ textAlign: "justify" }}>{comet.newsComment}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="related-posts block">
                                <h3 className="utf_block_title">
                                    <span>Related Posts</span>
                                </h3>
                                <div
                                    id="utf_latest_news_slide"
                                    className="  utf_latest_news_slide"
                                >
                                    <div className="item ">
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
                                            breakpoints={{
                                                360: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 5,
                                                },
                                                460: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 5,
                                                },
                                                720: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 20,
                                                },
                                                1080: {
                                                    slidesPerView: 6,
                                                    spaceBetween: 7,
                                                },
                                            }}
                                        >
                                            <div>
                                                {latestNews.map((news, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="utf_post_block_style clearfix ">
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
                                                                <a
                                                                    className="utf_post_cat"
                                                                    style={{ cursor: "pointer" }}
                                                                >
                                                                    {news.category}
                                                                </a>
                                                                <div className="utf_post_content">
                                                                    <h2
                                                                        className="utf_post_title title-medium"
                                                                        style={{ cursor: "pointer" }}
                                                                    >
                                                                        <Link
                                                                            href={`/news-post-info/${news.slugUrl}`}
                                                                            onClick={(e) => viewCount(e, news)}
                                                                        >
                                                                            {news.newsTitle}
                                                                        </Link>
                                                                    </h2>
                                                                    <div className="utf_post_meta">
                                                                        <span className="utf_post_date">
                                                                            <i className="fa fa-clock-o" />
                                                                            {moment(news.createdAt).format(
                                                                                "MMM DD, YYYY"
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-form">
                                <h3 className="title-normal">Leave a comment</h3>
                                <form onSubmit={submit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Name"
                                                    type="text"
                                                    disabled
                                                    value={name}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email"
                                                    type="email"
                                                    disabled
                                                    value={email}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    type="text"
                                                    disabled
                                                    value={mobile}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Subject"
                          type="text"
                          required
                        />
                      </div> */}
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control required-field"
                                                    id="message"
                                                    placeholder="Comment"
                                                    rows={10}
                                                    required
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{ color: "tomato" }}>{errorMassage}</p>
                                    <div className="clearfix">
                                        <button
                                            className="comments-btn btn btn-primary"
                                            type="submit"
                                        >
                                            Post Comment
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* Comments form end */}
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar utf_sidebar_right">
                                <div className="widget">
                                    <h3 className="utf_block_title">
                                        <span>Follow Us</span>
                                    </h3>
                                    <ul className="social-icon">
                                        {/* <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-rss" />
                      </a>
                    </li> */}
                                        <li>
                                            <a
                                                href="https://www.facebook.com/profile.php?id=100092603236788"
                                                target="_blank"
                                            >
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/alikidinews" target="_blank">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:alikidinews@gmail.com" target="_blank">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                        </li>
                                        {/* <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-vimeo-square" />
                      </a>
                    </li> */}
                                        <li>
                                            <a
                                                href="https://www.youtube.com/@alikidinews"
                                                target="_blank"
                                            >
                                                <i className="fa fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ=="
                                                target="_blank"
                                            >
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget color-default">
                                    <h3 className="utf_block_title">
                                        <span>Popular News</span>
                                    </h3>
                                    <div className="utf_list_post_block">
                                        <ul className="utf_list_post">
                                            {latestFourNews.map((news, index) => (
                                                <li className="clearfix" key={index}>
                                                    <div className="utf_post_block_style post-float clearfix">
                                                        <Link
                                                            href={`/news-post-info/${news.slugUrl}`}
                                                            onClick={(e) => viewCount(e, news)}
                                                        >
                                                            <div className="utf_post_thumb">
                                                                <img
                                                                    className="img-fluid"
                                                                    src={news.thumbnail}
                                                                    alt=""
                                                                />

                                                                {/* <a
                                  className="utf_post_cat"
                                  style={{ color: "#fff" }}
                                >
                                  {news.category}
                                </a> */}
                                                            </div>
                                                        </Link>
                                                        <div className="utf_post_content">
                                                            <h2 className="utf_post_title title-small">
                                                                <Link
                                                                    href={`/news-post-info/${news.slugUrl}`}
                                                                    onClick={(e) => viewCount(e, news)}
                                                                >
                                                                    {news.newsTitle}
                                                                </Link>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget text-center">
                                    <img
                                        className="banner img-fluid"
                                        src="images/banner-ads/ad-sidebar.png"
                                        alt=""
                                    />
                                </div>
                                <div className="widget widget-tags">
                                    <h3 className="utf_block_title">
                                        <span>Popular Tags</span>
                                    </h3>
                                    <ul className="unstyled clearfix">
                                        {universalTags.map((tag, index) => (
                                            <li style={{ cursor: "pointer" }} key={index}>
                                                <a key={tag._id}>{tag.name}</a>
                                            </li>
                                        ))}
                                        {universalTags
                                            .slice()
                                            .reverse()
                                            .map((tag, index) => (
                                                <li style={{ cursor: "pointer" }} key={index}>
                                                    <a key={tag._id}>{tag.name}</a>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="widget m-bottom-0">
                                    <h3 className="utf_block_title">
                                        <span>Newsletter</span>
                                    </h3>
                                    <div className="utf_newsletter_block">
                                        <div className="utf_newsletter_introtext">
                                            <h4>Subscribe Newsletter!</h4>
                                            {/* <p>
                        Lorem ipsum dolor sit consectetur adipiscing elit
                        Maecenas in pulvinar neque Nulla finibus lobortis
                        pulvinar.
                      </p> */}
                                        </div>
                                        <div className="utf_newsletter_form">
                                            {/* <form action="#" method="post"> */}
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
                                            {/* </form> */}
                                        </div>
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

export default NewsDetails