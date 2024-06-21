import React from "react";

const Widget = () => {
  return (
    <div className="invisible z-50 cursor-pointer md:visible bg-dark-gray/50 fixed right-10 bottom-10 flex flex-col gap-4 py-4 px-2 rounded-full ">
      <span className="material-icons text-white hover:text-optienal-dark-blue cursor-pointer">
        facebook
      </span>
      <span className="material-icons text-white hover:text-optienal-dark-blue cursor-pointer">
        email
      </span>
      <span className="material-icons text-white hover:text-optienal-dark-blue cursor-pointer">
        phone
      </span>
    </div>
  );
};

export default Widget;
