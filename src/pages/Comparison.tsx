import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  XCircle, 
  CheckCircle2, 
  ArrowLeft, 
  AlertTriangle, 
  ThumbsUp, 
  ThumbsDown,
  Info,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";

const Comparison = () => {
  const examples = [
    {
      title: "Contact Information",
      bad: {
        content: "partyguy99@email.com | 555-0199 | Address: Somewhere in New York",
        issues: ["Unprofessional email address", "Vague location", "Missing LinkedIn profile"]
      },
      good: {
        content: "john.doe.professional@email.com | (555) 012-3456 | New York, NY | linkedin.com/in/johndoe",
        benefits: ["Professional email", "Clean formatting", "Includes relevant professional links"]
      }
    },
    {
      title: "Professional Summary",
      bad: {
        content: "I am looking for a job where I can use my skills to make money and grow. I have worked in many places and I am a hard worker who never gives up.",
        issues: ["Too self-centered", "Generic and cliché", "No specific value proposition"]
      },
      good: {
        content: "Results-oriented Software Engineer with 5+ years of experience in full-stack development. Reduced system latency by 40% and led a team of 5 to deliver 3 high-impact products.",
        benefits: ["Quantifiable achievements", "Clear expertise", "Action-oriented language"]
      }
    },
    {
      title: "Work Experience",
      bad: {
        content: "• Responsible for answering phones\n• Helped customers with problems\n• Did some filing and paperwork",
        issues: ["Passive language", "List of duties, not achievements", "No impact shown"]
      },
      good: {
        content: "• Streamlined customer support workflow, reducing average response time by 25%\n• Resolved 50+ complex technical tickets weekly with a 98% satisfaction rate\n• Developed automated filing system saving 10 hours of manual work per week",
        benefits: ["Strong action verbs", "Uses metrics to prove value", "Shows problem-solving skills"]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium text-gray-900">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <img alt="website img" src="./websitelogo.png" className="w-8 h-8"></img>
              <span className="text-xl font-bold text-gray-900">urCV.ai</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-1">Resume Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Good vs Bad <span className="text-blue-600">Resume Examples</span>
          </h1>
          <p className="text-lg text-gray-600">
            Learn the difference between a resume that gets ignored and one that lands interviews. 
            Follow these real-world comparisons to optimize your CV.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {examples.map((example, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="bg-gray-100 text-gray-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">0{index + 1}</span>
                {example.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Bad Example */}
                <Card className="border-red-100 bg-red-50/30 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4">
                    <ThumbsDown className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-red-600 font-bold mb-4">
                      <XCircle className="w-5 h-5 mr-2" />
                      What NOT to do
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-red-100 shadow-sm mb-6 font-mono text-sm text-gray-600 whitespace-pre-line">
                      {example.bad.content}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-red-800 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Common Issues:
                      </h4>
                      <ul className="space-y-2">
                        {example.bad.issues.map((issue, i) => (
                          <li key={i} className="text-sm text-red-700 flex items-start">
                            <span className="mr-2 mt-1">•</span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Good Example */}
                <Card className="border-green-100 bg-green-50/30 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4">
                    <ThumbsUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-green-600 font-bold mb-4">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      The Professional Way
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm mb-6 font-mono text-sm text-gray-800 whitespace-pre-line">
                      {example.good.content}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-green-800 flex items-center">
                        <Info className="w-4 h-4 mr-2" />
                        Why it works:
                      </h4>
                      <ul className="space-y-2">
                        {example.good.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-green-700 flex items-start">
                            <span className="mr-2 mt-1">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to build your own?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Our AI-powered builder helps you implement all these best practices automatically. 
                Don't leave your career to chance.
              </p>
              <Link to="/builder">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8">
                  Start Building Your CV
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500 rounded-full opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-blue-700 rounded-full opacity-50" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Comparison;
