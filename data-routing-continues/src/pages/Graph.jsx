import React from "react";

const Graph = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Healthcare Graph Analytics
        </h1>

        <p className="text-slate-600 text-lg mb-10">
          Visualize important healthcare trends, patient growth, treatment
          outcomes, and hospital performance through graphical reports.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Monthly Patients</h2>
            <p className="text-3xl font-bold text-blue-700 mt-2">2,450</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Recovery Rate</h2>
            <p className="text-3xl font-bold text-green-700 mt-2">92%</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Appointments</h2>
            <p className="text-3xl font-bold text-purple-700 mt-2">780</p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow">
            <h2 className="text-sm text-slate-500">Critical Cases</h2>
            <p className="text-3xl font-bold text-red-700 mt-2">36</p>
          </div>
        </div>

        {/* Graph Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-slate-50 border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Patient Growth Graph</h2>

            <div className="h-72 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-lg">
              📈 Line Graph Placeholder
            </div>
          </div>

          <div className="bg-slate-50 border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Recovery Rate Graph</h2>

            <div className="h-72 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-lg">
              📊 Bar Graph Placeholder
            </div>
          </div>
        </div>

        {/* Weekly Report */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Weekly Performance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="bg-blue-100 rounded-lg p-5 text-center">
              <h3 className="font-semibold">Monday</h3>
              <p className="text-3xl font-bold mt-3">220</p>
              <p className="text-slate-600">Patients</p>
            </div>

            <div className="bg-green-100 rounded-lg p-5 text-center">
              <h3 className="font-semibold">Tuesday</h3>
              <p className="text-3xl font-bold mt-3">245</p>
              <p className="text-slate-600">Patients</p>
            </div>

            <div className="bg-yellow-100 rounded-lg p-5 text-center">
              <h3 className="font-semibold">Wednesday</h3>
              <p className="text-3xl font-bold mt-3">260</p>
              <p className="text-slate-600">Patients</p>
            </div>

            <div className="bg-purple-100 rounded-lg p-5 text-center">
              <h3 className="font-semibold">Thursday</h3>
              <p className="text-3xl font-bold mt-3">275</p>
              <p className="text-slate-600">Patients</p>
            </div>

            <div className="bg-red-100 rounded-lg p-5 text-center">
              <h3 className="font-semibold">Friday</h3>
              <p className="text-3xl font-bold mt-3">290</p>
              <p className="text-slate-600">Patients</p>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Patient Growth</h2>

            <p className="text-slate-600">
              Patient registrations have increased steadily over the last six
              months, indicating improved healthcare accessibility.
            </p>
          </div>

          <div className="bg-slate-50 border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Recovery Analysis</h2>

            <p className="text-slate-600">
              Recovery rates continue to improve due to better treatment plans
              and advanced medical technologies.
            </p>
          </div>

          <div className="bg-slate-50 border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">Hospital Efficiency</h2>

            <p className="text-slate-600">
              Average patient waiting time has reduced significantly, improving
              the overall healthcare experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
