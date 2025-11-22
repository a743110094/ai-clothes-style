import React from 'react';
import { Mic, FileText, Target, Zap, Shield, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: '实时语音转录',
      description: '高精度语音识别，支持多人对话，实时生成文字内容，准确率高达99.9%'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: '智能内容总结',
      description: 'AI自动分析会议内容，提取关键信息，生成结构化的会议纪要和行动项'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '关键词提取',
      description: '自动识别和标记重要概念、决策点和待办事项，让重点一目了然'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '快速处理',
      description: '3秒内完成纪要生成，支持大文件处理，让您的会议记录更加高效'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '数据安全',
      description: '企业级安全保障，数据加密存储，符合国际安全标准，保护您的隐私'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '多语言支持',
      description: '支持50+种语言和方言，适应全球化团队协作需求'
    }
  ];

  return (
    <section id="features" className="relative z-10 px-4 py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            强大的AI功能
            <br />
            <span className="text-blue-400">让会议记录更智能</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            集成最先进的AI技术，为您提供全方位的会议纪要解决方案
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 hover:bg-gray-600/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;