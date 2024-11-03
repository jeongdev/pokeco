import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

type Category = {
  name: string;
  posts: JSX.Element;
};

type Props = {
  items: Array<Category>;
};

export default function Tabs({ items }: Props): JSX.Element {
  return (
    <div className="flex w-full justify-center pt-10 px-4">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex gap-4">
            {items.map((item: Category, index: number) => (
              <Tab
                key={index}
                className="w-1/2 capitalize rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-white/50 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {item.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {items.map((item: Category, index: number) => (
              <TabPanel key={index} className="rounded-xl bg-white/5 p-3">
                {item.posts}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
