"use client";
import React from "react";
import { useState } from "react";

interface ChildProps {
  onAdd: (arg: string) => void;
}

export default function Form({ onAdd }: ChildProps) {
  const [item, setItem] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onAdd(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label htmlFor='item'>What would you like to add?</label>
        <input
          className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
          id='item'
          type='text'
          placeholder='Put something in the fridge'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </div>
      <div className='flex items-center justify-between'>
        <button
          className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
          type='submit'
        >
          Add
        </button>
      </div>
    </form>
  );
}
