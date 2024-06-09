import React, { useState } from 'react'

function FaqChips({title,content}) {
    const [hideContent, displayContent] = useState(false);

    const toggleContent = () => {
        displayContent(!hideContent);
    };
    return (
        <div>
            <li
                style={{
                    color: 'rgba(15, 15, 15, 1)',
                    fontWeight: '600',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
                onClick={toggleContent}
            >
                {title}
            </li>
            {hideContent && (
                <div className="dropdown  top-10">{content}</div>
            )}
        </div>
    )
}

export default FaqChips