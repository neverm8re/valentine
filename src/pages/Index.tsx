import { useState } from "react";
import { Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingHeart = ({ delay }: { delay: number }) => (
  <div
    className="absolute animate-float"
    style={{
      animation: `float 6s ease-in-out ${delay}s infinite`,
      opacity: 0.2,
    }}
  >
    <Heart className="text-valentine-accent" size={24} />
  </div>
);

const SideHearts = () => (
  <>
    <div className="fixed left-4 top-1/4 space-y-8">
      <Heart className="text-valentine-accent w-8 h-8 opacity-50" />
      <Heart className="text-valentine-accent w-12 h-12 opacity-30" />
      <Heart className="text-valentine-accent w-6 h-6 opacity-70" />
    </div>
    <div className="fixed right-4 top-1/4 space-y-8">
      <Heart className="text-valentine-accent w-6 h-6 opacity-70" />
      <Heart className="text-valentine-accent w-12 h-12 opacity-30" />
      <Heart className="text-valentine-accent w-8 h-8 opacity-50" />
    </div>
  </>
);

const Index = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showCelebration, setShowCelebration] = useState(false);
  const isMobile = useIsMobile();

  const moveButton = () => {
    const buttonWidth = 100;
    const buttonHeight = 50;
    const bufferSpace = 20;
    
    const maxWidth = window.innerWidth - buttonWidth - bufferSpace;
    const maxHeight = window.innerHeight - buttonHeight - bufferSpace;
    
    const newX = Math.max(bufferSpace, Math.min(maxWidth, Math.random() * maxWidth));
    const newY = Math.max(bufferSpace, Math.min(maxHeight, Math.random() * maxHeight));
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleMouseOver = () => {
    if (!isMobile) {
      moveButton();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (isMobile) {
      moveButton();
    }
  };

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  return (
    <div className="min-h-screen bg-valentine-secondary relative overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingHeart key={i} delay={i * 0.5} />
      ))}
      <SideHearts />

      <div className="container max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-valentine-accent mb-8">
            Будешь моей валентинкой?
          </h1>

          {!showCelebration ? (
            <div className="space-y-6">
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleYesClick}
                  className="px-8 py-4 bg-valentine-accent text-white text-xl font-semibold rounded-lg hover:bg-valentine-accent/90 transition-colors"
                >
                  Да 🥰
                </button>
                <button
                  style={{
                    position: 'fixed',
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                    transition: 'all 0.2s ease-out',
                    zIndex: 20,
                  }}
                  onMouseOver={handleMouseOver}
                  onTouchStart={handleTouchStart}
                  className="px-8 py-4 bg-gray-200 text-gray-700 text-xl font-semibold rounded-lg hover:bg-gray-300 transition-colors touch-none"
                >
                  Нет 😢
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-up">
              <div className="text-center space-y-6">
                <div className="text-4xl">❤️</div>
                <p className="text-2xl text-gray-700 font-playfair">
                  С Днем святого Валентина! Пусть любовь, способная творить чудеса, наполняет твое сердце каждый день, а не только сегодня. Пусть она освещает даже самые темные моменты и делает твою жизнь ярче! 💖
                </p>
                <p className="text-xl text-valentine-accent font-semibold">
                  Я знал, что ты согласишься)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;