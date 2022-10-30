<template>
    <div class="pt-5 pl-5 w-10-12 flex flex-column items-start">
      <h1 class="pd-60 text-3xl font-bold py-5">{{$t('about_us.title')}}</h1>
      <div class="text-base" v-html="$t('about_us.text')"></div>
  
    </div>
</template>

<style scope>
.text-block {
    white-space: pre-line;
}
</style>

<script>
</script>