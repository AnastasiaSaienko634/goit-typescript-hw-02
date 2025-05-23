import css from "./ErrorMessage.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function ErrorMessage() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
