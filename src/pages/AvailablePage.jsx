import React from "react";
import { useNavigate } from "react-router-dom";
import Available from "../components/available/Available";
import { DefaultWhiteBtn } from "../components/commons/buttons/Buttons";

export default function AvailablePage() {
  const navigate = useNavigate();

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
          <Available />
        </article>
      </div>
    </div>
  );
}
