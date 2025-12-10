import React, { useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Play, Zap } from "lucide-react";
import VideoJSPlayer from "./VideoJSPlayer";

const Hero: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  // 视频模态框组件，使用 Portal 渲染到 body 层级
  const VideoModal = () => {
    if (!showVideoModal) return null;

    return createPortal(
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        style={{
          zIndex: 2147483647,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          className="relative max-w-4xl w-full mx-4"
          style={{ zIndex: 2147483647 }}
        >
          <VideoJSPlayer
            src="/demo-video.m3u8"
            className="w-full h-auto rounded-lg"
            autoPlay={true}
            showCloseButton={true}
            onClose={() => setShowVideoModal(false)}
            fallbackText="您的浏览器不支持视频播放，请尝试更新浏览器或使用其他浏览器。"
          />
        </div>
      </div>,
      document.body,
    );
  };

  return (
    <>
      <section className="relative z-10 px-4 py-20 lg:px-8 min-h-screen flex items-start lg:items-center justify-center pt-20 lg:pt-0">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-600/30 border border-gray-400/40 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-gray-300" />
            <span className="text-gray-200 text-sm font-medium">
              AI驱动的智能成本分析
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            从款式图到成本估算
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              ⚡ 3分钟完成
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            上传一张服装款式图，AI智能识别工艺与面料，
            <br className="hidden lg:block" />
            精准估算生产成本，让你的设计决策更科学更高效
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a
              href="http://stylecost.semirapp.com:8501"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-blue-600/25"
            >
              <span>立即体验</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => setShowVideoModal(true)}
              className="group flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center group-hover:bg-gray-500/30 transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="text-lg font-medium">观看演示</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                90%
              </div>
              <div className="text-gray-200">🚀 效率提升</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                3分钟
              </div>
              <div className="text-gray-200">⏱️ 快速核价</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                5000+
              </div>
              <div className="text-gray-200">📊 已处理款式</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal - 使用 Portal 渲染到 body，确保在最顶层 */}
      <VideoModal />
    </>
  );
};

export default Hero;
