import { Link } from "react-router-dom";

const Success = () => {
 
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <p> THANKS FOR YOU ORDER</p>
    <img src="../images/success.png" alt=""/>

      <Link to={`/`}>
        <button className="categoryBtn">Back To Home Page</button>
        </Link>    </div>
  );
};

export default Success;