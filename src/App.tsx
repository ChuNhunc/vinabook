import './App.css';
import { VinaBooksProvider} from './context/VinaBooksContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/page/HomePage';
import { BookDetailPage } from './components/page/BookDetailPage';

function App() {
  return (
    <BrowserRouter>
      <VinaBooksProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path=':bookName' element={<BookDetailPage/>}/>
        </Routes>
    </VinaBooksProvider>
    </BrowserRouter>
  );
}

export default App;
