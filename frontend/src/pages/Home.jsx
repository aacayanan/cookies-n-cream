import { useEffect, useState } from "react";

function Home() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    const apiUrl =
      import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

    fetch(`${apiUrl}/api/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }

        return response.json();
      })
      .then((data) => {
        setBackendStatus(data.status);
      })
      .catch(() => {
        setBackendStatus("unavailable");
      });
  }, []);

  return (
    <main>
      <h1>ICE TRACK</h1>
      <p>Backend status: {backendStatus}</p>
    </main>
  );
}

export default Home;