import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../../../utils/firebase";

function MenuImage({ imageRef }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    imageRef &&
      getDownloadURL(ref(storage, imageRef))
        .then((response) => {
          setUrl(response);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
  }, []);
  return (
    <img
      className="h-40  md:w-44  w-36 rounded-t-lg"
      src={url}
      alt="food pic"
    />
  );
}

export default MenuImage;
