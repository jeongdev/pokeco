import React from "react";
import { useNavigate } from "react-router-dom";

export default function Available({ data }) {
  const navigate = useNavigate();

  const handleDetailLink = (e, product) => {
    navigate(`/list/${product.id}`, { state: product });
  };

  const handleReturnMorph = (product) => {
    const { base, character, morph, normal } = product["morph_name"];
    const arr = [base, ...character, ...morph, ...normal];
    return arr.join(" ");
  };

  return (
    <section className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {data &&
        data.map((product) => (
          <div
            key={product.id}
            onClick={(e) => handleDetailLink(e, product)}
            className="group"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                alt={product.imageAlt}
                src={product.image[0]}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="mt-4 flex gap-1">
                <span className="text-gray-700">
                  {handleReturnMorph(product) || ""}
                </span>
              </div>
              <div>
                <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-indigo-700/10">
                  {product.sex}
                </span>
              </div>
              <p className="mt-1 text-base font-semibold text-gray-900">
                {product.price} 원
              </p>
            </div>
          </div>
        ))}
    </section>
  );
}
