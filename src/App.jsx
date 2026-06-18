import { useEffect, useState } from "react";
import { getNotifications } from "./services/api";
import { Log } from "./services/logger";
import { getPriority } from "./utils/priority";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      await Log("info", "api", "Fetching notifications");

      const data = await getNotifications();

      const top10 = data
        .sort((a, b) => {
          const p1 = getPriority(a);
          const p2 = getPriority(b);

          if (p1 !== p2) {
            return p2 - p1;
          }

          return new Date(b.Timestamp) - new Date(a.Timestamp);
        })
        .slice(0, 10);

      setNotifications(top10);

      await Log("info", "utils", "Top 10 notifications generated");
    } catch (error) {
      await Log("error", "api", error.message);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top 10 Priority Notifications</h1>

      {notifications.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;