import { createContext } from "react";
import user from "../assets/Icons/Temp_3/person1.jpg";

const UserContext = createContext({
  userName: "Malay Sarkar",
  profilePic: user,
});

export default UserContext;
