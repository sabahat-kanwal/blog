import SendEmail from "../actions/SendEmail";

const ContactPreview = () => {
  return (
    <article className="contact">
      <h2 className="title-font pink-text h2-tag">Contact Me</h2>
      <p className="white-text p-tag">
        If you are interested to hire me I am always open to new opportunities
        and interesting projects! Feel free to contact me if you have any other
        requests or questions regarding designing.
        <h6>Here is my Email: sabahatkanwal007@gmail.com</h6>
      </p>
      <SendEmail />
    </article>
  );
};

export default ContactPreview;
