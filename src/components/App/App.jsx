import { useState, useEffect } from "react";
import fetchGalleryApi from "../../apiGallery.js";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import ImageModal from "../ImageModal/ImageModal.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [selectFoto, setSelectFoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(photo) {
    setSelectFoto(photo);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectFoto(null);
    setIsOpen(false);
  }

  const onSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
    setError(false);
    setImages([]);
  };

  useEffect(() => {
    const notify = () =>
      toast.error(
        "Whoops, something went wrong! Please try reloading this page!"
      );
    if (!searchQuery) return;
    async function getData() {
      try {
        setLoading(true);
        const data = await fetchGalleryApi(searchQuery, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (err) {
        console.log(err);
        setError(true);
        notify();
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [searchQuery, page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {images.length > 0 ? (
        <ImageGallery images={images} onClick={openModal} />
      ) : (
        <ErrorMessage />
      )}
      <Loader loading={loading} />
      {images.length > 0 && <LoadMoreBtn onLoadMore={onLoadMore} />}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        photo={selectFoto}
      />
    </>
  );
}
