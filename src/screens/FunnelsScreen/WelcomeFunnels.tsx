import { useNavigate } from "react-router-dom";

export default function WelcomeFunnels() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Choose Funnel Version</h2>
      <div
      style={{display: "flex", gap: 10}}>
        <button
          onClick={() => navigate("/v1")}
          style={{
            outline: "none",
            padding: "8px 16px",
            borderRadius: "12px",
            fontSize: 24,
          }}
        >
          v1
        </button>
        <button
          onClick={() => navigate("/v2")}
          style={{
            outline: "none",
            padding: "8px 16px",
            borderRadius: "12px",
            fontSize: 24,
          }}
        >
          v2
        </button>
        <button
          onClick={() => navigate("/v3")}
          style={{
            outline: "none",
            padding: "8px 16px",
            borderRadius: "12px",
            fontSize: 24,
          }}
        >
          v3
        </button>
      </div>
    </div>
  );
}
