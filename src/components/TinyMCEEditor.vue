<template>
  <div>
    <editor  
    v-model="content" 
    :init="editorConfig"
    @change="handleEditorChange"
    />    
    <!-- <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"> -->
  </div>
</template>

<script>
import { defineProps, defineEmits } from 'vue';
import  Editor from '@tinymce/tinymce-vue';
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
export default {
  components: {
    Editor,
  },
  props: ['modelValue'],
  data() {
    return {
      content: this.modelValue,
      editorConfig: {
        // TinyMCE configurations, customize as needed
        plugins: 'image table preview media',
        toolbar: 'undo redo | image | table | preview| media',
        images_upload_handler: this.handleImageUpload,
        images_upload_base_path: '/src/assets', // Set the base path for uploaded images
        
      },
    };
  },
  methods: { 
    handleEditorChange(editorContent) {
      // alert("kontolodon") 
      if(editorContent.level.fragments != null){
        // console.log(editorContent);
        // editorContent.level.fragments.forEach((i, val)=>{
        //   this.content += val;
        // }); 
        this.contet = editorContent.lastLevel.content;
        if(editorContent.originalEvent != undefined) this.contet += editorContent.originalEvent.value;
      }else{
        this.content = editorContent.level.content;
      }
     
     
      // Handle the editor content change here
      // this.content = editorContent;
      this.$emit('update:modelValue',  this.content); // adding content
    },
    handleImageUpload(blobInfo, success, failure) {
      console.log(blobInfo)
      console.log(failure)
      // Simulate image upload process and get a temporary URL
      // const imageUrl = 'https://example.com/uploads/image.jpg';

      // Use the success callback to insert the image into the editor
      //success(imageUrl);
    }
  }, 
};
</script>

<style>
/* Add any custom styles for the editor here */
</style>