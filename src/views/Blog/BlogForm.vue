<template> 
    <div>
        <BreadCumbs :breadcumbs="this.breadcumbs" />
        <section class="section">
            <div class="row">
              <div class="col-lg-12">
      
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Add New Blogs</h5> 
                    <form class="row g-3">
                      <div class="col-12">
                        <label for="inputNanme4" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="inputNanme4">
                      </div>
                      <div class="col-12">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4">
                      </div>
                      <div class="col-12">
                        <label for="inputPassword4" class="form-label">Password</label>
                         <TinyMCEEditor v-model="content" />
                      </div> 
                      <div class="text-end">
                        <button type="submit" class="btn btn-primary">Submit</button> &nbsp;
                        <button type="reset" class="btn btn-secondary">Preview</button>
                      </div>
                    </form>
                  </div>
                </div> 
              </div>
            </div>
            <div v-html="content"></div>
          </section>
      </div>
</template>

<script>
  import BreadCumbs from "@/components/layout/dashboard/BreadCumbs.vue" 
  import TinyMCEEditor from '@/components/TinyMCEEditor.vue';
 
export default {
  name: "BlogForm",
  data(){
    return {
      content:"",
      breadcumbs: {
        title : "Add New Blog",
        data : [
          {
            name : "Dashboard",
            link : "/",
            status : false
          },
          {
            name : "Blog",
            link : "/blog",
            status : false
          },
          {
            name : "form",
            link : "/blog",
            status : true
          }
        ]
      }
    }
  },
  components:{
      BreadCumbs,
      TinyMCEEditor,
  },
  mounted(){
    console.log(this.breadcumbs) 
  }
}
</script>

<style>

</style>