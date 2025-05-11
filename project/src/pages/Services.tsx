import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Layout, Code, Smartphone, ShoppingCart, Search, LineChart, Palette, DivideIcon as LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

const Services = () => {
  const servicesList: ServiceProps[] = [
    {
      title: 'Web Design',
      description: 'Beautiful, intuitive websites that engage visitors and reflect your brand\'s identity.',
      icon: <Layout className="h-8 w-8" />,
      features: [
        'Custom responsive designs',
        'User experience (UX) optimization',
        'Brand integration',
        'Wireframing and prototyping',
        'Accessibility compliance',
      ],
      color: 'bg-blue-500',
    },
    {
      title: 'Web Development',
      description: 'Custom website development using the latest technologies and best practices.',
      icon: <Code className="h-8 w-8" />,
      features: [
        'Front-end development',
        'Back-end development',
        'Content management systems',
        'API integration',
        'Performance optimization',
      ],
      color: 'bg-teal-500',
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App testing and deployment',
        'Ongoing maintenance and updates',
      ],
      color: 'bg-purple-500',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions to help you sell products and services online.',
      icon: <ShoppingCart className="h-8 w-8" />,
      features: [
        'Custom online stores',
        'Product catalog management',
        'Payment gateway integration',
        'Inventory management',
        'Shipping and tax calculation',
      ],
      color: 'bg-orange-500',
    },
    {
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility in search engines and attract more organic traffic.',
      icon: <Search className="h-8 w-8" />,
      features: [
        'Keyword research and analysis',
        'On-page SEO optimization',
        'Technical SEO',
        'Content strategy',
        'Link building',
      ],
      color: 'bg-green-500',
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to help you reach and engage your target audience.',
      icon: <LineChart className="h-8 w-8" />,
      features: [
        'Social media marketing',
        'Email marketing',
        'Pay-per-click (PPC) advertising',
        'Content marketing',
        'Analytics and reporting',
      ],
      color: 'bg-red-500',
    },
    {
      title: 'Brand Identity',
      description: 'Create a strong, cohesive brand identity that resonates with your audience.',
      icon: <Palette className="h-8 w-8" />,
      features: [
        'Logo design',
        'Brand guidelines',
        'Typography and color schemes',
        'Visual identity systems',
        'Brand messaging',
      ],
      color: 'bg-amber-500',
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and requirements through in-depth discussions.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We create a detailed roadmap outlining the project scope, timeline, and deliverables.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers create visual concepts and prototypes based on your requirements and brand.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our development team brings the designs to life, building the actual website or application.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'We thoroughly test the product to ensure it works flawlessly across all devices and browsers.',
    },
    {
      number: '06',
      title: 'Launch',
      description: 'Once approved, we deploy the finished product and ensure everything is running smoothly.',
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
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
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
              Our <span className="text-blue-600 dark:text-blue-400">Services</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We offer a comprehensive range of digital services to help your business thrive online. 
              From web design and development to digital marketing and branding, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesList.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We follow a structured approach to ensure every project is delivered successfully and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-8xl font-bold text-blue-600 dark:text-blue-400">
                    {step.number}
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="text-blue-600 dark:text-blue-400 text-xl font-bold mb-2">
                    {step.number}. {step.title}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="max-w-xl"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose ModernWeb?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                When you partner with us, you get more than just a service provider – you get a dedicated team of experts 
                committed to your success. Here's what sets us apart:
              </p>
              
              <div className="space-y-4">
                {[
                  "Expert team with proven track record",
                  "Tailored solutions for your specific needs",
                  "Transparent process and communication",
                  "Cutting-edge technology and best practices",
                  "Ongoing support and maintenance",
                  "Commitment to quality and excellence",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team working together"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end">
                  <div className="p-6 md:p-8">
                    <p className="text-white text-xl md:text-2xl font-medium">Dedicated to your success</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us today to discuss how we can help bring your vision to life.
            </p>
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Service card component
const ServiceCard: React.FC<{ service: ServiceProps; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
      }}
      className="card overflow-hidden"
    >
      <div className={`${service.color} h-2`}></div>
      <div className="p-6">
        <div className={`w-12 h-12 ${service.color} bg-opacity-20 rounded-lg flex items-center justify-center mb-4`}>
          {React.cloneElement(service.icon as React.ReactElement, { 
            className: `${service.color.replace('bg-', 'text-')}` 
          })}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
        
        <ul className="space-y-2 mb-4">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to="/contact" 
          className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Services;