import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Baseurl } from "../../../config/BaseUrl";

const initialState = {
  newsTotal: [],
  latestNews: [],

  latestNewsFive: [],
  latestNewsSix: [],
  latestFourNews: [],
  latestNewxtFourNews: [],
  technologyNews:  [],
  sliderNews:[],
  technologyNewsFour:  [],

  travellingNewsThree: [],
  travellingNewsOne: [],
  foodNewsThree: [],
  foodNewsOne:  [],
  healthNewsThree: [],
  healthNewsOne: [],

  newsSlider: "",
  newsthumb: "",
  newsicon: "",

  isnewsSliderLoading: true,
  isNewsthumbLoading: true,
  isnewsiconLoading: true,

  newsLoading: true,
  deleteNewsLoading: true,
  checkSlugurl: true,
};

export const newsPost = createAsyncThunk(
  "news/newsPost",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/news/new`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("news Not create");
    }
  }
);

export const validateSlugUrl = createAsyncThunk(
  "news/validateSlugUrl",
  async (slugurl, thunkAPI) => {
    let resp = {
      success: false,
      message: "new news",
    };
    try {
      const url = `${Baseurl}/api/v1/news/newsslugurl/${slugurl}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);

export const newsImageUpload = createAsyncThunk(
  "news/newsImageUpload",
  async (formData, thunkAPI) => {
    try {
      const config = {
        maxBodyLength: Infinity,
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=AaB03x" +
            "--AaB03x" +
            "Content-Disposition: file" +
            "Content-Type: png/jpg/jpeg" +
            "Content-Transfer-Encoding: binary" +
            "...data... " +
            "--AaB03x--",
          Accept: "application/json",
          type: "formData",
        },
      };
      const url = `${Baseurl}/api/v1/news/newsimage`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("news Not create");
    }
  }
);

export const getNewsByReporterId = createAsyncThunk(
  "news/getNewsByReporterId",
  async (reporterId, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/news/reporterid/${reporterId}`;
      const resp = await axios(url);
      return resp.data.news;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const getAllNews = createAsyncThunk(
  "news/getAllNews",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/news/all`;
      const resp = await axios(url);
      return resp.data.news;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const newsUpdate = createAsyncThunk(
  "news/newsUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/news/newsupdate/${formData.newsid}`;
      const resp = await axios.put(url, formData, config);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("news Not create");
    }
  }
);

export const getFindByNewsId = createAsyncThunk(
  "news/getFindByNewsId",
  async (reporterId, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/news/findbyid/${reporterId}`;
      const resp = await axios(url);
      return resp.data.news;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    resetNewsImage(state) {
      state.newsSlider = "";
      state.newsthumb = "";
      state.newsicon = "";
      state.isnewsSliderLoading = true;
      state.isNewsthumbLoading = true;
      state.isnewsiconLoading = true;
    },
    updateNewsImages(state, action) {
      state.newsSlider = action.payload;
      state.newsthumb = action.payload;
      state.newsicon = action.payload;
      state.isnewsSliderLoading = false;
      state.isNewsthumbLoading = false;
      state.isnewsiconLoading = false;
    },
    updateNewsComment(state, action) {
      state.newsTotal = [...state.newsTotal, action.payload];
      state.newsLoading = false;
    },
  },
  extraReducers: {
    [newsPost.pending]: (state) => {
      state.newsLoading = true;
    },

    [newsPost.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.newsTotal = [...state.newsTotal, action.payload.news]
          .slice()
          .reverse();
      }

      state.newsLoading = false;
      state.checkSlugurl = false;
    },

    [newsPost.rejected]: (state, action) => {
      state.newsLoading = true;
    },

    [newsImageUpload.pending]: (state) => {
      state.isnewsSliderLoading = true;
    },
    [newsImageUpload.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.newsSlider = action.payload.sliders;
        state.newsthumb = action.payload.thumbnails;
        state.newsicon = action.payload.icons;
      }
      state.isnewsSliderLoading = false;
      state.isNewsthumbLoading = false;
      state.isnewsiconLoading = false;
    },
    [newsImageUpload.rejected]: (state) => {
      state.isnewsSliderLoading = true;
    },

    [getAllNews.pending]: (state) => {
      state.newsLoading = true;
    },
    [getAllNews.fulfilled]: (state, action) => {
      state.newsTotal = action.payload.slice().reverse();
      state.latestNews = state.newsTotal.slice(0, 12);
      state.latestNewsFive = state.newsTotal.slice(0, 5);
      state.latestNewsSix = state.newsTotal.slice(0, 6);
      state.latestFourNews = state.newsTotal.slice(1, 5);
      state.latestNewxtFourNews = state.newsTotal.slice(6, 10);
      state.technologyNews = state.newsTotal.filter(
        (news) => news.categoryId === "642ff5f1444bae4057baff43"
      );
      state.technologyNewsFour = state.newsTotal
        .filter((news) => news.categoryId === "642ff5f1444bae4057baff43")
        .slice(0, 4);
      state.travellingNewsThree = state.newsTotal
        .filter((news) => news.categoryId === "642ff5f1444bae4057baff43")
        .slice(0, 3);
      state.travellingNewsOne = state.newsTotal
        .filter((news) => news.categoryId === "642ff5f1444bae4057baff43")
        .slice(0, 1);
      state.foodNewsThree = state.newsTotal
        .filter((news) => news.categoryId === "642fcfeb444bae4057bafd2c")
        .slice(0, 3);
      state.foodNewsOne = state.newsTotal
        .filter((news) => news.categoryId === "642fcfeb444bae4057bafd2c")
        .slice(0, 1);
      state.healthNewsThree = state.newsTotal
        .filter((news) => news.categoryId === "642fcfd5444bae4057bafd29")
        .slice(0, 3);
      state.healthNewsOne = state.newsTotal
        .filter((news) => news.categoryId === "642fcfd5444bae4057bafd29")
        .slice(0, 1);
      state.sliderNews = state.newsTotal
        .filter((news) => news.sliderShow === true)
        // .slice()
        // .reverse()
        .slice(0, 5);

      state.newsLoading = false;
    },
    [getAllNews.rejected]: (state, action) => {
      state.newsLoading = true;
    },
    [newsUpdate.pending]: (state) => {
      state.newsLoading = true;
    },

    [newsUpdate.fulfilled]: (state, action) => {
      if (action.payload.success) {
        // state.newsTotal = state.newsTotal.filter(
        //   (news) => news._id !== action.payload.news._id
        // );
        state.newsTotal = [...state.newsTotal, action.payload.news + 1]
          .slice()
          .reverse();
      }

      state.newsLoading = false;
    },

    [newsUpdate.rejected]: (state, action) => {
      state.newsLoading = true;
    },
  },
});

export const { resetNewsImage, updateNewsImages, updateNewsComment } =
  NewsSlice.actions;
export default NewsSlice.reducer;
