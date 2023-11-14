import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:4000/api";

export const getListCities = createAsyncThunk("city/getListCities", async () => {
  try {
    const data = await axios.get(`${baseUrl}/city/getListCities`);
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
  
});

export const getCityById = createAsyncThunk("city/getCityById", async (id) => {
  try {
    const data = await axios.get(`${baseUrl}/city/getCityById/${id}`);
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
});


export const getCityByName = createAsyncThunk("city/getCityByName", async (name) => {
  try {
    const data =await axios.get(`${baseUrl}/city/getCityByName/${name}`);
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
});

export const createCity = createAsyncThunk("city/createCity", async ({name,img}) => {
  const city = {
    name: name,
    img: img
  }
  try {
    const data =await axios.post(`${baseUrl}/city/createCity`, city);
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
});