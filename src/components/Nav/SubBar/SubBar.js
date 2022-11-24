import React, { useState } from 'react';
import { motion } from "framer-motion"

function SubBar({ title, content }) {
    const [visible, setVisible] = useState(false);
    
    return (
        <div 
            className='flex flex-wrap'
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <div>
                <p className={visible ? "text-white font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase cursor-context-menu underline underline-offset-8" : "text-black font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase cursor-context-menu"}>{title}</p>
            </div>
            <motion.div 
                initial={{opacity:0, height:0}}
                animate={visible ? {opacity:1, height:"auto"} : {opacity:0, y:"-100%"}}
                transition={{ duration: 0.8, ease: "linear" }}>
                {visible && content}
            </motion.div>
        </div>
    );
}

export default SubBar;