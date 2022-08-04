import NetInfo from '@react-native-community/netinfo';
import {useState, useEffect} from 'react';

const useInternet = () => {
  const [inUsed, setInUsed] = useState(false);
  useEffect(() => {
    const unsubcribe = NetInfo.addEventListener(state => {
      if (state.isInternetReachable && state.isConnected) {
        setInUsed(true);
      } else {
        setInUsed(false);
      }
    });
    return unsubcribe();
  }, []);
  return inUsed;
};

export default useInternet;
