"use client";

import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

import { useEffect, useState } from "react";
import { Baseurl } from "../config/BaseUrl";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../app/redux/category/CategorySlice";
import { getSubCategory } from "../app/redux/subCategory/SubCategorySlice";
import { getUniversalTag } from "../app/redux/universalTag/UniversalTagSlice";
import { getCategoryTag } from "../app/redux/categoryTag/CategoryTagSlice";
import { getAllNews } from "../app/redux/news/NewsSlice";
import { getReporterAll } from "../app/redux/reporters/ReporterSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //get category
    dispatch(getCategory());
    //getSubCategory
    dispatch(getSubCategory());
    //universalTags
    dispatch(getUniversalTag());
    //categoryTagtotal
    dispatch(getCategoryTag());
    //categoryTagtotal
    dispatch(getAllNews());
    //reporter all
    dispatch(getReporterAll());

    // displayData = async () => {
    //   try {
    //     let user = await AsyncStorage.getItem("loginData");
    //     let curUser = JSON.parse(user);
    //     if (curUser.isAuth) {
    //       dispatch(authActions.signin(curUser));
    //     }
    //   } catch (error) {}
    // };
    // if (!isAuth) {
    //   displayData();
    // }
  }, []);

  return (
    <>
     
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
