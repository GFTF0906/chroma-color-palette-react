import { useEffect, useState } from 'react';

import useFetchRandomPalette from './hooks/useFetchRandomPalette';
import type { ColorPalette } from './types/ColorPaletteType';

import ColorsRender from './components/ColorsRender';
import SearchColor from './components/SearchColor';
import Titles from './components/Titles';
import fetchData from './utils/FetchData';

function App() {
  const { dataObj: data, isLoading, isError } = useFetchRandomPalette();
  const [currentColorPalette, setCurrentColorPalette] =
    useState<ColorPalette>();

  useEffect(() => data && setCurrentColorPalette(data), [data]);

  const handleSubmit = async (hex: string, scheme: string) => {
    const userData = await fetchData(hex, scheme);
    if (!userData) return;

    const colorsArr = userData.dataObj.colors;
    if (colorsArr.every((color) => color.hex.value === '#000000')) return;

    setCurrentColorPalette(userData?.dataObj);
  };

  if (isError) {
    return <h3>Error on generating your color palette</h3>;
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <main className="flex items-center justify-center flex-col gap-16">
      <Titles />
      <SearchColor onSubmit={handleSubmit} />
      {currentColorPalette && (
        <ColorsRender
          colors={currentColorPalette?.colors}
          mode={currentColorPalette?.mode}
          seed={currentColorPalette?.seed}
        />
      )}
    </main>
  );
}

export default App;
