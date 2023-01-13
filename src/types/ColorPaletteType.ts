export type ColorPalette = {
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
