import React from 'react';
import { Shirt, TrendingDown, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 px-4 py-16 lg:px-8 border-t border-gray-600/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shirt className="w-8 h-8 text-gray-300" />
                <TrendingDown className="w-4 h-4 text-gray-400 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-2xl font-bold text-white">AI服装成本分析</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              领先的AI服装成本分析解决方案，用一张图3分钟快速估算生产成本，让设计决策更科学，让成本管理更高效。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center hover:bg-gray-500/30 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center hover:bg-gray-500/30 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center hover:bg-gray-500/30 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">核心功能</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">工作流程</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">成果展示</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">产品文档</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">支持</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">帮助中心</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">集成指南</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">联系我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">隐私政策</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 AI服装成本分析. 保留所有权利。
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">服务条款</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">隐私政策</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;