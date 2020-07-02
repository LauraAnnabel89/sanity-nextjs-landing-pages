import PropTypes from "prop-types";
import React from "react";
import MailchimpForm from "react-mailchimp-form";
import styles from "./Mailchimp.module.css";

export default function Mailchimp(props) {
  const { heading, subtitle, actionUrl, legalCopy } = props;

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.legalCopy}>{legalCopy}</p>
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: "EMAIL",
                placeholder: "email address",
                type: "email",
                className: styles.email,
                required: true,
              },
              {
                name: "Marketing Permissions",
                placeholder: "Marketing Permissions",
                type: "checkbox",
                label: "email",
                className: styles.GDPR,
                required: true,
              },
            ]}
            buttonClassName={styles.button}
            styles={{
              sendingMsg: {
                color: "#0652DD",
              },
              successMsg: {
                color: "#009432",
              },
              duplicateMsg: {
                color: "#EE5A24",
              },
              errorMsg: {
                color: "red",
              },
            }}
            messages={{
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "You must write an e-mail.",
              duplicate: "Already subscribed",
              button: "Sign Up",
            }}
            className={styles.form}
          />
        )}
      </div>
    </section>
  );
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
};
