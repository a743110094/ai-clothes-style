import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 px-4 py-20 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gray-600/30 border border-gray-400/40 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-gray-300" />
          <span className="text-gray-200 text-sm font-medium">AI驱动的智能会议纪要</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          让每一次会议
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            都精准记录
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          先进的AI技术，自动转录、智能总结、关键词提取，
          <br className="hidden lg:block" />
          让您的会议纪要更加高效和专业
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-blue-600/25">
            <span>免费试用</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
            <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center group-hover:bg-gray-500/30 transition-colors">
              <Play className="w-5 h-5 ml-1" />
            </div>
            <span className="text-lg font-medium">观看演示</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-500">转录准确率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">3秒</div>
            <div className="text-gray-500">生成纪要时间</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-500">支持语言</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;