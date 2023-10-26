import React from "react";
import Navbar from "../components/Navbar";
import {MdAddCircle} from 'react-icons/md'
function Home() {
  return (
    <div>
      <Navbar />

      {/* <div className="">
        <button className=" text-blue-500 text-5xl"><MdAddCircle/></button>
      </div> */}
      <ul className=" notes-title-con pl-4">
        <li>All</li>
        <li>My Notes</li>
        <li>To-do list</li>
      </ul>
      {/* Notes Llist */}

      <div className="px-4 py-4 gap-4 grid grid-rows-3 grid-cols-2 h-[full]">
        <div className="bg-red-100 p-3 rounded-lg mb-3 row-span-2 ">
          <h4 className="font-medium mb-2">Blockchain system</h4>
          <p className="text-xs">27 Jan 2022, 10.58am</p>

          <div className="mt-3">
            Blockchain is a distributed and decentralized digital ledger
            technology
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg row-span-2 ">
          <h4 className="font-medium mb-2">My Shopping List</h4>
          <p className="text-xs">27 Jan 2022, 10.58am</p>

          <div className="mt-3">
          Blockchain is a distributed and decentralized digital ledger
            technology
            {/* <ul>
              <li>Milk</li>
              <li>Cheese</li>
              <li>Coriander</li>
              <li>Coriander</li>
              <li>Chicken</li>
              <li>Eggs</li>
            </ul> */}
          </div>
        </div>

        <div className="bg-green-100 p-3 rounded-lg con col-span-2 row-span-2">
          <h4 className="font-medium mb-2">Blockchain system</h4>
          <p className="text-xs">27 Jan 2022, 10.58am</p>

          <div className="mt-3">
            Blockchain is a distributed and decentralized digital ledger
            technology
          </div>
        </div>

        <div className="bg-yellow-100 p-3 rounded-lg row-span-2">
          <h4 className="font-medium mb-2">Blockchain system</h4>
          <p className="text-xs">27 Jan 2022, 10.58am</p>

          <div className="mt-3">
            Blockchain is a distributed and decentralized digital ledger
            technology that underlies cryptocurrencies like Bitcoin,
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
