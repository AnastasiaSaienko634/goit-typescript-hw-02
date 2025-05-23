import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    const notify = () => toast.error("Write something in Search Box");
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
