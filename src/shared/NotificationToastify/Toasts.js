import { toast } from "react-toastify";

export const notifyRegisterError = (error) => toast.error(`${error.message}`);

export const notifyLoginSuccess = (data) => toast.success(`Wellcome, ${data.user.name}`);

export const notifyError = (error) => toast.error(`${error.message}`);

export const notifyFavoriteReject = () => toast.info("To proceed please log in");

export const notifyFavoriteSuccess = () => toast.success("Added to favorites successfully!");

