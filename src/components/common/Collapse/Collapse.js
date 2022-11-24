import React, { useState } from 'react';
import { motion } from "framer-motion"

function Collapse({ open, trigger, content }) {
    const [visible, setVisible] = useState(open);
    
    return (
        <div className='w-full mt-2'>
            <div className='cursor-pointer' onClick={() => setVisible(!visible)}>
                {trigger}
            </div>
            <motion.div
                initial={{opacity:0, height:0}}
                animate={visible ? {opacity:1, height:"auto"} : {opacity:0, x:"-100%"}}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
                {content.map((element, index) => (
                    <div className='m-2' key={index}>{element}</div>
                ))}
            </motion.div>
        </div>
    );
}

export default Collapse;