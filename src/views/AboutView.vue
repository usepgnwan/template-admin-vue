
<template>
    <div class="about"> 
      <TinyMCEEditor v-model="content" /> 
      <div v-html="content"></div> 
    </div>
  </template>
  
  <script>
   import TinyMCEEditor from '@/components/TinyMCEEditor.vue';

  export default {
    name: "AboutView",
    components: {
      TinyMCEEditor,
    },
    data(){
      return{
        content: "zzzzz",
        content2: "zzzzz"
      }
    },
    mounted(){
      console.log(this.content)
    }
  }
  </script>