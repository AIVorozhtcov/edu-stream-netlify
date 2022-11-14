<template>
    <div class="pt-5 flex flex-column items-start">
      <h1 class="text-3xl-responsive font-bold" style="padding-bottom:4%">{{$t('about_us.title')}}</h1>
      <div class="text-base-responsive" v-html="$t('about_us.text')"></div>
  
    </div>
</template>

<style scope>
.text-block {
    white-space: pre-line;
}
.text-3xl-responsive{
  font-size: calc(4px + 2.10625vw);
}
</style>

<script>
</script>