import React, { useEffect, useState } from "react";
import axios from "axios";
import incrementCount from "../../actions/incrementCount";
import decrementCount from "../../actions/decrementCount";
import { useDispatch, useSelector } from "react-redux";

export default function ImagesPage() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [image, setImage] = useState("");
  const [about, setAbout] = useState("");
  const [allImages, setAllImages] = useState([]);

 /**
  * The function getImage() is called when the user clicks the button. The function then calls the API
  * and returns the data.
  */
  const getImage = () => {
    console.log("getImage");
    axios
      .post("http://localhost:5000/images", {
        search: "kite", 
      })
      .then((response) => {
        setAllImages(response.data);

        console.log("first");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getImage();
  });

  return (
    <>
      <div>ImagesPage</div>

      <img
        src={allImages[count]?.assets?.huge_thumb?.url}
        alt={allImages[count]?.description}
      />
      <p>{allImages[count]?.description}</p>
      <button onClick={() => dispatch(decrementCount(1))}>previous</button>
      <button onClick={() => dispatch(incrementCount(1))}>next</button>
    </>
  );
}
