import { useState, useEffect } from "react";
import fetchGalleryApi from "../../apiGallery.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.js";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "../Loader/Loader.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.js";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import ImageModal from "../ImageModal/ImageModal.js";
import { Photo } from "../../types.ts/images";

export default function App() {
  const [images, setImages] = useState<Photo[]>([]);
  const [selectFoto, setSelectFoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal(photo: Photo): void {
    setSelectFoto(photo);
    setIsOpen(true);
  }

  function closeModal(): void {
    setSelectFoto(null);
    setIsOpen(false);
  }

  function onSearch(query: string): void {
    setSearchQuery(query);
    setPage(1);
    setError(false);
    setImages([]);
  }

  useEffect(() => {
    const notify = () =>
      toast.error(
        "Whoops, something went wrong! Please try reloading this page!"
      );
    if (!searchQuery) return;
    async function getData() {
      try {
        setLoading(true);
        const data: Photo[] = await fetchGalleryApi(searchQuery, page);
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

  const onLoadMore = (): void => {
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
