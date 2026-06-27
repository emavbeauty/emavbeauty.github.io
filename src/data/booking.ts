export type BookingStatus =
  | 'books_open'
  | 'limited_availability'
  | 'waitlist_only'
  | 'temporarily_closed';

export const booking = {
  status: 'waitlist_only' as BookingStatus,
  label: 'Waitlist only',
  announcement:
    'Books are currently closed to new clients. Join the waitlist to be considered for future openings.',
  primaryCta: 'Join the Waitlist',
  bookingUrl: '',
  waitlistUrl: '',
  showBookingButton: false,
  showWaitlistButton: true,
  placeholderNote: 'External booking and waitlist links are placeholders until supplied.',
};
