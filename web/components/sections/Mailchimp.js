import PropTypes from "prop-types";
import React from "react";
import MailchimpForm from "react-mailchimp-form";
import styles from "./Mailchimp.module.css";

export default function Mailchimp(props) {
  const { heading, subtitle, actionUrl } = props;

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
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
                name: "MARKETINGINFO",
                placeholder:
                  "We will use the information you provide on this form to be in touch with you and to provide updates and marketing. Please let us know all the ways you would like to hear from us",
                type: "string",
                className: styles.marketingInfo,
                required: true,
              },
              {
                name: "Marketing Permissions",
                placeholder: "Marketing Permissions",
                type: "checkbox",
                className: styles.GDPR,
                required: true,
              },
              {
                name: "LEGALCOPY",
                placeholder:
                  "You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please see our Terms and Conditions.",
                type: "string",
                className: styles.legalCopy,
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
