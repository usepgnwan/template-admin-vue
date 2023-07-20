<template>
  <div>
    <editor
      v-model="content"
      :init="editorConfig"
      @onEditorChange="test"
    />
  </div>
</template>

<script>
import  Editor from '@tinymce/tinymce-vue';

export default {
  components: {
    Editor,
  },
  data() {
    return {
      content: '<p>Hello, this is the TinyMCE editor!</p>',
      editorConfig: {
        // TinyMCE configurations, customize as needed
        plugins: 'paste image',
        toolbar: 'undo redo | paste | image',
        images_upload_handler: this.handleImageUpload,
        images_upload_base_path: '/src/assets', // Set the base path for uploaded images
      },
    };
  },
  methods: {
    handleEditorChange(editorContent) {
      // Handle the editor content change here
      this.content = editorContent;
    },
    handleImageUpload(blobInfo, success, failure) {
      console.log(blobInfo)
      console.log(failure)
      // Simulate image upload process and get a temporary URL
      // const imageUrl = 'https://example.com/uploads/image.jpg';

      // Use the success callback to insert the image into the editor
      //success(imageUrl);
    },
    test(event){
      // Get the selected image file
      // const file = event.target.files[0];
      // console.log(file);
      console.log(event);
      // Simulate image upload and get a temporary URL
      const imageUrl = 'https://example.com/uploads/image.jpg';

      // Insert the image into the editor
      const editor = this.$refs.tinymceEditor.editor;
      editor.execCommand('mceInsertContent', false, `<img src="${imageUrl}" alt="Uploaded Image" />`);
    }
  },
};
</script>

<style>
/* Add any custom styles for the editor here */
</style>