import React from "react";

const Doctors = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">Our Doctors</h1>

        <p className="text-slate-600 text-lg mb-10">
          Meet our experienced team of healthcare professionals dedicated to
          providing exceptional medical care across multiple specialties.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Total Doctors</h2>
            <p className="text-3xl font-bold text-blue-700 mt-2">120</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Departments</h2>
            <p className="text-3xl font-bold text-green-700 mt-2">18</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Available Today</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">84</p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Emergency Specialists</h2>
            <p className="text-3xl font-bold text-red-700 mt-2">15</p>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-slate-50 border rounded-xl shadow p-6">
            <div className="w-24 h-24 rounded-full bg-slate-300 mx-auto mb-4"></div>

            <h2 className="text-xl font-bold text-center">Dr. Rajesh Sharma</h2>

            <p className="text-center text-blue-600 font-medium mb-4">
              Cardiologist
            </p>

            <div className="space-y-2 text-slate-600">
              <p>
                <strong>Experience:</strong> 15 Years
              </p>
              <p>
                <strong>Qualification:</strong> MBBS, MD
              </p>
              <p>
                <strong>Availability:</strong> Mon - Sat
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border rounded-xl shadow p-6">
            <div className="w-24 h-24 rounded-full bg-slate-300 mx-auto mb-4"></div>

            <h2 className="text-xl font-bold text-center">Dr. Priya Kapoor</h2>

            <p className="text-center text-green-600 font-medium mb-4">
              Neurologist
            </p>

            <div className="space-y-2 text-slate-600">
              <p>
                <strong>Experience:</strong> 12 Years
              </p>
              <p>
                <strong>Qualification:</strong> MBBS, DM
              </p>
              <p>
                <strong>Availability:</strong> Mon - Fri
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border rounded-xl shadow p-6">
            <div className="w-24 h-24 rounded-full bg-slate-300 mx-auto mb-4"></div>

            <h2 className="text-xl font-bold text-center">Dr. Amit Verma</h2>

            <p className="text-center text-red-600 font-medium mb-4">
              Orthopedic Surgeon
            </p>

            <div className="space-y-2 text-slate-600">
              <p>
                <strong>Experience:</strong> 18 Years
              </p>
              <p>
                <strong>Qualification:</strong> MBBS, MS
              </p>
              <p>
                <strong>Availability:</strong> Tue - Sun
              </p>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Medical Departments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-blue-50 p-5 rounded-lg text-center shadow">
              Cardiology
            </div>

            <div className="bg-green-50 p-5 rounded-lg text-center shadow">
              Neurology
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg text-center shadow">
              Orthopedics
            </div>

            <div className="bg-red-50 p-5 rounded-lg text-center shadow">
              Pediatrics
            </div>

            <div className="bg-purple-50 p-5 rounded-lg text-center shadow">
              Dermatology
            </div>

            <div className="bg-pink-50 p-5 rounded-lg text-center shadow">
              Gynecology
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg text-center shadow">
              ENT
            </div>

            <div className="bg-orange-50 p-5 rounded-lg text-center shadow">
              General Medicine
            </div>
          </div>
        </div>

        {/* Footer Information */}
        <div className="bg-slate-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Why Choose Our Doctors?
          </h2>

          <p className="text-slate-600 leading-8">
            Our doctors are highly qualified professionals with years of
            experience in their respective fields. They are committed to
            delivering compassionate, patient-centered healthcare using modern
            medical practices and advanced technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
