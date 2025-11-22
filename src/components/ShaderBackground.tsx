import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

const ShaderBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <MeshGradient
        colors={['#024FE7', '#4B5563', '#6B7280', '#3B82F6', '#9CA3AF']}
        distortion={3.2}
        swirl={2.1}
        speed={0.8}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.9
        }}
      />
    </div>
  );
};

export default ShaderBackground;