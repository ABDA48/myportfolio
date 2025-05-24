import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/ui/button";
 

const AboutPage = () => {
  return (
    <div className="min-h-screen">
     
      <div className="pt-20 bg-blue-gradient text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Me</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto">
            Get to know more about my journey, experience, and expertise.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden bg-white p-2 card-shadow max-w-md mx-auto">
                <img 
                  src="/images/profile.JPG" 
                  alt="About Me" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6 animate-fade-in">
              <h3 className="text-xl font-medium text-portfolio-blue">About Me</h3>
              <h2 className="text-3xl md:text-4xl font-bold">Who is Your Name?</h2>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate web designer and developer with over 8 years of experience creating stunning digital experiences. I combine technical expertise with creative design thinking to build websites and applications that not only look beautiful but also perform exceptionally well.
              </p>
              
              <div className="flex flex-wrap gap-16 my-10">
                <div>
                  <h3 className="text-3xl font-bold text-portfolio-blue">600+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-portfolio-blue">50+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-portfolio-blue">8+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
              </div>
              
              <Button className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-8">
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-xl font-medium text-portfolio-blue mb-2">My Journey</h3>
              <h2 className="text-3xl md:text-4xl font-bold">My Academic and Professional Journey</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">Master's in Computer Science</h4>
                      <span className="text-sm text-gray-500">2015 - 2017</span>
                    </div>
                    <p className="text-gray-600">University of Technology</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">Bachelor's in Software Engineering</h4>
                      <span className="text-sm text-gray-500">2011 - 2015</span>
                    </div>
                    <p className="text-gray-600">State University</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">Web Development Certification</h4>
                      <span className="text-sm text-gray-500">2010</span>
                    </div>
                    <p className="text-gray-600">Online Academy</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">Senior Web Developer</h4>
                      <span className="text-sm text-gray-500">2019 - Present</span>
                    </div>
                    <p className="text-gray-600">Tech Solutions Inc.</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">UI/UX Designer</h4>
                      <span className="text-sm text-gray-500">2017 - 2019</span>
                    </div>
                    <p className="text-gray-600">Creative Agency</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">Junior Developer</h4>
                      <span className="text-sm text-gray-500">2015 - 2017</span>
                    </div>
                    <p className="text-gray-600">Web Innovations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default AboutPage;
