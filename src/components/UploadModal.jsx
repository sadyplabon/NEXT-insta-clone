"use client";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";
import Modal from "react-modal";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useRef, useState } from "react";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  function addImageToPost(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      selectedFile(readerEvent.target.result);
    };
  }
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-[300px] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt=""
                className="w-full max-h-[250px] object-cover cursor-pointer"
              />
            ) : (
              <MdOutlinePhotoCamera
                onClick={() => filePickerRef.current.click()}
                className="cursor-pointer bg-red-400 text-red-600 p-2 rounded-full border-2"
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength={150}
              placeholder="Add caption..."
              className="m-4 border-none text-center focus:ring-0 w-full"
            />
            <button
              disabled
              className="w-full bg-red-600 rounded text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
