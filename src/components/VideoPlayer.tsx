import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  X,
  RotateCcw,
  RotateCw,
  Settings
} from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  onClose?: () => void;
  autoPlay?: boolean;
  showCloseButton?: boolean;
  fallbackText?: string;
  preload?: 'none' | 'metadata' | 'auto';
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  className = '',
  onClose,
  autoPlay = false,
  showCloseButton = false,
  fallbackText = '您的浏览器不支持视频播放。',
  preload = 'metadata'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 播放状态
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);

  // 格式化时间显示
  const formatTime = useCallback((time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  // 播放/暂停切换
  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(console.error);
      }
    }
  }, [isPlaying]);

  // 音量控制
  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  }, []);

  // 进度控制
  const handleSeek = useCallback((newTime: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, []);

  // 全屏切换
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  // 播放速度控制
  const changePlaybackRate = useCallback((rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  }, []);

  // 键盘快捷键
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!videoRef.current) return;
      
      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handleSeek(Math.max(0, currentTime - 10));
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleSeek(Math.min(duration, currentTime + 10));
          break;
        case 'ArrowUp':
          e.preventDefault();
          handleVolumeChange(Math.min(1, volume + 0.1));
          break;
        case 'ArrowDown':
          e.preventDefault();
          handleVolumeChange(Math.max(0, volume - 0.1));
          break;
        case 'KeyM':
          e.preventDefault();
          toggleMute();
          break;
        case 'KeyF':
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [togglePlay, currentTime, duration, handleSeek, volume, handleVolumeChange, toggleMute, toggleFullscreen]);

  // 全屏状态监听
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // 视频事件监听
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };
    const handleVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);
    video.addEventListener('volumechange', handleVolumeChange);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, []);

  // 触摸支持和手势操作
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [lastTouchEnd, setLastTouchEnd] = useState(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    });
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const deltaTime = Date.now() - touchStart.time;

    // 快速点击切换播放/暂停
    if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 300) {
      togglePlay();
      return;
    }

    // 水平滑动调节进度
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      const seekTime = (deltaX / (containerRef.current?.clientWidth || 1)) * duration;
      handleSeek(Math.max(0, Math.min(duration, currentTime + seekTime)));
      return;
    }

    // 垂直滑动调节音量
    if (Math.abs(deltaY) > 50) {
      const volumeChange = -deltaY / 200; // 每200px改变1个单位音量
      handleVolumeChange(Math.max(0, Math.min(1, volume + volumeChange)));
    }

    setTouchStart(null);
  }, [touchStart, togglePlay, duration, currentTime, handleSeek, volume, handleVolumeChange]);

  // 双击进入/退出全屏
  const handleDoubleClick = useCallback(() => {
    const now = Date.now();
    if (now - lastTouchEnd < 300) {
      toggleFullscreen();
    }
    setLastTouchEnd(now);
  }, [lastTouchEnd, toggleFullscreen]);

  // 自动隐藏控制条
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const resetTimeout = () => {
      clearTimeout(timeout);
      setShowControls(true);
      timeout = setTimeout(() => {
        if (isPlaying) setShowControls(false);
      }, 3000);
    };

    resetTimeout();
    
    return () => clearTimeout(timeout);
  }, [isPlaying]);

  if (hasError) {
    return (
      <div className={`relative bg-gray-900 flex items-center justify-center ${className}`}>
        <div className="text-center text-white">
          <div className="text-red-400 mb-2">⚠️ 视频加载失败</div>
          <p className="text-gray-300 mb-4">{fallbackText}</p>
          <button
            onClick={() => {
              setHasError(false);
              if (videoRef.current) {
                videoRef.current.load();
              }
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative group bg-black rounded-lg overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      role="application"
      aria-label="视频播放器"
    >
      {/* 视频元素 */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        poster={poster}
        preload={preload}
        autoPlay={autoPlay}
        onClick={togglePlay}
        playsInline
        webkit-playsinline="true"
        aria-label="演示视频"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.code === 'Enter' || e.code === 'Space') {
            e.preventDefault();
            togglePlay();
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        <source src={src.replace('.mp4', '.ogg')} type="video/ogg" />
        {fallbackText}
      </video>

      {/* 加载指示器 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
        </div>
      )}

      {/* 关闭按钮 */}
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="关闭视频播放器"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* 控制条 */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* 进度条 */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => handleSeek(Number(e.target.value))}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            aria-label="视频进度"
            aria-valuenow={currentTime}
            aria-valuemin={0}
            aria-valuemax={duration || 0}
            aria-valuetext={`已播放 ${formatTime(currentTime)}，总时长 ${formatTime(duration)}`}
          />
          <div className="flex justify-between text-xs text-gray-300 mt-1" aria-live="polite">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* 控制按钮 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* 播放/暂停 */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label={isPlaying ? '暂停视频' : '播放视频'}
              aria-pressed={isPlaying}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>

            {/* 快退/快进 */}
            <button
              onClick={() => handleSeek(Math.max(0, currentTime - 10))}
              className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="快退10秒"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleSeek(Math.min(duration, currentTime + 10))}
              className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="快进10秒"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* 音量控制 */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleMute} 
                className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black p-1 rounded"
                aria-label={isMuted ? '取消静音' : '静音'}
                aria-pressed={isMuted}
              >
                {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="音量控制"
                aria-valuenow={isMuted ? 0 : volume}
                aria-valuemin={0}
                aria-valuemax={1}
              />
            </div>

            {/* 播放速度 */}
            <div className="relative group">
              <button 
                className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black p-1 rounded"
                aria-label="播放速度设置"
                aria-expanded="false"
              >
                <Settings className="w-5 h-5" />
              </button>
              <div className="absolute bottom-full left-0 mb-2 bg-black bg-opacity-90 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity" role="menu" aria-label="播放速度选项">
                {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
                  <button
                    key={rate}
                    onClick={() => changePlaybackRate(rate)}
                    className={`block w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ${
                      playbackRate === rate ? 'text-blue-400' : 'text-white'
                    }`}
                    role="menuitem"
                    aria-label={`播放速度 ${rate}倍`}
                    aria-pressed={playbackRate === rate}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* 全屏按钮 */}
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black p-1 rounded"
              aria-label={isFullscreen ? '退出全屏' : '全屏模式'}
              aria-pressed={isFullscreen}
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default VideoPlayer;