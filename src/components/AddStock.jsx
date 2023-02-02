import React, { useEffect, useState } from "react";
import { addMenu, fetchMenu } from "../redux/menuSlice";
import { useDispatch } from "react-redux";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../utils/firebase";
function AddStock() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const handleImage = () => {
    const imageRefName = `menuImage/${image.name + v4()}`;
    const image_Ref = ref(storage, imageRefName);
    uploadBytes(image_Ref, image)
      .then(() => {
        console.log(image.name);
        getDownloadURL(image_Ref)
          .then((url) => {
            console.log(url);
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
      })
      .catch((error) => {
        console.log(error);
        return;
      });
    console.log(imageRefName);
    return imageRefName;
  };
  const handleClick = (e) => {
    e.preventDefault();
    let i = handleImage();
    console.log({ i });
    i &&
      dispatch(
        addMenu({
          name,
          category,
          price,
          imageRef: i,
        })
      );
  };
  return (
    // <div>
    <div className="bg-white pt-5 w-full flex flex-col justify-center items-center  h-fit mx-4 mt-4 rounded-2xl">
      <h2 className="text-lg">Add food item to menu</h2>
      <div className=" border-t-2 border-slate-900/50  my-4 "></div>
      <div className="flex flex-col justify-start">
        <div className="flex flex-col justify-center items-center ">
          <input
            type="text"
            placeholder="Category"
            value={category}
            className=" px-3 border-b w-full border-amber-700 my-2 h-10"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            className="px-3 border-b w-full border-amber-700 my-2 h-10"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="px-3 border-b w-full border-amber-700 my-2 h-10"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label className="w-4/5 ">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="text-sm text-grey-500
            file:mr-2 file:py-2 file:px-2
            file:rounded-md file:border-0
            file:text-sm file:font-medium
            file:bg-slate-600 file:text-white
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          "
            />
          </label>
        </div>
        <button
          className="bg-green-500 ml-6 rounded-md px-4 text-white p-2 my-3 justify-self-start w-fit "
          onClick={(e) => handleClick(e)}
        >
          click me
        </button>
      </div>
    </div>
    // </div>
  );
}

export default AddStock;
