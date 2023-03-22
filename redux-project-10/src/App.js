import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile"

function App() {
  const showForm = useSelector((state) => state.auth.IsAuthenticated);
  return (
    <>
      <Header />
      {showForm ? <UserProfile/> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
