import React from 'react';
import { TrendingUp, Clock, Users, Target } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: '90%',
      title: '效率提升',
      description: '单款核价时间从30分钟降至3分钟，单日处理能力提升10倍以上'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      metric: '±10%',
      title: '估价准确度',
      description: '常规款式成本估算误差在±10%以内，复杂款式在±15%以内'
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: '40%',
      title: '人力效能提升',
      description: '核价员40%精力转向复杂工艺与成本策略优化，实现人才价值最大化'
    },
    {
      icon: <Target className="w-8 h-8" />,
      metric: '5000+',
      title: '已处理款式',
      description: '累计分析处理5000+张服装图片，覆盖多品牌、多岁段、多品类'
    }
  ];

  return (
    <section id="testimonials" className="relative z-10 px-4 py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            量化成果展示
            <br />
            <span className="text-blue-400">真实数据支撑</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            来自实际应用场景的成果指标与价值体现
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 hover:bg-gray-600/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-blue-400 mb-6">
                {item.icon}
              </div>

              {/* Metric */}
              <div className="text-4xl font-bold text-blue-400 mb-3">
                {item.metric}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;