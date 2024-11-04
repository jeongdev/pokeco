import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Main({ children }: Props): React.ReactElement {
  return (
    <main className="relative mx-auto min-h-screen max-w-screen-sm bg-bg sm:shadow-xl">
      <div className="relative mx-auto max-w-7xl px-6 pt-24 sm:static">
        {children}
      </div>
    </main>
  );
}
