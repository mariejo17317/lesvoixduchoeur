
import { useEffect, useState } from 'react';

interface UseImagePreloaderProps {
  images: string[];
  enabled: boolean;
}

export const useImagePreloader = ({ images, enabled }: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!enabled || images.length === 0) return;

    const preloadImages = async () => {
      const promises = images.map((src) => {
        if (loadedImages.has(src)) return Promise.resolve();
        
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, src]));
            resolve(src);
          };
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.allSettled(promises);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, [images, enabled, loadedImages]);

  return { loadedImages };
};
