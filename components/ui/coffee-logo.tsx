'use client'

import React from 'react';

// Adapter component for the 3D Coffee Logo
// Scaled down and adjusted for navbar usage
interface CoffeeLogoProps {
    className?: string;
    size?: number; // Base font size, default 120 (from original) or scaled
}

export function CoffeeLogo({ className = '', size = 32 }: CoffeeLogoProps) {
    // Scaling factor based on original 120px
    // If user wants it in navbar, ~30-40px is appropriate. 
    // We need to scale shadows proportionally or they will look huge.
    // Actually, standard CSS text-shadow doesn't scale with transform, 
    // so we should generate the shadow string based on size or use a fixed small size for navbar.

    // Let's use a scale multiplier. original was 120px. 
    // If we target 32px, scale is ~0.26.
    // 1px shadow at 32px is visible. 8px shadow is too much.
    // I will reduce the shadow depth for the smaller size.

    const scale = size / 120;

    const styles = {
        text: {
            fontSize: `${size}px`,
            fontWeight: 900,
            color: 'var(--primary)', // Using brand primary color instead of white for light theme visibility
            // Or '#333' as requested? The user said "Fondo oscuro para contraste". 
            // But navbar is light. So text must be dark.
            // If I use white text, I need a dark stroke or background. 
            // Let's try brand primary color with lighter shadows.
            letterSpacing: '-2px',
            position: 'relative' as 'relative',
            textShadow: `
        ${1 * scale}px ${1 * scale}px 0px #ccc,
        ${2 * scale}px ${2 * scale}px 0px #bbb,
        ${3 * scale}px ${3 * scale}px 0px #aaa,
        ${4 * scale}px ${4 * scale}px 2px rgba(0,0,0,0.2)
      `,
            margin: 0,
            lineHeight: 1,
            fontFamily: "'Montserrat', sans-serif", // Ensure font is loaded or fallback
        },
        accentWrapper: {
            display: 'inline-block',
            position: 'relative' as 'relative',
        },
        coffeeBean: {
            position: 'absolute' as 'absolute',
            top: `-${20 * scale}px`,
            right: `-${5 * scale}px`, // Adjusted position
            width: `${40 * (size / 120 * 3)}px`, // Roughly propertionate
            height: `${40 * (size / 120 * 3)}px`,
            filter: 'drop-shadow(1px 1px 0px #999)',
            transform: 'rotate(-15deg)',
        }
    };

    // The simplified shadow for smaller text
    const smallShadow = `
      1px 1px 0px #ccc,
      2px 2px 0px #bbb,
      3px 3px 2px rgba(0,0,0,0.2)
  `;

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <h1 style={{
                ...styles.text,
                textShadow: size < 50 ? smallShadow : styles.text.textShadow
            }}>
                TRECAFF
                <span style={styles.accentWrapper}>
                    E
                    <svg
                        style={{
                            position: 'absolute',
                            top: '-0.3em',
                            right: '0',
                            width: '0.5em',
                            height: '0.5em',
                            filter: 'drop-shadow(1px 1px 0px #ccc)',
                            transform: 'rotate(-15deg)',
                        }}
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            d="M351.9 191.2c-15.6-59.4-60.8-107.5-119.5-121.3C182.3 58.7 127.3 75.3 91.6 111c-60.4 60.4-33.6 181.7 44.1 199.3 12 2.7 20.3 13.5 19.8 25.8-.8 19.6-26.6 27-37.1 12.9-19.8-26.6-67.4-114.6 6.8-188.8 48.7-48.7 125.6-68.8 192.4-38.4 46.5 21.2 78.6 64.9 86.8 115.6 12.2 75.7-27.1 146.4-86.8 181.8-62.7 37.2-136.2 33.6-187.6-6.4-9.3-7.2-22.9-4.5-28.7 5.7-5.5 9.7-1.5 21.9 8 28.1 66.2 43.5 152.1 46.1 223.1 3.9 81.3-48.2 134.8-144.5 118.1-247.7zM245.7 338.7c-4.7-7.5-14.7-9.5-22.1-4.2-2.7 1.9-4.9 4.6-6.1 7.7-12.7 33.1-39.2 57.2-70.5 68.3-8.6 3-13.3 12.6-10.2 21.2 3 8.6 12.6 13.3 21.2 10.2 41-14.5 75.5-46.3 92-89.8 3-8 .1-17.1-5.6-22.5"
                        />
                    </svg>
                </span>
            </h1>
        </div>
    );
};
