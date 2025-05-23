import { FormEvent } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  onSearch: (query: string) => void;
};
export default function SearchBar({ onSearch }: Props) {
  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const query = (
      form.elements.namedItem("query") as HTMLInputElement
    ).value.trim();
    const notify = (): string | number | undefined =>
      toast.error("Write something in Search Box");
    if (!query) {
      return notify();
    }
    onSearch(query);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmitSearch} className={css.searchBar}>
        <input
          type="text"
          placeholder="Search images and photos..."
          autoComplete="off"
          autoFocus
          name="query"
          className={css.inputSearch}
        />
        <button type="submit" className={css.buttonSearch}>
          Search
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </header>
  );
}
