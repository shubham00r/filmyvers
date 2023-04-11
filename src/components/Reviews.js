import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "./Firebase/firebase";
import {
  Timestamp,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDoc,
  querySanapshot,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { dividerClasses } from "@mui/material";
const Reviews = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsloading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState([]);

  const [data, setData] = useState();
  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "Jack",
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
  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      let quer = query(reviewsRef, where("movieid", "==", id));
      const querySanapshot = await getDoc(quer);

      querySanapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });
    }
    setReviewsLoading(false);
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
      {reviewsloading ? (
        <div className="flex justify-center mt-6 ">
          <ThreeDots height={12} color="white" />
        </div>
      ) : (
        <div>
          {data.map((e, i) => {
            return <div key={i}>{e.thought}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
