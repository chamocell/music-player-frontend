import { useLocation } from 'react-router-dom';

export default function useQuery() {
  console.log('CREATING NEW');
  return new URLSearchParams(useLocation().search);
}
