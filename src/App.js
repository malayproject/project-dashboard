import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import UserContext from "./components/UserContext";
import user from "./assets/Icons/Temp_3/person1.jpg";

function App() {
  return (
    <div className="app">
      <UserContext.Provider
        value={{
          userName: "Malay Sarkar",
          profilePic: user,
        }}
      >
        <Sidebar />
        <MainContainer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
