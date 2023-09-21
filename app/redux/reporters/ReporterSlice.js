import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Baseurl } from "../../../config/BaseUrl";

const initialState = {
  reportersTotal: [],
  approvedReporters: [],
  notApprovedReporters: [],
  blockedReporters: [],

  reporterKycImage: [],
  reporterImage: "",

  isreporterKycImageLoading: true,
  reporterLoading: true,
  reporterIamgeLoading: true,
};

export const reporterRegister = createAsyncThunk(
  "reporter/reporterRegister",
  async (formData, thunkAPI) => {
    let resp = {
      success: false,
      message: "reporter not registered",
    };
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/reporter/register`;
      resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const validateReporterEmail = createAsyncThunk(
  "reporter/validateReporterEmail",
  async (email, thunkAPI) => {
    let resp = {
      success: false,
      message: "new email",
    };
    try {
      const url = `${Baseurl}/api/v1/reporter/email/${email}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);
export const validateReporterMobile = createAsyncThunk(
  "reporter/validateReporterMobile",
  async (mobile, thunkAPI) => {
    let resp = {
      success: false,
      message: "new email",
    };
    try {
      const url = `${Baseurl}/api/v1/reporter/mobile/${mobile}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);
export const validateReporterKYcDocument = createAsyncThunk(
  "reporter/validateReporterKYcDocument",
  async (kycdocument, thunkAPI) => {
    let resp = {
      success: false,
      message: "new kyc document",
    };
    try {
      const url = `${Baseurl}/api/v1/reporter/kycdocument/${kycdocument}`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);
export const getReporterAll = createAsyncThunk(
  "reporter/getReporterAll",
  async (thunkAPI) => {
    let resp = {
      success: false,
      message: "new kyc document",
    };
    try {
      const url = `${Baseurl}/api/v1/reporter/reporterall`;
      const resp = await axios.get(url);
      return resp.data.repertories;
    } catch (error) {
      return error;
    }
  }
);
export const UploadkycDocumentImage = createAsyncThunk(
  "reporter/UploadkycDocumentImage",
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

      const url = `${Baseurl}/api/v1/reporter/kycdocumentImage`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("kyc document Image Not create");
    }
  }
);
export const reporterUpdate = createAsyncThunk(
  "reporter/reporterUpdate",
  async (formData, thunkAPI) => {
    try {
      const config = {
        Headers: { "Content-Type": "application/json" },
      };
      const url = `${Baseurl}/api/v1/reporter/reporterUpdate/${formData.reprterid}`;
      const resp = await axios.put(url, formData, config);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("category Not create");
    }
  }
);
export const UploadAvatharImageImage = createAsyncThunk(
  "reporter/UploadAvatharImageImage",
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

      const url = `${Baseurl}/api/v1/reporter/avatharImage`;
      const resp = await axios.post(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("kyc document Image Not create");
    }
  }
);

const ReporterSlice = createSlice({
  name: "reporter",
  initialState,
  reducers: {
    updateKycImages(state, action) {
      state.reporterKycImage = action.payload;
      state.isreporterKycImageLoading = false;
    },
    removeImages(state, action) {
      state.reporterImage = action.payload;
      state.reporterIamgeLoading = false;
    },
    resetNewsImage(state) {
      state.reporterKycImage = "";
      state.isreporterKycImageLoading = true;
    },
  },
  extraReducers: {
    [reporterRegister.pending]: (state) => {
      state.reporterLoading = true;
    },

    [reporterRegister.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.reportersTotal = [
          ...state.reportersTotal,
          action.payload.reporter,
        ];
        state.approvedReporters = state.reportersTotal.filter(
          (reorter) => reorter.reporterStatusText === "Approved"
        );
        state.notApprovedReporters = state.reportersTotal.filter(
          (reorter) => reorter.reporterStatusText === "Not Approved"
        );
        state.blockedReporters = state.reportersTotal.filter(
          (reorter) => reorter.reporterStatusText === "Blocked"
        );
      }

      state.reporterLoading = false;
    },

    [reporterRegister.rejected]: (state, action) => {
      state.reporterLoading = true;
    },
    [getReporterAll.pending]: (state) => {
      state.reporterLoading = true;
    },
    [getReporterAll.fulfilled]: (state, action) => {
      state.reportersTotal = action.payload;
      state.approvedReporters = state.reportersTotal.filter(
        (reorter) => reorter.reporterStatusText === "Approved"
      );

      state.notApprovedReporters = state.reportersTotal.filter(
        (reorter) => reorter.reporterStatusText === "Not Approved"
      );
      state.blockedReporters = state.reportersTotal.filter(
        (reorter) => reorter.reporterStatusText === "Blocked"
      );

      state.reporterLoading = false;
    },
    [getReporterAll.rejected]: (state, action) => {
      state.reporterLoading = true;
    },

    [UploadkycDocumentImage.pending]: (state) => {
      state.isreporterKycImageLoading = true;
    },

    [UploadkycDocumentImage.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.reporterKycImage = [
          ...state.reporterKycImage,
          action.payload.kycdocumentImages,
        ];
      }
      state.isreporterKycImageLoading = false;
    },

    [UploadkycDocumentImage.rejected]: (state, action) => {
      state.isreporterKycImageLoading = true;
    },
    [reporterUpdate.pending]: (state) => {
      state.reporterLoading = true;
    },

    [reporterUpdate.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.reportersTotal = state.reportersTotal.filter(
          (reporter) => reporter._id !== action.payload.reporter._id
        );
        state.reportersTotal = [
          ...state.reportersTotal,
          action.payload.reporter,
        ];

        state.approvedReporters = state.reportersTotal.filter(
          (reorter) => reorter.reporterStatusText === "Approved"
        );
        state.notApprovedReporters = state.reportersTotal.filter(
          (reorter) => reorter.reporterStatusText === "Not Approved"
        );
        state.blockedReporters = state.reportersTotal.filter(
          (reorter) => reorter.reporterStatusText === "Blocked"
        );
      }

      state.reporterLoading = false;
    },

    [reporterUpdate.rejected]: (state, action) => {
      state.reporterLoading = true;
    },
    [UploadAvatharImageImage.pending]: (state) => {
      state.reporterIamgeLoading = true;
    },

    [UploadAvatharImageImage.fulfilled]: (state, action) => {
      if (action.payload.success) {
        state.reporterImage = action.payload.avatharImages;
      }
      state.reporterIamgeLoading = false;
    },

    [UploadAvatharImageImage.rejected]: (state, action) => {
      state.reporterIamgeLoading = true;
    },
  },
});

export const { resetNewsImage, updateKycImages, removeImages } =
  ReporterSlice.actions;
export default ReporterSlice.reducer;
