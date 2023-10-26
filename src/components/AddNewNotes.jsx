import React from "react";
import { CiSaveUp2 } from "react-icons/ci";
import {MdDelete} from "react-icons/md"
function AddNewNotes() {
  return (
    <div className="relative">
        <div className="fixed bottom-0 right-0 ">
            <button><MdDelete/></button>
        </div>
      <form className="">
        <div className=" p-5 shadow-md text-right">
          <button>
            <CiSaveUp2 />
          </button>
        </div>

        <div className="p-4">
          <div>
            <input type="text" placeholder="Title" className="outline-none" />
          </div>

          <div className="my-2 text-xs">
            26 October, 2023 3:09pm
          </div>

          <div>
            <textarea
              className="outline-none h-80vh border-red-400"
              placeholder="Start typing...."
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewNotes;
