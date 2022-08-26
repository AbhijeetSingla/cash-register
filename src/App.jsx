import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Form from './components/Form';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Header />
      <Form />
      <Footer />
    </>
  );
}

export default App;
