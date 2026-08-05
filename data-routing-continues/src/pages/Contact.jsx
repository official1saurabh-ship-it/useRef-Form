import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">Contact Us</h1>

        <p className="text-slate-600 text-lg mb-10">
          We'd love to hear from you. Whether you have questions, need
          assistance, or want to provide feedback, our healthcare support team
          is always here to help.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-50 p-5 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">📍 Address</h3>
                <p className="text-slate-600">
                  MediCare Hospital
                  <br />
                  Sector 62, Noida
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">📞 Phone</h3>
                <p className="text-slate-600">
                  +91 98765 43210
                  <br />
                  +91 91234 56789
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">📧 Email</h3>
                <p className="text-slate-600">
                  support@medicare.com
                  <br />
                  contact@medicare.com
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">🕒 Working Hours</h3>
                <p className="text-slate-600">
                  Monday - Saturday
                  <br />
                  8:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Emergency Help */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">
            Emergency Support
          </h2>

          <p className="text-slate-600 mb-3">
            For medical emergencies, please contact our emergency helpline
            immediately.
          </p>

          <p className="text-3xl font-bold text-red-600">🚑 1800-123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
