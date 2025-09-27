import { useEffect, useState } from "react";
import { getNotifications } from "../../api/mockApi";
import "./Notifications.scss";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(getNotifications());
  }, []);

  return (
    <div className="notifications">
      <h3 className="section-title">Notifications</h3>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="notification-item"
            style={{ borderColor: notification.borderColor }}
          >
            <span className="notification-message">{notification.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
