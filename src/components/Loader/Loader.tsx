import css from "./Loader.module.css";
import { BarLoader } from "react-spinners";
export default function Loader({ loading }) {
  return (
    <>
      <BarLoader
        className={css.loader}
        loading={loading}
        height="7px"
        width="300px"
        speedMultiplier="0.5"
      />
    </>
  );
}
