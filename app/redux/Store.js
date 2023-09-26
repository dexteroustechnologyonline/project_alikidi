import { configureStore } from "@reduxjs/toolkit";
import examplereducer from "./Examle/Examole";
import authSlice from "./Athentication/AuthSlice";
import categoryreducer from "./category/CategorySlice";
import subCategoryreducer from "./subCategory/SubCategorySlice";
import universaltagreducer from "./universalTag/UniversalTagSlice";
import categoryTagreducer from "./categoryTag/CategoryTagSlice";
import newsreducer from "./news/NewsSlice";
import reporterreducer from "./reporters/ReporterSlice";

export const store = configureStore({
  reducer: {
    example: examplereducer,
    auth: authSlice.reducer,
    category: categoryreducer,
    subCategory: subCategoryreducer,
    universaltag: universaltagreducer,
    categoryTag: categoryTagreducer,
    news: newsreducer,
    reporter: reporterreducer,
  },
});
