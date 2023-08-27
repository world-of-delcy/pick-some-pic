import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ReDirect({ to, replace }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace });
  });
}

export default ReDirect;
