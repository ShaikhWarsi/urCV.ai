import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Brain, Zap, Star, ChevronRight, Users, Download, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import FloatingChatBot from "@/components/FloatingChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-scale-in">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              urCV.ai
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/templates">
              <Button variant="ghost" className="hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                Templates
              </Button>
            </Link>
            <Link to="/builder">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 animate-slide-in-left">
          Craft Your Future with a Perfect Resume
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-slide-in-right">
          Create a professional resume that showcases your skills and experience. Get noticed and land your dream job!
        </p>
        <div className="space-x-4 animate-fade-in">
          <Link to="/builder">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Building Now
            </Button>
          </Link>
          <Link to="/templates">
            <Button variant="outline" className="transform hover:scale-105 transition-all duration-200">
              View Templates
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-8 animate-fade-in">
          Unlock the Power of a Professional Resume
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <Card className="p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 animate-slide-in-left">
            <div className="flex items-center space-x-4 mb-4">
              <Brain className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">AI-Powered Assistance</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Our AI algorithms help you optimize your resume with smart suggestions and content enhancements.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 animate-fade-in">
            <div className="flex items-center space-x-4 mb-4">
              <Zap className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Easy-to-Use Builder</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Create your resume in minutes with our intuitive drag-and-drop builder. No design skills required!
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 animate-slide-in-right">
            <div className="flex items-center space-x-4 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Professionally Designed Templates</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Choose from a wide range of professionally designed templates to make your resume stand out.
            </p>
          </Card>

          {/* Feature 4 */}
          <Card className="p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 animate-slide-in-left">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">ATS Optimization</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Ensure your resume is ATS-friendly, increasing your chances of getting past automated screening systems.
            </p>
          </Card>

          {/* Feature 5 */}
          <Card className="p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 animate-fade-in">
            <div className="flex items-center space-x-4 mb-4">
              <Download className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Multiple Formats</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Download your resume in multiple formats, including PDF, DOCX, and TXT.
            </p>
          </Card>

          {/* Feature 6 */}
          <Card className="p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 animate-slide-in-right">
            <div className="flex items-center space-x-4 mb-4">
              <Target className="w-6 h-6 text-indigo-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Goal Tracking</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Set your career goals and track your progress with our built-in goal tracking tools.
            </p>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 animate-fade-in">
          Ready to Transform Your Career?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 animate-slide-in-bottom">
          Join thousands of satisfied users and create a resume that gets you hired!
        </p>
        <Link to="/builder">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200">
            Get Started Today <ChevronRight className="ml-2" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 mt-16 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">urCV.ai</span>
          </div>
          <p className="text-gray-400 dark:text-gray-500">© 2024 N-PCs. All rights reserved.</p>
        </div>
      </footer>

      <FloatingChatBot />
    </div>
  );
};

export default Index;
