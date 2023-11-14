import React from 'react';
import './CardItem.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getGameById } from '../../redux/games/gameThunk';

function CardItem({data, isPlay}) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let id = "";
  if(isPlay){
    id = data.id_play;
  }else{
    id = data.id_city;
  }
  const selectGame = async(id) => {
    if(!isPlay){
      navigate(`/gamepage/${id}`);
    } else {
      dispatch(getGameById(id));
      navigate("/details");
    }
    
  }
  return(
    <li className="flex justify-between gap-x-6 py-5 style-li" onClick={() => selectGame(id)}>
      <div className="flex min-w-0 gap-x-4">
        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={data.img} alt={data.name} />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{data.name}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data.location}</p>
        </div>
      </div>
      {
      isPlay &&
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{data.date}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">{data.players}</p>
      </div>
      }
    </li>
  );
}

export {CardItem}
