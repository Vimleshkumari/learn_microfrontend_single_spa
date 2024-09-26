import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import LandingPage from './components/landingPage';
import FoodProvider from './context/FoodProvider';
import { ChakraProvider } from '@chakra-ui/react'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})




function App() {
  return (
    <ChakraBaseProvider theme={theme}>

    <FoodProvider>

    <div className="App">
        <LandingPage/>
        {/* <Counter/> */}
    </div>
    </FoodProvider>
    </ChakraBaseProvider>


  );
}

export default App;
