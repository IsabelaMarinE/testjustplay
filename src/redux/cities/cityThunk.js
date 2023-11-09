import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getListCities = createAsyncThunk("city/getListCities", async () => {
  await axios.get(`${baseUrl}/api/getListCities`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.response);
    })
  
});

export const getCityById = createAsyncThunk("city/getCityById", async (id) => {
  await axios.get(`${baseUrl}/api/getCityById/${id}`)
  .then((data) => {
    return data;
  })
  .catch((err) => {
    throw new Error(err.response);
  })
});