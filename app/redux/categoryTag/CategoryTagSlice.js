import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Baseurl } from "../../../config/BaseUrl";

const initialState = {
  categoryTagtotal: [],
 
  catTagthumb: "",
  isCatTagthumbLoading: true,
  iscategoryTagLoading: true,
  deletecategoryTagLoading: true,
  checkSlugurl: true,
};

export const categoryTagPost = createAsyncThunk(
  "categoryTag/categoryTagPost",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/categorytag/new`;
      const resp = await axios.post(url, formData, config);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("categoryTag Not create");
    }
  }
);

export const validatesubcatSlugUrl = createAsyncThunk(
  "categoryTag/validatesubcatSlugUrl",
  async (slugurl, thunkAPI) => {
    let resp = {
      success: false,
      message: "new categoryTag",
    };
    try {
      const url = `${Baseurl}/api/v1/categorytag/cattagslugurl/${slugurl}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);

export const getCategoryTag = createAsyncThunk(
  "categoryTag/getCategoryTag",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/categorytag/all`;
      const resp = await axios(url);
      return resp.data.categorytags;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const categoryTagUpdate = createAsyncThunk(
  "categoryTag/categoryTagUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/categorytag/updatecattag/${formData.cattagid}`;
      const resp = await axios.put(url, formData, config);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("categoryTag Not create");
    }
  }
);

export const categoryTagThumbnail = createAsyncThunk(
  "categoryTag/categoryTagThumbnail",
  async (formData, thunkAPI) => {
    try {
      const config = {
        // Headers: { "Content-Type": "application/json" },
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

      const url = `${Baseurl}/api/v1/categorytag/thumbnail`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("categoryTag Thumbnail Not create");
    }
  }
);

const CategoryTagSlice = createSlice({
  name: "categoryTag",
  initialState,
  reducers: {
    updateCatTagThumbnail(state, action) {
      state.catTagthumb = action.payload;
      state.isCatTagthumbLoading = false;
    },
    resetCategoryTagImage(state) {
      state.catTagthumb = "";
      state.isCatTagthumbLoading = true;
    },
  },
  extraReducers: {
    [categoryTagPost.pending]: (state) => {
      state.iscategoryTagLoading = true;
    },

    [categoryTagPost.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.categoryTagtotal = [
          ...state.categoryTagtotal,
          action.payload.categorytag,
        ];
    
      }
      state.iscategoryTagLoading = false;
    },

    [categoryTagPost.rejected]: (state, action) => {
      state.iscategoryTagLoading = true;
    },
    [getCategoryTag.pending]: (state) => {
      state.iscategoryTagLoading = true;
    },
    [getCategoryTag.fulfilled]: (state, action) => {
      state.categoryTagtotal = action.payload;

 
      state.iscategoryTagLoading = false;
    },
    [getCategoryTag.rejected]: (state, action) => {
      state.iscategoryTagLoading = true;
    },
    [categoryTagUpdate.pending]: (state) => {
      state.iscategoryTagLoading = true;
    },

    [categoryTagUpdate.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.categoryTagtotal = state.categoryTagtotal.filter(
          (categorytag) => categorytag._id !== action.payload.categorytag._id
        );
        state.categoryTagtotal = [
          ...state.categoryTagtotal,
          action.payload.categorytag,
        ];

      }
      state.iscategoryTagLoading = false;
    },

    [categoryTagUpdate.rejected]: (state, action) => {
      state.iscategoryTagLoading = true;
    },
    [categoryTagThumbnail.pending]: (state) => {
      state.isCatTagthumbLoading = true;
    },

    [categoryTagThumbnail.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.catTagthumb = action.payload.thumbnails;
      }
      state.isCatTagthumbLoading = false;
    },

    [categoryTagThumbnail.rejected]: (state, action) => {
      state.isCatTagthumbLoading = true;
    },
  },
});

export const { updateCatTagThumbnail, resetCategoryTagImage } =
  CategoryTagSlice.actions;
export default CategoryTagSlice.reducer;
