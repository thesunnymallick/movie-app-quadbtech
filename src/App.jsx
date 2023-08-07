import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ShowDetails from './pages/ShowDetails';
import BookingForm from './pages/BookingForm';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/showDetails/:id"
          element={<ShowDetails />}
        />
        <Route
          path="/booking"
          element={<BookingForm />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
