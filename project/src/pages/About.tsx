import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  // Company stats
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '15', label: 'Industry Awards' },
  ];
  
  // Team members
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Alex has over 15 years of experience in web development and digital strategy. He founded ModernWeb with a vision to help businesses succeed online.',
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'With a background in graphic design and UX/UI, Sarah leads our creative team to deliver beautiful and functional digital experiences.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael is an expert in front-end and back-end technologies. He ensures our projects are built with clean, efficient code.',
    },
    {
      name: 'Emma Wilson',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Emma excels at coordinating complex projects and ensuring they are delivered on time and within budget.',
    },
  ];
  
  // Company values
  const values = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Client-Focused',
      description: 'We prioritize understanding our clients\' needs and delivering solutions that exceed their expectations.',
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from design and development to project management.',
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver innovative solutions that give our clients a competitive edge.',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Reliability',
      description: 'We deliver on our promises, meeting deadlines and ensuring our clients can depend on us.',
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
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-blue-600 dark:text-blue-400">ModernWeb</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2014, ModernWeb is a leading digital agency specializing in web design, development, and digital marketing solutions. 
                We're passionate about creating exceptional digital experiences that help businesses grow.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our team of designers, developers, and digital strategists work together to deliver innovative solutions 
                tailored to each client's unique needs and goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team collaborating"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The journey of ModernWeb began with a simple mission: to help businesses harness the power of the internet to grow and succeed.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">The Beginning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  In 2014, our founder Alex Johnson recognized a gap in the market: many businesses were struggling to 
                  establish effective online presences. With a small team of passionate designers and developers, 
                  ModernWeb was born to address this need.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Growth & Evolution</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  As our client base grew, so did our team and capabilities. We expanded our services to include 
                  e-commerce solutions, mobile app development, and comprehensive digital marketing strategies. 
                  By 2018, we had worked with over 100 clients across multiple industries.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Where We Are Today</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, ModernWeb is a full-service digital agency with a team of over 50 professionals. We've 
                  completed more than 200 projects for clients ranging from startups to established enterprises. 
                  Our commitment to excellence and innovation remains at the core of everything we do.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team meeting" className="w-full h-auto" />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md mt-8">
                    <img src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Office culture" className="w-full h-auto" />
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-full">
                  <img src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team collaboration" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At ModernWeb, our values guide everything we do. They shape our culture, our work, and our relationships with clients.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="card p-6 text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our talented team of professionals is dedicated to delivering exceptional results for our clients.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="card overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Want to join our team? We're always looking for talented individuals to grow with us.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              View open positions <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to work with us?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help your business thrive in the digital landscape.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;