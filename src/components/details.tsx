import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data]);

  if (!data) {
    return null;
  }

  return <div className="text-white">{data.title}</div>;
};

export default Details;
