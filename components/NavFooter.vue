<template>
    <div style="background-color: #253984">
        <div class="flex flex-column items-start justify-between text-sm global-margins" style="">
            <div class="flex w-full flex-row items-start pt-2 justify-between">
                <div class="w-1/6">
                    <nuxt-link to="/">  
                        <img :src="logo" />
                    </nuxt-link>
                </div>
                <div class="w-1/6" style="margin-left:2%">
                    <div class="flex flex-column items-start">
                        <h1 class="text-base font-bold">{{$t('menu.courses.self')}}</h1>
                        <nuxt-link class="text-white" :to="localePath('/courses/german')">{{$t('menu.courses.de_short')}}</nuxt-link>
                        <nuxt-link class="text-white" :to="localePath('/courses/english')">{{$t('menu.courses.en_short')}}</nuxt-link>
                        <nuxt-link class="text-white" :to="localePath('/courses/italian')">{{$t('menu.courses.it_short')}}</nuxt-link>
                    </div>
                </div>
                <div class="w-1/6" style="margin-left:2%">
                    <div class="flex flex-column items-start">
                        <h1 class="text-base font-bold">{{$t('menu.exams.self')}}</h1>
                        <nuxt-link class="text-white" :to="localePath('/exams/oif')">OIF</nuxt-link>
                        <nuxt-link class="text-white" :to="localePath('/exams/osd')">OSD</nuxt-link>
                    </div>
                </div>
                <div class="flex flex-column w-1/6" style="margin-left:2%">
                    <h1 class="text-base font-bold">{{$t('menu.about_us.self')}}</h1>
                    <nuxt-link class="text-white" :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
                    <nuxt-link class="text-white" :to="localePath('/about/contacts')">{{$t('menu.about_us.contacts')}}</nuxt-link>
                </div>
                <div class="w-1/6"></div>
                <div class="flex flex-column items-start " >
                    <h1 class="font-bold">Address</h1>
                    <p>Rennweg 9/6, 1030 Wien</p>
                    <p>Öffnungszeiten</p>
                    <p>Montag – Donnerstag: 09:00–17:00 Freitag 9:00-15:00</p>
                    <p>Samstag & Sonntag: geschlossen</p>
                </div>
            </div>
            <div class="flex w-full flex-row items-start justify-between pt-3 text-xs" style="border-top-width: 1px;	border-bottom-width: 1px;">
                <p>
                  Aus Gründen der besseren Lesbarkeit wird auf die gleichzeitige Verwendung der Sprachformen männlich, weiblich und divers (m/w/d) verzichtet. Sämtliche Personenbezeichnungen gelten gleichermaßen für alle Geschlechter.
                </p>
                <div id="last-column" class="flex flex-row" >
                    <a href="https://www.facebook.com" style="margin-right:10%" target="_blank">
                        <img style="width: 4vw; height: auto" :src="facebookLogo" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img style="width: 4vw; height: auto" :src="instagramLogo" />
                    </a>
                </div>
            </div>
            <div class="flex w-full flex-row items-start pb-1 pt-3">
                <p>© 2022 EduStream GmbH  |  AGB  |  Impressum  |  Datenschutz</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

   

    p, h1{
        color:white;
    }

</style>

<script>

import logo from "~/assets/edu-stream_logo.png"
import facebookLogo from "~/assets/facebook_logo.svg"
import instagramLogo from "~/assets/instagram_logo.svg"


export default {
  data: function () {
    return {
      logo: logo,
      facebookLogo:facebookLogo,
      instagramLogo: instagramLogo
    }
  }
}



</script>