<template>
  
  <div class="flex flex-column">
    
    <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'relative flex h-fit']">   
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-content mobile-welcome-content-background w-full pl-3' : 'welcome-content', 'absolute flex flex-column']">       
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-text-responsive ml-5 font-bold' : 'welcome-text font-extrabold', 'h-fit text-white']" v-html="$t('exams.osd.image-text')"></div>
          <button type="button" :class="[this.$store.getters['getIsMobile'] ? 'mobile-button mobile-welcome-button-margin' : '', 'btn rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1);" @click="$bvModal.show('modal-1')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-white']" v-html="$t('exams.osd.register')"></div>
          </button>
        </div>
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-image' : 'w-full h-3/4']" 
        :src="this.$store.getters['getIsMobile'] ? '/osd_welcome.png' : '/osd_welcome.png'"
        format="webp"
  alt="Welcome to OSD exam!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
    </div>
    
   
    <div class="flex flex-column w-full bg-white py-10">
      <div :class="[this.$store.getters['getIsMobile'] ? 'w-full mobile-text-xl-responsive' : 'w-5/12 text-3xl', 'py-5 font-bold']" v-html="$t('exams.osd.subtitle')"></div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'flex flex-column mobile-label-text-responsive' : 'flex flex-row', 'items-start']">
        <div :class="[this.$store.getters['getIsMobile'] ? ' w-full mb-5' : 'h-fit w-fit', 'bg-slate-100 rounded flex flex-column']" >
          <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-text-xlabel-responsive mt-2' : 'flex flex-row', 'px-4 font-bold pb-3 pt-3']" v-html="$t('exams.osd.exam-1')"></div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mt-4' : '', 'flex flex-row items-around w-full']" >
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="13/12/2022" name="A2_time" value="13/12/2022">
            <label :class="[this.$store.getters['getIsMobile'] ? 'hidden' : '']" for="13/12/2022">13.12.2022; 13:00</label>
            <label :class="[this.$store.getters['getIsMobile'] ? 'radio-padding' : 'hidden']" for="13/12/2022">December 13 2022</label>
            <label :class="[this.$store.getters['getIsMobile'] ? '' : 'hidden']" for="13/12/2022">13:00</label>
            <br>
          </div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mt-4' : '', 'flex flex-row items-around w-full']" >
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="14/12/2022" name="A2_time" value="14/12/2022">
            <label :class="[this.$store.getters['getIsMobile'] ? 'hidden' : '']" for="14/12/2022">14.12.2022; 13:00</label>
            <label :class="[this.$store.getters['getIsMobile'] ? 'radio-padding' : 'hidden']" for="14/12/2022">December 14 2022</label>
            <label :class="[this.$store.getters['getIsMobile'] ? '' : 'hidden']" for="13/12/2022">14:00</label>
            <br>
          </div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mt-4 ' : '', 'flex flex-row items-around w-full']" >
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="15/12/2022" name="A2_time" value="15/12/2022">
            <label :class="[this.$store.getters['getIsMobile'] ? 'hidden' : '']" for="15/12/2022">15.12.2022; 13:00</label>
            <label :class="[this.$store.getters['getIsMobile'] ? 'radio-padding' : 'hidden']" for="15/12/2022">December 15 2022</label>
            <label :class="[this.$store.getters['getIsMobile'] ? '' : 'hidden']" for="15/12/2022">13:00</label>
            <br>
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive mx-auto font-semibold mt-4' : '', 'px-4 font-bold py-1']">160€</p>
          <button 
          class="px-4 pt-3 pb-3"
          @click="$bvModal.show('modal-osd')">
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-buy-exam-button mx-auto' : 'rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1)">
              <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive mx-auto py-2 text-center' : 'px-5 py-1', 'text-white' ]"  v-html="$t('exams.oif.register')"></div>
            </div>
          </button>
        </div>
        <div class="px-5 bg-white"></div>
        <div :class="[this.$store.getters['getIsMobile'] ? ' w-full mb-5' : 'h-fit w-fit', 'bg-slate-100 rounded flex flex-column']">
          <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-text-xlabel-responsive mt-2' : 'flex flex-row', 'px-4 font-bold pb-3 pt-3']" v-html="$t('exams.osd.exam-2')"></div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mt-4' : '', 'flex flex-row items-around w-full']" >
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="21/11/2022" name="B1_time" value="21/11/2022">
            <label :class="[this.$store.getters['getIsMobile'] ? 'hidden' : '']" for="21/11/2022">21.11.2022; 13:00</label>
            <label :class="[this.$store.getters['getIsMobile'] ? 'radio-padding' : 'hidden']" for="21/11/2022">November 21 2022</label>
            <label :class="[this.$store.getters['getIsMobile'] ? '' : 'hidden']" for="21/11/2022">13:00</label>
            <br>
          </div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mt-4' : '', 'flex flex-row items-around w-full']" >
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="05/12/2022" name="B1_time" value="05/12/2022">
            <label :class="[this.$store.getters['getIsMobile'] ? 'hidden' : '']" for="05/12/2022">05.12.2022; 13:00</label>
            <label :class="[this.$store.getters['getIsMobile'] ? 'radio-padding' : 'hidden']" for="05/12/2022">December 5 2022</label>
            <label :class="[this.$store.getters['getIsMobile'] ? '' : 'hidden']" for="05/12/2022">13:00</label>
            <br>
          </div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mt-4' : '', 'flex flex-row items-around w-full']" >
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="06/12/2022" name="B1_time" value="06/12/2022">
            <label :class="[this.$store.getters['getIsMobile'] ? 'hidden' : '']" for="05/12/2022">06.12.2022; 13:00</label>
            <label :class="[this.$store.getters['getIsMobile'] ? 'radio-padding' : 'hidden']" for="06/12/2022">December 5 2022</label>
            <label :class="[this.$store.getters['getIsMobile'] ? '' : 'hidden']" for="05/12/2022">13:00</label>
            <br>
          </div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mt-4' : '', 'flex flex-row items-around w-full']" >
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="07/12/2022" name="B1_time" value="07/12/2022">
            <label :class="[this.$store.getters['getIsMobile'] ? 'hidden' : '']" for="07/12/2022">07.12.2022; 13:00</label>
            <label :class="[this.$store.getters['getIsMobile'] ? 'radio-padding' : 'hidden']" for="07/12/2022">December 7 2022</label>
            <label :class="[this.$store.getters['getIsMobile'] ? '' : 'hidden']" for="07/12/2022">13:00</label>
            <br>
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive mx-auto font-semibold mt-4' : '', 'px-4 font-bold py-1']">160€</p>
          <button 
          class="px-4 pt-3 pb-3"
          @click="$bvModal.show('modal-osd')">
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-buy-exam-button mx-auto' : 'rounded-2xl h-fit w-fit']" class="rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)">
              <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive mx-auto py-2 text-center' : 'px-5 py-1', 'text-white' ]"  v-html="$t('exams.oif.register')"></div>
            </div>
          </button>
        </div>      
      </div>
    </div>
    <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'flex']" style="background-color:rgba(248, 248, 248, 1); padding-top:5vh;">
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-global-margins' : 'global-margins', 'flex flex-column']">
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'pb-3']" v-html="$t('exams.osd.FAQ-preview')"></div>
        <FAQAccordion2 />
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
    <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'ignore-global-margins', 'h-fit relative ']" >
      <nuxt-link class="w-full pb-3" style="font-size: calc(12px + 2.090625vw);" :to="localePath('/exams/oif')">
        <button class="z-40 btn absolute rounded-lg h-fit w-fit" style="margin-top:30vh; margin-left:21.75vw; background-color:rgba(255, 124, 51, 1)"  >
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
      
    </div>
    
  
    <div>
      <ModalForm index="modal-1" />
      <ModalFormOSD index="modal-osd" />
      
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
  font-size: calc(6px + 3.40625vw);
}
  .bg-slate-100{
    background-color: rgba(246, 246, 246, 1);
  }
  .bg-slate-200{
    background-color: rgba(244, 244, 244, 1);
  }
  .mobile-welcome-text-responsive{
    font-size: calc(4px + 3.30625vw);
  }
  .mobile-welcome-image{
    height:22.75vh;
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
import osdWelcome from "/osd_welcome.png"
import oeifLogo from "/oeif-logo.png"
import overlappingStudentGroup from "/overlapping_student_group.png"
*/
import FAQAccordion2 from '/components/FAQAccordion2.vue'

export default {
  head() {
        return {
    title: this.$t('meta.exams.osd.title'),
    
    htmlAttrs: {
      lang: this.$i18n.locale
    },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('meta.exams.osd.description')
          }
        ],
        };
      },
  data: function () {
    return {
      /*
      osdWelcome: osdWelcome,
      oeifLogo: oeifLogo,
      overlappingStudentGroup: overlappingStudentGroup,
      */
      FAQAccordion2: FAQAccordion2,
      showModal: false,
      isNameWrong: false,
      isPhoneWrong: false,
      isEmailWrong: false,
      isTimesWrong: false,
      response_name: "",
      response_email: null,
      response_phone: null,
      checkedTimes:[],
      
    }
  },
  methods:{
    checkEmail(){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.response_email))
      {
        this.isEmailWrong = false;
      } else{
        this.isEmailWrong = true;
      } 
    },
    checkPhone(){
      if (/^\+?\d*$/.test(this.response_phone)) 
      {
        this.isPhoneWrong = false;
      } else{
        this.isPhoneWrong = true;
      } 
    },
    checkName(){
      if (this.response_name == "") 
      {
        this.isNameWrong = true;
      } else{
        this.isNameWrong = false;
      } 
    },
    checkTimes(){
      if (this.checkedTimes.length == 0) 
      {
        this.isTimesWrong = true;
      } else{
        this.isTimesWrong = false;
      } 
    },
    checkAll(){
      this.checkEmail();
      this.checkName();
      this.checkTimes();
      this.checkPhone();
      if (!this.isNameWrong && !this.isEmailWrong && !this.isPhoneWrong && !this.isTimesWrong){
      let routeData = this.$router.resolve({name: 'https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl', /*query: {data: "someData"}*/});
        window.open('https://checkout.stripe.com', '_blank');
      }
      
    }
  }
  }
</script>

<!--<template>
  <div class="m-20">
    <div
      v-for="(character, index) in harryPotterCharacters"
      :key="character.characterName"
    >
      <p class="bg-gray-800 text-white p-6 cursor-pointer" @click="characterItemClick(index)">
        {{ character.characterName }}
      </p>
      <div :data-character-id="index" class="bg-gray-100 p-6 hidden">
        <p>{{ character.characterShortBio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      harryPotterCharacters: [
        {
          characterName: 'Harry Potter',
          characterShortBio: 'Harry James Potter (b. 31 July 1980) was an English half-blood wizard, one of the most ' +
            'famous wizards of modern times. He was the only child and son of James and Lily Potter (née Evans), ' +
            'both members of the original Order of the Phoenix. Harry\'s birth was overshadowed by a prophecy, ' +
            'naming either himself or Neville Longbottom as the one with the power to vanquish Lord Voldemort. ' +
            'After half of the prophecy was reported to Voldemort courtesy of Severus Snape, Harry was chosen as the ' +
            'target due to his many similarities with the Dark Lord. This caused the Potter family to go into hiding. ' +
            'Voldemort made his first vain attempt to circumvent the prophecy when Harry was a year and three months old. ' +
            'During this attempt, he murdered Harry\'s parents as they tried to protect him, but this unsuccessful ' +
            'attempt to kill Harry led to Voldemort\'s first downfall. This downfall marked the end of the First ' +
            'Wizarding War, and to Harry henceforth being known as the "Boy Who Lived."'
        },
        {
          characterName: 'Hermione Granger',
          characterShortBio: 'Hermione Jean Granger (b. 19 September, 1979) was an English Muggle-born witch born to ' +
            'Mr and Mrs Granger. At the age of eleven, she learned about her magical nature and had been accepted into ' +
            'Hogwarts School of Witchcraft and Wizardry. Hermione began attending Hogwarts in 1991 and was Sorted into ' +
            'Gryffindor House. She possessed a brilliant academic mind and proved to be a gifted student in almost ' +
            'every subject that she studied.'
        },
        {
          characterName: 'Ron Weasley',
          characterShortBio: 'Ronald Bilius "Ron" Weasley (b. 1 March, 1980) was an English pure-blood wizard, the ' +
            'sixth and youngest son of Arthur and Molly Weasley (née Prewett). He was also the younger brother of ' +
            'Bill, Charlie, Percy, Fred, George, and the elder brother of Ginny. Ron and his brothers and sister ' +
            'lived at the Burrow, on the outskirts of Ottery St Catchpole.'
        }
      ]
    }
  },
  methods: {
    characterItemClick (characterIndex) {
      const characterInfoElement = document.querySelectorAll('[data-character-id="' + characterIndex + '"]')[0]
      if (characterInfoElement.classList.contains('block')) {
        characterInfoElement.classList.remove('block')
        characterInfoElement.classList.add('hidden')
      } else {
        characterInfoElement.classList.remove('hidden')
        characterInfoElement.classList.add('block')
      }
    }
  }
}
</script>
-->