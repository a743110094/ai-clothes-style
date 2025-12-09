import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/forest/index.css';

// Video.js播放器组件类型定义
interface VideoJSPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  onClose?: () => void;
  autoPlay?: boolean;
  showCloseButton?: boolean;
  fallbackText?: string;
  preload?: 'none' | 'metadata' | 'auto';
  fluid?: boolean;
  responsive?: boolean;
  playbackRates?: number[];
  controls?: boolean;
  width?: number;
  height?: number;
}

const VideoJSPlayer: React.FC<VideoJSPlayerProps> = ({
  src,
  poster,
  className = '',
  onClose,
  autoPlay = false,
  showCloseButton = false,
  fallbackText = '您的浏览器不支持视频播放。',
  preload = 'metadata',
  fluid = true,
  responsive = true,
  playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2],
  controls = true,
  width,
  height
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // 确保Video.js已加载
    if (!videoRef.current) return;

    // 初始化Video.js播放器
    const videoElement = document.createElement('video-js');
    videoElement.classList.add('vjs-big-play-centered');
    videoRef.current.appendChild(videoElement);

    const player = videojs(videoElement, {
      controls: controls,
      responsive: responsive,
      fluid: fluid,
      playbackRates: playbackRates,
      preload: preload,
      width: width,
      height: height,
      poster: poster,
      sources: [{
        src: src,
        type: 'video/mp4'
      }],
      // 增强用户体验的选项
      techOrder: ['html5'],
      html5: {
        vhs: {
          enableLowInitialPlaylist: true,
          smoothQualityChange: true,
          overrideNative: true
        },
        nativeVideoTracks: false,
        nativeAudioTracks: false,
        nativeTextTracks: false
      },
      // 控制条配置
      controlBar: {
        volumePanel: {
          inline: false,
          vertical: true
        },
        pictureInPictureToggle: true,
        remainingTimeDisplay: true,
        progressControl: {
          keepContext: true
        }
      },
      // 播放配置
      autoplay: autoPlay,
      muted: autoPlay, // 自动播放时需要静音
      loop: false,
      // 错误处理
      errorDisplay: true,
      loadingSpinner: true,
      // 文本和语言
      language: 'zh-CN',
      // 兼容性设置
      preferFullWindow: false,
      suppressNotSupportedError: false
    });

    player.ready(() => {
      // 播放器准备就绪
      console.log('Video.js播放器已准备就绪');
      
      // 如果自动播放成功，取消静音
      if (autoPlay) {
        setTimeout(() => {
          player.muted(false);
        }, 100);
      }
    });

    // 事件监听
    player.on('loadstart', () => {
      console.log('视频开始加载');
    });

    player.on('canplay', () => {
      console.log('视频可以播放');
    });

    player.on('play', () => {
      console.log('视频开始播放');
    });

    player.on('pause', () => {
      console.log('视频暂停');
    });

    player.on('ended', () => {
      console.log('视频播放结束');
    });

    player.on('error', () => {
      console.error('视频播放错误');
    });

    player.on('volumechange', () => {
      console.log('音量改变:', player.volume());
    });

    player.on('timeupdate', () => {
      console.log('当前时间:', player.currentTime());
    });

    // 保存播放器引用
    playerRef.current = player;

    // 清理函数
    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, poster, autoPlay, preload, fluid, responsive, playbackRates, controls, width, height]);

  // 关闭播放器
  const handleClose = () => {
    if (playerRef.current && !playerRef.current.isDisposed()) {
      playerRef.current.dispose();
      playerRef.current = null;
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`relative group bg-black rounded-lg overflow-hidden ${className}`}>
      {/* 关闭按钮 */}
      {showCloseButton && onClose && (
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
          style={{ zIndex: 2147483647 }}
          aria-label="关闭视频播放器"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Video.js容器 */}
      <div ref={videoRef} className="w-full h-full" />

      {/* 错误提示（备用） */}
      <div className="hidden" aria-live="polite">
        {fallbackText}
      </div>
    </div>
  );
};

export default VideoJSPlayer;