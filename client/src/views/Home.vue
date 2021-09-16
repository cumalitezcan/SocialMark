<template>
<div>
<AppHeader />
        <div class="flex flex-row">
            <Sidebar />
        <app-bookmark-list />
        </div>
</div>
    
       
   

</template>
<script>
  import Sidebar from "@/components/Home/Sidebar";
  

export default {
    components:{
        Sidebar
    }
}
  
</script>