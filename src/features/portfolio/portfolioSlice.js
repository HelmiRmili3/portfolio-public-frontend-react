import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to fetch portfolio data
export const fetchPortfolio = createAsyncThunk(
  "portfolio/fetchPortfolio",
  async () => {
    const response = await axios.get("http://localhost:4001/v1/portfolio/1"); // Replace with your API endpoint
    return response.data;
  }
);

// Slice
const portfolioSlice = createSlice({
  name: "portfolio", // Corrected slice name
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectHeaderData = (state) => ({
  cvlink: state.portfolio.data?.cvlink,
});

// Selectors
export const selectHeroData = (state) => ({
  greeting: state.portfolio.data?.greeting,
  bio: state.portfolio.data?.bio,
  country: state.portfolio.data?.country,
  city: state.portfolio.data?.city,
  profilepicture: state.portfolio.data?.profilepicture,
  note: state.portfolio.data?.note,
  socialmedia: state.portfolio.data?.socialmedia,
});

export const selectAboutData = (state) => ({
  aboutphrase: state.portfolio.data?.aboutphrase,
  aboutpicture: state.portfolio.data?.aboutpicture,
  aboutcontent: state.portfolio.data?.aboutcontent,
});

export const selectSkillsData = (state) => ({
  skillsphrase: state.portfolio.data?.skillsphrase,
  technologies: state.portfolio.data?.technologies,
});

export const selectExperienceData = (state) => ({
  experiencephrase: state.portfolio.data?.experiencephrase,
  experiences: state.portfolio.data?.experiences,
});

export const selectWorkData = (state) => ({
  workphrase: state.portfolio.data?.workphrase,
  projects: state.portfolio.data?.projects,
});

export const selectTestimonialsData = (state) => ({
  testimonialsphrase: state.portfolio.data?.testimonialsphrase,
  testimonials: state.portfolio.data?.testimonials,
});

export const selectContactData = (state) => ({
  contactphrase: state.portfolio.data?.contactphrase,
  contactform: state.portfolio.data?.contactform,
});

export const selectFooterData = (state) => ({
  copyright: state.portfolio.data?.copyright,
  slogan: state.portfolio.data?.slogan,
});

export default portfolioSlice.reducer;
