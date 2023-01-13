import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type ColorPalette = {
  colors: [
    {
      hex: { clean: string; value: string };
      hsl: { value: string };
      rgb: { value: string };
      name: { value: string };
    }
  ];
  mode: string;
  seed: {
    name: {
      value: string;
    };
  };
};

// eslint-disable-next-line consistent-return
const fetchRandomPalette = async () => {
  const randomHex = `${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;

  try {
    const response = await axios.get(
      `https://www.thecolorapi.com/scheme?hex=${randomHex.toUpperCase()}&format=json&mode=analogic&count=6`
    );

    const randomPalletObj: ColorPalette = {
      colors: response.data.colors,
      mode: response.data.mode,
      seed: response.data.seed,
    };

    return randomPalletObj;
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const { data, isLoading, isError } = useQuery(
    ['Fetch random color palette'],
    fetchRandomPalette
  );

  return (
    <main className="flex items-center justify-center flex-col">
      <section className="pb-12">
        <h1 className="text-2xl text-center">Chroma</h1>
        <h2 className="text-xl">Color Palette Generator</h2>
      </section>

      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Error on generating your color palette...</h3>}

      <section className="flex items-center justify-center gap-8 flex-col">
        <h2 className="capitalize text-xl">
          {data?.seed.name.value} - {data?.mode}
        </h2>

        <section className="flex items-center justify-center gap-4">
          {data?.colors.map((color) => (
            <div
              key={color.hex.value}
              className="flex items-center justify-start flex-col"
            >
              <div
                className="w-20 h-20 mb-4 rounded"
                style={{ backgroundColor: color.hex.value }}
              />
              <h3 className="pb-1 text-md font-bold">{color.name.value}</h3>
              <h4 className="cursor-pointer">{color.hex.value}</h4>
              <h4 className="cursor-pointer">{color.hsl.value}</h4>
              <h4 className="cursor-pointer">{color.rgb.value}</h4>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
