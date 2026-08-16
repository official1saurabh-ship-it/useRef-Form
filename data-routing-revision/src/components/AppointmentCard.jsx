const AppointmentCard = ({ appointment, setToggle, deleteAppointmentCard }) => {
  return (
    <div className="w-full min-h-[520px] bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Appointment</h2>

          <p className="text-sm text-slate-500 mt-1">Appointment details</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-500">ID: {appointment.id}</p>

          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            Confirmed
          </span>
        </div>
      </div>

      {/* Patient & Doctor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-slate-500 mb-1">Patient</p>

          <h3 className="text-lg font-semibold text-slate-800">
            {appointment.name}
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500 mb-1">Doctor</p>

          <h3 className="text-lg font-semibold text-slate-800">
            {appointment.doctor}
          </h3>
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-sm text-slate-500">Appointment Date</p>

          <p className="font-semibold text-slate-800 mt-1">
            {appointment.date}
          </p>
        </div>

        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-sm text-slate-500">Appointment Time</p>

          <p className="font-semibold text-slate-800 mt-1">
            {appointment.time}
          </p>
        </div>
      </div>

      {/* Reason */}
      <div className="mt-6">
        <p className="text-sm text-slate-500 mb-1">Reason for Visit</p>

        <p className="text-slate-700 line-clamp-2">{appointment.reason}</p>
      </div>

      {/* Appointment Type */}
      <div className="mt-6">
        <p className="text-sm text-slate-500 mb-2">Appointment Type</p>

        <span className="inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium">
          {appointment.appointmentType}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 my-6"></div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto pt-2">
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Create Appointment
        </button>

        <button
          onClick={() => deleteAppointmentCard(appointment.id)}
          className="flex-1 bg-red-500 text-white py-2.5 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
