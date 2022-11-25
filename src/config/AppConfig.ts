import { nftTicketContract } from "./nftTicketContract";

const AppConfig = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "",
  web3Auth: {
    clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "",
  },
  arcana: {
    appAddress: process.env.NEXT_PUBLIC_ARCANA_APP_ADDRESS || "",
  },
  nftTicketContract,
};

export default AppConfig;
