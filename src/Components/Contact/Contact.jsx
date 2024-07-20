import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending email with the following data:", form);

    emailjs
      .send(
        "service_fs2h3ib", // Replace with your EmailJS service ID
        "template_5gagszs", // Replace with your EmailJS template ID
        form,
        "caEnXbmeCPQrBZ-FL", // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="mt-20 flex flex-col justify-between bg-[#131319] p-8 text-white md:flex-row">
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold uppercase text-[#caccd3]">
          Connect with me
        </h2>
        <div className="ml-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CgMail />
            <span>sagarmanchakatla@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <span>
              <a
                href="https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284"
                className=""
              >
                www.linkedin.com/in/sagar-manchakatla-4163-523b44284
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <span>
              <a href="https://github.com/sagarmanchakatla" className="">
                https://github.com/sagarmanchakatla
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold uppercase text-[#caccd3]">
          Contact me
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            className="border-none bg-[#1c2541] p-2 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border-none bg-[#1c2541] p-2 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="border-none bg-[#1c2541] p-2 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
