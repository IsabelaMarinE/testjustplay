import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const routes = [
    {
      to:'/homepage',
      text:'City'
    },
    {
      to:'/gamepage',
      text:'Games'
    }
  ];
  return(
    <nav>
    <div className="mx-auto max-w-7xl px-2">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-8 w-auto" src="https://play-lh.googleusercontent.com/oKnFiIIdWYnq4pbl5ROTNYmisvdDgglGhfZM1BrX3AVrIRD4edtIXhA0esZUVaxfySw" alt="Just Play Test" />
          </div>
          <div>
            <div className="flex space-x-4 items-center">
              {routes.map(route => (
                <NavLink key={route.to} to={route.to} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  {route.text}
                </NavLink>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

export {Menu}