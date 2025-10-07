// Simulated API call
export async function fetchEvents(year, month) {
  // Fake delay
  await new Promise((r) => setTimeout(r, 400));

  const dummyEvents = [
    {
      id: 1,
      date: "2025-10-12",
      status: "Drafted",
      title: "New Campaign",
      description: "Introducing our first step towards better content strategy.",
      platforms: ["Instagram", "LinkedIn"],
      time: "5:00 PM",
    },
    {
      id: 2,
      date: "2025-10-02",
      status: "In Progress",
      title: "Collab Edit",
      description: "Editing collab video for upcoming series.",
      platforms: ["Instagram", "X"],
      time: "3:00 PM",
    },
    {
      id: 3,
      date: "2025-10-03",
      status: "Completed",
      title: "Startup Post",
      description: "Posted update about our AI project.",
      platforms: ["LinkedIn"],
      time: "10:00 AM",
    },
    {
      id: 4,
      date: "2025-01-25",
      status: "In Progress",
      title: "Reel Editing Marathon",
      description: "Finalizing edits for the weekly content batch.",
      platforms: ["Instagram"],
      time: "8:00 PM",
    },
  ];

  // Filter events matching the requested month and year
  const filtered = dummyEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() + 1 === month // +1 because JS months are 0-indexed
    );
  });

  return filtered;
}
