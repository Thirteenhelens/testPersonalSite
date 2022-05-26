import { useState } from "react";
import { TextField } from "@mui/material";

export default function ContactPage() {
  const formSmile = {
    name: "",
    email: "",
    message: "",
  };

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
    setContactForm(formSmile);
  };

  return (
    <div id="contactContainer" class="bg-dark w-screen h-screen">
      <div id="header" class="bg-lighter">
        <p>get in touch with me</p>
      </div>

      <div id="contactForm" class="bg-light p-2">
        <form onSubmit={onSubmit}>
          <TextField
            type="text"
            label="name"
            variant="filled"
            value={contactForm.name}
            onChange={(e) => {
              setContactForm({ name: e.target.value });
            }}
          />
          <br />
          <br />
          <TextField
            label="email"
            variant="filled"
            value={contactForm.email}
            onChange={(e) => {
              setContactForm({ email: e.target.value });
            }}
          />
          <br />
          <br />
          <TextField
            label="message"
            variant="filled"
            value={contactForm.message}
            onChange={(e) => {
              setContactForm({message: e.target.value});
            }}
          />
          <br />
          <br />
          <button type="submit">send</button>
        </form>
      </div>

      <br />
      <div id="msgTxt" class="bg-light">
        <p>message to the person</p>
      </div>
    </div>
  );
}
