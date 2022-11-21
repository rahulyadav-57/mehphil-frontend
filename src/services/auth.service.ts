import { AppConfig } from "@/config";
import { timeout } from "@/utils/Misc";
import { AuthProvider } from "@arcana/auth";
import { AppSocialLogin } from "types";

function createAuthService() {
  let authInstance: AuthProvider = {} as AuthProvider;

  async function getAuth() {
    return authInstance;
  }

  async function init() {
    const _authInstance = new AuthProvider(AppConfig.arcana.appAddress, {
      debug: false,
      alwaysVisible: true,
      theme: "dark",
    });
    authInstance = _authInstance;
    return authInstance.init();
  }

  async function isLoggedIn() {
    return authInstance.isLoggedIn();
  }

  async function logout() {
    return authInstance.logout();
  }

  async function requestPublicKey(email: string) {
    return authInstance.getPublicKey(email);
  }

  async function loginWithSocial(type: AppSocialLogin) {
    if (!(await isLoggedIn())) {
      await authInstance.loginWithSocial(type);
    }
  }

  async function loginWithLink(email: string) {
    if (!(await isLoggedIn())) {
      await authInstance.loginWithLink(email);
    }
  }

  async function fetchUserDetails() {
    return authInstance.getUser();
  }

  async function requestWalletInfo() {
    const provider = authInstance.provider;
    return provider.request({ method: "eth_accounts" });
  }

  async function changeChain() {
    await authInstance.provider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x4E454153",
          chainName: "Aurora Testnet",
          blockExplorerUrls: ["https://testnet.aurorascan.dev/"],
          rpcUrls: ["https://testnet.aurora.dev"],
          nativeCurrency: {
            symbol: "ETH",
          },
        },
      ],
    });
    await timeout(500);

    await authInstance.provider.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: "0x4E454153",
        },
      ],
    });
  }

  async function personalSign(message: any, address: string) {
    return authInstance.provider.request({
      method: "eth_sign",
      params: [address, message],
    });
  }

  return {
    init,
    isLoggedIn,
    logout,
    requestPublicKey,
    loginWithSocial,
    loginWithLink,
    fetchUserDetails,
    requestWalletInfo,
    getAuth,
    changeChain,
    personalSign,
  };
}

const AuthService = Object.freeze(createAuthService());

export default AuthService;
