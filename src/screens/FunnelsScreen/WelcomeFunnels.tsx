import { useNavigate } from "react-router-dom";

export default function WelcomeFunnels() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Choose Funnel Version</div>
      <button onClick={() => navigate("/v1")} style={{outline: "none", padding: "8px 16px", borderRadius: "12px", fontSize: 24}}>v1</button>
      <button>v2</button>
      <button>v3</button>
    </div>
  );
}
