import React from "react";

const Contact = () => {
  return (
    <div
      className="ContactBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white bg-gray-800"
      id="contact"
    >
      <div className="contact-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-amber-400">
        ..// contact
      </div>

      <div className="flex flex-col gap-10 justify-center items-center w-8/12">
        <div className="contact-sec1 flex flex-col text-left gap-5 pt-6 pb-6 pr-10 pl-10 rounded bg-white/10 hover:bg-black/40">
          <span className="text-3xl font-bold border-b-2 border-amber-400 p-2 text-amber-400">
            Get in Touch
          </span>
          <ul className="flex flex-col gap-3 font-semibold text-base text-lime-50">
            <li className="hover:text-amber-400">
              <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                📞 Phone: +998888540036
              </a>
            </li>
            <li className="hover:text-amber-400">
              <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
                📱 Telegram: @Rustamoff21
              </a>
            </li>
            <li className="hover:text-amber-400">
              <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
                📸 Instagram: @Rustamoff.21
              </a>
            </li>
            <li className="hover:text-amber-400">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp: +998911598407
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
