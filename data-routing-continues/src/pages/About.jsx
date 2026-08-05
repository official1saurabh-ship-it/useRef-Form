import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          About MediCare
        </h1>

        <p className="text-slate-600 leading-8 text-lg mb-8">
          MediCare is a modern healthcare management platform designed to
          simplify the interaction between patients, doctors, and healthcare
          providers. Our mission is to provide an efficient and user-friendly
          system for managing medical information and improving patient care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              Our Mission
            </h2>
            <p className="text-slate-600">
              To make healthcare management simple, secure, and accessible for
              everyone.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Our Vision
            </h2>
            <p className="text-slate-600">
              Empower hospitals and clinics with smart digital solutions that
              improve patient experiences.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-700 mb-3">
              Our Values
            </h2>
            <p className="text-slate-600">
              Trust, innovation, patient safety, transparency, and quality
              healthcare services.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-5">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-50 p-5 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">Patient Records</h3>
            <p className="text-slate-600">
              Maintain digital medical histories and patient profiles securely.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">Doctor Management</h3>
            <p className="text-slate-600">
              Manage doctors, departments, and appointments efficiently.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">
              Prescription Tracking
            </h3>
            <p className="text-slate-600">
              Store and access prescriptions anytime with organized records.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">Analytics Dashboard</h3>
            <p className="text-slate-600">
              View healthcare insights, patient statistics, and medical reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
