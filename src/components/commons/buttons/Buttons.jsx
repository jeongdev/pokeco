import { Button } from "@headlessui/react";

export function DefaultWhiteBtn({ children, type, onClick, onChange }) {
  return (
    <Button
      type={type}
      onClick={onClick}
      onChange={onChange}
      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-base font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
    >
      {children}
    </Button>
  );
}