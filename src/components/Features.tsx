import React from 'react';
import { Image, Brain, Zap, FileText } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Image className="w-8 h-8" />,
      title: '以图搜图',
      description: '上传服装款式图，从预设分类图库中检索相似历史款式，展示成本信息和工艺BOM，一键跳转PLM系统查看详情'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI智能分析',
      description: '基于Doubao-Seed-1.6多模态大模型，支持纯AI分析与历史数据增强分析两种模式，输出详细工艺分析与价格建议'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: '综合报告',
      description: '结合以图搜图和AI分析结果，生成完整的款式工艺成本分析报告，为设计决策提供数据支撑'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '图片清洗',
      description: '上传历史款式图片至图片库，作为底层训练数据库，持续优化识别准确率和成本估算能力'
    }
  ];

  return (
    <section id="features" className="relative z-10 px-4 py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            四大核心功能
            <br />
            <span className="text-blue-400">赋能设计与成本管理</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            集成AI识图、智能分析和数据库匹配，为设计者提供秒级成本估算方案
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 hover:bg-gray-600/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;