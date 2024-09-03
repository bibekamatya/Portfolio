import React, { useState } from "react";
import Icon from "./../Icons";
import { Header } from "./../header";
import { CONTACT_DETAILS } from "../../dataSheet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mjkbajbl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="dark:bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 lg:py-20">
      <Header header="Contact" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading font-bold tracking-tight text-3xl sm:text-5xl mb-6 text-themeColor">
              Get in Touch
            </h2>
            <p className="mt-3 mb-8 text dark:text-gray-300 text-gray-600">
              Whether you have a question, want to start a project, or simply
              want to connect, feel free to reach out. Let's collaborate and
              create something amazing together!
            </p>
            <ul className="space-y-6">
              {CONTACT_DETAILS.map(({ icon, title, content }) => (
                <li key={title} className="flex items-center">
                  <div className="h-10 w-10 flex items-center justify-center bg-transparent border-2 border-themeColor rounded-full p-2 cursor-pointer transition-all duration-300">
                    <Icon
                      icon={icon}
                      className="h-5 w-5 text-themeColor group-hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-themeColor">
                      {title}
                    </h3>
                    <p className="dark:text-gray-300 text-gray-500">
                      {content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="dark:bg-gray-800 bg-white lg:p-8 p-4 rounded-lg shadow-lg">
            <h2 className="mb-4 lg:text-2xl xl font-bold dark:text-gray-100 text-themeColor">
              Let's Begin Our Journey Together
            </h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your name"
                    className="w-full rounded-md border border-gray-600 dark:bg-gray-700 py-3 px-4 text-white placeholder-gray-400"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className="w-full rounded-md border border-gray-600 dark:bg-gray-700 py-3 px-4 text-white placeholder-gray-400"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    className="w-full rounded-md border border-gray-600 dark:bg-gray-700 py-3 px-4 text-white placeholder-gray-400"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md transition ease-in-out duration-300"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <p className="mt-4 text-green-500">
                    Your message was sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-500">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
