import ReactQuill from "react-quill";
import React, {  useRef } from 'react'
import { format } from "date-fns";

export default function Editor({value,onChange}) {
    const quillRef = useRef();
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  return (
    <div className="content">
    <ReactQuill
        ref={quillRef}
      value={value}
      theme={'snow'}
      onChange={onChange}
      modules={modules} 
        
      />
    </div>
  );
}