import { motion } from "framer-motion";
import React from "react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  return (
    <main className="font-serif bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-20 h-20 border">
                <AvatarImage src="/avatar-placeholder.png" alt="Student Avatar" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-1 tracking-tight">
                  Alex Smith
                </h1>
                <Badge variant="secondary" className="text-sm font-medium">
                  Chemistry Undergraduate
                </Badge>
              </div>
            </div>
            <p className="text-lg md:text-xl mt-4 max-w-xl">
              Driven, detail-oriented chemistry student passionate about scientific research, laboratory innovation, and making a positive impact in the field of chemical sciences.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
              <circle cx="90" cy="90" r="80" fill="#DCFCE7" />
              <path d="M60 120 L90 60 L120 120 Z" fill="#34D399" />
              <ellipse cx="90" cy="85" rx="18" ry="10" fill="#6EE7B7" />
              <rect x="83" y="110" width="14" height="20" rx="4" fill="#A7F3D0" />
              <circle cx="90" cy="65" r="4" fill="#047857" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2"><path d="M4 6l8-3 8 3M4 6v6c0 5 8 9 8 9s8-4 8-9V6M4 6l8 6 8-6"/></svg>
              Education
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>B.Sc. Chemistry</CardTitle>
                  <CardDescription>University of Greenfield</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">2021 - Present</span>
                    <Badge>GPA: 3.8/4.0</Badge>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Specialization in Organic and Analytical Chemistry</li>
                    <li>Relevant Coursework: Physical Chemistry, Spectroscopy, Biochemistry</li>
                    <li>Dean's List, 2022 & 2023</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>High School Diploma</CardTitle>
                  <CardDescription>Riverside Science Academy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">2017 - 2021</span>
                    <Badge variant="outline">Graduated with Honors</Badge>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>President, Science Club</li>
                    <li>1st Place, State Chemistry Olympiad 2020</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 20v-6M12 4v2m6 4h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2M6 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#34D399" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                  <CardTitle className="text-lg">Lab Techniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Titration & Chromatography</li>
                    <li>Spectroscopy (NMR, IR, UV-Vis)</li>
                    <li>Sample Preparation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#F59E42" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  <CardTitle className="text-lg">Data Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Statistical Analysis</li>
                    <li>Graphing & Visualization</li>
                    <li>Excel, OriginPro</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M16 3.13a4 4 0 0 1 0 7.75M8 3.13a4 4 0 1 0 0 7.75"/><circle cx="12" cy="12" r="10"/></svg>
                  <CardTitle className="text-lg">Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Literature Review</li>
                    <li>Scientific Writing</li>
                    <li>Team Collaboration</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#EF4444" strokeWidth="2"><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2"/></svg>
                  <CardTitle className="text-lg">Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Public Speaking</li>
                    <li>Organizational Skills</li>
                    <li>Adaptability</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A21CAF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              Projects & Research
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Green Chemistry Research</CardTitle>
                  <CardDescription>Jan 2023 – Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2 text-sm">
                    Investigated eco-friendly alternatives to traditional solvents in organic synthesis. Presented preliminary findings at the University Science Symposium 2023.
                  </p>
                  <Badge className="mr-2 mb-1">Organic Synthesis</Badge>
                  <Badge variant="secondary" className="mb-1">Eco-Innovation</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quantitative Analysis of Water Samples</CardTitle>
                  <CardDescription>Sep 2022 – Dec 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2 text-sm">
                    Conducted analyses of river water samples using spectroscopy, contributing to local environmental monitoring efforts.
                  </p>
                  <Badge className="mr-2 mb-1">Environmental Chemistry</Badge>
                  <Badge variant="secondary" className="mb-1">Spectroscopy</Badge>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2"><path d="M3 3h18v18H3V3zm3 4h12v10H6V7z"/></svg>
              Experience
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Laboratory Assistant (Part-Time)</CardTitle>
                  <CardDescription>University of Greenfield – Sep 2022 – Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Prepared reagents and maintained laboratory equipment for undergraduate courses.</li>
                    <li>Assisted in conducting safety briefings and ensuring compliance with protocols.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Peer Tutor – Chemistry</CardTitle>
                  <CardDescription>University Academic Support Center – 2021 – Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Guided first-year students in understanding fundamental chemistry concepts.</li>
                    <li>Organized group study sessions and exam prep workshops.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section id="awards" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89l-1.42 4.24a2 2 0 0 0 1.9 2.64h6.62a2 2 0 0 0 1.9-2.64l-1.42-4.24"/></svg>
              Awards & Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Dean's List</CardTitle>
                  <CardDescription>University of Greenfield, 2022 & 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    Recognized for outstanding academic performance in the Faculty of Science.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chemistry Olympiad – 1st Place</CardTitle>
                  <CardDescription>State Level, 2020</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    Achieved top rank among 200+ participants in the annual state chemistry competition.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Laboratory Safety Certification</CardTitle>
                  <CardDescription>2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    Completed safety procedures and hazardous material handling training.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extracurriculars Section */}
      <section id="extracurriculars" className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              Extracurricular Activities
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Chemistry Club – President</CardTitle>
                  <CardDescription>2022 – Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Organized monthly workshops and community science outreach events.</li>
                    <li>Coordinated guest lectures and field trips.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Action Group – Member</CardTitle>
                  <CardDescription>2021 – Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    <li>Participated in campus sustainability campaigns.</li>
                    <li>Assisted in local river clean-up initiatives.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 1 1 5.83 1c0 1.66-1.34 3-3 3"/><line x1="12" y1="17" x2="12" y2="17"/></svg>
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="q1">
                <AccordionTrigger>What is your intended career path?</AccordionTrigger>
                <AccordionContent>
                  I am aiming to pursue graduate studies in chemistry, with a focus on sustainable materials and green technologies. Ultimately, I hope to contribute to research in the chemical industry or academia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>What laboratory equipment are you most familiar with?</AccordionTrigger>
                <AccordionContent>
                  I have hands-on experience with NMR and IR spectrometers, HPLC systems, titration setups, and a variety of standard analytical instruments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Do you have experience with scientific presentations?</AccordionTrigger>
                <AccordionContent>
                  Yes, I have presented at university-level symposia and led several workshops as Chemistry Club president.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m22 5-10 7L2 5"/></svg>
              Contact
            </h2>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 16.92V19a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.09 8.63 19.79 19.79 0 0 1 0 2.18 2 2 0 0 1 2 0h2.09a2 2 0 0 1 2 1.72c.13 1.07.35 2.12.65 3.13A2 2 0 0 1 6.1 8.13l1.17 2.34A2 2 0 0 1 7.16 13l-2.3 2.3A17.94 17.94 0 0 0 12 22.92z"/></svg>
                <span className="text-gray-700 text-sm">alex.smith@email.com</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M17 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M12 18h.01"/></svg>
                <span className="text-gray-700 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                <span className="text-gray-700 text-sm">linkedin.com/in/alex-smith</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;