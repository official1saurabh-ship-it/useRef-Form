import React from "react";

const Patient = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Patient Management
        </h1>

        <p className="text-slate-600 text-lg mb-10">
          Manage patient records, monitor appointments, and keep track of
          ongoing treatments from a centralized healthcare dashboard.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Total Patients</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">2,350</p>
          </div>

          <div className="bg-green-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Admitted</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">145</p>
          </div>

          <div className="bg-yellow-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Appointments Today</h2>
            <p className="text-4xl font-bold text-yellow-600 mt-2">78</p>
          </div>

          <div className="bg-red-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Critical Patients</h2>
            <p className="text-4xl font-bold text-red-600 mt-2">18</p>
          </div>
        </div>

        {/* Patient Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Recent Patients
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-3 text-left">Patient ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Age</th>
                  <th className="p-3 text-left">Gender</th>
                  <th className="p-3 text-left">Disease</th>
                  <th className="p-3 text-left">Doctor</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">P001</td>
                  <td className="p-3">Rahul Sharma</td>
                  <td className="p-3">34</td>
                  <td className="p-3">Male</td>
                  <td className="p-3">Diabetes</td>
                  <td className="p-3">Dr. Rajesh</td>
                  <td className="p-3 text-green-600 font-semibold">Stable</td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">P002</td>
                  <td className="p-3">Priya Singh</td>
                  <td className="p-3">29</td>
                  <td className="p-3">Female</td>
                  <td className="p-3">Migraine</td>
                  <td className="p-3">Dr. Kapoor</td>
                  <td className="p-3 text-blue-600 font-semibold">
                    Recovering
                  </td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">P003</td>
                  <td className="p-3">Amit Verma</td>
                  <td className="p-3">45</td>
                  <td className="p-3">Male</td>
                  <td className="p-3">Heart Disease</td>
                  <td className="p-3">Dr. Sharma</td>
                  <td className="p-3 text-red-600 font-semibold">Critical</td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="p-3">P004</td>
                  <td className="p-3">Neha Gupta</td>
                  <td className="p-3">38</td>
                  <td className="p-3">Female</td>
                  <td className="p-3">Asthma</td>
                  <td className="p-3">Dr. Verma</td>
                  <td className="p-3 text-green-600 font-semibold">Stable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Patient Categories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Patient Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-blue-50 p-5 rounded-lg shadow text-center">
              Out Patients
            </div>

            <div className="bg-green-50 p-5 rounded-lg shadow text-center">
              In Patients
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg shadow text-center">
              Emergency
            </div>

            <div className="bg-red-50 p-5 rounded-lg shadow text-center">
              ICU
            </div>

            <div className="bg-purple-50 p-5 rounded-lg shadow text-center">
              Pediatrics
            </div>

            <div className="bg-pink-50 p-5 rounded-lg shadow text-center">
              Maternity
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg shadow text-center">
              Surgery
            </div>

            <div className="bg-orange-50 p-5 rounded-lg shadow text-center">
              General Ward
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="bg-slate-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Patient Care
          </h2>

          <p className="text-slate-600 leading-8">
            Our patient management system ensures that every patient's medical
            history, appointments, prescriptions, and treatment progress are
            securely maintained. This enables doctors and healthcare staff to
            provide timely and personalized medical care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patient;
