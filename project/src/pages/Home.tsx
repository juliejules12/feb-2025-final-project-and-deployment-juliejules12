import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid, Monitor, Smartphone, Code, Activity, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ui/ImageSlider';

const Home = () => {
  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      content: "Working with ModernWeb transformed our online presence. Their team delivered a beautiful, functional website that perfectly captures our brand.",
      author: "Sarah Johnson",
      position: "CEO, Inspire Design",
    },
    {
      id: 2,
      content: "The team at ModernWeb are true professionals. They created a responsive website that not only looks great but performs excellently on all devices.",
      author: "Michael Chen",
      position: "Marketing Director, Tech Innovations",
    },
    {
      id: 3,
      content: "I couldn't be happier with our new website. ModernWeb understood exactly what we needed and delivered beyond our expectations.",
      author: "Emma Rodriguez",
      position: "Founder, GreenPath Solutions",
    },
  ];

  // Sample slider images
  const sliderImages = [
    {
      url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Modern web design on desktop and mobile",
      title: "Modern Web Design",
      description: "Responsive websites that look great on any device",
    },
    {
      url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Mobile app development",
      title: "Mobile Solutions",
      description: "Native and hybrid apps for iOS and Android",
    },
    {
      url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "E-commerce solutions",
      title: "E-commerce Excellence",
      description: "Custom online stores with powerful features",
    },
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Services data
  const services = [
    {
      icon: <LayoutGrid className="h-8 w-8 text-blue-600" />,
      title: "Web Design",
      description: "Beautiful, intuitive designs that engage your audience and reflect your brand identity.",
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Web Development",
      description: "Custom, responsive websites built with modern technologies and best practices.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Mobile Apps",
      description: "Native and hybrid mobile applications for iOS and Android platforms.",
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "E-commerce",
      description: "Full-featured online stores with secure payment processing and inventory management.",
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "SEO",
      description: "Search engine optimization to improve your visibility and drive organic traffic.",
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Branding",
      description: "Comprehensive branding solutions including logo design and brand strategy.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="block">Modern Web Solutions</span>
                <span className="block text-blue-600 dark:text-blue-400">For Your Business</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                We create beautiful, responsive websites and digital experiences that help businesses grow and succeed in the digital world.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <ImageSlider images={sliderImages} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We offer a comprehensive range of digital services to help your business thrive online.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="mt-4 inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About/CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end">
                  <div className="p-6 md:p-8">
                    <p className="text-white text-xl md:text-2xl font-medium">Building digital success together</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-blue-600 rounded-lg p-4 md:p-6 shadow-lg">
                <p className="text-white text-lg md:text-xl font-bold">10+ Years Experience</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:ml-auto max-w-lg"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                With over a decade of experience, we've helped numerous businesses establish a strong online presence. 
                Our team of experts is dedicated to delivering high-quality digital solutions tailored to your unique needs.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Expert team with diverse skills",
                  "Custom solutions tailored to your business",
                  "Responsive designs that work on all devices",
                  "Ongoing support and maintenance",
                  "Committed to client satisfaction",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/about" className="btn btn-primary">
                  About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-blue-100">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="flex-grow">
                    <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl overflow-hidden"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-900/90 mix-blend-multiply"></div>
              <div className="relative py-12 md:py-16 px-4 md:px-16 md:flex md:items-center md:justify-between">
                <div className="max-w-2xl md:mr-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
                  <p className="text-lg text-blue-100 mb-8">
                    Contact us today to discuss how we can help transform your digital presence.
                  </p>
                </div>
                <div className="flex-shrink-0 mt-4 md:mt-0">
                  <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;