import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CTA: React.FC = () => {
  const benefits = [
    '免费试用，无限制体验',
    '3秒生成会议纪要',
    '99.9%转录准确率',
    '企业级安全保障'
  ];

  return (
    <section className="relative z-10 px-4 py-20 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            准备好体验
            <br />
            <span className="text-blue-400">AI会议纪要了吗？</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            立即开始使用，让AI为您的会议记录带来革命性的改变
          </p>
          
          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-400">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-blue-600/25">
              <span>免费开始使用</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors">
              联系销售团队
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;