interface SectionTransitionProps {
  fromColor: string;
  toColor: string;
  className?: string;
}

const SectionTransition = ({ fromColor, toColor, className = "" }: SectionTransitionProps) => {
  return (
    <div 
      className={`relative h-20 overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
      }}
    >
      {/* Subtle particle effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${15 + (index * 12)}%`,
              top: `${40 + (Math.sin(index) * 20)}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for smoothness */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(135deg, transparent 40%, rgba(59, 130, 246, 0.02) 50%, transparent 60%)`
        }}
      />
    </div>
  );
};

export default SectionTransition;
