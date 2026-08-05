import React from "react";

const Prescription = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Prescription Management
        </h1>

        <p className="text-slate-600 text-lg mb-10">
          Manage patient prescriptions, prescribed medicines, treatment plans,
          and follow-up schedules from a centralized dashboard.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Total Prescriptions</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">1,540</p>
          </div>

          <div className="bg-green-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Issued Today</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">48</p>
          </div>

          <div className="bg-yellow-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Pending Reviews</h2>
            <p className="text-4xl font-bold text-yellow-600 mt-2">17</p>
          </div>

          <div className="bg-red-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Critical Cases</h2>
            <p className="text-4xl font-bold text-red-600 mt-2">9</p>
          </div>
        </div>

        {/* Prescription Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Recent Prescriptions
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-3 text-left">Prescription ID</th>
                  <th className="p-3 text-left">Patient</th>
                  <th className="p-3 text-left">Doctor</th>
                  <th className="p-3 text-left">Medicine</th>
                  <th className="p-3 text-left">Dosage</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">RX001</td>
                  <td className="p-3">Rahul Sharma</td>
                  <td className="p-3">Dr. Rajesh</td>
                  <td className="p-3">Paracetamol</td>
                  <td className="p-3">500 mg</td>
                  <td className="p-3">5 Days</td>
                  <td className="p-3 text-green-600 font-semibold">Active</td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">RX002</td>
                  <td className="p-3">Priya Singh</td>
                  <td className="p-3">Dr. Kapoor</td>
                  <td className="p-3">Amoxicillin</td>
                  <td className="p-3">250 mg</td>
                  <td className="p-3">7 Days</td>
                  <td className="p-3 text-blue-600 font-semibold">Completed</td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="p-3">RX003</td>
                  <td className="p-3">Neha Gupta</td>
                  <td className="p-3">Dr. Verma</td>
                  <td className="p-3">Vitamin D</td>
                  <td className="p-3">1 Tablet</td>
                  <td className="p-3">30 Days</td>
                  <td className="p-3 text-yellow-600 font-semibold">
                    Follow-up
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Prescription Categories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Prescription Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-blue-50 rounded-lg shadow p-5 text-center">
              General Medicine
            </div>

            <div className="bg-green-50 rounded-lg shadow p-5 text-center">
              Antibiotics
            </div>

            <div className="bg-yellow-50 rounded-lg shadow p-5 text-center">
              Pain Relief
            </div>

            <div className="bg-red-50 rounded-lg shadow p-5 text-center">
              Emergency
            </div>

            <div className="bg-purple-50 rounded-lg shadow p-5 text-center">
              Cardiology
            </div>

            <div className="bg-pink-50 rounded-lg shadow p-5 text-center">
              Neurology
            </div>

            <div className="bg-indigo-50 rounded-lg shadow p-5 text-center">
              Pediatrics
            </div>

            <div className="bg-orange-50 rounded-lg shadow p-5 text-center">
              Orthopedics
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="bg-slate-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Prescription Guidelines
          </h2>

          <p className="text-slate-600 leading-8">
            Every prescription is digitally stored to ensure accurate treatment,
            prevent medication errors, and provide patients with easy access to
            their prescribed medicines and dosage history during future visits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
