import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Accept"
      cookieName="myAwesomeCookieName2"
      style={{ fontFamily: "Baskerville", background: "#fff", color: "#000" }}
      buttonStyle={{
        background: "#272727",
        color: "#fff",
        fontSize: "15px",
        textTransform: "uppercase",
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default Cookies;
