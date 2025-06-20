import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import 'intl';
import 'intl/locale-data/jsonp/en';

import { Main } from './src/Main';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
  );
}
