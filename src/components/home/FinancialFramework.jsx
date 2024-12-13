import React, { useState } from 'react';
import { Shield, Phone, Briefcase, ClipboardCheck, BookOpen, BadgeAlert, Wallet, Building2, Car, AlertTriangle, RefreshCcw, FileCheck, Users, BarChart4, Scale, HeartHandshake, CircleDollarSign } from 'lucide-react';

const FinancialFramework = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const sections = {
    fraud: {
      title: "Fraud Management",
      icon: Shield,
      color: "from-[#2DD4BF] to-[#3B82F6]",
      shadowColor: "shadow-cyan-500/20",
      ringColor: "group-hover:ring-cyan-500/30",
      iconColor: "text-cyan-500",
      items: [
        { title: "Customer Education", icon: Users, description: "Comprehensive training programs" },
        { title: "Advanced Analytics", icon: BarChart4, description: "AI-powered detection systems" },
        { title: "Regulatory Adherence", icon: Scale, description: "Compliance management" },
        { 
          title: "Fraud Management Services", 
          icon: AlertTriangle, 
          description: "In today’s dynamic financial landscape, safeguarding your business from fraud has never been more critical. Our Fraud Management Services offer a robust framework to detect, prevent, and mitigate risks across various channels. Leveraging advanced technologies and expert insights, we ensure comprehensive fraud protection tailored to your needs. Key Features: Real-time monitoring of transactions and activities. AI-driven pattern recognition." 
        }
      ]
    },
    calls: {
      title: "Key Features of our Call and Contact Centers",
      icon: Phone,
      color: "from-[#F472B6] to-[#9333EA]",
      shadowColor: "shadow-pink-500/20",
      ringColor: "group-hover:ring-pink-500/30",
      iconColor: "text-pink-500",
      items: [
        { title: "Omnichannel Support", icon: HeartHandshake, description: "Integrated communication via phone, email, chat, social media, and SMS." },
        { title: "CRM Integration", icon: FileCheck, description: "Seamless tracking of customer interactions for personalized service." },
        { title: "Real-Time Analytics", icon: BarChart4, description: "Insights into customer behavior and operational efficiency." },
        { title: "Multilingual Support", icon: Users, description: "Catering to diverse customer bases across regions." },
        { title: "Automation", icon: RefreshCcw, description: "IVR systems and chatbots for routine queries." }
      ]
    },
    loans: {
      title: "Loan Types Management",
      icon: Briefcase,
      color: "from-[#FB923C] to-[#E11D48]",
      shadowColor: "shadow-orange-500/20",
      ringColor: "group-hover:ring-orange-500/30",
      iconColor: "text-orange-500",
      items: [
        { title: "Loans Against Property", icon: Building2, description: "Property-backed loans" },
        { title: "Commercial Vehicle Loans", icon: Car, description: "Financing for vehicles" },
        { title: "Working Capital Loans", icon: CircleDollarSign, description: "Business operational funding" },
        { title: "Education Loans", icon: BookOpen, description: "Funding for education" },
        { title: "Gold Loans", icon: BadgeAlert, description: "Loans against gold" },
        { title: "Overdraft Facility", icon: Wallet, description: "Flexible credit line" },
        { title: "Banking Sector", icon: HeartHandshake, description: "Customer Service and Support, Collections, Loan and Credit Services, Lead Generation and Sales, Fraud Detection and Risk Management, Feedback and Surveys, Compliance and Notifications, Help Desk Services" },
        { title: "Telecommunications Sector", icon: Phone, description: "Customer Support, Billing and Payments, Plan and Service Information, Retention and Win-Back Campaigns, Technical Support, Lead Generation and Upselling, Feedback Collection, Complaint Resolution" },
        { title: "FMCG Sector", icon: ClipboardCheck, description: "Order Management, Product Support and Information, Complaint Management" }
      ]
    },
    bucket: {
      title: "Delinquency Management",
      icon: ClipboardCheck,
      color: "from-[#34D399] to-[#059669]",
      shadowColor: "shadow-emerald-500/20",
      ringColor: "group-hover:ring-emerald-500/30",
      iconColor: "text-emerald-500",
      items: [
        { title: "NPA Management", icon: AlertTriangle, description: "Write Off Pool Management (All Vintage including Skip Tracing)" },
        { title: "Early Delinquency", icon: CircleDollarSign, description: "0-90DPD for Retail, 0-365 DPD for Rural Lending" },
        { title: "Preemptive Calling", icon: FileCheck, description: "For all customers" },
        { title: "Welcome Calling", icon: Users, description: "For all customers" },
        { title: "Specialized Calling", icon: BarChart4, description: "For Microfinance" },
        { title: "Hygiene Calling", icon: HeartHandshake, description: "With a specialized effort on fraud prevention and detection" }
      ]
    }
  };

  const ServiceCard = ({ title, icon: Icon, items, color, shadowColor, ringColor, iconColor, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ease-out
                   backdrop-blur-xl bg-white/10 hover:bg-white/20
                   shadow-lg ${shadowColor} hover:shadow-xl
                   ring-1 ring-white/50 ${ringColor}
                   transform hover:scale-[1.02]`}
        style={{
          opacity: 0,
          animation: `slideIn 0.8s ease-out ${index * 0.15}s forwards`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative p-8 z-10">
          {/* Header Section */}
          <div className={`flex items-center gap-4 mb-8 transform transition-all duration-500
                          ${isHovered ? 'translate-x-2' : ''}`}>
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${color}
                           shadow-lg ${shadowColor}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          {/* Items Grid */}
          <div className="grid gap-4">
            {items.map((item, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden rounded-2xl p-4 
                           backdrop-blur-xl bg-white/10
                           transition-all duration-300 ease-out
                           transform hover:-translate-y-1
                           ring-1 ring-white/20 hover:ring-white/30
                           ${shadowColor}`}
                style={{
                  opacity: 0,
                  animation: `slideUp 0.5s ease-out ${(index * 0.15) + (idx * 0.1)}s forwards`
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-xl ${iconColor} bg-white/10`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6">
      <style>
        {`
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(-30px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20" 
             style={{
               opacity: 0,
               animation: 'fadeIn 1s ease-out forwards'
             }}>
          <h1 className="text-5"></h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Financial Services Framework
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive overview of our financial services infrastructure, security measures, and management systems
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(sections).map(([key, section], index) => (
            <ServiceCard
              key={key}
              index={index}
              title={section.title}
              icon={section.icon}
              items={section.items}
              color={section.color}
              shadowColor={section.shadowColor}
              ringColor={section.ringColor}
              iconColor={section.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialFramework;

