import React, { useState, useEffect } from 'react';
import styles from './EventTicketing.module.css';

export const EventTicketing = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    // Fetch upcoming events/movies
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
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  return (
    <div className={styles.eventTicketingSection}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Upcoming Events & Movie Premieres</h1>
        <p className={styles.heroDescription}>
          Discover the latest events and movie releases. Secure your tickets now!
        </p>
        <button className={styles.heroCtaButton}>Get Tickets Now</button>
      </div>

      {/* Upcoming Events & Movie Releases */}
      <div className={styles.upcomingEvents}>
        <h2 className={styles.title}>Upcoming Events & Movie Releases</h2>
        <div className={styles.eventList}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventCard} onClick={() => handleEventSelect(event)}>
              <img src={event.poster} alt={event.title} className={styles.eventPoster} />
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDate}>Release Date: {event.releaseDate}</p>
              <button className={styles.ticketButton}>Buy Tickets</button>
            </div>
          ))}
        </div>
      </div>

      {/* Ticketing System (Showtimes & Seat Selection) */}
      {selectedEvent && (
        <div className={styles.ticketingSystem}>
          <h2 className={styles.title}>Select Showtime & Seats</h2>

          {/* Showtimes */}
          <div className={styles.showtimes}>
            <h3>Showtimes</h3>
            <div className={styles.showtimeButtons}>
              {selectedEvent.showtimes.map((time) => (
                <button
                  key={time}
                  className={`${styles.showtimeButton} ${selectedShowtime === time ? styles.selected : ''}`}
                  onClick={() => setSelectedShowtime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Seat Selection */}
          <div className={styles.seatSelection}>
            <h3>Select Your Seats</h3>
            <div className={styles.seatGrid}>
              {Array.from({ length: 30 }, (_, index) => index + 1).map((seat) => (
                <button
                  key={seat}
                  className={`${styles.seatButton} ${selectedSeats.includes(seat) ? styles.selected : ''}`}
                  onClick={() => handleSeatSelection(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Section */}
          <div className={styles.paymentSection}>
            <h3>Payment</h3>
            <p>Total: ${(selectedSeats.length * 10).toFixed(2)}</p>
            <button className={styles.paymentButton}>Proceed to Payment</button>
          </div>
        </div>
      )}

      {/* Promotions & Discounts */}
      <div className={styles.promotions}>
        <h2 className={styles.title}>Special Promotions</h2>
        <p>Get 10% off on bulk ticket purchases! Use code: <strong>EVENT10</strong></p>
      </div>
    </div>
  );
};
