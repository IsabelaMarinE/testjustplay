import React from 'react';
import './CardItem.css';
import { useDispatch } from 'react-redux';

function CardItem({img, name, location, date, players, isPlay, url}) {
  const dispatch = useDispatch();
  return(
    <Link to={url}>
      <li className="flex justify-between gap-x-6 py-5" onClick={() => setActivePage(i)}>
        <div className="flex min-w-0 gap-x-4">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={img} alt={name} />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{location}</p>
          </div>
        </div>
        {
        isPlay &&
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{date}</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">{players}</p>
        </div>
        }
      </li>
    </Link>
  );
}

export {CardItem}
