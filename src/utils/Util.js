import toast from "react-hot-toast";
import errorMessage from "./ErrorMessages";

export function logger(functionName, error) {
  console.trace(
    "Error at: ",
    functionName,
    "\n",
    "ErrorResponse: ",
    error?.response?.data ?? error,
    "\n\n"
  );
}

export function errorToast(error, message) {
  toast.error(message ?? error?.response?.data?.message ?? errorMessage.INTERNAL_SERVER);
}

export function errorToastLogger(functionName, error, message) {
  errorToast(error, message);
  logger(functionName, error);
}

export const setUserLocalStorage = (response) => {
  const profileObject = {
    token: response.data.token,
    username: response.data.user.name,
    profileId: response.data.user._id,
    email: response.data.user.email,
  };
  localStorage.setItem("user", JSON.stringify(profileObject));
};
