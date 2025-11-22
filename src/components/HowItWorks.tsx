import React from 'react';
import { Upload, Mic, Brain, Download } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: '上传音频',
      description: '上传会议录音或实时录音，支持多种音频格式',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: '语音转录',
      description: 'AI自动识别语音内容，生成准确的文字记录',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: '智能分析',
      description: 'AI分析内容，提取关键信息和行动项',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: '下载纪要',
      description: '生成结构化会议纪要，支持多种格式导出',
      color: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section id="how-it-works" className="relative z-10 px-4 py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            简单四步
            <br />
            <span className="text-blue-400">生成完美会议纪要</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            无需复杂操作，AI为您处理一切
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
                  <p className="text-gray-400">{step.description}</p>
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