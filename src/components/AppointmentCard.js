export default function AppointmentCard({ appointment }) {
  const scheduledDate = new Date(appointment.scheduled_time);
  const formattedDate = scheduledDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const formattedTime = scheduledDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="bg-barber-black-lighter border border-barber-gold rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-barber-gold">
            {appointment.services?.name || "Service"}
          </h3>
          <p className="text-barber-gray text-sm mt-1">
            with {appointment.barbers?.name || "Barber"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-barber-gold font-bold">{formattedDate}</p>
          <p className="text-barber-gold-dark">{formattedTime}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-barber-gold text-barber-black rounded hover:bg-barber-gold-dark transition font-semibold text-sm">
          Reschedule
        </button>
        <button className="flex-1 px-4 py-2 bg-red-900 text-red-200 rounded hover:bg-red-800 transition font-semibold text-sm">
          Cancel
        </button>
      </div>
    </div>
  );
}
