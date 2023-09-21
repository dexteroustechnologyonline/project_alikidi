"use client";

import Link from 'next/link';
import Image from 'next/image'

const Page = () => {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title End */}

      {/* 1rd Block Wrapper Start */}
      <div className="utf_block_wrapper about-block-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="single-post">
                <div className="utf_post_content-area">
                  <div className="entry-content">
                    <p
                      style={{
                        textAlign: "justify",
                        color: "#000",
                        fontSize: "24px",
                        fontWeight: "bold",
                        fontFamily: "Anek Telugu",
                      }}
                    >
                      అలికిడి న్యూస్ ::
                    </p>
                    <p
                      style={{
                        textAlign: "justify",
                        color: "#000",
                        fontFamily: "Noto Serif Telugu",
                      }}
                    >
                      నిజాన్ని నిలిపే,సమాజాన్ని మేలుకొలిపే నిఖార్సైన ఛానెల్
                      సామాన్యుని కన్నీటి గాథలు అన్నదాత ఆవేదనలు, మధ్యతరగతి
                      బ్రతుకు సిత్రాలు, ఉద్యోగ వేటలో నిరుద్యోగుల అగచాట్లు....
                      గల్ఫ్ మోసాలు.. సమాజంలో మహిళలు, చిన్నారులపై అఘాయిత్యాలు,
                      గాడితప్పుతున్న యువత , మార్గదర్శకులైన వ్యక్తుల విజయగాథలు,
                      తప్పిదాల తో గతమే బాగుండేదని నిట్టూర్పు చూపుల ఫెయిల్యూర్స్
                      స్టోరీలు,సంచలన సామాజిక రాజకీయ విశేషాలు, ప్రపంచ వింతలు....
                      ఇలాంటి మరెన్నో విషయాలను నిక్కచ్చిగా నిర్భయంగా ప్రజల చెంతకు
                      తీసుకు వచ్చే ఏకైక వేదిక.....
                    </p>
                    <p
                      style={{
                        textAlign: "justify",
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "22px",
                        fontFamily: "Noto Serif Telugu",
                      }}
                    >
                      సామాన్యుని గుండె చప్పుడు..... అలికిడి
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1rd Block Wrapper End */}

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="d-flex justify-content-start align-items-center  my-2">
              <Image src="/assets/images/youtubes.png" width={50} height={20} alt="img" />
              <Link href="https://www.youtube.com/@alikidinews" target="_blank">
                {" "}
                <h6 className="mx-2" style={{ color: "#e5342c" }}>
                  www.youtube.com/@alikidinews
                </h6>
              </Link>
            </div>
            <div className="d-flex justify-content-start align-items-center   my-2">
              <Image src="/assets/images/facebook.png" width={35} height={35} alt="img" />
              <Link
                href="https://www.facebook.com/profile.php?id=100092603236788"
                target="_blank"
              >
                <h6 className="mx-2" style={{ color: "#e5342c" }}>
                  www.facebook.com/@alikidinews
                </h6>
              </Link>
            </div>
            <div className="d-flex justify-content-start align-items-center  my-2">
              <Image src="/assets/images/insta.png" width={45} height={40} alt="img" />
              <Link
                href="https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ=="
                target="_blank"
              >
                <h6 className="mx-2" style={{ color: "#e5342c" }}>
                  www.instagram.com/@alikidinews
                </h6>
              </Link>
            </div>
            <div className="d-flex justify-content-start align-items-center  my-2">
              <Image src="/assets/images/twitter.png" width={35} height={35} alt="img" />
              <Link href="https://twitter.com/alikidinews" target="_blank">
                <h6 className="mx-2" style={{ color: "#e5342c" }}>
                  www.twitter.com/@alikidinews
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
