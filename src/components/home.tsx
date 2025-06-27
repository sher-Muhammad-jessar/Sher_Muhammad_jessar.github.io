import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  BarChart3,
  Brain,
  Zap,
  Users,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen hero-bg smooth-scroll">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">
              Sher Muhammad
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#168C98] transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#168C98] transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-[#168C98] transition-colors font-medium"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-[#168C98] transition-colors font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#168C98] transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-between px-8 lg:px-16 pt-20"
      >
        <div className="flex-1 max-w-3xl relative z-10">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-medium text-[#168C98] mb-4 flex items-center gap-2">
              Hi, I'm Sher Muhammad <span className="text-3xl">👋</span>
            </h2>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Turning Raw Data into{" "}
              <span className="gradient-text">Meaningful Insights</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Final-year Software Engineering student specializing in Data
              Science, AI, and real-world problem solving.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="primary-button">
              <MessageSquare className="mr-2 h-5 w-5" />
              Let's Talk
            </Button>
            <Button className="secondary-button" variant="outline">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-end relative">
          <div className="relative">
            {/* Profile Image Container */}
            <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Sher Muhammad - Data Scientist"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Tags */}
            <div className="floating-tag top-10 -left-8">
              <Brain className="w-4 h-4 inline mr-2 text-[#168C98]" />
              Machine Learning
            </div>

            <div className="floating-tag top-32 -right-12">
              <BarChart3 className="w-4 h-4 inline mr-2 text-[#218F6A]" />
              Data Visualization
            </div>

            <div className="floating-tag bottom-32 -left-12">
              <Zap className="w-4 h-4 inline mr-2 text-[#168C98]" />
              AI Projects
            </div>

            <div className="floating-tag bottom-10 -right-8">
              <Database className="w-4 h-4 inline mr-2 text-[#218F6A]" />
              Data Analysis
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="section-card p-8">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=sher"
                    alt="Sher Muhammad"
                    className="w-20 h-20 rounded-full mr-6 border-4 border-[#168C98]"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Sher Muhammad
                    </h3>
                    <p className="text-[#168C98] font-medium">
                      Data Science Enthusiast
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I'm a passionate data science enthusiast, currently in my
                  final year at Mehran University. My journey began with a
                  curiosity for numbers and patterns, and evolved into a drive
                  to uncover actionable insights using machine learning,
                  statistics, and visualization tools.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#168C98]" />
                <span className="text-gray-700 text-lg">
                  Jamshoro, Sindh, Pakistan
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="w-6 h-6 text-[#168C98]" />
                <span className="text-gray-700 text-lg">
                  Final Year Student (2020-2025)
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Award className="w-6 h-6 text-[#168C98]" />
                <span className="text-gray-700 text-lg">
                  4+ Certifications in Data Science
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title gradient-text">Experience</h2>
          <div className="space-y-8">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <Card className="section-card ml-6">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-800">
                        Data Science Intern
                      </CardTitle>
                      <CardDescription className="text-[#168C98] font-medium text-lg">
                        XYZ Analytics
                      </CardDescription>
                    </div>
                    <Badge className="bg-[#168C98] text-white">
                      Jan–Apr 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Developed predictive models for churn, improved retention by
                    15%. Worked with large datasets and implemented machine
                    learning algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-chip">Python</span>
                    <span className="skill-chip">Scikit-learn</span>
                    <span className="skill-chip">Pandas</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <Card className="section-card ml-6">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-800">
                        Freelance Analyst
                      </CardTitle>
                      <CardDescription className="text-[#168C98] font-medium text-lg">
                        Independent
                      </CardDescription>
                    </div>
                    <Badge className="bg-[#218F6A] text-white">
                      2023–Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Built dashboards and delivered business insights using
                    Python and Power BI. Helped small businesses make
                    data-driven decisions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-chip">Power BI</span>
                    <span className="skill-chip">Python</span>
                    <span className="skill-chip">Excel</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title gradient-text">Education</h2>
          <Card className="section-card p-8 max-w-4xl mx-auto">
            <CardContent className="pt-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#168C98] to-[#218F6A] rounded-full flex items-center justify-center mr-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    BS in Software Engineering
                  </h3>
                  <p className="text-[#168C98] font-medium text-lg">
                    Mehran University of Engineering & Technology
                  </p>
                  <p className="text-gray-600">2020–2025 | Final Year</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title gradient-text">Certifications ✅</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="section-card p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-[#168C98] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    IBM Data Science Professional Certificate
                  </h3>
                </div>
                <p className="text-gray-600">Coursera</p>
              </CardContent>
            </Card>

            <Card className="section-card p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-[#168C98] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Machine Learning
                  </h3>
                </div>
                <p className="text-gray-600">Andrew Ng (Stanford Online)</p>
              </CardContent>
            </Card>

            <Card className="section-card p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-[#168C98] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Data Analysis with Python
                  </h3>
                </div>
                <p className="text-gray-600">freeCodeCamp</p>
              </CardContent>
            </Card>

            <Card className="section-card p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-[#168C98] mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    SQL for Data Science
                  </h3>
                </div>
                <p className="text-gray-600">Udemy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title gradient-text">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="section-card p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-800 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-[#168C98]" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Python
                      </span>
                      <span className="text-sm text-gray-500">90%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        R
                      </span>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        SQL
                      </span>
                      <span className="text-sm text-gray-500">85%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="section-card p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-800 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-[#168C98]" />
                  Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  <span className="skill-chip text-xs">Pandas</span>
                  <span className="skill-chip text-xs">NumPy</span>
                  <span className="skill-chip text-xs">Matplotlib</span>
                  <span className="skill-chip text-xs">Seaborn</span>
                  <span className="skill-chip text-xs">Scikit-learn</span>
                </div>
              </CardContent>
            </Card>

            <Card className="section-card p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-800 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-[#168C98]" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  <span className="skill-chip text-xs">Power BI</span>
                  <span className="skill-chip text-xs">Excel</span>
                  <span className="skill-chip text-xs">Jupyter</span>
                  <span className="skill-chip text-xs">Git</span>
                </div>
              </CardContent>
            </Card>

            <Card className="section-card p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-800 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#168C98]" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  <span className="skill-chip text-xs">Communication</span>
                  <span className="skill-chip text-xs">Teamwork</span>
                  <span className="skill-chip text-xs">Problem Solving</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#168C98] to-[#218F6A] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-800">
                      House Price Prediction
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      ML Regression Model
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Predicting housing prices using regression models with
                  features like location, size, and amenities.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    <Badge className="bg-[#168C98] text-white text-xs">
                      Python
                    </Badge>
                    <Badge className="bg-[#218F6A] text-white text-xs">
                      Scikit-learn
                    </Badge>
                  </div>
                  <Button size="sm" className="primary-button">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#168C98] to-[#218F6A] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-800">
                      Student Marks Prediction
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Academic Performance ML
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  ML model to forecast academic performance based on study
                  habits and demographics.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    <Badge className="bg-[#168C98] text-white text-xs">
                      Python
                    </Badge>
                    <Badge className="bg-[#218F6A] text-white text-xs">
                      Pandas
                    </Badge>
                  </div>
                  <Button size="sm" className="primary-button">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#168C98] to-[#218F6A] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-800">
                      Sales Dashboard
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Power BI Visualization
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Interactive visualization of sales KPIs with advanced
                  filtering and real-time updates.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    <Badge className="bg-[#168C98] text-white text-xs">
                      Power BI
                    </Badge>
                    <Badge className="bg-[#218F6A] text-white text-xs">
                      DAX
                    </Badge>
                  </div>
                  <Button size="sm" className="primary-button">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title gradient-text">Contact Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Let's Connect!
              </h3>
              <p className="text-gray-700 text-lg mb-8">
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out if you'd like to collaborate or
                just have a chat about data science!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[#168C98]" />
                  <span className="text-gray-700">
                    sher.muhammad@example.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#168C98]" />
                  <span className="text-gray-700">+92 300 1234567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#168C98]" />
                  <span className="text-gray-700">
                    Jamshoro, Sindh, Pakistan
                  </span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button className="primary-button">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
                <Button className="secondary-button" variant="outline">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
                <Button className="secondary-button" variant="outline">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <Card className="contact-form">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      placeholder="Your Name"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project or just say hello!"
                      className="border-gray-300 min-h-[120px]"
                    />
                  </div>
                  <Button className="primary-button w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-bg py-12 px-8 lg:px-16 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Sher Muhammad
              </h3>
              <p className="text-gray-300">
                Data Science enthusiast turning raw data into meaningful
                insights.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border-0"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border-0"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 text-white border-0"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Sher Muhammad | Built with 💙 using Tempo
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
