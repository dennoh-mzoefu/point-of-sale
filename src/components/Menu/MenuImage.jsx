import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../../../utils/firebase";

function MenuImage({ imageRef }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    imageRef &&
      getDownloadURL(ref(storage, imageRef))
        .then((response) => {
          // console.log(response);
          setUrl(response);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
  }, []);
  return <img className="h-40 w-44 rounded-t-lg" src={url} alt="food pic" />;
}

export default MenuImage;
