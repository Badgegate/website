import { useState, useEffect, useCallback } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { ii_frontend_url_experimental } from "@/lib/constants";
import { ICPAuthReturn } from "@/lib/types";

function useICPAuth(): ICPAuthReturn {
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

  const loginWithInternetIdentity = useCallback(async () => {
    if (authClient) {
      await authClient.login({
        identityProvider: ii_frontend_url_experimental,
        onSuccess: () => {
          setIsAuthenticated(true);
          const identity = authClient.getIdentity();
          setPrincipal(identity.getPrincipal().toText());
        },
      });
    }
  }, [authClient]);

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