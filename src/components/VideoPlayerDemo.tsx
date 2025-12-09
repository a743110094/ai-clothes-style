import React, { useState } from 'react';
import VideoJSPlayer from './VideoJSPlayer';

const VideoPlayerDemo: React.FC = () => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('/demo-video.mp4');

  const testVideos = [
    {
      name: '本地演示视频',
      src: '/demo-video.mp4',
      description: '项目自带的演示视频，确保打包后可用'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">视频播放器演示</h1>
        
        {/* 控制面板 */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Video.js 播放器演示</h2>
          <p className="text-gray-300 text-sm mb-4">使用业界最流行的HTML5视频播放器，兼容性极佳</p>
          <h2 className="text-xl font-semibold mb-4">控制面板</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">选择测试视频：</label>
              <select 
                value={currentVideo}
                onChange={(e) => setCurrentVideo(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                {testVideos.map((video, index) => (
                  <option key={index} value={video.src}>
                    {video.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setShowPlayer(!showPlayer)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                {showPlayer ? '隐藏播放器' : '显示播放器'}
              </button>
              
              <button
                onClick={() => {
                  setCurrentVideo(testVideos[0].src);
                  setShowPlayer(true);
                }}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                播放原始视频
              </button>
            </div>
          </div>
        </div>

        {/* 功能特性展示 */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Video.js 优势特性</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-green-400 mb-2">🎯 Video.js 核心优势</h3>
              <ul className="space-y-1 text-gray-300">
                <li>⭐ GitHub 35k+ stars，业界最流行</li>
                <li>🌍 全球数百万网站使用验证</li>
                <li>🔄 持续维护更新，bug修复及时</li>
                <li>📱 完美支持移动设备和触屏</li>
                <li>♿ 内置无障碍功能支持</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-400 mb-2">🎮 完整播放功能</h3>
              <ul className="space-y-1 text-gray-300">
                <li>▶️ 播放/暂停、进度拖拽控制</li>
                <li>🔊 音量控制、静音切换</li>
                <li>🖥️ 全屏和画中画模式</li>
                <li>⚡ 播放速度调节 (0.25x - 4x)</li>
                <li>🔄 循环播放、自动播放</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-400 mb-2">📱 跨平台兼容</h3>
              <ul className="space-y-1 text-gray-300">
                <li>✅ Chrome、Firefox、Safari、Edge</li>
                <li>✅ iOS Safari、Android Chrome</li>
                <li>✅ 触屏手势支持</li>
                <li>✅ 多格式自动回退</li>
                <li>✅ 自适应响应式设计</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-400 mb-2">⌨️ 键盘快捷键</h3>
              <ul className="space-y-1 text-gray-300">
                <li>⏸️ 空格键：播放/暂停</li>
                <li>⬅️➡️ 左右箭头：快退/快进</li>
                <li>⬆️⬇️ 上下箭头：音量调节</li>
                <li>🔇 M键：静音切换</li>
                <li>🖥️ F键：全屏切换</li>
                <li>⌨️ 数字键：跳转时间点</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 视频播放器 */}
        {showPlayer && (
          <div className="bg-black rounded-lg overflow-hidden">
            <VideoJSPlayer
              src={currentVideo}
              className="w-full h-auto"
              autoPlay={false}
              showCloseButton={false}
              fallbackText="视频加载失败，请检查网络连接或尝试其他视频。"
            />
          </div>
        )}

        {/* 使用说明 */}
        <div className="bg-gray-800 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">使用说明</h2>
          <div className="text-gray-300 space-y-2">
            <p><strong>1. 在Hero组件中：</strong>点击"观看演示"按钮即可打开增强的视频播放器模态框。</p>
            <p><strong>2. 自定义使用：</strong>可以导入VideoPlayer组件并在任何地方使用。</p>
            <p><strong>3. 兼容性：</strong>支持现代浏览器，包括Chrome、Firefox、Safari、Edge等。</p>
            <p><strong>4. 移动端：</strong>自动适配移动设备，支持触摸操作。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerDemo;