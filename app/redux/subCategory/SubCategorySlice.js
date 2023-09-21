import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Baseurl } from "../../../config/BaseUrl";

const initialState = {
  subcategorytotal:[],
  subCatthumb: "",
  isSubCatthumbLoading: true,
  isSubCatLoading: true,
  deleteSubCatLoading: true,
  checkSlugurl: true,
};

export const subCategoryPost = createAsyncThunk(
  "subCategory/subCategoryPost",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/subcategory/new`;
      const resp = await axios.post(url, formData, config);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Sub Category Not create");
    }
  }
);

export const getSubCategory = createAsyncThunk(
  "subCategory/getSubCategory",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/subcategory/all`;
      const resp = await axios(url);
      return resp.data.subcategories;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const validatesubcatSlugUrl = createAsyncThunk(
  "subcategory/validatesubcatSlugUrl",
  async (slugurl, thunkAPI) => {
    let resp = {
      success: false,
      message: "new subcategory",
    };
    try {
      const url = `${Baseurl}/api/v1/subcategory/slugurl/${slugurl}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);

export const subCategoryUpdate = createAsyncThunk(
  "subCategory/subCategoryUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/subcategory/subcatupdate/${formData.subcatid}`;
      const resp = await axios.put(url, formData, config);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("subcategory Not create");
    }
  }
);

export const subCategoryThumbnail = createAsyncThunk(
  "subCategory/subCategoryThumbnail",
  async (formData, thunkAPI) => {
    try {
      const config = {
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

      const url = `${Baseurl}/api/v1/subcategory/thumbnail`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("subcategory Thumbnail Not create");
    }
  }
);

const SubCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {
    updateSubCatThumbnail(state, action) {
      state.subCatthumb = action.payload;
      state.isSubCatthumbLoading = false;
    },
    resetSubCategoryImage(state) {
      state.subCatthumb = "";
      state.isSubCatthumbLoading = true;
    },
  },
  extraReducers: {
    [subCategoryPost.pending]: (state) => {
      state.isSubCatLoading = true;
    },

    [subCategoryPost.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.subcategorytotal = [
          ...state.subcategorytotal,
          action.payload.subcategory,
        ];
    
      }
      state.isSubCatLoading = false;
    },

    [subCategoryPost.rejected]: (state, action) => {
      state.isSubCatLoading = true;
    },
    [getSubCategory.pending]: (state) => {
      state.isSubCatLoading = true;
    },
    [getSubCategory.fulfilled]: (state, action) => {
      state.subcategorytotal = action.payload;

   
      state.isSubCatLoading = false;
    },
    [getSubCategory.rejected]: (state, action) => {
      state.isSubCatLoading = true;
    },
    [subCategoryUpdate.pending]: (state) => {
      state.isSubCatLoading = true;
    },

    [subCategoryUpdate.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.subcategorytotal = state.subcategorytotal.filter(
          (subcategory) => subcategory._id !== action.payload.subcategory._id
        );
        state.subcategorytotal = [
          ...state.subcategorytotal,
          action.payload.subcategory,
        ];

    
      }
      state.isSubCatLoading = false;
    },

    [subCategoryUpdate.rejected]: (state, action) => {
      state.isSubCatLoading = true;
    },
    [subCategoryThumbnail.pending]: (state) => {
      state.isSubCatthumbLoading = true;
    },

    [subCategoryThumbnail.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.subCatthumb = action.payload.thumbnails;
      }
      state.isSubCatthumbLoading = false;
    },

    [subCategoryThumbnail.rejected]: (state, action) => {
      state.isSubCatthumbLoading = true;
    },
  },
});

export const {updateSubCatThumbnail,resetSubCategoryImage} = SubCategorySlice.actions;
export default SubCategorySlice.reducer;
