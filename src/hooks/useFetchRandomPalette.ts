import { useQuery } from '@tanstack/react-query';
import fetchData from '../utils/FetchData';

function useFetchRandomPalette() {
  const possibleSchemes = [
    'monochrome',
    'monochrome-dark',
    'monochrome-light',
    'analogic',
    'complement',
    'analogic-complement',
    'triad',
    'quad',
  ];

  const randomIndex = Math.floor(Math.random() * possibleSchemes.length);

  const randomHex = `${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;

  const { data, isLoading, isError } = useQuery(
    ['Fetch random color palette.'],
    () => fetchData(randomHex, possibleSchemes, randomIndex),

    {
      refetchOnWindowFocus: false,
    }
  );

  const dataObj = data?.dataObj;

  return { dataObj, isLoading, isError };
}

export default useFetchRandomPalette;
