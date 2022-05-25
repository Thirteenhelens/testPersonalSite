import { TextField, Button } from "@mui/material";

export default function ContactPage() {
  return (
    <div id="contactContainer" class="bg-dark w-screen h-screen">
      <div id="header" class="bg-lighter">
        <p>get in touch with me</p>
      </div>

      <div id="contactForm" class="bg-light p-2">
        <p>name</p>
        <TextField variant="filled" />
        <p>email</p>
        <TextField variant="filled" />
        <p>message</p>
        <TextField variant="filled" />
        <br />
        <Button>send</Button>
      </div>

      <br />
      <div id="msgTxt" class="bg-light">
        <p>message to the person</p>
      </div>
    </div>
  );
}
