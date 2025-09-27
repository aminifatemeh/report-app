const notifications = [
  {
    id: 1,
    message: "Session report for student A hasn’t been written yet",
    borderColor: "#A75656",
  },
  {
    id: 2,
    message: "Student B’s evaluation is due tomorrow",
    borderColor: "#8958C4",
  },
  {
    id: 3,
    message: "New assignment submitted by student C",
    borderColor: "#7FB556",
  },
  {
    id: 4,
    message: "Session report for student D approved",
    borderColor: "#FFC04C",
  },
  {
    id: 5,
    message: "Reminder: Review student E’s progress",
    borderColor: "#A75656",
  },
];

export const getNotifications = () => {
  return notifications;
};
