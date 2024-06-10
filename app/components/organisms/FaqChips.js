
import React, { useState } from 'react'

function FaqChips({title,content}) {
    const [hideContent, displayContent] = useState(false);

    const toggleContent = () => {
        displayContent(!hideContent);
    };
    return (
        
        <div  data-aos="fade-in">
            <li className='text-linkColor text-[16px] cursor-pointer font-[600]'
               
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