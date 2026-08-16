import React from "react";
import { useForm } from "react-hook-form";

const AppointmentForm = ({ appointment, setAppointment, setToggle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newAppointment = {
      id: crypto.randomUUID(),
      ...data,
    };

    const alreadyExists = appointment.some(
      (item) => item.id === newAppointment.id,
    );

    if (alreadyExists) {
      return alert("Appointment id same");
    }

    const arr = [...appointment, newAppointment];

    setAppointment(arr);

    localStorage.setItem("appointment", JSON.stringify(arr));

    setToggle(true);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Book Appointment
      </h2>

      <p className="text-slate-500 mb-8">
        Enter the appointment details below.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Appointment ID */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Appointment ID
          </label>

          <input
            {...register("id", {
              required: "ID is required",
            })}
            type="text"
            placeholder="Enter appointment ID"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.id && (
            <p className="text-red-500 text-sm mt-1">{errors.id.message}</p>
          )}
        </div>

        {/* Patient Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Patient Name
          </label>

          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Enter patient name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Doctor */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Select Doctor
          </label>

          <select
            {...register("doctor", {
              required: "Doctor is required",
            })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a doctor</option>
            <option>Dr. John Smith - Cardiologist</option>
            <option>Dr. Sarah Johnson - Neurologist</option>
            <option>Dr. Michael Brown - Dermatologist</option>
            <option>Dr. Emily Davis - Gynecologist</option>
            <option>Dr. William Wilson - Orthopedist</option>
            <option>Dr. Olivia Martinez - Pediatrician</option>
            <option>Dr. Daniel Taylor - Surgeon</option>
            <option>Dr. Sophia Anderson - Dentist</option>
            <option>Dr. Benjamin Thomas - Ophthalmologist</option>
            <option>Dr. Olivia Martinez - Pediatrician</option>
            <option>Dr. Daniel Taylor - Surgeon</option>
            <option>Dr. Sophia Anderson - Dentist</option>
            <option>Dr. Benjamin Thomas - Ophthalmologist</option>
            <option>Dr. Olivia Martinez - Pediatrician</option>
            <option>Dr. Daniel Taylor - Surgeon</option>
            <option>Dr. Sophia Anderson - Dentist</option>
          </select>
          {errors.doctor && (
            <p className="text-red-500 text-sm mt-1">{errors.doctor.message}</p>
          )}
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Appointment Date
            </label>

            <input
              {...register("date", {
                required: "Date is required",
              })}
              type="date"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Appointment Time
            </label>

            <input
              {...register("time", {
                required: "Time is required",
              })}
              type="time"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        {/* Reason */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Reason for Visit
          </label>

          <textarea
            {...register("reason", { required: "Reason for visit is reuired" })}
            rows="4"
            placeholder="Describe the reason for appointment..."
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
          )}
        </div>

        {/* Appointment Type */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Appointment Type
          </label>

          <select
            {...register("appointmentType", {
              required: "Reason for visit is reuired",
            })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select appointment type</option>
            <option>In-person</option>
            <option>Online</option>
            <option>Follow-up</option>
          </select>
          {errors.appointmentType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.appointmentType.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
