"use client";
import Image from "next/image";
import { createContext, useState } from "react";

export const ModalContext = createContext({});

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("/project_images/bricscad11.jpg");
  const options = {
    isOpen,
    setIsOpen,
    imgSrc,
    setImgSrc,
  };

  function handleOpen() {
    setIsOpen(true);
    document.body.classList.add("overflow-y-hidden");
  }

  function handleClose() {
    setIsOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <ModalContext.Provider value={options}>
      {children}
      <button type="button" onClick={() => handleOpen()}>
        Open Lightbox
      </button>

      {isOpen && (
        <div className=" fixed overscroll-contain top-0 left-0 z-10 bg-gray-100 w-screen h-screen">
          <Zoom>
            <Image
              alt="That Wanaka Tree, New Zealand by Laura Smetsers"
              src={imgSrc}
              width={400}
              height={400}
            />
          </Zoom>
          <button type="button" onClick={() => handleClose()}>
            Close Lightbox
          </button>
          <button onClick={() => setImgSrc("/project_images/Rimuru6.jpg")}>
            change img
          </button>
        </div>
      )}
    </ModalContext.Provider>
  );
}
