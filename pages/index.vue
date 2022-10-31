<template>
  <div class="flex flex-column">
    <div class="relative h-fit">   
      <img class="w-full h-3/4" :src="frontpageWelcome" />
      <div class="absolute right-1/4 bottom-0 w-30 rounded-lg bg-white"><img class="w-6/12 py-2 mx-auto h-1/12" :src="oeifLogo" /></div>      
      <div class="flex flex-column absolute top-2/4 left-0 w-5/12">
        <div class="h-fit text-white pb-4 text-2xl font-bold" v-html="$t('exams.oif.image-text')"></div>
        <button type="button" class="btn bg-white-500 rounded-2xl h-fit w-fit" @click="$bvModal.show('modal-1')" >
          <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
        </button>
      </div>
    </div>
    <div class="flex flex-row items-center h-3/4">
      <div class="flex flex-column py-10 pr-5 items-center text-xs text-white" style="background-color:#FF7C33;">
        <p>Learn with qualified and experienced native speakers who have 20 years of experience and speaks in 5 languages</p>
      </div>
      <div class="flex flex-column py-10 pr-5 items-center text-xs text-white" style="background-color:#96BDFF;">
        <p>Learn with qualified and experienced native speakers who have 20 years of experience and speaks in 5 languages</p>
      </div>
      <div class="flex flex-column py-10 pr-5 items-center text-xs text-white" style="background-color:#4385F5;">
        <p>Learn with qualified and experienced native speakers who have 20 years of experience and speaks in 5 languages</p>
      </div>
      <div class="flex flex-column py-10 pr-5 items-center text-xs text-white" style="background-color:#253984;">
        <p>Learn with qualified and experienced native speakers who have 20 years of experience and speaks in 5 languages</p>
      </div>

    </div>
    <div>
      <b-modal centered busy=true id="modal-1" :title="$t('modals.title')">
        <template #modal-header>
          <div class="mx-auto font-bold" v-html="$t('modals.title')"></div>
        </template>
        <template #modal-footer>
          <div class="mx-auto w-full">
            <div
            @click="checkAll">
              <div class="bg-blue-700 rounded-xl mx-auto flex flex-column items-center h-fit w-full">
                <div class="mx-auto text-white py-2" v-html="$t('modals.send')"></div>
              </div>
            </div>
          </div>
        </template> 
        <div class="flex flex-column items-start">
          <div class="pt-4 font-bold" v-html="$t('modals.name_title')"></div>
          <input @focusout="checkName" class="bg-slate-200 w-full rounded-sm py-1" type="text" v-model="response_name" :placeholder="$t('modals.name')" required>
          <div class="pt-4 font-bold text-red-600 text-xs" v-if="isNameWrong" v-html="$t('modals.required')"></div>
          <div class="pt-4 font-bold" v-html="$t('modals.email_title')"></div>
          <input @focusout="checkEmail" type="email" class="bg-slate-200 w-full rounded-sm py-1" v-model="response_email" :placeholder="$t('modals.email')" required>
          <div class="pt-4 font-bold text-red-600 text-xs" v-if="isEmailWrong" v-html="$t('modals.required')"></div>
          <div class="pt-4 font-bold" v-html="$t('modals.phone_title')"></div>
          <input @focusout="checkPhone" type="tel" class="bg-slate-200 w-full rounded-sm py-1" v-model="response_phone" :placeholder="$t('modals.phone')" required>
          <div class="pt-4 font-bold text-red-600 text-xs" v-if="isPhoneWrong" v-html="$t('modals.required')"></div>
          <div class="pt-4 flex flex-row">
              <input @animationend="checkTimes" type="checkbox" :value="$t('modals.mon_wed')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.mon_wed')"></div>
          </div>
          <div class="pt-2 flex flex-row">
            <input @animationend="checkTimes" type="checkbox" :value="$t('modals.tue_thu')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.tue_thu')"></div>
          </div>
          <div class="pt-2 flex flex-row">
            <input @animationend="checkTimes" type="checkbox" :value="$t('modals.any_day')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.any_day')"></div>
          </div>
          <div class="pt-4 font-bold text-red-600 text-xs" v-if="isTimesWrong" v-html="$t('modals.required')"></div>

        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>

import frontpageWelcome from "~/assets/frontpage_welcome.png"
export default {
  data: function () {
    return {
      frontpageWelcome: frontpageWelcome,
    }
  }

}
</script>

<style>
</style>