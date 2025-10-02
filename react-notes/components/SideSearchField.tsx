import React from "react";

function SideSearchField() {
  return (
    <div className="flex gap-4">
      <input className="flex-1 w-full h-8 rounded-full border border-black/10 px-2" />
      <button className="bg-[#037dba] text-white h-8 px-3 rounded-2xl cursor-pointer hover:bg-[#0396df]">
        Search
      </button>
    </div>
  );
}

export default SideSearchField;
