import React from "react";

const DoctorProfileCard = () => {
  return (
    <div className="w-52  rounded-xl  p-4 flex items-center gap-4 hover:shadow-lg transition">
      {/* Doctor Image */}
      <img
        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300"
        alt="Doctor"
        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
      />

      {/* Name & Designation */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-slate-800">Dr. John Smith</h2>

        <p className="text-sm text-slate-500">Cardiologist</p>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
