import Button from "../proxyComponent/Button";

const SendEmail = () => {
  function sendEmai() {
    window.open(
      "mailto:sabahatkanwal007@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <Button className="sendemail-btn" onClick={sendEmai}>
      Send Email
    </Button>
  );
};

export default SendEmail;
