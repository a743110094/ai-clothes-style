import React from 'react';
import { Upload, Image, BarChart3, FileCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: '上传款式图',
      description: '上传服装设计图或PLM系统中的款式图',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'AI识图分析',
      description: '自动识别品类、面料、工艺特征，匹配历史数据',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: '成本估算',
      description: '基于识图结果与历史数据，精准估算生产成本',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: '生成报告',
      description: '输出详细的成本分析报告与工艺建议',
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 px-4 py-20 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            从旧流程到新流程
            <br />
            <span className="text-blue-400">效率提升90%</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            传统核价需要20-120分钟，AI只需3分钟
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 text-center hover:bg-gray-600/30 transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-6`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-blue-600/25">
            立即开始体验
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;