import { useEffect } from 'react';

const ExpandingTextareaHook = (
    HTMLTextareaRef,
    value,
    defaultHeight=16,
    buffer=0
) => {
    useEffect(() => {
        if (HTMLTextareaRef) {
            // reset height
            HTMLTextareaRef.style.height = defaultHeight + "px";
            // get scroll height
            const scrollHeight = HTMLTextareaRef.scrollHeight;
            // set height
            HTMLTextareaRef.style.height = Math.max(scrollHeight + buffer, defaultHeight) + "px";
        }
    }, [HTMLTextareaRef, value, defaultHeight, buffer]);
}

export default ExpandingTextareaHook