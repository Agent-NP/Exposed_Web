import logo from "../assets/logo.png";
import Popup from "../components/Popup";

const askForPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    new Notification("Welcome to Exposed", {
      body:
        "Here you get notified when a player gets red card in any match. (Most Especially Live Matches)",
      icon: logo
    });
    return "granted";
  } else {
    <Popup
      title="You denied Request to give you a push notification"
      message="You won't be notified when a player gets red card in any match. (Most Especially Live Matches)"
    />;
    return "denied";
  }
};

//It could either be granted, denied or null (Error has occurred).
export async function getNotificationStatus() {
  const permission = Notification.permission;
  if (permission === "granted") {
    return "granted";
  } else if (permission === "denied") {
    return "denied";
  } else if (permission === "default") {
    const response = askForPermission();
    return response;
  } else {
    return null;
  }
}

export function showNotification({ title, body }) {
  if (Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: logo
    });
  } else {
    askForPermission();
  }
}

