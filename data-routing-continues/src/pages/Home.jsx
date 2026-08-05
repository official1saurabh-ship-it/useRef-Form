import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl p-10 shadow-lg mb-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to MediCare</h1>

          <p className="text-lg max-w-3xl">
            Your trusted healthcare management platform for patients, doctors,
            appointments, prescriptions, reports, and medical analytics—all in
            one place.
          </p>

          <button className="mt-8 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 transition">
            Book Appointment
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-slate-500">Patients</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">2,350</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-slate-500">Doctors</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">120</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-slate-500">Appointments</h2>
            <p className="text-4xl font-bold text-purple-600 mt-2">780</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-slate-500">Departments</h2>
            <p className="text-4xl font-bold text-red-600 mt-2">18</p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">
                🩺 Doctor Consultation
              </h3>

              <p className="text-slate-600">
                Consult highly qualified specialists across multiple medical
                departments.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">
                💊 Prescription Management
              </h3>

              <p className="text-slate-600">
                Access and manage digital prescriptions securely anytime.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">📊 Medical Reports</h3>

              <p className="text-slate-600">
                View detailed health reports, analytics, and treatment history.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Why Choose MediCare?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl mb-3">
                Experienced Doctors
              </h3>

              <p className="text-slate-600">
                Our team consists of experienced specialists dedicated to
                providing quality healthcare.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl mb-3">
                Advanced Technology
              </h3>

              <p className="text-slate-600">
                We use modern healthcare technologies for faster diagnosis and
                better patient care.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl mb-3">
                24×7 Emergency Care
              </h3>

              <p className="text-slate-600">
                Emergency medical support is available around the clock for
                immediate assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Latest Announcements
          </h2>

          <ul className="space-y-4 text-slate-600 list-disc pl-6">
            <li>New Cardiology Department is now open.</li>
            <li>Online appointment booking available 24×7.</li>
            <li>Free health check-up camp this Sunday.</li>
            <li>Digital patient reports can now be downloaded instantly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
