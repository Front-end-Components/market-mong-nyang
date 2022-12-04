import React from 'react';

export default function Image({ src, alt, width, height }) {
  return <img src={src} alt={alt} width={width} height={height} />;
}
