import React from "react";
import Tabs from "../components/commons/tabs/Tabs";
import MyCaresheet from "../components/caresheet/MyCaresheet";
import Qna from "../components/caresheet/Qna";

export default function CaresheetPage() {
  return (
    <>
      <h2 className="mt-10 mb-5 font-semibold capitalize text-3xl">
        caresheet
      </h2>
      <Tabs items={categories} />
    </>
  );
}

const categories = [
  {
    name: "poke caresheet",
    posts: <MyCaresheet />,
  },
  {
    name: "QnA",
    posts: <Qna />,
  },
];
