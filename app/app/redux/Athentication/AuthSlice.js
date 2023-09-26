import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Baseurl } from "../../../config/BaseUrl";

const initialState = {
  isAuth: false,
  loginData: "",
  userLoading: true,
  notificationstatus:false,
  notificationBoxshow: false,
};

export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (formData, thunkAPI) => {
    let resp = {
      success: false,
      message: "user not registered",
    };
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/user/register`;
      resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (formData, thunkAPI) => {
    let resp = {
      success: false,
      message: "user not registered",
    };
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/user/loginwithpassword`;
      resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const userReporterEmail = createAsyncThunk(
  "user/userReporterEmail",
  async (email, thunkAPI) => {
    let resp = {
      success: false,
      message: "new email",
    };
    try {
      const url = `${Baseurl}/api/v1/user/email/${email}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);
export const validateuserMobile = createAsyncThunk(
  "user/validateuserMobile",
  async (mobile, thunkAPI) => {
    let resp = {
      success: false,
      message: "new email",
    };
    try {
      const url = `${Baseurl}/api/v1/user/mobile/${mobile}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      state.isAuth = action.payload.isAuth;
      state.loginData = action.payload;
      localStorage.setItem("loginData", JSON.stringify(state.loginData));
    },
    signout(state, action) {
      state.loginData = "";
      localStorage.removeItem("loginData");
      state.isAuth = false;
    },
    notificationstatusSet(state, action) {
      state.notificationstatus = action.payload.notifSatus;
      state.notificationBoxshow = action.payload.notifShowSatus;
 
    },
  },
});
export const { signin, signout, notificationstatusSet } = authSlice.actions;
export const authActions = authSlice.actions;
export default authSlice;
