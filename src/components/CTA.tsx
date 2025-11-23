import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CTA: React.FC = () => {
  const benefits = [
    '3分钟快速核价，秒速获取成本',
    '常规款式±10%精度，可信赖',
    '支持PLM系统集成，无缝衔接',
    '内网私密部署，数据安全有保障'
  ];

  return (
    <section className="relative z-10 px-4 py-20 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            让成本决策 💡
            <br />
            <span className="text-blue-400">科学、高效、可靠</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            从设计初期就能精准了解款式成本，优化设计方案，加速产品上市，提升竞争力
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-blue-600/25">
              <span>立即体验</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors">
              了解产品详情
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;