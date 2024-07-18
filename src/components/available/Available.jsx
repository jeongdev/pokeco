import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    morph: ["릴리화이트", "트라이"],
    href: "#",
    price: "1350000",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    sex: "female",
    birth: "20240501",
    weight: 24,
    describe: "hello world",
  },
  {
    id: 2,
    morph: ["노멀"],
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    morph: ["트익할"],
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    morph: ["Machined Mechanical Pencil"],
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Available() {
  return (
    <section className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <Link key={product.id} to={`/list/${product.id}`} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="mt-4 flex gap-1">
              {product.morph.map((item) => (
                <span className="text-gray-700">{item}</span>
              ))}
            </div>
            <div>
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-indigo-700/10">
                암컷
              </span>
            </div>
            <p className="mt-1 text-base font-semibold text-gray-900">
              {product.price} 원
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
