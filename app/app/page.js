
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import FeaturePost from "./news-info/featurePost";
import AddPage2 from "./news-info/addPage2";
import AddsPage from "./news-info/addsPage";
import CategoryOne from "./news-info/categoryOne";
import CategoryTwo from "./news-info/categoryTwo";
import LatestNews from "./news-info/latestNews";
import SlidingCategory from "./news-info/slidingCategory";


const Page = async () => {

  return (
    <>
      <FeaturePost />
      <LatestNews />
      <AddsPage />
      <CategoryOne />
      <CategoryTwo />
      <SlidingCategory />
      <AddPage2 />
    </>
  );
};

export default Page;
