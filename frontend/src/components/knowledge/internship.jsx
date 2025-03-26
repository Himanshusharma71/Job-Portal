import React from 'react';
import Navbar from '../shared/Navbar';

function Internship() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-4">
        {/* Header Section */}
        <header className="text-center py-8 bg-green-600 text-white">
          <h1 className="text-4xl font-bold">Internship Opportunities</h1>
          <p className="mt-2 text-lg">Explore diverse internships and kickstart your career!</p>
        </header>

        {/* Internship Types Section */}
        <section className="mt-8 p-4 max-w-6xl mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Types of Internships We Offer</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Internship Card */}
            <div className="p-4 bg-blue-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Web Development Internship</h3>
              <p className="mt-2">Build and design websites using the latest technologies.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Frontend and Backend Development</li>
                <li>React, Node.js, and more</li>
                <li>Real-world projects</li>
              </ul>
            </div>
            {/* Internship Card */}
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Data Science Internship</h3>
              <p className="mt-2">Dive into the world of data and AI to solve real-world problems.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Data Analysis and Visualization</li>
                <li>Machine Learning Projects</li>
                <li>Python, R, and TensorFlow</li>
              </ul>
            </div>
            {/* Internship Card */}
            <div className="p-4 bg-pink-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Digital Marketing Internship</h3>
              <p className="mt-2">Learn marketing strategies to grow brands online.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Social Media Management</li>
                <li>SEO and Content Creation</li>
                <li>Campaign Analytics</li>
              </ul>
            </div>
            {/* Internship Card */}
            <div className="p-4 bg-green-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Graphic Design Internship</h3>
              <p className="mt-2">Unleash your creativity by designing impactful visuals.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Logo and Branding Design</li>
                <li>UI/UX Design</li>
                <li>Tools like Photoshop and Figma</li>
              </ul>
            </div>
            {/* Internship Card */}
            <div className="p-4 bg-purple-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Business Development Internship</h3>
              <p className="mt-2">Learn the art of building and growing a business.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Market Research</li>
                <li>Client Management</li>
                <li>Strategic Planning</li>
              </ul>
            </div>
            {/* Internship Card */}
            <div className="p-4 bg-red-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Content Writing Internship</h3>
              <p className="mt-2">Enhance your writing skills to engage and inspire audiences.</p>
              <ul className="mt-2 list-disc list-inside">
                <li>Blog and Article Writing</li>
                <li>SEO Optimization</li>
                <li>Creative Storytelling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-8 p-4 max-w-6xl mx-auto bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin Your Journey?</h2>
          <p className="mb-4">Choose the internship that suits your goals and apply today!</p>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Apply Now
          </button>
        </section>
      </div>
    </div>
  );
}

export default Internship;
