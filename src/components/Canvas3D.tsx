import React, { useEffect, useRef, useState } from 'react';

interface Canvas3DProps {
  scrollProgress: number;
}

const Canvas3D: React.FC<Canvas3DProps> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises: Promise<HTMLImageElement | null>[] = [];
      
      for (let i = 1; i <= 300; i++) {
        const paddedNumber = i.toString().padStart(4, '0');
        
        const imagePromise = new Promise<HTMLImageElement | null>((resolve) => {
          const img = new Image();
          
          img.onload = () => {
            resolve(img);
          };
          
          img.onerror = () => {
            resolve(null);
          };
          
          img.src = `/character/male${paddedNumber}.png`;
        });
        
        imagePromises.push(imagePromise);
      }
      
      try {
        const loadedImages = await Promise.all(imagePromises);
        const validImages = loadedImages.filter((img): img is HTMLImageElement => img !== null);
        setImages(validImages);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
        setImagesLoaded(true);
      }
    };
    
    loadImages();
  }, []);
  
  useEffect(() => {
    if (!imagesLoaded || images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Get the display size
    const rect = canvas.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height;
    
    // Set the actual canvas size to match display size for crisp rendering
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = displayWidth * devicePixelRatio;
    canvas.height = displayHeight * devicePixelRatio;
    
    // Scale the context to match device pixel ratio
    ctx.scale(devicePixelRatio, devicePixelRatio);
    
    // Calculate current frame based on scroll progress
    const frameIndex = Math.min(
      Math.floor(scrollProgress * images.length),
      images.length - 1
    );
    const currentImage = images[frameIndex];
    
    // Clear canvas
    ctx.clearRect(0, 0, displayWidth, displayHeight);
    
    // Draw current frame with proper aspect ratio
    if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
      const imgAspect = currentImage.naturalWidth / currentImage.naturalHeight;
      const canvasAspect = displayWidth / displayHeight;
      
      let drawWidth, drawHeight, drawX, drawY;
      
      if (imgAspect > canvasAspect) {
        // Image is wider than canvas
        drawHeight = displayHeight;
        drawWidth = drawHeight * imgAspect;
        drawX = (displayWidth - drawWidth) / 2;
        drawY = 0;
      } else {
        // Image is taller than canvas
        drawWidth = displayWidth;
        drawHeight = drawWidth / imgAspect;
        drawX = 0;
        drawY = (displayHeight - drawHeight) / 2;
      }
      
      ctx.drawImage(currentImage, drawX, drawY, drawWidth, drawHeight);
    }
  }, [scrollProgress, images, imagesLoaded]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Trigger a re-render when window resizes
      if (imagesLoaded && images.length > 0) {
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            // Re-render current frame
            const frameIndex = Math.min(
              Math.floor(scrollProgress * images.length),
              images.length - 1
            );
            const currentImage = images[frameIndex];
            
            if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
              const rect = canvas.getBoundingClientRect();
              const displayWidth = rect.width;
              const displayHeight = rect.height;
              const devicePixelRatio = window.devicePixelRatio || 1;
              
              canvas.width = displayWidth * devicePixelRatio;
              canvas.height = displayHeight * devicePixelRatio;
              ctx.scale(devicePixelRatio, devicePixelRatio);
              
              const imgAspect = currentImage.naturalWidth / currentImage.naturalHeight;
              const canvasAspect = displayWidth / displayHeight;
              
              let drawWidth, drawHeight, drawX, drawY;
              
              if (imgAspect > canvasAspect) {
                drawHeight = displayHeight;
                drawWidth = drawHeight * imgAspect;
                drawX = (displayWidth - drawWidth) / 2;
                drawY = 0;
              } else {
                drawWidth = displayWidth;
                drawHeight = drawWidth / imgAspect;
                drawX = 0;
                drawY = (displayHeight - drawHeight) / 2;
              }
              
              ctx.drawImage(currentImage, drawX, drawY, drawWidth, drawHeight);
            }
          }
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollProgress, images, imagesLoaded]);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none flex items-center justify-center">
      <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-80"
          style={{ 
            filter: 'drop-shadow(0 0 30px rgba(255, 107, 53, 0.3))',
            imageRendering: 'crisp-edges'
          }}
        />
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Canvas3D;