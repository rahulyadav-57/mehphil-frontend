import { atom } from "recoil";

interface BookingState {
  ticketCount: number;
  eventId?: string;
  eventAt?: Date | string;
  address?: string;
  title?: string;
  bookingId?: string;
}

const bookingState = atom<BookingState | undefined>({
  key: "bookingState",
  default: {
    ticketCount: 1,
  },
});

export { bookingState };
export type { BookingState };
