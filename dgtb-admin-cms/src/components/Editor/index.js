import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
class CustomizeEditor extends Component {
  handleEditorChange = e => {
    this.props.customProps.init.onChange(e);
  };

  render() {
    const editorProps = {
      apiKey: "b2nyh70eb7fnwt0clgjnkb9o2hqc6187pbtf4cag2nad7q9c",
      cloudChannel: "5-dev",
      init: {
        plugins: "image code imagetools paste table wordcount",
        content_style: "div { margin: 10px;  padding: 3px; }",
        selector: "textarea", // change this value according to your HTML
        toolbar: "undo redo | styleselect | bold italic | link image",
        imagetools_toolbar:
          "rotateleft rotateright | flipv fliph | editimage imageoptions",
        font_formats:
          "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n",
        automatic_uploads: true,
        paste_data_images: true,
        theme: "silver"
      }
    };
    return (
      <Editor
        {...editorProps}
        onChange={this.handleEditorChange}
        value={this.props.customProps.init.value}
        init={{ ...editorProps.init, ...this.props.customProps.init }}
      />
    );
  }
}

export default CustomizeEditor;
