import React, { useState } from 'react';
import { motion } from "framer-motion"
import { navComponentContainer, subNavTitle } from '../../common/ClassNames';

function SubBar({ title, content }) {
    const [visible, setVisible] = useState(false);
    
    return (
        <div 
            className={`flex flex-wrap ${navComponentContainer}`}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <div>
                <p className={subNavTitle}>{title}</p>
            </div>
            <motion.div 
                initial={{opacity:0, width:0}}
                animate={visible ? {opacity:1, width:"auto"} : {opacity:0, width:0}}
                transition={{ duration: 0.3, ease: "linear" }}>
                {visible && content}
            </motion.div>
        </div>
    );
}   

export default SubBar;