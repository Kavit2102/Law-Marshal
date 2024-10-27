import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/contact", formData);
      console.log("Form submission response:", response.data);
      alert("Thank you for contacting us!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (

    <section className="">
      <div className="mx-auto min-w-screen px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-5">
          <div className="flex items-center justify-center rounded-lg p-8 lg:col-span-3 lg:p-10">

            <form

              onSubmit={handleSubmit}

              className="contact-form space-y-4 w-full"

            >

              <div>

                <label className="sr-only" htmlFor="name">

                  Name

                </label>

                <input

                  className="w-full rounded-lg p-3 text-sm"

                  placeholder="Name"

                  type="text"

                  id="name"

                  name="name"

                  value={formData.name}

                  onChange={handleChange}

                />

              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>

                  <label className="sr-only" htmlFor="email">

                    Email

                  </label>

                  <input

                    className="w-full rounded-lg p-3 text-sm"

                    placeholder="Email address"

                    type="email"

                    id="email"

                    name="email"

                    value={formData.email}

                    onChange={handleChange}

                  />

                </div>

                <div>

                  <label className="sr-only" htmlFor="phone">

                    Phone

                  </label>

                  <input

                    className="w-full rounded-lg p-3 text-sm"

                    placeholder="Phone Number"

                    type="tel"

                    id="phone"

                    name="phone"

                    value={formData.phone}

                    onChange={handleChange}

                  />

                </div>

              </div>

              <div>

                <label className="sr-only" htmlFor="message">

                  Message

                </label>

                <textarea

                  className="w-full rounded-lg p-3 text-sm"

                  placeholder="Message"

                  rows="8"

                  id="message"

                  name="message"

                  value={formData.message}

                  onChange={handleChange}

                ></textarea>

              </div>

              <div className="mt-4">

                <button

                  type="submit"

                  className="inline-flex items-center justify-center p-5 text-lg font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"

                >

                  Send Message

                </button>

              </div>

            </form>

          </div>
        </div>
      </div>
    </section>

  );

};

export default ContactForm;