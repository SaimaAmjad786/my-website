import React from 'react'

function Contact() {
  return (
    <div id="Contact">
        <section className="text-gray-600 body-font relative bg-fixed ">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative  border-4 border-cyan-400">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.958438120013!2d67.0069432!3d24.949451449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ae71fc40a31%3A0xcfbb1d61e6ab566d!2sOrangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1727818077591!5m2!1sen!2s"
        
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Orangi Town Karachi.
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-blue-500 leading-relaxed"></a>
          saimaamjad12@gmail.com
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">123-456-789-99</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0  border-4 border-cyan-400 rounded-lg">
      <h2 className="title-font sm:text-4xl text-3xl mb-4  text-blue-700 flex justify-center hover:text-black font-serif font-bold">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-blue-700 flex justify-center font-bold">
        Feel free to Contact 
      </p>
      <form action="https://formspree.io/f/xqakzbbq" method="POST">
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-black flex justify-center font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required/>
      </div>

      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black font-bold flex justify-center">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required/>
      </div>

      <div className="relative mb-4">
        <label htmlFor="subject" className="leading-7 text-sm text-black flex justify-center font-bold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required/>
      </div>

      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-black flex justify-center font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        required/>
      </div>
      <button className="text-black bg-cyan-400 font-bold  border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg">
        Send Message
      </button>
      </form>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
