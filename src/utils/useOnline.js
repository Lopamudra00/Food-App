import { useEffect, useState } from "react"
const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        }
        const handleOffline = () => {
            setIsOnline(false);
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        //removing the eventListener else it will still be there even if we go out of component .
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);
    return isOnline;
}
export default useOnline;


// window.addEventListener("online", () => {})
// window.addEventListener("offline", () => {})
