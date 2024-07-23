import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Available from "../components/available/Available";
import { DefaultWhiteBtn } from "../components/commons/buttons/Buttons";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function AvailablePage() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        // get
        const docRef = collection(db, "available");
        const docSnap = await getDocs(docRef);

        const newArr = [];
        docSnap.forEach((e) => {
          newArr.push({ ...e.data(), id: e.id });
        });

        setList(newArr);
      } catch (error) {
        console.error("Error getting document:", error);
      }
    })();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="flex justify-end items-center mb-6">
          <DefaultWhiteBtn type="button" onClick={() => navigate("/list/form")}>
            등록
          </DefaultWhiteBtn>
        </div>

        <article>
          <Available data={list} />
        </article>
      </div>
    </div>
  );
}
