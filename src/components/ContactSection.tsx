import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mwpoabwv");

  return (
    <section id="contact" className="bg-[#18181b] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Get in Touch
        </h2>
        {state.succeeded ? (
          <div className="bg-green-700/80 text-white p-4 rounded-lg text-center text-base font-medium">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-transparent"
            autoComplete="off"
          >
            <div className="flex flex-col gap-1">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-[#18181b] text-white placeholder-white/50 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-[#23232a]"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-[#18181b] text-white placeholder-white/50 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-[#23232a]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="bg-[#18181b] text-white placeholder-white/50 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 border border-[#23232a] resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className={`w-full mt-2 py-2 rounded-md font-semibold text-base transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${
                  state.submitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              {state.submitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
