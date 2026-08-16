import React, { useState } from "react";
import AppointmentCard from "../components/AppointmentCard";
import AppointmentForm from "../components/AppointmentForm";

const Appointments = () => {
  const [toggle, setToggle] = useState(true);

  const [appointment, setAppointment] = useState(
    JSON.parse(localStorage.getItem("appointment")) || [],
  );

  const deleteAppointmentCard = (id) => {
    let updatedAppointment = appointment.filter((elem) => elem.id !== id);
    setAppointment(updatedAppointment);
    localStorage.setItem("appointment", JSON.stringify(updatedAppointment));
  };
  return (
    <div className="relative min-h-screen">
      {/* Create Appointment Button */}
      <button
        className="absolute -top-3 right-0 bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
        onClick={() => setToggle((prev) => !prev)}
      >
        Create Appointment
      </button>

      {/* Cards / Form */}
      <div className="pt-14">
        {toggle ? (
          appointment.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointment.map((item, index) => (
                <AppointmentCard
                  key={index}
                  appointment={item}
                  setToggle={() => setToggle((prev) => !prev)}
                  deleteAppointmentCard={deleteAppointmentCard}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[300px]">
              <p className="text-lg text-slate-500 font-medium">
                No appointment done yet.
              </p>
            </div>
          )
        ) : (
          <AppointmentForm
            appointment={appointment}
            setAppointment={setAppointment}
            deleteAppointmentCard={deleteAppointmentCard}
            setToggle={() => setToggle((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default Appointments;
