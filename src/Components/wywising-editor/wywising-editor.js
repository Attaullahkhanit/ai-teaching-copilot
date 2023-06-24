import * as React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import "./style.css";
export default function WywisingEditor(props) {
 
 
  return (
    <div className="App">
      <CKEditor
         style={{height:"100vh"}}
        editor={ClassicEditor}
        data={props.content?props.content:  `<p style="text-align:center; font-weight:bold">See Text Below </p><p className="text-secondary" style=color: gray">"Once you click generate. wait patiently and your content will be displayed here"</p>`}
        onReady={(editor) => {
          console.log('CKEditor React Component is ready to use!', editor);
          CKEditorInspector.attach(editor);
        }}
        onChange={props.onChange}
      />
    </div>
  );
}

