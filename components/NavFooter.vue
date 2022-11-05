<template>
    <div style="background-color: #253984">
        <div class="flex flex-column items-start text-xs">
            <div class="flex flex-row items-start pt-2">
                <div class="w-22 h-22">
                    <nuxt-link to="/">  
                        <img :src="logo" />
                    </nuxt-link>
                </div>
                <div>
                    <div class="flex flex-column items-start pl-20">
                        <h1>Courses</h1>
                        <nuxt-link to="/courses/german"><p>German course</p></nuxt-link>
                        <nuxt-link to="/courses/english"><p>English course</p></nuxt-link>
                        <nuxt-link to="/courses/italian"><p>Italian course</p></nuxt-link>
                    </div>
                </div>
                <div>
                    <div class="flex flex-column items-start pl-20">
                        <h1>Exams</h1>
                        <nuxt-link to="/exams/oif"><p>OIF</p></nuxt-link>
                        <nuxt-link to="/exams/osd"><p>OSD</p></nuxt-link>
                    </div>
                </div>
                <div class="flex pl-20">
                    <h1>About us</h1>
                </div>
                <div class="flex flex-column items-start pl-20" id="last-column">
                    <h1>Address</h1>
                    <p>Rennweg 9/6, 1030 Wien</p>
                    <p>Öffnungszeiten</p>
                    <p>Montag – Donnerstag: 09:00–17:00 Freitag 9:00-15:00</p>
                    <p>Samstag & Sonntag: geschlossen</p>
                </div>
            </div>
            <div class="flex flex-row items-start border-y-1 pt-3">
                <p>
                  Aus Gründen der besseren Lesbarkeit wird auf die gleichzeitige Verwendung der Sprachformen männlich, weiblich und divers (m/w/d) verzichtet. Sämtliche Personenbezeichnungen gelten gleichermaßen für alle Geschlechter.
                </p>
                <div id="last-column" class="flex flex-row ml-1.5 space-x-1.5">
                    <a href="https://www.facebook.com" target="_blank">
                        <img :src="facebookLogo" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img :src="instagramLogo" />
                    </a>
                </div>
            </div>
            <div class="flex flex-row items-start pb-1 pt-3">
                <p>© 2022 EduStream GmbH  |  AGB  |  Impressum  |  Datenschutz</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

    #last-column{
        margin-left:auto;
    }

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