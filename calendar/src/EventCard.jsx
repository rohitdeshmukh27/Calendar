import React from "react";

export default function EventCard({ event }) {
  const { title, status, description, platforms, time } = event;

  const statusColors = {
    Drafted: "#facc15", // yellow
    "In Progress": "#3b82f6", // blue
    Completed: "#22c55e", // green
  };

  return (
    <div className="event-card" style={{ borderLeftColor: statusColors[status] }}>
      <div className="event-top">
        <h4 className="event-title">{title}</h4>
        <span
          className="status-badge"
          style={{ backgroundColor: statusColors[status] }}
        >
          {status}
        </span>
      </div>
      <p className="event-desc">{description}</p>
      <div className="event-platforms">
        {platforms.map((p) => (
          <span key={p} className="platform">{p}</span>
        ))}
      </div>
      <p className="event-time">{time}</p>
    </div>
  );
}
