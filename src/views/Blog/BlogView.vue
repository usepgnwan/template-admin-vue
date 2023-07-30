<template>
  <div>
    <div class="d-flex"> 
        <div class="pagetitle">
            <h1>List Of Blog</h1>
            <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                <li class="breadcrumb-item active">Blog</li>
            </ol>
            </nav>
        </div> 
        <div class="ms-auto">
            <button class="btn btn-primary" @click="formBlog"><i class="bi bi-plus"></i> Add Blog</button>
        </div>
    </div>
    
    <section class="section">
        <div class="row">
          <div class="col-lg-12">
  
            <div class="card">
              <div class="card-body mt-4">
  
                <div class="table-responsive">
                        
                    <!-- Default Table -->
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Description</th> 
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Digital marketing</td>
                        <td><img src="assets/img/logo.png" alt=""></td> 
                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt id beatae earum...</td>
                        <td>
                            <button class="btn btn-sm btn-success"><i class="bx bx-edit"></i></button> &nbsp;
                            <button class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></button> &nbsp;
                            <button class="btn btn-sm btn-outline-primary"><i class="bx bx-pin"></i></button> &nbsp;
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <!-- End Default Table Example -->
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default { 
    name:"BlogView",
    methods: {
        formBlog(){
            this.$router.push({ path : "blog/form"});
        }
    }
}
</script>

<style>

</style>