import React from 'react';
import Navbar from '../shared/Navbar';

function Mentorship() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-4">
        {/* Header Section */}
        <header className="text-center py-8 bg-blue-600 text-white">
          <h1 className="text-4xl font-bold">Mentorship Program</h1>
          <p className="mt-2 text-lg">Empowering your journey to success</p>
        </header>

        {/* About Mentorship Section */}
        <section className="mt-8 p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About the Program</h2>
          <p>
            Our mentorship program is designed to guide individuals in achieving their personal
            and professional goals. Whether you’re a student, a working professional, or an
            aspiring entrepreneur, our program provides tailored guidance to help you succeed.
          </p>
        </section>

        {/* Mentorship Plans Section */}
        <section className="mt-8 p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Mentorship Plans</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Plan Card */}
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Beginner Plan</h3>
              <p className="mt-2">Perfect for those just starting their journey.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>1:1 Mentorship Sessions</li>
                <li>Basic Skill Development</li>
                <li>Goal Setting Guidance</li>
              </ul>
            </div>
            {/* Plan Card */}
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Intermediate Plan</h3>
              <p className="mt-2">For individuals with some experience looking to grow.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Advanced Skills Training</li>
                <li>Project Guidance</li>
                <li>Personalized Career Advice</li>
              </ul>
            </div>
            {/* Plan Card */}
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Advanced Plan</h3>
              <p className="mt-2">Ideal for professionals or entrepreneurs.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Comprehensive Career Development</li>
                <li>Networking Opportunities</li>
                <li>Leadership Coaching</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-8 p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            Interested in joining our mentorship program? Feel free to reach out to us for more
            details.
          </p>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            ></textarea>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Mentorship;
