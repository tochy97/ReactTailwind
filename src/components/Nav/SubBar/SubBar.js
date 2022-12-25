import React, { useState } from 'react';
import { motion } from "framer-motion"
import { navComponentContainer } from '../../common/ClassNames';

function SubBar({ title, content }) {
    const [visible, setVisible] = useState(false);
    
    return (
        <div 
            className={`flex flex-wrap ${navComponentContainer}`}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <div>
                <p className={visible ? "font-bold leading-relaxed inline-block mx-2 whitespace-nowrap uppercase cursor-context-menu" : "text-black font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase cursor-context-menu"}>{title}</p>
            </div>
            <motion.div 
                initial={{opacity:0, width:0}}
                animate={visible ? {opacity:1, width:"auto"} : {opacity:0, width:'-100%'}}
                transition={{ duration: 0.5, ease: "linear" }}>
                {visible && content}
            </motion.div>
        </div>
    );
}   

export default SubBar;