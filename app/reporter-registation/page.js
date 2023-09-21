"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  UploadAvatharImageImage,
  UploadkycDocumentImage,
  removeImages,
  reporterRegister,
  resetNewsImage,
  updateKycImages,
  validateReporterEmail,
  validateReporterKYcDocument,
  validateReporterMobile,
} from "../redux/reporters/ReporterSlice";
import Link from "next/link";

const Page = () => {
  const {
    reporterKycImage,
    isreporterKycImageLoading,
    reporterIamgeLoading,
    reporterImage,
  } = useSelector((store) => store.reporter);

  const [fiesrname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [errormassageEmail, setErrormassageEmail] = useState("");
  const [uniqueemail, setUniqueEmail] = useState("");

  const [mobile, setMobile] = useState("");
  const [errormassageMobile, setErrormassageMobile] = useState("");
  const [comformphoneNo, setComformphoneNo] = useState("");

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [uniquepassword, setUniquePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [distict, setDestict] = useState("");
  const [mandal, setmandal] = useState("");
  const [kycDocument, setKycDocument] = useState("");
  const [uniqekycDocument, setUniqekycDocument] = useState("");
  const [kycDocumentError, setKycDocumentError] = useState("");

  const [errormsg, setErrormsg] = useState("");
  const [errormsgClr, setErrormsgclr] = useState("tomato");
  const [errormsgClr2, setErrormsgclr2] = useState("tomato");
  const [errormsgClr3, setErrormsgclr3] = useState("tomato");

  const dispatch = useDispatch();

  const verifyemail = async (e) => {
    const value = e.target.value;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(value);
    if (value.length > 0) {
      if (value.match(mailformat)) {
        if (value != "") {
          let responce = await dispatch(validateReporterEmail(value));
          if (responce.payload.success) {
            setErrormassageEmail("Email already exist");
            setErrormsgclr("tomato");
          } else {
            setUniqueEmail(value);

            setErrormassageEmail("Email available");
            setErrormsgclr("green");
          }
        }
      } else {
        setErrormassageEmail("please enter correct Email format");
        setErrormsgclr("tomato");
      }
    } else {
      setErrormassageEmail("please enter correct Email format");
      setErrormsgclr("tomato");
    }
  };

  const verifyPhoneNumber = async (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobile(value);
    if (value.length === 10) {
      let responce = await dispatch(validateReporterMobile(value));

      if (responce.payload.success) {
        setErrormassageMobile("Number already exist");
        setErrormsgclr2("tomato");
      } else {
        setComformphoneNo(value);
        setErrormassageMobile("Mobile Number available");
        setErrormsgclr2("green");
      }
    } else {
      setErrormassageMobile("Please enter valid number");
      setErrormsgclr2("tomato");
    }
  };

  const kycDocumentChange = async (e) => {
    const value = e.target.value;
    setKycDocument(value);
    if (value.length > 0) {
      let responce = await dispatch(validateReporterKYcDocument(value));

      if (responce.payload.success) {
        setKycDocumentError("KYC document already exist");
        setErrormsgclr3("tomato");
      } else {
        setUniqekycDocument(value);
        setKycDocumentError("KYC document available");
        setErrormsgclr3("green");
      }
    } else {
      setKycDocumentError("Please enter valid KYC document");
      setErrormsgclr3("tomato");
    }
  };

  const thumbnailChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch(UploadkycDocumentImage({ kycdocumentImage: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const imageRemoveClick = (e, imagename, indexnumber) => {
    let imagearray = reporterKycImage;
    imagearray = imagearray.filter((image) => image !== imagename);
    dispatch(updateKycImages(imagearray));
  };

  const avatharChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch(UploadAvatharImageImage({ avatharImage: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const avatharRemoveClick = (e, imagename, indexnumber) => {
    let imagearray = reporterImage;
    imagearray = imagearray.filter((image) => image !== imagename);
    dispatch(removeImages(imagearray));
  };

  const confirmpasswordChange = (e) => {
    const value = e.target.value;
    setConfirmpassword(value);

    if (value !== password) {
      setErrormsgclr("red");
      setPasswordError("password not matched");
    } else {
      setUniquePassword(value);
      setPasswordError("password matched");
      setErrormsgclr("green");
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (
      uniqueemail != "" &&
      comformphoneNo != "" &&
      uniqekycDocument !== "" &&
      fiesrname !== "" &&
      lastname !== ""
    ) {
      const formData = {
        firstname:
          fiesrname.charAt(0).toUpperCase() + fiesrname.slice(1).toLowerCase(),

        lastname:
          lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase(),
        email: uniqueemail,
        mobile: comformphoneNo,
        password: password,
        kycdocument: uniqekycDocument,
        kycdocumentImage: reporterKycImage,
        district: distict,
        mandal: mandal,
        avatar: reporterImage,
        reporterStatus: "1",
        reporterStatusText: "Not Approved",
      };
      console.log(formData, "formData");
      const data = await dispatch(reporterRegister(formData));
      console.log(data.payload, "data");
      if (!data) {
        <div></div>;
      } else {
        if (data.payload.success) {
          setErrormsg(
            "Registations Successfully and Pending for Admin Approval "
          );
          setErrormsgclr("green");
          setFirstName("");
          setLastName("");
          setEmail("");
          setUniqueEmail("");
          setMobile("");
          setComformphoneNo("");
          setKycDocument("");
          setUniqekycDocument("");
          setErrormassageEmail("");
          setErrormassageMobile("");
          setKycDocumentError("");
          setDestict("");
          setmandal("");
          setPassword("");
          dispatch(resetNewsImage());
        } else {
          setErrormsg("Reporter Added Un-Successfully");
          setErrormsgclr("tomato");
        }
      }
    } else {
      alert("please enter currect data");
    }
  };

  return (
    <>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>Reporter-Registation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="utf_block_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 d-flex justify-content-center align-items-center">
              <div className="col-lg-10 col-md-12 mrb-40">
                <h3>Reporter-Registation</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked <span style={{ color: "red" }}>*</span>
                </p>
                <form onSubmit={handlesubmit}>
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                      <div className="form-group col-md-6">
                        <label>First Name</label>
                        <input
                          className="form-control"
                          placeholder="First Name*"
                          type="text"
                          required
                          value={fiesrname}
                          onChange={(e) => setFirstName(e.target.value)}
                          style={{ textTransform: "capitalize" }}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Last Name</label>

                        <input
                          className="form-control"
                          placeholder="Last Name*"
                          type="text"
                          required
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)}
                          style={{ textTransform: "capitalize" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                      <div className="form-group col-md-6">
                        <label>Email</label>
                        <input
                          className="form-control"
                          placeholder="Email*"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => verifyemail(e)}
                        />
                        <p
                          style={{ color: errormsgClr, fontWeight: 500 }}
                          className="mt-2"
                        >
                          {errormassageEmail}
                        </p>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Mobile</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile Number"
                          value={mobile}
                          required
                          minLength={10}
                          maxLength={10}
                          pattern="[6789][0-9]{9}"
                          onChange={(e) => verifyPhoneNumber(e)}
                        />
                        <p
                          style={{ color: errormsgClr2, fontWeight: 500 }}
                          className="mt-2"
                        >
                          {errormassageMobile}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                      <div className="form-group col-md-6">
                        <label>Distict</label>
                        <input
                          className="form-control"
                          placeholder="Distict*"
                          type="text"
                          required
                          value={distict}
                          onChange={(e) => setDestict(e.target.value)}
                          style={{ textTransform: "capitalize" }}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Mandal</label>
                        <input
                          className="form-control"
                          placeholder="Mandal*"
                          type="text"
                          required
                          value={mandal}
                          onChange={(e) => setmandal(e.target.value)}
                          style={{ textTransform: "capitalize" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                      <div className="form-group col-md-6">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          minLength={6}
                          maxLength={14}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>KYC Document (Aadhar Number)</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter aadhar number*"
                          required
                          value={kycDocument}
                          onChange={(e) => kycDocumentChange(e)}
                        />
                        <p
                          style={{ color: errormsgClr3, fontWeight: 500 }}
                          className="mt-2"
                        >
                          {kycDocumentError}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                      <div className="form-group col-md-6">
                        <label>
                          KYC Document Image (Aadhar)
                          <span style={{ color: "tomato" }}> *</span>
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          onChange={thumbnailChange}
                          multiple
                        />
                        <p className="text-center mt-2">
                          uploading image size should be less then 1MB*
                        </p>
                        <div>
                          {isreporterKycImageLoading ? (
                            <div></div>
                          ) : (
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                              }}
                            >
                              {reporterKycImage.map((image, index) => (
                                <div
                                  style={{
                                    position: "relative",
                                    height: "100px",
                                    width: "135px",
                                    margin: "3px",
                                  }}
                                  key={image._id}
                                >
                                  <img
                                    src={image}
                                    height="100%"
                                    style={{
                                      height: "100px",
                                      width: "140px",
                                      margin: "5px",
                                    }}
                                    alt="img"
                                  />
                                  <span
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      right: 3,
                                    }}
                                    onClick={(e) =>
                                      imageRemoveClick(e, image, index)
                                    }
                                  >
                                    <h6
                                      style={{
                                        fontWeight: "bold",
                                        color: "red",
                                        cursor: "pointer",
                                        fontSize: "20px",
                                      }}
                                    >
                                      X
                                    </h6>
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="form-group col-md-6">
                        <label>Reporter Image</label>
                        <span style={{ color: "tomato" }}> *</span>

                        <input
                          className="form-control"
                          type="file"
                          onChange={avatharChange}
                        />
                        <p className="text-center mt-2">
                          uploading image size should be less then 1MB*
                        </p>
                        <div>
                          {reporterIamgeLoading ? (
                            <div></div>
                          ) : (
                            <>
                              <img
                                src={reporterImage}
                                height="100%"
                                style={{
                                  height: "100px",
                                  width: "140px",
                                  margin: "5px",
                                }}
                                alt="img"
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="clearfix ">
                      <button className="btn btn-primary" type="submit">
                        Registation
                      </button>
                    </div>
                    <div
                      className="clearfix "
                      style={{ color: errormsgClr, fontSize: "15px" }}
                    >
                      {errormsg}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
