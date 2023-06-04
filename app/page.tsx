"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Form from "@/components/ui/form";
import { ItemList } from "@/components/ui/itemList";

interface Item {
  id: number;
  item: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: string) => {
    console.log("You added", item);
    const newItem = { id: Date.now(), item };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    console.log("updated items", updatedItems);
    console.log("Here are all the items:", items);
  };

  return (
    <main className='mx-auto flex flex-col md:max-w-2xl'>
      <h1 className='mx-auto mt-3 text-xl'>What&apos;s in the Fridge</h1>
      <Form onAdd={addItem} />
      <ItemList items={items} />
    </main>
  );
}
