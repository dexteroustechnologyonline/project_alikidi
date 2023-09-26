"use client";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions, userLogin } from "../redux/Athentication/AuthSlice";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsgClr, setErrormsgclr] = useState("red");
  const [errormassage, setErrormassage] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setErrormassage("Validating email or password..");
    setErrormsgclr("green");
    try {
      if (email !== "" && password !== "") {
        const formData = {
          email: email,
          password: password,
        };

        try {
          const loginResponce = await dispatch(userLogin(formData));

          if (loginResponce.payload.success) {
            dispatch(
              authActions.signin({
                ...loginResponce.payload.user,
                isAuth: true,
              })
            );
            // navigate("/");
          } else {
            setErrormassage(" Invalid email or password");
            setErrormsgclr("red");
          }
        } catch (error) {}
      } else {
        setErrormassage(" Please enter valid inputs");
        setErrormsgclr("red");
      }
    } catch (error) {}
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
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="utf_block_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 mrb-40">
                <h3>Login</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked <span style={{ color: "red" }}>*</span>
                </p>
                <form onSubmit={onSubmitHandler}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Email*"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Password*"
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="clearfix ">
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button>
                      {errormassage !== "" ? (
                        <>
                          <p
                            style={{
                              color: errormsgClr,
                              textTransform: "capitalize",
                            }}
                          >
                            {errormassage}
                          </p>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="clearfix ">
                      <Link href="/register">
                        <button className="btn btn-primary">Signup</button>
                      </Link>
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
