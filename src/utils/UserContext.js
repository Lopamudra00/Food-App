
import { createContext } from "react";

const UserContext = createContext({

    //default values
    user: {
        name: "Dummy Name",
        email: "dummy@gmail.com",
    }
});

export default UserContext;