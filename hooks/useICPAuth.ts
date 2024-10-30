import { useState, useEffect, useCallback } from "react";
import { AuthClient } from "@dfinity/auth-client";

type UseICPAuthReturn = {
  isAuthenticated: boolean;
  loginWithInternetIdentity: () => Promise<void>;
  logout: () => Promise<void>;
};

function useICPAuth(): UseICPAuthReturn {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);

  // Initialize the AuthClient once when the hook is first initialized
  useEffect(() => {
    async function initializeAuthClient() {
      const client = await AuthClient.create();
      setAuthClient(client);
      setIsAuthenticated(await client.isAuthenticated());
    }
    initializeAuthClient();
  }, []);

  const loginWithInternetIdentity = useCallback(async () => {
    if (authClient) {
      await authClient.login({
        identityProvider: "https://identity.internetcomputer.org",
        onSuccess: () => setIsAuthenticated(true),
      });
    }
  }, [authClient]);

  const logout = useCallback(async () => {
    if (authClient) {
      await authClient.logout();
      setIsAuthenticated(false);
    }
  }, [authClient]);

  return { isAuthenticated, loginWithInternetIdentity, logout };
}

export default useICPAuth;
