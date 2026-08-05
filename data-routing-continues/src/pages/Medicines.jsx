import React from "react";

const Medicines = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-slate-800 mb-3">
          Medicines Management
        </h1>

        <p className="text-slate-600 text-lg mb-10">
          Manage medicine inventory, monitor stock availability, and keep track
          of essential medicines used across different hospital departments.
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Total Medicines</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">420</p>
          </div>

          <div className="bg-green-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Available Stock</h2>
            <p className="text-4xl font-bold text-green-600 mt-2">385</p>
          </div>

          <div className="bg-yellow-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Low Stock</h2>
            <p className="text-4xl font-bold text-yellow-600 mt-2">24</p>
          </div>

          <div className="bg-red-50 rounded-xl shadow p-6">
            <h2 className="text-slate-500">Out of Stock</h2>
            <p className="text-4xl font-bold text-red-600 mt-2">11</p>
          </div>
        </div>

        {/* Medicine Inventory */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Medicine Inventory
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-3 text-left">Medicine</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Stock</th>
                  <th className="p-3 text-left">Expiry</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Paracetamol</td>
                  <td className="p-3">Tablet</td>
                  <td className="p-3">250</td>
                  <td className="p-3">Jan 2028</td>
                  <td className="p-3">₹50</td>
                  <td className="p-3 text-green-600 font-semibold">
                    Available
                  </td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Amoxicillin</td>
                  <td className="p-3">Capsule</td>
                  <td className="p-3">120</td>
                  <td className="p-3">Oct 2027</td>
                  <td className="p-3">₹180</td>
                  <td className="p-3 text-green-600 font-semibold">
                    Available
                  </td>
                </tr>

                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Insulin</td>
                  <td className="p-3">Injection</td>
                  <td className="p-3">15</td>
                  <td className="p-3">Mar 2027</td>
                  <td className="p-3">₹650</td>
                  <td className="p-3 text-yellow-600 font-semibold">
                    Low Stock
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="p-3">Vitamin D</td>
                  <td className="p-3">Syrup</td>
                  <td className="p-3">0</td>
                  <td className="p-3">-</td>
                  <td className="p-3">₹220</td>
                  <td className="p-3 text-red-600 font-semibold">
                    Out of Stock
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Medicine Categories */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-5">
            Medicine Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-blue-50 p-5 rounded-lg shadow text-center">
              Tablets
            </div>

            <div className="bg-green-50 p-5 rounded-lg shadow text-center">
              Capsules
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg shadow text-center">
              Syrups
            </div>

            <div className="bg-red-50 p-5 rounded-lg shadow text-center">
              Injections
            </div>

            <div className="bg-purple-50 p-5 rounded-lg shadow text-center">
              Antibiotics
            </div>

            <div className="bg-pink-50 p-5 rounded-lg shadow text-center">
              Pain Relievers
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg shadow text-center">
              Vitamins
            </div>

            <div className="bg-orange-50 p-5 rounded-lg shadow text-center">
              Emergency Drugs
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="bg-slate-50 border rounded-xl p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Pharmacy Information
          </h2>

          <p className="text-slate-600 leading-8">
            Our pharmacy maintains a well-organized inventory to ensure the
            availability of essential medicines. Regular stock monitoring,
            expiry tracking, and timely replenishment help provide uninterrupted
            healthcare services to patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Medicines;
