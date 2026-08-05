import React from "react";

const Data = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Medical Data Center
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          Monitor hospital records, patient statistics, and healthcare data from
          a centralized dashboard.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Total Patients</h2>
            <p className="text-3xl font-bold text-blue-700 mt-2">2,350</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Doctors</h2>
            <p className="text-3xl font-bold text-green-700 mt-2">120</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Departments</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">18</p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Active Cases</h2>
            <p className="text-3xl font-bold text-red-700 mt-2">86</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Recent Patient Records
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-3 text-left">Patient ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Age</th>
                  <th className="p-3 text-left">Disease</th>
                  <th className="p-3 text-left">Doctor</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">P101</td>
                  <td className="p-3">Rahul Sharma</td>
                  <td className="p-3">32</td>
                  <td className="p-3">Diabetes</td>
                  <td className="p-3">Dr. Mehta</td>
                  <td className="p-3 text-green-600 font-semibold">Stable</td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">P102</td>
                  <td className="p-3">Priya Singh</td>
                  <td className="p-3">45</td>
                  <td className="p-3">Hypertension</td>
                  <td className="p-3">Dr. Kapoor</td>
                  <td className="p-3 text-blue-600 font-semibold">
                    Recovering
                  </td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">P103</td>
                  <td className="p-3">Amit Verma</td>
                  <td className="p-3">27</td>
                  <td className="p-3">Viral Fever</td>
                  <td className="p-3">Dr. Sharma</td>
                  <td className="p-3 text-yellow-600 font-semibold">
                    Under Observation
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="p-3">P104</td>
                  <td className="p-3">Neha Gupta</td>
                  <td className="p-3">38</td>
                  <td className="p-3">Asthma</td>
                  <td className="p-3">Dr. Verma</td>
                  <td className="p-3 text-green-600 font-semibold">Stable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Patient Records</h3>

            <p className="text-slate-600">
              Securely store and access complete medical histories, treatments,
              and reports.
            </p>
          </div>

          <div className="bg-slate-50 border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Data Security</h3>

            <p className="text-slate-600">
              All patient information is protected using modern security
              standards and encrypted storage.
            </p>
          </div>

          <div className="bg-slate-50 border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Reports & Insights</h3>

            <p className="text-slate-600">
              Generate hospital reports and monitor healthcare performance using
              real-time analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
