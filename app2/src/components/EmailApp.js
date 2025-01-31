import React, { useState } from "react";

const EmailApp = () => {
  const [emails, setEmails] = useState([]);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const sendEmail = () => {
    if (to.trim() !== "" && subject.trim() !== "" && body.trim() !== "") {
      setEmails([...emails, { to, subject, body }]);
      setTo("");
      setSubject("");
      setBody("");
    }
  };

  return (
    <div className="d-flex flex-column vh-100 p-4 mx-auto border rounded shadow-lg bg-white">
      <h1 className="mb-4">Email App</h1>
      <input
        type="email"
        className="p-2 border rounded-md mb-2 w-full"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Recipient"
      />
      <input
        type="text"
        className="p-2 border rounded-md mb-2 w-full"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
      />
      <textarea
        className="p-2 border rounded-md mb-2 w-full"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Message"
      ></textarea>
      <button
        className="btn btn-primary fw-medium"
        onClick={sendEmail}
      >
        Send
      </button>
      <div className="mt-4 border-t pt-4">
        <h2 className="">Sent Emails</h2>
        {emails.map((email, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            <strong>To:</strong> {email.to} <br />
            <strong>Subject:</strong> {email.subject} <br />
            <p>{email.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailApp;
