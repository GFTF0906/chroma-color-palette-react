import ColorsRender from './components/ColorsRender';
import Titles from './components/Titles';

import useFetchRandomPalette from './hooks/useFetchRandomPalette';

function App() {
  const {
    randomPaletteObj: data,
    isLoading,
    isError,
  } = useFetchRandomPalette()!;

  if (isError) {
    return <h3>Error on generating your color pallete</h3>;
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    data && (
      <main className="flex items-center justify-center flex-col gap-16">
        <Titles />
        <ColorsRender
          colors={data?.colors}
          mode={data?.mode}
          seed={data?.seed}
        />
      </main>
    )
  );
}

export default App;
