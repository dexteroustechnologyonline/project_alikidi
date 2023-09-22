"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newsUpdate } from "../app/redux/news/NewsSlice";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Footer = () => {
  const { foodNewsThree } = useSelector((store) => store.news);
  const { allCategorys } = useSelector((store) => store.category);


  const dispatch = useDispatch();
  const router = useRouter();

  const handleclick = (news) => {
    router.push(`/news-info/${news.slugUrl}`);
    const formData = {
      newsid: news._id,
      _id: news._id,
      numberofViews: Number(news.numberofViews) + 1,
    };
    dispatch(newsUpdate(formData));

  };

  const redirectCat = (e, category) => {
    router.push(`/category/${category.slugUrl}`);
  };

  return (
    <>
      {/* Footer Start */}
      <footer id="footer" className="footer">
        <div className="utf_footer_main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-12 col-xs-12 footer-widget contact-widget">
                <ul>
                  <li>
                    <i className="fa fa-home" /> Kukatpally houshing bord 2nd
                    Phase,Hyderabad,Telangana,India - 500072
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <a>+91 234 567 8765</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />
                    <a href="mailto:alikidinews@gmail.com" target="_blank">
                      alikidinews@gmail.com
                    </a>
                  </li>
                </ul>
                <ul className="unstyled utf_footer_social">
                  <li>
                    <a
                      title="Facebook"
                      href="https://www.facebook.com/profile.php?id=100092603236788"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      title="Twitter"
                      href="https://twitter.com/alikidinews"
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      title="Google+"
                      href="mailto:alikidinews@gmail.com"
                      target="_blank"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>

                  <li>
                    <a
                      title="Instagram"
                      href="https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ=="
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12 footer-widget widget-categories">
                <h3 className="widget-title">Popular Categories</h3>
                <ul>
                  {allCategorys.map((cat) => (
                    <li key={cat._id} style={{ cursor: "pointer" }} onClick={(e) => redirectCat(e, cat)}>
                      <i className="fa fa-angle-double-right" />

                      <a>
                        <span className="catTitle">{cat.name}</span>
                        <span className="catCounter"> </span>
                      </a>

                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-4 col-sm-12 col-xs-12 footer-widget">
                <h3 className="widget-title">Popular Post</h3>
                <div className="utf_list_post_block">
                  <ul className="utf_list_post">
                    {foodNewsThree.map((news) => (
                      <li className="clearfix" key={news._id} style={{ cursor: "pointer" }} onClick={() => handleclick(news)}>
                        <div className="utf_post_block_style post-float clearfix">
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
                            <h2 className="utf_post_title title-small">
                              <a>{news.newsTitle}</a>
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
      </footer>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="utf_copyright_info">
                <span>
                  Copyright © 2022{" "}
                  <span style={{ color: "#ec0000" }}>Alikidi News </span>All
                  Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </>
  );
};

export default Footer;
