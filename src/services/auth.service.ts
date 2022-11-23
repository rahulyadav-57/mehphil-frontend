import { AppConfig } from "@/config";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3AuthCore } from "@web3auth/core";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";
import { ethers } from "ethers";

function createAuthService() {
  let authInstance: Web3AuthCore | null = null;
  let provider: SafeEventEmitterProvider | null = null;

  function getAuth() {
    if (!authInstance) {
      console.log("Auth not initialized");
      return;
    }
    return authInstance;
  }

  async function init() {
    if (authInstance) {
      provider = authInstance.provider;

      return authInstance;
    }

    const web3auth = new Web3AuthCore({
      clientId: AppConfig.web3Auth.clientId,
      chainConfig: {
        displayName: "Aurora",
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0x4E454153",
        rpcTarget: "https://testnet.aurora.dev",
        blockExplorer: "https://testnet.aurorascan.dev/",
        ticker: "ETH",
        tickerName: "Ethereum",
      },
    });

    const torusWalletAdapter = new TorusWalletAdapter({
      initParams: {
        whiteLabel: {
          theme: {
            isDark: true,
            colors: { torusBrand1: "#000" },
          },
          logoDark: "https://mehphil.vercel.app/images/logo.png",
          logoLight: "https://mehphil.vercel.app/images/logo.png",
          topupHide: true,
          featuredBillboardHide: true,
          disclaimerHide: true,
          defaultLanguage: "en",
        },
      },
    });
    web3auth.configureAdapter(torusWalletAdapter);
    web3auth.init();
    provider = web3auth.provider;
    authInstance = web3auth;

    authInstance;
  }

  async function getUser() {
    if (!authInstance) {
      console.log("Auth not initialized");
      return;
    }
    return authInstance?.getUserInfo();
  }

  const getAccounts = async () => {
    if (!authInstance) {
      return [];
    }
    const web3 = new ethers.providers.Web3Provider(authInstance.provider!!);
    return web3.listAccounts();
  };

  async function logout() {
    if (!authInstance) {
      console.log("Auth not initialized");
      return;
    }
    return authInstance.logout();
  }

  async function personalSign(message: any, address: string) {
    if (!authInstance || !authInstance.provider) {
      console.log("Auth not initialized");
      return;
    }

    return authInstance?.provider.request({
      method: "personal_sign",
      params: [message, address],
    });
  }

  return {
    init,
    logout,
    getAuth,
    getUser,
    personalSign,
    getAccounts,
  };
}
const AuthService = Object.freeze(createAuthService());

export default AuthService;
