<template>
    <div class="flex flex-column pb-5">
        
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'relative flex h-fit']">   
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-content mobile-welcome-content-background w-full pl-3' : 'welcome-content', 'absolute flex flex-column']">       
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive ml-5 font-bold hidden' : 'welcome-text font-extrabold', 'h-fit text-white']" v-html=coursePages.data[0].attributes.Title></div>
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive ml-5 hidden' : 'welcome-subtext font-bold', 'mb-4 text-white']" v-html=coursePages.data[0].attributes.WelcomeText></div>
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive ml-5' : 'welcome-subtext font-bold hidden', 'mb-4 text-white']" v-html=coursePages.data[0].attributes.MobileWelcomeText></div>
            <button type="button" :class="[this.$store.getters['getIsMobile'] ? 'mobile-button mobile-welcome-button-margin' : '', 'btn rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1);" @click="$bvModal.show('modal-1')" >
              <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-white']" v-html="$t('exams.oif.register')"></div>
            </button>
          </div>
          <nuxt-picture
          :class="this.$store.getters['getIsMobile'] ? 'mobile-welcome-image' : 'w-full h-3/4'"
          :src="this.$store.getters['getIsMobile'] ? coursePages.data[0].attributes.MobileWelcomeImage.data.attributes.formats.small.url : coursePages.data[0].attributes.WelcomeImage.data.attributes.formats.large.url"
          format="webp"
    :alt=coursePages.data[0].attributes.WelcomeImage.data.attributes.alternativeText
    :imgAttrs="this.$store.getters['getIsMobile'] ? {style:'width: 100vw; height: 40vh'} : {style:'width: 100vw; height: auto'}"
    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
  />
      </div>
      <div v-for="course in coursePages.data[0].attributes.Courses" v-bind:key="course.Title">
        
        <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
          <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
            <div class="flex flex-row items-center">          
              <h1 :class="[$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{course.Title}}</h1>
              <!--<div class="offline-tag" v-if="$t('courses.english.cards.1.is_offline')=='true'">Offline</div>
              <div class="online-tag" v-if="$t('courses.english.cards.1.is_online')=='true'">Online</div>-->
            </div>
            <ul :class="[$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
              <div  v-for="feature in course.Features" v-bind:key="feature.Feature">
                <li :class="[$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="feature.Feature"></li>
              </div>
            </ul>
          </div>
          <div  :class="[$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
            <p :class="[$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">{{course.Period1}}</p>
            <div :class="[$store.getters['getIsMobile'] ? 'flex-column' : 'flex-row items-end', 'flex']">
              <p :class="[$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{course.Price1}}</p>
              <p :class="[$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{course.PriceComment1}}</p>
              
            </div>
            <p :class="[$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">{{course.Period2}}</p>
            <div :class="[$store.getters['getIsMobile'] ? 'flex-column' : 'flex-row items-end', 'flex']">
              <p :class="[$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{course.Price2}}</p>
              <p :class="[$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{course.PriceComment2}}</p>
  
            </div>
            <button :class="[$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
              <div :class="[$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
            </button>
          </div>
        </div>
      </div>  
        
        
        
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
      content: '??? ';
    }
    
    .welcome-content{
      margin-left:21%; margin-top:20%
  }
  </style>
  <script>
  
  //import englishCoursesWelcome from "/english_courses_welcome.png"
  import { coursePageQuery } from '~/graphql/queries';
  export default {
    head() {
          return {
      title: this.coursePages.data[0].attributes.MetaTitle,
      
      htmlAttrs: {
        lang: this.$i18n.locale
      },
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: this.coursePages.data[0].attributes.MetaDescription
            }
          ],
          };
        },
    data: function () {
      return {
        //englishCoursesWelcome: englishCoursesWelcome,
        showModal: false,
        isNameWrong: false,
        isPhoneWrong: false,
        isEmailWrong: false,
        isTimesWrong: false,
        checkedTimes:[],
        response_name: "",
        response_email: null,
        response_phone: null,
        coursePages: []
      
      }
    },
    apollo:{
      
      coursePages:{
        prefetch: true,
        variables() {
          return {locale: this.$i18n.locale, title: this.$route.params.slug}
        },
        query: coursePageQuery
      }
    },
    
    
    
  }
  </script>