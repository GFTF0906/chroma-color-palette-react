/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';

type SearchColorProps = {
  onSubmit: (hex: string, scheme: string) => void;
};

function SearchColor({ onSubmit }: SearchColorProps) {
  const [color, setColor] = useState<string>('');
  const [scheme, setScheme] = useState<string>('monochrome');

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      className="flex items-center justify-center flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(color, scheme);
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          ref={inputRef}
          type="text"
          name="colorInp"
          id="colorInp"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          autoComplete="off"
          placeholder="Type a hex color to see it color palette!"
          className="py-2 px-3 w-[19rem] rounded transition-all outline-4 outline-zinc-500 bg-zinc-700 hover:outline-zinc-700 hover:bg-zinc-600"
        />
        <select
          className="p-2 rounded bg-zinc-700"
          value={scheme}
          onChange={(e) => {
            setScheme(e.target.value);
            inputRef.current?.focus();
          }}
        >
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome Dark</option>
          <option value="monochrome-light">Monochrome Light</option>
          <option value="analogic">Analogic</option>
          <option value="complement">Complement</option>
          <option value="analogic-complement">Analogic Complement</option>
          <option value="triad">Triad</option>
          <option value="quad">Quad</option>
        </select>
      </div>
    </form>
  );
}

export default SearchColor;
