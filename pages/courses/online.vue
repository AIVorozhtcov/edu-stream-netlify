<template>
    <div class="flex flex-column relative" style="">
      <div class="relative flex h-fit ignore-global-margins">   
        <div class="absolute flex flex-column" style=" margin-left:20%; margin-top:20%">         
          <div class="h-fit text-black mb-4 font-extrabold" style="font-size: calc(6px + 5.450625vw);"> COMING SOON</div>
          
        </div>
        <img class="w-full h-3/4" :src="italianCoursesWelcome">            
      </div>  
    </div>
</template>

<script>
import italianCoursesWelcome from "~/assets/italian_courses_welcome.png"

export default {
  data: function () {
    return {
      italianCoursesWelcome: italianCoursesWelcome,
    }
  }
}

</script>