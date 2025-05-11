import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  // Contact info
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Visit us',
      details: [
        '123 Web Street',
        'Digital City, DC 10001',
        'United States',
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email us',
      details: [
        'info@modernweb.com',
        'support@modernweb.com',
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Call us',
      details: [
        '+1 (123) 456-7890',
        '+1 (123) 456-7891',
      ],
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Working hours',
      details: [
        'Monday - Friday: 9am - 6pm',
        'Saturday: 10am - 2pm',
        'Sunday: Closed',
      ],
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a question or ready to start your project? We're here to help. 
              Contact us today and let's discuss how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                You can also reach out to us using any of the following contact methods.
              </p>
              
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="card p-6"
                  >
                    <div className="flex items-start">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Connect with us
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v.843c.726-1.25 4-1.343 4 1.941v3.216z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Location
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            {/* Using an iframe for Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941954754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1654236183709!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                {
                  question: "What is your typical process for a new project?",
                  answer: "Our process typically involves an initial consultation, planning and proposal, design phase, development phase, testing, and launch. We maintain clear communication throughout the entire process."
                },
                {
                  question: "How much does a website or application cost?",
                  answer: "Each project is unique, and costs vary based on complexity, features, and scope. We provide detailed quotes after understanding your specific needs. Contact us for a personalized estimate."
                },
                {
                  question: "How long does it take to complete a project?",
                  answer: "Project timelines depend on scope and complexity. A simple website might take 2-4 weeks, while complex applications can take several months. We'll provide a realistic timeline during our proposal phase."
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer: "Yes, we offer various maintenance and support packages to ensure your website or application continues to function optimally after launch. We can discuss these options based on your needs."
                },
                {
                  question: "What information do you need to provide a quote?",
                  answer: "To provide an accurate quote, we need to understand your project goals, required features, timeline, target audience, and any design preferences. The more information you provide, the more accurate our estimate will be."
                },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="card p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;