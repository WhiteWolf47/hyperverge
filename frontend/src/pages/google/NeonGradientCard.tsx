import { useEffect, useRef, useState, ReactNode, HTMLProps } from 'react';
import classNames from 'classnames';

// Define the types for the neon colors
interface NeonColors {
  firstColor: string;
  secondColor: string;
}

// Define the props interface
interface NeonGradientCardProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  heading?: string;
  imageSrc?: string;
  subtitle?: string;
  description?: string;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: NeonColors;
  height?: string;
}

const NeonGradientCard = ({
  className,
  children,
  heading,
  imageSrc,
  subtitle,
  description,
  borderSize = 1.5,
  borderRadius = 20,
  neonColors = {
    firstColor: "#0951BD",
    secondColor: "#F13AB1",
  },
  height = "730px", // Default height
  ...props
}: NeonGradientCardProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [heading, imageSrc, subtitle, description]);

  // Define a type assertion for the style object
  const customStyle: React.CSSProperties = {
    "--border-size": `${borderSize}px`,
    "--border-radius": `${borderRadius}px`,
    "--neon-first-color": neonColors.firstColor,
    "--neon-second-color": neonColors.secondColor,
    "--card-width": `${dimensions.width}px`,
    "--card-height": `${dimensions.height}px`,
    "--card-content-radius": `${borderRadius - borderSize}px`,
    "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
    "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
    "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
    "--after-blur": `${dimensions.width / 3}px`,
    height: height,
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      style={customStyle}
      className={classNames(
        "neon-gradient-card relative z-10 w-full rounded-[var(--border-radius)] hover-shake",
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          "relative h-full min-h-[inherit] w-full rounded-[var(--card-content-radius)] background.paper p-6 flex flex-col justify-center items-center",
          "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
          "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
          "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
          "before:animate-backgroundPositionSpin",
          "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
          "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
          "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
          "after:animate-backgroundPositionSpin"
        )}
      >
        {heading}

        {imageSrc && (
          <div className="mb-4">
            <img
              src={imageSrc}
              alt={subtitle}
              className="w-full rounded"
              style={{ maxWidth: "100%", height: "auto", marginTop: "0" }}
            />
            <p className="text-center mt-2 text-blue-600 font-bold text-lg">{subtitle}</p>
          </div>
        )}

        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
