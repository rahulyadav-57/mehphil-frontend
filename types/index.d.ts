declare global {}

interface Media {
  fileName?: string;
  orignalFileName?: string;
  mime?: string;
  path: string;
  size?: string;
  caption?: string;
  description?: string;
  uploadedBy?: string;
}

export interface User {
  _id: ObjectId;
  walletAddress: string;
  email?: string;
  name?: string;
  nonce: string;
  avatar?: string;
  role: string;
  isActive: boolean;
  gender: "male" | "female" | "transgender";
}

export interface MeetupEvent {
  _id?: ObjectId;
  title?: string;
  type?: "In-Person" | "Online";
  address?: string;
  latLong?: LatLong;
  meetingUrl?: string;
  eventAt: Date;
  description?: string;
  thumbnail: Media | string;
  createdBy?: User;
}

export interface Bookings {
  _id?: ObjectId;
  name: string;
  email: string;
  ticketCount: string;
  nftOpted: boolean;
  members: string[];
}

export type AppSocialLogin = "google" | "twitter" | "github";
