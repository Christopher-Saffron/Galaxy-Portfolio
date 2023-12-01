"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = ["mew", "mewtwo", "pikachu"];

const ExampleClientComponent = ({ selected }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSelect = () => {
    // now you got a read/write object
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    // update as necessary
    const value = event.target.value.trim();

    console.log(value);
    if (!value) {
      current.delete("selected");
    } else {
      current.set("selected", event.target.value);
    }
    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <select value={selected} onChange={onSelect}>
      <option value="">None</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default ExampleClientComponent;
