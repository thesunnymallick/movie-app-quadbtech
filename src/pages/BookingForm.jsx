import { useLocation, useNavigate } from 'react-router-dom';
import '../style/BookingForm.scss';
import { useState } from 'react';
import { toast } from 'react-toastify';
import noPoster from '../image/no-poster.png';
const BookingForm = () => {
  const { state } = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const TicketBookHandel = (e) => {
    e.preventDefault();
    console.log(name, email, phone);
    const TicketInfo = {
      userName: name,
      userEmail: email,
      userPhone: phone,
      movieId: state?.id,
      movieName: state?.name,
    };

    localStorage.setItem('ticket-info', JSON.stringify(TicketInfo));

    setName('');
    setEmail('');
    setPhone('');
    toast.success('Ticket book successfull!', { position: 'top-center' });
    navigate('/');
  };

  return (
    <div className="booking">
      <div className="ticket-booking">
        <div className="movie-content">
          <div>
            <img
              src={state?.image?.original || noPoster}
              alt={state.name}
            />
          </div>
          <aside>
            <h2>{state.name}</h2>
            <p>
              language: <span>{state.language}</span>
            </p>
          </aside>
        </div>
        <form onSubmit={TicketBookHandel}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button>Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
