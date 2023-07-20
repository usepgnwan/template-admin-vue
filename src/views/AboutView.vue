
<template>
    <div class="about"> 
      <TinyMCEEditor />
    </div>
  </template>
  
  <script>
   import TinyMCEEditor from '@/components/TinyMCEEditor.vue';

  export default {
    name: "AboutView",
    components: {
      TinyMCEEditor,
    },
  }
  </script>