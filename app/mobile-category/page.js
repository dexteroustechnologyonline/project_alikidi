"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
const Page = () => {
  const { allCategorys } = useSelector((store) => store.category);
  const router = useRouter();
  
  const redirectCat = (e, category) => {
    router.push(`/category/${category.slugUrl}`);
  };

  return (
    <>
      <div className="col-sm-12 col-md-12" style={{ padding: 0, margin: 0 }}>
        <div
          className="col-sm-6 col-md-6 catmaincontain"
          style={{ padding: 0, margin: 0 }}
        >
          {allCategorys &&
            allCategorys.map((category, index) => (
              <div className="catmbContain" key={category._id} style={{ cursor: "pointer" }} onClick={(e) => redirectCat(e, category)}>
                <div className="catdiv">
                  {/* <Link href={`/category/${category.slugUrl}`}> */}
                  <img src={category.thumbnail} alt="cat-img" />
                  <h6 className="imagename">{category.name}</h6>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          <div className="catmbContain">
            <div className="catdiv">
              <Link href="/about">
                <img src="assets/images/aboutus.jpeg" alt="cat-img" />
                <h6 className="imagename">About Us</h6>
              </Link>
            </div>
          </div>
          <div className="catmbContain">
            <div className="catdiv">
              <Link href="/contact">
                <img src="assets/images/contactus.jpeg" alt="cat-img" />
                <h6 className="imagename">Contact Us</h6>
              </Link>
            </div>
          </div>
          <div className="catmbContain">
            <div className="catdiv">
              <Link href="/youtubevideo">
                <img src="assets/images/contactus.jpeg" alt="cat-img" />
                <h6 className="imagename">Videos</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
