import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createCity } from '../../../redux/cities/cityThunk';
import '../HomePage.css';

function FormCityPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const handleSubmitUpdated = (event) => {
    event.preventDefault();
    dispatch(createCity({name,img}));
    navigate("/");
  };

  return(
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create City</h2>
      </div>
      <form onSubmit={handleSubmitUpdated} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label for="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
            <div className="mt-2.5">
              <input type="text" 
              name="name" 
              placeholder="name of City"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label for="img" className="block text-sm font-semibold leading-6 text-gray-900">Imagen</label>
            <div className="mt-2.5">
              <input type="text" 
              name="img" 
              placeholder="url of img" 
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              value={img}
              onChange={(e) => setImg(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" 
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
        </div>
      </form>
    </div>
  )
}

export {FormCityPage}