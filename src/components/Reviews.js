import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "./Firebase/firebase";
import {
  Timestamp,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  querySanapshot,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { dividerClasses } from "@mui/material";
import { Appstate } from "../App";
const Reviews = ({ id, prevRating, userRated }) => {
  const useAppstate = useContext(Appstate);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState([]);

  const [data, setData] = useState([]);

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: useAppstate.userName,
        rating: rating,
        thought: form,
        Timestamp: new Date().getDate(),
      });
      const ref = doc(db, "movie", id);
      await updateDoc(ref, {
        rating: prevRating + rating,
        rated: userRated + 1,
      });
      setRating(0);
      setForm("");
    } catch (error) {}
    setLoading(false);
  };

  const getData = async () => {
    setReviewsLoading(true);
    let queryDoc = query(reviewsRef, where("movieid", "==", id));
    const querySnapshot = await getDocs(queryDoc);

    querySnapshot.docs.forEach((doc) => {
      setData((prev) => [...prev, doc.data()]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full py-1 mt-4 border-t-2 border-gray-500">
      <ReactStars
        size={20}
        half={true}
        value={rating}
        edit={true}
        onChange={(rate) => setRating(rate)}
      />
      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Share Your thought..."
        className="w-full p-2 outline-none header bg-slate-700"
      />
      <button
        onClick={sendReview}
        className="flex justify-center w-full p-1 bg-green-600 mt-1s"
      >
        {loading ? <TailSpin height={20} color="white" /> : "Share"}
      </button>
      <Toaster />
      {reviewsLoading ? (
        <div className="flex justify-center mt-6 ">
          <ThreeDots height={12} color="white" />
        </div>
      ) : (
        <div className="mt-4">
          {data.map((e, i) => {
            return (
              <div className="w-full p-2 mt-2" key={i}>
                <div className="flex">
                  <p>{e.name}</p>
                  <p>{new Date(e.Timestamp).toLocaleString()}</p>
                </div>
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
