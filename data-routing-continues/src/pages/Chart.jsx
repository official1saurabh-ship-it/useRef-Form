import React from "react";

const Chart = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Medical Analytics Dashboard
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          Analyze patient statistics, treatment outcomes, and hospital
          performance through interactive charts and reports.
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-50 rounded-lg p-6 shadow">
            <h2 className="text-sm text-slate-500">Total Patients</h2>
            <p className="text-3xl font-bold text-blue-700 mt-2">1,250</p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 shadow">
            <h2 className="text-sm text-slate-500">Appointments</h2>
            <p className="text-3xl font-bold text-green-700 mt-2">340</p>
          </div>

          <div className="bg-red-50 rounded-lg p-6 shadow">
            <h2 className="text-sm text-slate-500">Emergency Cases</h2>
            <p className="text-3xl font-bold text-red-700 mt-2">28</p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 shadow">
            <h2 className="text-sm text-slate-500">Recovered Patients</h2>
            <p className="text-3xl font-bold text-yellow-600 mt-2">1,110</p>
          </div>
        </div>

        {/* Chart Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-slate-50 border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Patient Growth</h2>

            <div className="h-64 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
              Line Chart Placeholder
            </div>
          </div>

          <div className="bg-slate-50 border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Disease Distribution</h2>

            <div className="h-64 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
              Pie Chart Placeholder
            </div>
          </div>
        </div>

        {/* Recent Insights */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Analytics Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Monthly Patient Increase</h3>

              <p className="text-slate-600">
                Patient registrations have increased by 18% compared to last
                month.
              </p>
            </div>

            <div className="bg-slate-50 border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Most Common Disease</h3>

              <p className="text-slate-600">
                Seasonal viral infections accounted for the highest number of
                reported cases.
              </p>
            </div>

            <div className="bg-slate-50 border rounded-lg p-5">
              <h3 className="font-semibold mb-2">Treatment Success Rate</h3>

              <p className="text-slate-600">
                Overall treatment success has reached an impressive 92% this
                quarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
