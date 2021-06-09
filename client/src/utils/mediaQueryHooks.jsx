import { useMediaQuery } from 'react-responsive';

export const useXsMediaQuery = () => useMediaQuery({ query: '(min-width: 360px)' });
export const useSmMediaQuery = () => useMediaQuery({ query: '(min-width: 576px)' });
export const useMdMediaQuery = () => useMediaQuery({ query: '(min-width: 768px)' });
export const useLgMediaQuery = () => useMediaQuery({ query: '(min-width: 992px)' });
export const useXlMediaQuery = () => useMediaQuery({ query: '(min-width: 1200px)' });
export const useXxlMediaQuery = () => useMediaQuery({ query: '(min-width: 1400px)' });
