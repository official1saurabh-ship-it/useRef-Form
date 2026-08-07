import React from "react";

const DoctorCard = ({ className1 }) => {
  return (
    <div
      className={`${className1} bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300`}
    >
      {/* Doctor Image */}
      <img
        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500"
        alt="Doctor"
        className="w-28 h-28 object-top rounded-full  mx-auto border-4 border-blue-500 shadow-md mt-4"
      />

      {/* Card Body */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-800">Dr. John Smith</h2>

        <p className="text-slate-500 mt-1">Cardiologist</p>

        {/* Status */}
        <div className="mt-4">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
            Available
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Update
          </button>

          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
