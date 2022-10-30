<template>
  <div class="flex flex-column">
    <div class="relative h-fit">   
      <img class="w-full h-3/4" :src="oifWelcome" />
      <div class="absolute right-1/4 bottom-0 w-30 rounded-lg bg-white"><img class="w-6/12 py-2 mx-auto h-1/12" :src="oeifLogo" /></div>      
      <div class="flex flex-column absolute top-2/4 left-0 w-5/12">
        <div class="h-fit text-white pb-4 text-2xl font-bold" v-html="$t('exams.oif.image-text')"></div>  
        <button type="button" class="btn bg-orange-500 rounded-2xl h-fit w-fit" @click="showModal = true" >
          <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
        </button>
      </div>
    </div>
    <div class="flex flex-column w-full bg-white py-10">
      <div class="pl-5 w-5/12 text-3xl py-5 font-bold" v-html="$t('exams.oif.subtitle')"></div>
      <div class="pl-5 flex flex-row items-center">
        <div class="bg-slate-100 rounded h-fit w-fit flex flex-column">
          <div class="px-4 font-bold pb-3 pt-3" v-html="$t('exams.oif.exam-1')"></div>
          <p class="px-4 py-1">03.11.2022; 13:00</p>
          <p class="px-4 font-bold py-1">160€</p>
          <a 
          class="px-4 pt-3 pb-3"
          href="https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl"
          target="_blank">
            <div class="bg-orange-500 rounded-2xl h-fit w-fit">
              <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
            </div>
          </a>
        </div>
        <div class="px-5 bg-white"></div>
        <div class="bg-slate-100 rounded h-fit w-fit flex flex-column">
          <div class="px-4 font-bold pb-3 pt-3" v-html="$t('exams.oif.exam-2')"></div>
          <p class="px-4 py-1">21.11.2022; 13:00</p>
          <p class="px-4 font-bold py-1">160€</p>
          <a 
          class="px-4 pt-3 pb-3"
          href="https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl"
          target="_blank">
            <div class="bg-orange-500 rounded-2xl h-fit w-fit">
              <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
            </div>
          </a>
        </div>          
      </div>
    </div>
    <div class="flex flex-column bg-slate-100 pl-3 pt-5">
      <div class="pb-3" v-html="$t('exams.oif.FAQ-preview')"></div>
      <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>

        <!-- Element to collapse -->
        <b-collapse id="collapse-2">
          <p>I am collapsible content!</p>
        </b-collapse>
    </div>
    <div>
      <b-button v-b-modal.modal-1>Show Modal</b-button>
      <b-modal id="modal-1" title="Vue Js Bootstrap Modal Example">
        <p class="my-4">Content goes here...</p>
      </b-modal>
    </div>   
    

  </div>
    
</template>
<script>
import oifWelcome from "~/assets/oif_welcome.png"
import oeifLogo from "~/assets/oeif-logo.png"


export default {
  data: function () {
    return {
      oifWelcome: oifWelcome,
      oeifLogo: oeifLogo,
      showModal: false
    }
  }
}
</script>