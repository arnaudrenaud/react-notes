import { createContext } from "react";

export const ProfileContext = createContext({
  profileName: "",
  onProfileUpdate: null,
});