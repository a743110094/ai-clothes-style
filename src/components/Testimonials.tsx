import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: '张伟',
      role: '产品经理',
      company: '腾讯科技',
      content: 'AI会议纪要大大提高了我们的会议效率。以前需要花费大量时间整理会议记录，现在只需要几分钟就能得到一份结构清晰的纪要。',
      rating: 5
    },
    {
      name: '李娜',
      role: '项目经理',
      company: '阿里巴巴',
      content: '作为项目经理，我经常需要参加各种会议。这个工具帮我节省了大量时间，而且纪要质量非常高，关键信息一目了然。',
      rating: 5
    },
    {
      name: '王明',
      role: '技术总监',
      company: '字节跳动',
      content: '多语言支持对我们全球化团队非常有用。AI的准确率很高，特别是对于技术术语的识别和翻译。',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative z-10 px-4 py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            用户好评
            <br />
            <span className="text-blue-400">真实反馈</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            来自各行业专业人士的真实评价
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-8 hover:bg-gray-600/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-400 mb-6" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="border-t border-gray-600/20 pt-6">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-blue-400 text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;