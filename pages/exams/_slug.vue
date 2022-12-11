<template>
    <div class="flex flex-column">
      
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'relative flex h-fit']">   
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-content mobile-welcome-content-background w-full pl-3' : 'welcome-content', 'absolute flex flex-column']">       
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-text-responsive ml-5 font-bold' : 'welcome-text font-extrabold', 'h-fit text-white flex-wrap']" v-html="examPages.data[0].attributes.WelcomeText"></div>
            <button type="button" :class="[this.$store.getters['getIsMobile'] ? 'mobile-button mobile-welcome-button-margin' : '', 'btn rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1);" @click="$bvModal.show('modal-1')" >
              <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-white']" v-html="$t('exams.oif.register')"></div>
            </button>
          </div>
          <nuxt-picture
          :class="this.$store.getters['getIsMobile'] ? 'mobile-welcome-image' : 'w-full h-3/4'"
          :src="this.$store.getters['getIsMobile'] ? examPages.data[0].attributes.MobileWelcomeImage.data.attributes.formats.small.url : examPages.data[0].attributes.WelcomeImage.data.attributes.formats.large.url"
          format="webp"
    :alt=examPages.data[0].attributes.WelcomeImage.data.attributes.alternativeText
    :imgAttrs="{style:'width: 100vw; height: auto'}"
    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
  />
          </div>
      
          
     
      <div class="flex flex-column w-full bg-white py-10">
        
  
        <div :class="[this.$store.getters['getIsMobile'] ? 'w-full mobile-text-xl-responsive' : 'w-5/12 text-3xl', 'py-5 font-bold']"><h1>{{examPages.data[0].attributes.ExamListTitle}}</h1></div>
          
        <div :class="[this.$store.getters['getIsMobile'] ? 'flex flex-column mobile-label-text-responsive' : 'flex flex-row flex-wrap', 'items-start']">
          <div v-for="oifExam in examPages.data[0].attributes.Exams" v-bind:key="oifExam.Title">
            <div :class="[$store.getters['getIsMobile'] ? ' w-full mb-5' : 'h-fit w-fit mr-3 mb-5', 'bg-slate-100 rounded flex flex-column ']" >
            <div :class="[$store.getters['getIsMobile'] ? 'mx-auto mobile-text-xlabel-responsive mt-2' : 'flex flex-row', 'px-4 font-bold pb-3 pt-3']"><h2>{{oifExam.Title}}</h2></div>
            <div v-for="timeSlot in oifExam.Dates" v-bind:key="timeSlot.Date + ',' + timeSlot.Time">
            <div :class="[$store.getters['getIsMobile'] ? 'mt-4' : 'justify-start', 'flex flex-row items-center  w-full']" >
              <input :class="[$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" checked :id="timeSlot.Date + ',' + timeSlot.Time.slice(0, 5)" :name="oifExam.Title" :value="timeSlot.Date.slice(0, 10)">
              <label :class="[$store.getters['getIsMobile'] ? 'hidden' : '']" style="margin-left:1vw" :for="timeSlot.Date + ',' + timeSlot.Time.slice(0, 5)">{{$t('months.' + timeSlot.Date.slice(5,7)) + ' ' + timeSlot.Date.slice(8) + ' ' + timeSlot.Date.slice(0, 4) + '; ' + timeSlot.Time.slice(0, 5)}}</label>
              <label :class="[$store.getters['getIsMobile'] ? 'mx-center' : 'hidden']" style="margin-left:6vw" :for="timeSlot.Date + ',' + timeSlot.Time.slice(0, 5)">{{$t('months.' + timeSlot.Date.slice(5,7)) + ' ' + timeSlot.Date.slice(8) + ' ' + timeSlot.Date.slice(0, 4) + '; ' + timeSlot.Time.slice(0, 5)}}</label>
              
              <br>
            </div>
            </div>
            <p :class="[$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive mx-auto font-semibold mt-4' : '', 'px-4 font-bold py-1']">{{oifExam.Price}}</p>
            <button 
            class="px-4 pt-3 pb-3"
            v-b-modal="'modal-oif'" @click="insertDynamicLink(oifExam.PaymentLink)">
              <div :class="[$store.getters['getIsMobile'] ? 'mobile-buy-exam-button mx-auto' : 'rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1)">
                <div :class="[$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive mx-auto py-2 text-center' : 'px-5 py-1', 'text-white' ]"  v-html="$t('exams.oif.register')"></div>
              </div>
            </button>
          </div>
              
          </div>  
  
  
  
  
  
  
  
                   
        </div>
      </div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'flex']" style="background-color:rgba(248, 248, 248, 1); padding-top:5vh;">
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-global-margins' : 'global-margins', 'flex flex-column']">
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'pb-3']" v-html="examPages.data[0].attributes.ExamDescription"></div>
          <FAQAccordion :FAQContent="examPages.data[0].attributes.FAQ" :class="[this.$store.getters['getIsMobile'] ? 'pb-5' : '']" />
          <!-- <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>
          <p v-b-toggle="'collapse-2'"> also open</p>        
          <b-collapse class="container bg-slate-800" id="collapse-2">
            <p>wow</p>
          </b-collapse>
        <div class="h-fit flex relative flex-column">
          <div class="h-fit bg-slate-100"></div>
            <img class="h-1/12 w-1/12 hidden" :src="overlappingStudent" /> 
          <div class=" h-fitbg-blue-400">
            <img class="h-4/12 w-4/12 hidden" :src="overlappingStudent" /> 
            <img class="absolute left-2/4 top-0 h-4/12 w-4/12 z-40" :src="overlappingStudent" />               
          </div>
          
        </div>-->
        </div>
      </div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'ignore-global-margins', 'h-fit relative overflow-hidden']" >
        <nuxt-link class="z-40 absolute pb-3" style="font-size: calc(12px + 2.090625vw); margin-top:30vh; margin-left:21.75vw;" :to="localePath('/exams/osd')">
          <button class="z-40 btn  rounded-lg h-fit w-fit" style=" background-color:rgba(255, 124, 51, 1)"  >
            <div class="text-white my-auto" style="font-size: calc(2px + 0.70625vw); padding-top:0.25vw; padding-right: 1.6vw; padding-left: 1.6vw" v-html="$t('exams.oif.register')"></div>
          </button>
        </nuxt-link>
        <nuxt-img
          class="w-full relative"
          src="/overlapping_student_group.png"
          format="webp"
    alt="A happy student of our language school!"
    sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
  />
        <!--<img class="w-full relative" src="/overlapping_student_group.png" /> -->
        
      </div>
      
      <div>
        <ModalForm index="modal-1" />
        <ModalFormOIF index="modal-oif" :paymentLink="dynamicLink" />
      
        
      </div>
  
    </div>
      
  </template>
  
  <style scoped>
    b-modal footer{
      visibility: hidden;
    }
    input[type="radio"] {
    margin-left: 1vw;
    margin-right: 0.7vw;
    margin-top: -5px;
    vertical-align: middle;
  }
  .mobile-radio{
    border: 0px;
    width: 5%;
    height: 4vh;
  }
  .mobile-label-text-responsive{
    font-size: calc(6px + 4.20625vw);
  }
  .mobile-text-xlabel-responsive{
    font-size: calc(6px + 4.90625vw);
  }
    .bg-slate-100{
      background-color: rgba(246, 246, 246, 1);
    }
    .bg-slate-200{
      background-color: rgba(244, 244, 244, 1);
    }
    .radio-padding{
      margin-left:7vw;
      margin-right:7vw;
    }
    .mobile-welcome-text-responsive{
      font-size: calc(3px + 2.60625vw);
    }
    .mobile-welcome-image{
      height:24vh;
      width:auto;
    }
    
    .mobile-buy-exam-button{
      
    border-radius: 63px;
    width:80vw;
    }
    .welcome-content{
      width:35%; margin-left:21%; margin-top:23%
  }
  </style>
  <script>
  /*
  import oifWelcome from "/oif_welcome.png"
  import oeifLogo from "/oeif-logo.png"
  import overlappingStudentGroup from "/overlapping_student_group.png"
  */
  import { examPageQuery } from '~/graphql/queries';
  import FAQAccordion from '/components/FAQAccordion.vue'
  
  export default {
    head() {
          return {
      title: this.$t('meta.exams.oif.title'),
      
      htmlAttrs: {
        lang: this.$i18n.locale
      },
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: this.$t('meta.exams.oif.description')
            }
          ],
          };
        },
    data: function () {
      return {
        /*
        oifWelcome: oifWelcome,
        oeifLogo: oeifLogo,
        overlappingStudentGroup: overlappingStudentGroup,
        */
        FAQAccordion: FAQAccordion,
        showModal: false,
        isNameWrong: false,
        isPhoneWrong: false,
        isEmailWrong: false,
        isTimesWrong: false,
        response_name: "",
        response_email: null,
        response_phone: null,
        dynamicLink: null,
        checkedTimes:[],
        examPages: null
        
      }
    },
    methods:{
      insertDynamicLink(paymentLink) {
        this.dynamicLink = paymentLink
      }
    },
    apollo:{
      
      examPages:{
        prefetch: true,
        variables() {
          return {locale: this.$i18n.locale, title: this.$route.params.slug}
        },
        query: examPageQuery
      }
    },
    }
  </script>