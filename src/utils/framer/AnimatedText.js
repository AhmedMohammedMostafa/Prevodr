import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, duration, delay, className, ...props}) => {
    return (
        <div
        className={className}
        >
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: index * (delay), type: 'spring', stiffness: 100}}}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    );
};

export default AnimatedText;