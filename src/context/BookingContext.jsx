import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(undefined);

  const openBooking = useCallback((serviceId) => {
    setSelectedService(serviceId || undefined);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ open, selectedService, openBooking, closeBooking, setSelectedService }),
    [open, selectedService, openBooking, closeBooking],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return ctx;
}
