<template>
  <div class="">
    <div
      v-for="FAQEntry in FAQContent"
      :key="FAQEntry.Question"
    >
        <div class="flex flex-row items-center justify-between cursor-pointer py-3 border-b-2"  style="border-bottom-color: rgba(67, 133, 245, 1);" @click="questionItemClick(FAQEntry.id)">
        
            <p :class="[rpthis.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '',]" >
                {{ FAQEntry.Question }}
            </p>
            <b-icon icon="plus" />

    </div>
      <div :data-question-id="FAQEntry.id" class="p-6 hidden"  style="background-color:rgba(248, 248, 248, 1);">
        <div :class="[rpthis.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'text-base-responsive', 'pt-3']" v-html="FAQEntry.Answer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  props: ['FAQContent'],

  data () {
    return {
      rpthis: this.$store,
      Questions: [
        {
          questionTitle: this.$t('FAQ_OIF.titles.t_1'),
          questionAnswer: this.$t('FAQ_OIF.answers.a_1')
        },
        {
          questionTitle: this.$t('FAQ_OIF.titles.t_2'),
          questionAnswer: this.$t('FAQ_OIF.answers.a_2')
        },
        {
          questionTitle: this.$t('FAQ_OIF.titles.t_3'),
          questionAnswer: this.$t('FAQ_OIF.answers.a_3')
        },
        {
          questionTitle: this.$t('FAQ_OIF.titles.t_4'),
          questionAnswer: this.$t('FAQ_OIF.answers.a_4')
        },
        {
          questionTitle: this.$t('FAQ_OIF.titles.t_5'),
          questionAnswer: this.$t('FAQ_OIF.answers.a_5')
        },
        {
          questionTitle: this.$t('FAQ_OIF.titles.t_6'),
          questionAnswer: this.$t('FAQ_OIF.answers.a_6')
        }
      ]
    }
  },
  methods: {
    questionItemClick (questionIndex) {
      const questionInfoElement = document.querySelectorAll('[data-question-id="' + questionIndex + '"]')[0]
      if (questionInfoElement.classList.contains('block')) {
        questionInfoElement.classList.remove('block')
        questionInfoElement.classList.add('hidden')
      } else {
        questionInfoElement.classList.remove('hidden')
        questionInfoElement.classList.add('block')
      }
    }
  }
}
</script>
