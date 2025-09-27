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

const students = [
  {
    id: 1,
    name: "Julian Cross",
    gender: "male",
    term: 2,
    level: 2,
  },
  {
    id: 2,
    name: "Emma Stone",
    gender: "female",
    term: 1,
    level: 3,
  },
  {
    id: 3,
    name: "Liam Parker",
    gender: "male",
    term: 3,
    level: 1,
  },
  {
    id: 4,
    name: "Sophia Lee",
    gender: "female",
    term: 2,
    level: 4,
  },
  {
    id: 5,
    name: "Noah Kim",
    gender: "male",
    term: 1,
    level: 2,
  },
];

export const getNotifications = () => {
  return notifications;
};

export const getStudents = () => {
  return students;
};
