import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

function HoverBox({ content, to }) {
    return (
        <motion.div 
            class='cursor-pointer'
            whileHover={{ scale: 2 }}
        >
            <a href={to}>
                {content}
            </a>
        </motion.div>
    );
}

export default HoverBox;