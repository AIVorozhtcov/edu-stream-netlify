<template>
  <div class="flex flex-column pb-5">
    
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'relative flex h-fit']">   
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-content mobile-welcome-content-background w-full pl-3' : 'welcome-content', 'absolute flex flex-column']">       
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive ml-5 font-bold' : 'welcome-text font-extrabold', 'h-fit text-black']" v-html="$t('courses.german.image_title')"></div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-text-responsive ml-5' : 'welcome-subtext font-bold', 'mb-4 text-black']" v-html="$t('courses.german.image_subtitle')"></div>
          <button type="button" :class="[this.$store.getters['getIsMobile'] ? 'mobile-button mobile-welcome-button-margin' : '', 'btn rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1);" @click="$bvModal.show('modal-1')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-white']" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-image' : 'w-full h-3/4']"
        :src="this.$store.getters['getIsMobile'] ? '/german_courses_welcome.png' : '/german_courses_welcome.png'"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>         
    </div>      
    
        
      <b-tabs active-nav-item-class="active-course-tab" :small="false"  class="border-b-2 w-full pt-7 " fill content-class="mt-3">
        <div  v-for="germanCoursesCategory in germanCoursesCategories.data" v-bind:key="germanCoursesCategory.Name">
          <b-tab :title="germanCoursesCategory.attributes.Name" active :title-item-class="[$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-tabs']">
            <div v-for="germanCourse in germanCourses.data"  v-bind:key="germanCourse.Title">
              <div v-if="(germanCourse.attributes.german_courses_category.data.attributes.Name  === germanCoursesCategory.attributes.Name)">
      
              <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
                <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
                  <div class="flex flex-row items-center">          
                    <h1 :class="[$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{germanCourse.attributes.Title}}</h1>
                    <!--<div class="offline-tag" v-if="$t('courses.german.cards.1.is_offline')=='true'">Offline</div>
                    <div class="online-tag" v-if="$t('courses.german.cards.1.is_online')=='true'">Online</div>-->
                  </div>
                  <ul :class="[$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
                    <div v-for="feature in germanCourse.attributes.FeaturesList" v-bind:key="feature">
                      <li :class="[$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="feature"></li>
                    </div>
                  </ul>
                </div>
                <div  :class="[$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
                  <p :class="[$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">{{germanCourse.attributes.Period1}}</p>
                  <div :class="[$store.getters['getIsMobile'] ? 'flex-column' : 'flex-row items-end', 'flex']">
                    <p :class="[$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{germanCourse.attributes.Price1}}</p>
                    <p :class="[$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{germanCourse.attributes.PriceComment1}}</p>
                    
                  </div>
                  <p :class="[$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">{{germanCourse.attributes.Period2}}</p>
                  <div :class="[$store.getters['getIsMobile'] ? 'flex-column' : 'flex-row items-end', 'flex']">
                    <p :class="[$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{germanCourse.attributes.Price2}}</p>
                    <p :class="[$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{germanCourse.attributes.PriceComment2}}</p>

                  </div>
                  <button :class="[$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
                    <div :class="[$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
                  </button>
                </div>
              </div>
            </div>
            </div>  
          </b-tab>
        </div>
      </b-tabs>  
      

          
      <div>
      
      <ModalForm index="modal-1" />
      <ModalFormCourses index="modal-courses" />
    </div>
  </div>
</template>

<style scoped>
.bg-slate-200{
    background-color: rgba(244, 244, 244, 1);
  }
  .welcome-text{
    font-size: calc(6px + 2.450625vw);
  }
.welcome-subtext{
  font-size: calc(2px + 1.150625vw);
}
  
  .mobile-welcome-text-responsive{
    font-size: calc(3px + 2.60625vw);
  }
  
  ul {
    list-style: none;
  }

  ul li:before {
    content: '✓ ';
  }
  
  .welcome-content{
    margin-left:21%; margin-top:20%
}
  .nav-link.active.tab-active-class {
  background-color: red;
}

</style>
<script>

//import germanCoursesWelcome from "/german_courses_welcome.png"
import { germanCoursesQuery } from '~/graphql/queries';
import { germanCourseCategoriesQuery } from '~/graphql/queries';
export default {
  head() {
        return {
    title: this.$t('meta.courses.german.title'),
    
    htmlAttrs: {
      lang: this.$i18n.locale
    },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('meta.courses.german.description')
          }
        ],
        };
      },
  data: function () {
    return {
      //germanCoursesWelcome: germanCoursesWelcome,
      showModal: false,
      isNameWrong: false,
      isPhoneWrong: false,
      isEmailWrong: false,
      isTimesWrong: false,
      checkedTimes:[],
      response_name: "",
      response_email: null,
      response_phone: null,
      germanCourses: [],
      germanCoursesCategories: []
    
    }
  },
  apollo:{
    
    germanCourses:{
      prefetch: true,
      variables() {
        return { locale: this.$i18n.locale }
      },
      query: germanCoursesQuery
    },
    germanCoursesCategories:{
      prefetch: true,
      variables() {
        return { locale: this.$i18n.locale }
      },
      query: germanCourseCategoriesQuery
    }
  },
  methods: {
    filterGermanCoursesByCategory(courseCategory) {
      console.log(this.germanCourses.data[1].attributes.german_courses_category.data.attributes.Name === courseCategory)
    return this.germanCourses.data.filter(i => {i.attributes.german_courses_category.data.attributes.Name === courseCategory})
     
  }
}
}
</script>