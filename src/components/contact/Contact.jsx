import React, {useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser';


const Contact = () => {

  // Email JS

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_ybs2eza',
        'template_v50dggr',
        form.current,
        'xgSl7VHnan-R_F5N1'
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success(
            'Notre équipe vous remercie pour votre message, qui sera traité dans les meilleurs délais. Cordialement, Vincent Fernandel Production',
            {
              autoClose: 10000,
            }
          )
          setTimeout(() => {
            document.location.href = '/'
          }, 10000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="max-w-md mx-auto py-4 max-sm:h-full" id='contact'>
      <h1 className='text-center py-12'>CONTACT</h1>
      <form className='max-sm:w-[90%] max-sm:mx-auto' ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="text-xl block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Votre nom"
            name="user_name"
            required />
        </div>
        <div className="mb-4">
          <label className="text-xl block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Votre email"
            name="user_mail"
            required />
        </div>
        <div className="mb-6">
          <label className="text-xl block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            name="message"
            placeholder="Entrez votre message..."
            required
            minLength={10}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value='Send'
          >
            Envoyer
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
