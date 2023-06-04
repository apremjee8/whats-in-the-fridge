import React from "react";

interface Item {
  id: number;
  item: string;
}

interface ItemsProps {
  items: Item[];
}

export const ItemList = ({ items }: ItemsProps) => {
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.item}</p>
      ))}
    </div>
  );
};
