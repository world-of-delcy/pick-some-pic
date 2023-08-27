import React, { useState, useEffect, useRef } from "react";
import Placeholder from "./common/Placeholder";
import Error from "./common/Error";
import { getAuthCode, getToken } from "./../services/PostService";
import { useSearchParams } from "react-router-dom";
function Login(props) {
  const [error, setError] = useState(false);
  let errorMessage = useRef("");
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const server_error = searchParams.get("server_error");
  const rate_limit_exceeded = searchParams.get("rate_limit_exceeded");
  const access_denied = searchParams.get("access_denied");
  const temporarily_unavailable = searchParams.get("temporarily_unavailable");

  useEffect(() => {
    (async () => {
      if (code) {
        try {
          const { data } = await getToken(
            code,
            sessionStorage.getItem("redirect_uri")
          );
          if (data?.access_token) {
            sessionStorage.setItem("token", data.access_token);
          }
        } catch (error) {
          if (server_error || temporarily_unavailable)
            errorMessage.current = "Server Error...";
          if (rate_limit_exceeded)
            errorMessage.current = "rate limit exceeded...";
          if (access_denied) errorMessage.current = "access denied...";
          setError(true);
        }
      } else {
        try {
          await getAuthCode(document.location.href);
        } catch (error) {
          errorMessage.current = "Authorization Error";
          setError(true);
        }
      }
    })();
  }, [
    code,
    access_denied,
    server_error,
    rate_limit_exceeded,
    temporarily_unavailable,
  ]);
  if (error)
    return (
      <>
        <Error message={errorMessage.current} />
      </>
    );
  return <Placeholder message="Logging in" />;
}

export default Login;
