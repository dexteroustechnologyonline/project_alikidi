import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Baseurl } from "../../../config/BaseUrl";

const initialState = {
  allCategorys:[],
  catthumb: "",
  isCatthumbLoading: true,
  categoryLoading: true,
  deleteCatLoading: true,
  checkSlugurl: true,
};

export const categoryPost = createAsyncThunk(
  "category/categorypost",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/category/new`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("category Not create");
    }
  }
);

export const validateSlugUrl = createAsyncThunk(
  "category/validateSlugUrl",
  async (slugurl, thunkAPI) => {
    let resp = {
      success: false,
      message: "new category",
    };
    try {
      const url = `${Baseurl}/api/v1/category/catslugurl/${slugurl}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/category/all`;
      const resp = await axios(url);
      return resp.data.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const categoryUpdate = createAsyncThunk(
  "category/categoryUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/category/catupdate/${formData.catid}`;
      const resp = await axios.put(url, formData, config);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("category Not create");
    }
  }
);

export const categoryThumbnail = createAsyncThunk(
  "category/categoryThumbnail",
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

      const url = `${Baseurl}/api/v1/category/thumbnail`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("category Thumbnail Not create");
    }
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCatThumbnail(state, action) {
      state.catthumb = action.payload;
      state.isCatthumbLoading = false;
    },
    resetCategoryImage(state) {
      state.catthumb = "";
      state.isCatthumbLoading = true;
    },
  },
  extraReducers: {
    [categoryPost.pending]: (state) => {
      state.categoryLoading = true;
    },

    [categoryPost.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.allCategorys = [...state.allCategorys, action.payload.category]
          .slice()
          .reverse();
  
      }

      state.categoryLoading = false;
      state.checkSlugurl = false;
    },

    [categoryPost.rejected]: (state, action) => {
      state.categoryLoading = true;
    },
    [getCategory.pending]: (state) => {
      state.categoryLoading = true;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.allCategorys = action.payload.slice().reverse();

      state.categoryLoading = false;
    },
    [getCategory.rejected]: (state, action) => {
      state.categoryLoading = true;
    },

    [categoryUpdate.pending]: (state) => {
      state.categoryLoading = true;
    },

    [categoryUpdate.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.allCategorys = state.allCategorys.filter(
          (category) => category._id !== action.payload.category._id
        );
        state.allCategorys = [...state.allCategorys, action.payload.category]
          .slice()
          .reverse();
    
      }

      state.categoryLoading = false;
    },

    [categoryUpdate.rejected]: (state, action) => {
      state.categoryLoading = true;
    },
    [categoryThumbnail.pending]: (state) => {
      state.isCatthumbLoading = true;
    },

    [categoryThumbnail.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.catthumb = action.payload.thumbnails;
      }
      state.isCatthumbLoading = false;
    },

    [categoryThumbnail.rejected]: (state, action) => {
      state.isCatthumbLoading = true;
    },
  },
});

export const { resetCategoryImage,updateCatThumbnail } = CategorySlice.actions;
export default CategorySlice.reducer;
