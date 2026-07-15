import React from "react";
import time from "../assets/time.png";
import remote from "../assets/remote.png";
import keybord from "../assets/keyborad.png";
import chair from "../assets/chair.png";
import monitor from "../assets/monitor.png";
import { FaStar } from "react-icons/fa";

function Product() {
  return (
    <div>
      <div className="w-full m-auto mt-6 max-w-5xl px-4 md:px-0">
        <div>
          <div className="flex gap-4 items-center">
            <div className="flex">
              <div className="w-5 h-7 bg-red-600 mt-1 m-2"></div>
              <div>
                <h1 className="text-red-600">Today’s</h1>
                <p className="font-bold text-2xl mt-3">Flash Sales</p>
              </div>
            </div>
            <img src={time} alt="" className="w-[240px] md:w-[302px] h-[50px]" />
          </div>
        </div>
        {/* card product */}

        <div className="flex gap-4 overflow-x-auto mt-6 pb-4 md:overflow-visible md:grid md:grid-cols-4 md:gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md w-64 md:w-auto relative shrink-0">
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -40%
            </div>
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i className="fa-regular fa-heart text-gray-700"></i>
              </div>
              <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i className="fa-regular fa-eye text-gray-700"></i>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <img src={remote} alt="HAVIT HV-G92 Gamepad" className="h-32 object-contain" />
            </div>

            <h3 className="text-sm font-semibold text-center">HAVIT HV-G92 Gamepad</h3>

            <div className="text-center mt-2">
              <span className="text-red-500 font-bold text-lg">$120</span>
              <span className="line-through text-gray-400 ml-2">$160</span>
            </div>

            <div className="flex justify-center items-center mt-1 gap-1 text-yellow-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <span className="text-gray-500 text-sm ml-2">(88)</span>
            </div>
          </div>
          {/* Repeat cards - simplified for brevity, responsive layout will place them in grid on md+ */}
          <div className="bg-white p-4 rounded-lg shadow-md w-64 md:w-auto relative shrink-0">
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</div>
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i className="fa-regular fa-heart text-gray-700"></i>
              </div>
              <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i className="fa-regular fa-eye text-gray-700"></i>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img src={keybord} alt="KeyBoard" className="h-32 object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-center">KeyBoard</h3>
            <div className="text-center mt-2">
              <span className="text-red-500 font-bold text-lg">$960</span>
              <span className="line-through text-gray-400 ml-2">$1160</span>
            </div>
            <div className="flex justify-center items-center mt-1 gap-1 text-yellow-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <span className="text-gray-500 text-sm ml-2">(88)</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-64 md:w-auto relative shrink-0">
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</div>
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i className="fa-regular fa-heart text-gray-700"></i>
              </div>
              <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i className="fa-regular fa-eye text-gray-700"></i>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img src={monitor} alt="Monitor" className="h-32 object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-center">Monitor</h3>
            <div className="text-center mt-2">
              <span className="text-red-500 font-bold text-lg">$360</span>
              <span className="line-through text-gray-400 ml-2">$400</span>
            </div>
            <div className="flex justify-center items-center mt-1 gap-1 text-yellow-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <span className="text-gray-500 text-sm ml-2">(88)</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-64 md:w-auto relative shrink-0">
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</div>
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i className="fa-regular fa-heart text-gray-700"></i>
              </div>
              <div className="bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer">
                <i className="fa-regular fa-eye text-gray-700"></i>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img src={chair} alt="Chair" className="h-32 object-contain" />
            </div>
            <h3 className="text-sm font-semibold text-center">Chair</h3>
            <div className="text-center mt-2">
              <span className="text-red-500 font-bold text-lg">$375</span>
              <span className="line-through text-gray-400 ml-2">$400</span>
            </div>
            <div className="flex justify-center items-center mt-1 gap-1 text-yellow-400">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <span className="text-gray-500 text-sm ml-2">(88)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
