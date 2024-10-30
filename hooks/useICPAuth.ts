import { useState, useEffect, useCallback } from "react";
import { AuthClient } from "@dfinity/auth-client";

type UseICPAuthReturn = {
  isAuthenticated: boolean;
  principal: string | null;
  loginWithInternetIdentity: () => Promise<void>;
  logout: () => Promise<void>;
};

function useICPAuth(): UseICPAuthReturn {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [principal, setPrincipal] = useState<string | null>(null);

  // Initialize the AuthClient and check if the user is authenticated
  useEffect(() => {
    async function initializeAuthClient() {
      const client = await AuthClient.create();
      setAuthClient(client);

      // Check if the user is already authenticated - local storage session
      const isAuthenticated = await client.isAuthenticated();
      if (isAuthenticated) {
        const identity = client.getIdentity();
        setPrincipal(identity.getPrincipal().toText());
      }
      setIsAuthenticated(isAuthenticated);

    }
    initializeAuthClient();
  }, []);

  // Login function wrapped in useCallback for stability in dependencies
  const loginWithInternetIdentity = useCallback(async () => {
    if (authClient) {
      await authClient.login({
        identityProvider: "https://identity.internetcomputer.org",
        onSuccess: () => {
          setIsAuthenticated(true);
          const identity = authClient.getIdentity();
          setPrincipal(identity.getPrincipal().toText());
        },
      });
    }
  }, [authClient]);

  // Logout function wrapped in useCallback
  const logout = useCallback(async () => {
    if (authClient) {
      await authClient.logout();
      setIsAuthenticated(false);
      setPrincipal(null);
    }
  }, [authClient]);

  return { isAuthenticated, principal, loginWithInternetIdentity, logout };
}

export default useICPAuth;