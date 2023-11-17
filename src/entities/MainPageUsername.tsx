import React, { useEffect, useState } from "react";
import Username from "../ui/Username";

import { getUserFromLocaleStorage } from "../utils/helper";

const MainPageUsername: React.FC = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(() => getUserFromLocaleStorage())
  }, []);

  return (
    <Username>
      {user}
    </Username>
  )
};

export default MainPageUsername;
