import React from "react";
import { useDispatch } from "react-redux";
import {
  chengeToggle,
  chengeToggle2,
  chengeToggle3,
  chengeToggle4,
} from "../global/Reduxstate";

const Creationboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="w-full min-h-[200px] border shadow-md mt-[40px] grid grid-cols-3
      gap-3 rounded-lg"
      >
        <div
          className="col-span-2 min-h-[200px] bg-white flex justify-center items-center flex-col gap-2
           p-3
        "
        >
          <button
            onClick={() => {
              dispatch(chengeToggle(true));
            }}
            className="p-3 bg-slate-600 w-[50%] rounded-xl  text-white font-bold"
          >
            Add session
          </button>
          <button
            onClick={() => {
              dispatch(chengeToggle2(true));
            }}
            className="p-3 bg-blue-900 w-[50%] rounded-xl  text-white font-bold"
          >
            push announcement
          </button>
          <button
            onClick={() => {
              dispatch(chengeToggle4(true));
            }}
            className="p-3 bg-black w-[50%] rounded-xl  text-white font-bold"
          >
            Add student
          </button>
          <button className="p-3 bg-red-900 w-[50%] rounded-xl text-white font-bold">
            Add staff
          </button>
          <button
            onClick={() => {
              dispatch(chengeToggle3(true));
            }}
            className="p-3 bg-yellow-900 w-[50%] rounded-xl text-white font-bold"
          >
            Add class
          </button>
        </div>
        <div className="col-span-1 bg-slate-200">1</div>
      </div>
    </div>
  );
};

export default Creationboard;
