import React, { useState, useEffect } from "react";
import CalendarGrid from "./CalendarGrid";
import { fetchEvents } from "./api";

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const loadEvents = async () => {
    setLoading(true);
    const data = await fetchEvents(currentYear, currentMonth + 1);
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    loadEvents();
  }, [currentMonth, currentYear]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <button onClick={prevMonth}>←</button>
        <h2>
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button onClick={nextMonth}>→</button>
      </div>

      {loading ? (
        <p className="loading">Loading events...</p>
      ) : (
        <CalendarGrid
          month={currentMonth}
          year={currentYear}
          events={events}
        />
      )}
    </div>
  );
}
