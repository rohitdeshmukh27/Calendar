import React from "react";
import EventCard from "./EventCard";

export default function CalendarGrid({ year, month, events }) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null); // blank cells
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const getEventsForDay = (day) => {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return events.filter((e) => e.date === dateKey);
  };

  return (
    <div className="calendar-grid">
      {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
        <div key={d} className="day-header">{d}</div>
      ))}

      {days.map((day, idx) => (
        <div key={idx} className="day-cell">
          {day && <span className="day-number">{day}</span>}
          {day &&
            getEventsForDay(day).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
        </div>
      ))}
    </div>
  );
}
