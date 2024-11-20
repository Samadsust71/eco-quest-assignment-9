import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    const routeTitles = {
      "/": "EcoQuest - Home",
      "/auth/profile": "Your Profile | EcoQuest",
      "/auth/updateprofile": "Update Profile | EcoQuest",
      "/auth/login": "Login | EcoQuest",
      "/auth/registration": "Registration | EcoQuest",
      "/auth/resetpassword": "Password Reset | EcoQuest",
    };

    const defaultTitle = "EcoQuest - Adventure Awaits";

    document.title = routeTitles[pathname] || defaultTitle;
  }, [location]);
};

export default useDynamicTitle;