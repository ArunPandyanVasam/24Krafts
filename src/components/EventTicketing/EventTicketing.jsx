import React, { useState, useEffect } from 'react';
import styles from './EventTicketing.module.css';

export const EventTicketing = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    fetch('/upcomingEventBook.json')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching upcoming events:', error));
  }, []);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setSelectedShowtime('');
    setSelectedSeats([]);
  };

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat) // Deselect seat
        : [...prevSeats, seat] // Select seat
    );
  };

  return (
    <div className={styles.ticketingSection}>
      <h2 className={styles.title}>Upcoming Events & Movie Releases</h2>

      <div className={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard} onClick={() => handleEventSelect(event)}>
            <img src={event.poster} alt={event.title} className={styles.eventPoster} />
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.eventDate}>Release Date: {event.releaseDate}</p>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className={styles.showtimeSelection}>
          <h3>Select Showtime for {selectedEvent.title}</h3>
          <div className={styles.showtimeButtons}>
            {selectedEvent.showtimes.map((time) => (
              <button
                key={time}
                className={`${styles.showtimeButton} ${
                  selectedShowtime === time ? styles.activeShowtime : ''
                }`}
                onClick={() => setSelectedShowtime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedShowtime && (
        <div className={styles.seatSelection}>
          <h3>Select Your Seats</h3>
          <div className={styles.seatsGrid}>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((seat) => (
              <button
                key={seat}
                className={`${styles.seatButton} ${
                  selectedSeats.includes(seat) ? styles.selectedSeat : ''
                }`}
                onClick={() => handleSeatSelection(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedSeats.length > 0 && (
        <button className={styles.proceedButton} onClick={() => alert('Proceed to Payment')}>
          Proceed to Payment
        </button>
      )}
    </div>
  );
};
