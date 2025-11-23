import React, { useState } from 'react';
import { Menu, X, Shirt, TrendingDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-20 px-4 py-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shirt className="w-8 h-8 text-gray-300" />
              <TrendingDown className="w-4 h-4 text-gray-400 absolute -bottom-1 -right-1" />
            </div>
            <span className="text-2xl font-bold text-white">AI服装成本分析</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
              核心功能
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
              工作流程
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">
              成果展示
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              立即体验
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
                核心功能
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
                工作流程
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">
                成果展示
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors w-fit">
                立即体验
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;