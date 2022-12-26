import React, { useState } from 'react';

function Modal({ trigger, content }) {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div onClick={() => setVisible(!visible)}>
                {trigger}
            </div>
            {
                visible &&
                <div>
                    {content}
                </div>
            }
        </>
    );
}

export default Modal;