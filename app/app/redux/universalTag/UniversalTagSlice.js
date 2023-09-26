import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Baseurl } from "../../../config/BaseUrl";

const initialState = {
  universalTags:[],
  uniTagthumb: "",
  isUniTagthumbLoading: true,
  universalTagLoading: true,
  deleteUniTagLoading: true,
  checkSlugurl: true,
};

export const validateSlugUrl = createAsyncThunk(
  "universaltag/validateSlugUrl",
  async (slugurl, thunkAPI) => {
    let resp = {
      success: false,
      message: "new universaltag",
    };
    try {
      const url = `${Baseurl}/api/v1/universaltag/univtagslugurl/${slugurl}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);

export const universaltagPost = createAsyncThunk(
  "universaltag/universaltagPost",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/universaltag/new`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("universaltag Not create");
    }
  }
);

export const getUniversalTag = createAsyncThunk(
  "universaltag/getUniversalTag",
  async (thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/universaltag/all`;
      const resp = await axios(url);
      return resp.data.universaltags;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const universaltagUpdate = createAsyncThunk(
  "universaltag/universaltagUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/universaltag/updateunitag/${formData.uitagid}`;
      const resp = await axios.put(url, formData, config);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("universaltag Not create");
    }
  }
);

export const universalTagThumbnail = createAsyncThunk(
  "universaltag/universalTagThumbnail",
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

      const url = `${Baseurl}/api/v1/universaltag/thumbnail`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("universaltag Thumbnail Not create");
    }
  }
);

const UniversalTagSlice = createSlice({
  name: "universaltag",
  initialState,
  reducers: {
    updateUniTagThumbnail(state, action) {
      state.uniTagthumb = action.payload;
      state.isUniTagthumbLoading = false;
    },
    resetUniTagImage(state) {
      state.uniTagthumb = "";
      state.isUniTagthumbLoading = true;
    },
  },
  extraReducers: {
    [universaltagPost.pending]: (state) => {
      state.universalTagLoading = true;
    },

    [universaltagPost.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.universalTags = [
          ...state.universalTags,
          action.payload.universaltag,
        ]
          .slice()
          .reverse();
   
      }

      state.universalTagLoading = false;
      state.checkSlugurl = false;
    },

    [universaltagPost.rejected]: (state, action) => {
      state.universalTagLoading = true;
    },
    [getUniversalTag.pending]: (state) => {
      state.universalTagLoading = true;
    },
    [getUniversalTag.fulfilled]: (state, action) => {
      state.universalTags = action.payload.slice().reverse();

  
      state.universalTagLoading = false;
    },
    [getUniversalTag.rejected]: (state, action) => {
      state.universalTagLoading = true;
    },

    [universaltagUpdate.pending]: (state) => {
      state.universalTagLoading = true;
    },

    [universaltagUpdate.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.universalTags = state.universalTags.filter(
          (unitag) => unitag._id !== action.payload.universaltag._id
        );
        state.universalTags = [
          ...state.universalTags,
          action.payload.universaltag,
        ]
          .slice()
          .reverse();
     
      }

      state.universalTagLoading = false;
    },

    [universaltagUpdate.rejected]: (state, action) => {
      state.universalTagLoading = true;
    },
    [universalTagThumbnail.pending]: (state) => {
      state.isUniTagthumbLoading = true;
    },

    [universalTagThumbnail.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.uniTagthumb = action.payload.thumbnails;
      }
      state.isUniTagthumbLoading = false;
    },

    [universalTagThumbnail.rejected]: (state, action) => {
      state.isUniTagthumbLoading = true;
    },
  },
});

export const { resetUniTagImage, updateUniTagThumbnail } =
  UniversalTagSlice.actions;
export default UniversalTagSlice.reducer;
