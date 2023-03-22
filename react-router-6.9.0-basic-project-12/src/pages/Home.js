import { Link,useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }
  return (
    <>
      <h1>home page</h1>
      <p>
        go to <Link to="products">Products Page</Link>
      </p>
    </>
  );
//   return (
//     <>
//       <h1>home page</h1>
//       <p>
//         go to <Link to="/products">Products Page</Link>
//       </p>
//       <p>
//         <button onClick={navigateHandler}>Navigate</button>
//       </p>
//     </>
//   );
};

export default HomePage;
