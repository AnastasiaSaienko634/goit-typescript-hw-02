import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button className={css.buttonLoadMore} onClick={onLoadMore}>
      Load More
    </button>
  );
}
