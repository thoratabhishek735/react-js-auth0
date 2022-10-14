import { toast } from "react-toastify";

const custom_error = "Something went wrong!";

export const toastContainer = (message = custom_error, variant) => {
  toast.info(message, {
    toastId: "toastId",
    className: variant === "error" ? "error-toast" : "success-toast",
  });
};
