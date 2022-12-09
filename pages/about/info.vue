<template>
    <div class="pt-5 pb-5 flex flex-column items-start">
      <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive' : 'text-3xl-responsive', 'font-bold']" style="padding-bottom:4%">{{$t('about_us.title')}}</h1>
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'text-base-responsive']" v-html="infoPage.data.attributes.InfoText"></div>
      

      <!--<div :v-if="coursescollections" v-for="course in coursescollections.data" v-bind:key="course.id">
        <p>{{course.attributes.CourseText}}</p>
      
      </div>-->
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

import { infoPageQuery } from '~/graphql/queries';
//import { coursesQuery } from '~/graphql/queries';

export default{
  data() {
    return{
      //coursescollections: [],
      infoPage: null,
    }
  },
  apollo:{
    /*coursescollections:{
      prefetch: true,
      query: coursesQuery
    },*/
    infoPage:{
      prefetch: true,
      variables() {
        return { locale: this.$i18n.locale }
      },
      query: infoPageQuery
    }
  },
  head() {
        return {
    title: this.$t('meta.about.info.title'),
    
    htmlAttrs: {
      lang: this.$i18n.locale
    },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('meta.about.info.description')
          }
        ],
        };
      },
}

</script>