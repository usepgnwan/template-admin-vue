
<template> 
  
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">
  <TopDashboard />
  </header><!-- End Header -->

  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    
    <NavDashboard />
  </aside><!-- End Sidebar-->

  <main id="main" class="main"> 
    <router-view></router-view>
  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <FooterDashboard />
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
 
</template>

<script>  
// import "../../../../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";

import NavDashboard from '@/components/layout/dashboard/NavDashboard.vue';
import TopDashboard from '@/components/layout/dashboard/TopDashboard.vue';
import FooterDashboard from '@/components/layout/dashboard/FooterDashboard.vue';
export default {
    components:{
      NavDashboard,
      TopDashboard,
      FooterDashboard
    }
}
</script>

<style lang="css"> 
@import 'https://fonts.gstatic.com';
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i';
@import '../../../../public/assets/vendor/bootstrap/css/bootstrap.min.css';
@import '../../../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
@import '../../../../public/assets/vendor/boxicons/css/boxicons.min.css';
@import '../../../../public/assets/vendor/quill/quill.snow.css';
@import '../../../../public/assets/vendor/quill/quill.bubble.css';
@import '../../../../public/assets/vendor/remixicon/remixicon.css';
@import '../../../../public/assets/vendor/simple-datatables/style.css';
@import '../../../../public/assets/css/style.css';
</style>