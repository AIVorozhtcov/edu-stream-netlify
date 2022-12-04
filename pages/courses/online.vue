<template>
    <div class="flex flex-column relative" style="">
      <div class="relative flex h-fit ignore-global-margins">   
        <div class="absolute flex flex-column" style=" margin-left:20%; margin-top:20%">         
          <div class="h-fit text-black mb-4 font-extrabold" style="font-size: calc(6px + 5.450625vw);"> COMING SOON</div>
          
        </div>
        <nuxt-img
        class="w-full h-3/4"
        src="/italian_courses_welcome.png"
        format="webp"
  alt="Welcome to italian courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>         
      </div>  
    </div>
</template>

<script>
//import italianCoursesWelcome from "/italian_courses_welcome.png"

export default {
  data: function () {
    return {
      //italianCoursesWelcome: italianCoursesWelcome,
    }
  }
}

</script>