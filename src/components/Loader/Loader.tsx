import css from "./Loader.module.css";
import { BarLoader } from "react-spinners";

type Props = {
  loading: boolean;
};

export default function Loader({ loading }: Props) {
  return (
    <>
      <BarLoader
        className={css.loader}
        loading={loading}
        height="7px"
        width="300px"
      />
    </>
  );
}
