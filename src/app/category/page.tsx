"use client";

import { Card, Checkbox, Pagination } from "../../components";

const items = [
  {
    id: "1",
    name: "Shoe",
    isSelected: true,
  },
  {
    id: "2",
    name: "Shirt",
    isSelected: false,
  },
  {
    id: "3",
    name: "Makeup",
    isSelected: true,
  },
  {
    id: "4",
    name: "Furniture",
    isSelected: true,
  },
  {
    id: "5",
    name: "AC",
    isSelected: true,
  },
];

export default function Category() {
  return (
    <main className="mt-10 flex justify-center">
      <Card title="Please mark your interests!">
        <p className="mb-8 text-center">We will keep you notified.</p>
        <p className="mb-8 text-xl font-medium">My saved interests!</p>
        {items.map((item, index) => (
          <Checkbox
            id={item.id}
            key={item.id}
            name={item.name}
            checked={item.isSelected}
            onChange={console.log}
            className={index !== items.length - 1 ? `mb-6` : undefined}
          />
        ))}
        <Pagination
          totalPages={10}
          currentPage={1}
          onPageChange={console.log}
          className="mt-[60px]"
        />
      </Card>
    </main>
  );
}
