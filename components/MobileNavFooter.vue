<template>
    <div style="background-color: #253984; padding-top:2vh; padding-bottom:5vh; height:fit-content">
        <div class="flex flex-column font-normal items-start justify-start text-sm mobile-global-margins">
            <div class="flex w-full flex-row items-center pt-2 justify-between text-xs-responsive">
                <div class="w-1/6">
                    <nuxt-link to="/">  
                        <nuxt-img
                        style="width:27vw; height:auto; max-width:100vw;"
                        src="/edu-stream_logo.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
                    </nuxt-link>
                </div>
                <div id="last-column" class="flex flex-row" >
                    <a href="https://www.facebook.com/edustream.vienna" style="margin-right:15%" target="_blank">
                        <nuxt-img
                        style="width: 12vw; height: auto;"
                        src="/facebook_logo.svg"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
                    </a>
                    <a href="https://www.instagram.com/edustream.at" target="_blank">
                        <nuxt-img
                        style="width: 12vw; height: auto;"
                        src="/instagram_logo.svg"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
                    </a>
                </div>
            </div>
            <div class="flex flex-row pt-10 pb-20 w-full justify-between items-start mobile-text-base-responsive">
                <div class="w-1/3">
                    <div class="flex flex-column items-start justify-around">
                        <h1 class="mobile-page-title-text pb-10 font-bold">{{$t('menu.courses.self')}}</h1>
                        <nuxt-link class="pt-7 hover:no-underline text-white" :to="localePath('/courses/german')">{{$t('menu.courses.de_short')}}</nuxt-link>
                        <div class="pt-7"  v-for="course in coursePages.data" v-bind:key="course.Title">
                          <nuxt-link class="hover:no-underline text-white" :to="localePath({ name: 'courses-slug', params: { slug: course.attributes.LinkName }})">{{course.attributes.Title}}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="w-1/3">
                    <div class="flex flex-column items-start justify-around">
                        <h1 class="mobile-page-title-text pb-10 font-bold">{{$t('menu.exams.self')}}</h1>
                        <div class="pt-7"  v-for="exam in examPages.data" v-bind:key="exam.Title">
                            <nuxt-link class="hover:no-underline text-white" :to="localePath({ name: 'exams-slug', params: { slug: exam.attributes.LinkName }})">{{exam.attributes.Title}}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="flex flex-column w-1/3 justify-around">
                    <h1 class="mobile-page-title-text pb-10 font-bold">{{$t('menu.about_us.self')}}</h1>
                    <nuxt-link class="pt-7 hover:no-underline text-white" :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
                    <nuxt-link class="pt-7 hover:no-underline text-white" :to="localePath('/about/contacts')">{{$t('menu.about_us.contacts')}}</nuxt-link>
                </div>
            </div>
                <div class="flex w-full flex-column h-fit justify-start items-start mobile-text-base-responsive" style="height:35vh; border-top: 1px solid #6A8ACA; padding-top:3vh">
                    <h1 class="font-bold" style="font-size: calc(6px + 3.90625vw);">Address</h1>
                    <p class="my-7">Rennweg 9/6, 1030 Wien</p>
                    <p class="mobile-address-margin">{{$t('footer.opening_hours')}}</p>
                    <p class="mobile-address-margin">{{$t('footer.mon_thu')}}</p>
                    <p class="mobile-address-margin">{{$t('footer.friday')}}</p>
                    <p class="mobile-address-margin" style="margin-bottom:3vh">{{$t('footer.sat_sun')}}</p>
                    <div class="flex flex-row" style="margin-bottom:2vh">
                        <nuxt-img
                        style="width: 5vw; height: auto"
                        src="/phone_icon.svg"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
                        <div class="text-white pl-1" v-html="$t('footer.phone_number')"></div>
                    </div>
                    <div class="flex flex-row" style="">
                        <nuxt-img
                        style="width: 5vw; height: auto"
                        src="/email_icon.svg"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
                        <div class="text-white pl-1" v-html="$t('footer.email_address')"></div>
                    </div>
                </div>
            <div class="font-normal flex w-full w-full items-center justify-between  py-7 mobile-mwd-text-responsive" style="border-bottom: 1px solid #6A8ACA; border-top: 1px solid #6A8ACA;">
                <p class="w-full leading-normal">
                    {{$t('footer.m/w/d')}}
                </p>                
            </div>
            <div class="font-normal flex w-full flex-row items-center justify-center pb-1 pt-3 mobile-bottom-links-text-responsive" style="border-top-width: 1px; height:3vh">
                
                <button type="button" class="" @click="$bvModal.show('modal-m-2')" >
                    <p class="mobile-bottom-links-text-responsive">AGB |</p>
                </button>
                <button type="button" class="" @click="$bvModal.show('modal-m-3')" >
                    <p class="mobile-bottom-links-text-responsive">Impressum |</p>
                </button>
                <button type="button" class="" @click="$bvModal.show('modal-m-4')" >
                    <p class="mobile-bottom-links-text-responsive">Datenschutz</p>
                </button>
            </div>
            <p class="font-normal text-white mx-auto mobile-bottom-links-text-responsive pt-5 cursor-default">© 2022 EduStream GmbH</p>
        </div>
        <p class="hidden">Made by Artem Vorozhtsov, aivorozhtcov@gmail.com</p>
        <b-modal centered :busy="true" id="modal-m-2" :hide-header='true' :hide-footer='true' style="width:90%;">
        
        <div class="flex flex-column" style="margin-left:7%; margin-right:7%">
            <div class="t390__wrapper t-align_center"> 
                <div class="text-center pb-3" style="font-size: calc(9px + 5.61625vw);"><strong>Allgemeine Geschäftsb<br />edingungen EDUStream GmbH</strong></div> 
                <div class="text-center mobile-text-base-responsive" style=""><strong>1.Geltungsbereich</strong><br><br>Die Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäfte, die sich auf Sprach, Fachkurse sowie Prüfungen beziehen, die zwischen der Firma EDUStream GmbH (nachfolgend: EDUStream GmbH) und dessen Kunden abgeschlossen werden.<br>Die Fassung der Allgemeinen Geschäftsbedingungen, die zum Zeitpunkt des Vertragsschlusses gültig war, ist maßgebend. Die Allgemeine Geschäftsbedingungen gelten auch für künftige Vereinbarungen, auch wenn in Ergänzungsverträge nicht ausdrücklich darauf hingewiesen wird. Abweichungen von diesen Allgemeinen Geschäftsbedingungen sind möglich, wenn dies in den entsprechenden Vertrag zwischen der EDUStream GmbH und dessen Kunden schriftlich vereinbart wurde.<br>Wenn die Kunden Minderjährige sind, dann müssen sie sich durch bevollmächtigte gesetzliche oder vertragliche Vertreter vertreten lassen. Der Vertreter haftet der EDUStream GmbH für finanzielle Verpflichtungen, die aus dem Vertrag folgen, sowie für mögliche Schäden.<br>Alle relevanten Beschreibungen, die für Personen gelten, gelten für Frauen und für Männer gleichermaßen.<br><br><br><strong>2.Kursteilnahmebedingungen&nbsp;</strong><br>Die Kurse sind für Kinder, Jugendliche und Erwachsene bestimmt. Falls es zusätzliche Bedingungen für die Teilnahme an Kursen gibt, werden diese in der Kurs- oder Veranstaltungsbeschreibung separat angegeben und müssen vom Kunden beachten werden.<br><strong>&nbsp;</strong><br>Die Anmeldung zu den Kursen der EDUStream GmbH erfolgt persönlich, telefonisch oder schriftlich.<br>Die persönliche Anmeldung erfolgt im Büro der Firma EDUStream GmbH unter der Adresse Rennweg 9, Büro 6, 1030 Wien, während der Öffnungszeiten der Sprachschule: Montag bis Donnerstag von 9.00 bis 17:00 Uhr, Freitag von 9.00 bis 15.00 Uhr. Die Kunden können sich auch unter der Telefonnummer + 43 1 890 89 48 oder schriftlich unter der E-Mail-Adresse:&nbsp;<a href="mailto:info@edu-stream.at">info@edu-stream.at</a>&nbsp;anmelden.<br>Um sich anzumelden, müssen Sie unserer Datenschutzerklärung zustimmen und unterschreiben sowie die Kursgebühr bezahlen. Die Bedingungen dieser AGB gelten als vom Kunden akzeptiert und bestätigt, sobald der Kunde die Zahlung auf die in den AGB angegebene Zahlungsart und zu den dort genannten Bedingungen getätigt und die Anmeldung unterschrieben hat. Die Reihenfolge des Zahlungseingangs bestimmt die Reihenfolge der Anmeldung für den Kurs.<br>Die Bestimmung des angemessenen Niveaus des Kurses (dies bezieht sich zunächst auf Sprachkurse) erfolgt auf der Grundlage eines Einstufungstests, der vor der Anmeldung zum Kurs durchgeführt wird.<br><strong>3</strong>.<strong>Kursgebühr&nbsp;</strong><br><br>Die Kosten des entsprechenden Kurses sind in der Beschreibung der Kurse auf der Website&nbsp;<a href="http://www.edu-stream.at/">www.edu-stream.at</a>&nbsp;angegeben, oder man kann sie vor Ort (EDUStream GmbH) anfragen.<br>Die Kosten des Kurses beinhalten nicht die Kosten der Lehrbücher, der Ausflüge und der Besichtigungen.<br>Der Kurs wird mit der erforderlichen Mindestteilnehmerzahl durchgeführt. EDUStream GmbH behält sich das Recht vor, im Falle eines Teilnehmermangels einen Kurs durchzuführen, wenn weniger Teilnehmer als nötig anwesend sind, wobei die Anzahl der Kurseinheiten verringert oder die Kosten des Kurses erhöht werden. Wenn Kunden damit nicht einverstanden sind, können sie den geplanten Kurs pausieren oder eine Rückerstattung der gezahlten Kursgebühr zurückverlangen.<br><br><br><strong>4.Angebote</strong><br>Die Angaben über die aktuellen Rabatte können Sie auf der Webseite&nbsp;<a href="http://www.edu-stream.at/">www.edu-stream.at</a>&nbsp;oder vor Ort (EDUStream GmbH, Rennweg 9/6 1030 Wien) nachfragen.<br><br><br><strong>5.Zahlungsbedingungen</strong><br><br>Die Zahlung des entsprechenden Kurses/ der Prüfung erfolgt bar Vorort oder bargeldlos per Onlineüberweisung ohne Abzüge und unter Angabe des entsprechenden Kurses in der Spalte «Zweckverwendung» sowie unter Angabe des Vor- und Nachnamens des Zahlers. Wenn der Kurs nicht vom Kursteilnehmer, sondern von einer anderen Person (Verwandten, anderen Personen) bezahlt wird, muss der Zahler im Feld «Zweckverwendung» den Vor- und Nachnamen des Kursteilnehmers angeben.<br><br>Die Zahlung für Kurse oder Prüfungen erfolgt auf das unten angegebene Firmenkonto:<br><br>Kontoinhaber: EDUStream GmbH<br>IBAN: AT112011183826858900<br>BIC: GIBAATWWXXX<br>Bankname: Erste Bank der österreichischen Sparkassen AG<br><br>Der entsprechende Betrag muss spätestens 7 (sieben) Tage nach Rechnungsausstellung auf das Konto von EDUStream GmbH eingehen; Erfolgt die Anmeldung kurz vor Kursbeginn, muss die Zahlung in jedem Fall vor Kursbeginn eingegangen sein. Erfolgt die Anmeldung zu einem Zeitpunkt, an dem der Kurs bereits begonnen hat, ist die Rechnung innerhalb von 24 Stunden zu begleichen.<br><br>Bei Nichtzahlung ist eine Teilnahme an dem Kurs nicht möglich.<br><br><br><strong>6.Allgemeine Informationen zu den Kursen, Rechten und Pflichten&nbsp;</strong><br><br>Die Dauer des Kurses ist in der Anzahl der Unterrichtseinheiten angegeben. Die Dauer einer Unterrichtseinheit (1 UE) beträgt 45 Min.<br>Die Anzahl der Kursteilnehmer beträgt 4 – 10 Personen.<br>EDUStream GmbH behält sich das Recht vor:<br>- Den Lehrplan der angebotenen Kurse eigenständig zu entwickeln;<br>- Den Kurs gemäß dem entwickelten Kursprogramm durchzuführen;<br>- Den geplanten Kursstart zu verschieben;<br>- Die Trainer im Laufe des Kurses bei Bedarf zu ersetzen;<br>- Die Teilnehmerzahl in den Kursen zu erweitern<br><br>EDUStream GmbH ist berechtigt und verpflichtet:<br>-Qualifiziertes Lehrpersonal mit einschlägiger Hochschulausbildung, hoher fachlicher Qualifikation und einschlägiger Berufserfahrung zu gewinnen;<br>-Den Lernprozess gemäß dem mit dem Kunden vereinbarten Lehrplan zu organisieren;<br><br><br><br><strong>7.Stornobedingungen</strong><br><strong>&nbsp;</strong><br><strong>Prüfung</strong><br><br>Ein Rücktritt von der Prüfung ist möglich, es besteht jedoch kein Anspruch auf Rückerstattung von bereits entrichteten Prüfungsgebühren. Es wird Ihnen der nächste Prüfungstermin der jeweiligen Prüfung angeboten.<br>Erfolgt der Rücktritt vor Prüfungsbeginn, gilt die Prüfung als nicht abgelegt. Wird die Prüfung nach Beginn abgebrochen, gilt die Prüfung als nicht bestanden.<br>Um im Falle eines Rücktritts von der Prüfung oder eines Abbruchs der Prüfung Krankheitsgründe geltend zu machen, muss beim zuständigen Prüfungszentrum unverzüglich ein ärztliches Attest vorgelegt werden. Liegt ein ärztliches Attest vor, haben Sie die Möglichkeit den nächsten Prüfungstermin in Anspruch zu nehmen.<br>Sollte der Prüfungstermin seitens des Prüfungszentrums bzw. seitens des ÖIF/ÖSD storniert werden, werden Sie automatisch für den nächsten Prüfungstermin angemeldet.<br><strong>Sprachkurs</strong><br>Der Kursteilnehmer (bei Minderjährigen vertreten durch den gesetzlichen Vertreter) meldet sich verbindlich zu dem bezeichneten Kurs an und verpflichtet sich zur Zahlung von Kursgebühren laut Rechnung. Die Kursteilnahme ist erst nach vollständiger Bezahlung der jeweilig fälligen Kursgebühr möglich.<br><br>Die Kosten für Lehrbücher werden nicht erstattet.<br><br><br><br><br><strong>8.Verbote</strong><br>In den Räumen des EDUStream GmbH besteht ein absolutes Rauchverbot.<br><br><br><br><strong>9.Schadensvergütung</strong><br><br><br>Der Zubehör, der Raum und die Ausrüstung sollen unter sorgfältigem Umgang und Verwendung unterliegen. Die Kunden müssen alle von ihnen verursachten Schäden erstatten.<br><br><br><br><strong>10.Verantwortungsausschluß</strong><br><br><br>Die EDUStream GmbH haftet nicht, insbesondere auch bei Diebstahl, für persönliche Gegenstände des Kunden oder für die zur Verfügung gestellten Schulungsunterlagen.<br>Der Lernprozess in den Kursen hat informativen Charakter. Der Lernerfolg des Kursteilnehmers und/oder ein positives Ergebnis bei den Prüfungen können nicht gewährleistet werden.<br><br><br><strong>11.Anwendbares Recht und Gerichtsstand</strong><br>Als anwendbares Recht gilt ausschließlich nur österreichisches Recht unter Ausschluss von Referenzstandards. Alle Streitigkeiten werden ausschließlich am zuständigen Gericht der Stadt Wien entschieden.<br>Aktualisiert, am 1.06.2022<br>EDUStream GmbH<br><br></div> 
            </div>
        </div>
      </b-modal>
      <b-modal centered :busy="true" id="modal-m-3" :hide-header='true' :hide-footer='true' style="width:90%;">
        
        <div class="flex flex-column" style="margin-left:7%; margin-right:7%">
            <div class="t390__wrapper t-align_center"> 
                <div class="text-center pb-3" style="font-size: calc(9px + 5.61625vw);">Impressum</div> 
                <div class="text-center mobile-text-base-responsive" style=""><strong>Herausgeberin dieser Webseite:</strong><br><br><strong>EDUStream Gmbh</strong><br>Sprachschule<br>FN 482870d, Handelsgericht Wien<br><br>Rennweg 9, Top 6<br>1030 Wien<br><br>Tel: +43 1 890-89-48<br>E-Mail:&nbsp;<a href="mailto:info@edu-stream.at">info@edu-stream.at</a><br><br><strong>Geschäftsführung:</strong><br>Oborin Irina<br><br>UID: ATU 73006034<br><br><br></div> 
            </div>
        </div>
      </b-modal>
      <b-modal centered :busy="true" id="modal-m-4" :hide-header='true' :hide-footer='true' style="width:90%;">
        
        <div class="flex flex-column" style="margin-left:7%; margin-right:7%">
            <div class="t390__wrapper t-align_center mobile-text-base-responsive"> 
                Неясно содержимое - на актуальном сайте ссылка идет вникуда
            </div>
        </div>
      </b-modal>
    </div>
    
</template>

<style scoped>
.mobile-page-title-text{
  font-size: calc(6px + 3.50625vw);
}
.text-xs-responsive{
  font-size: calc(1px + 0.70625vw);
}
.text-xs-header-responsive{
    font-size: calc(1px + 0.90625vw);
}
.text-2xs-responsive{
    font-size: calc(1px + 0.60625vw);
}

.mobile-mwd-text-responsive{
    font-size: calc(3px + 2.40625vw);
}
.mobile-bottom-links-text-responsive{
    font-size: calc(2.5px + 3.40625vw);
}
    
.mobile-address-margin{
    margin-top:1.5vh;
}
   

    p, h1{
        color:white;
    }

</style>

<script>

/*import logo from "/edu-stream_logo.png"
import facebookLogo from "/facebook_logo.svg"
import instagramLogo from "/instagram_logo.svg"
import phoneIcon from "/phone_icon.svg"
import emailIcon from "/email_icon.svg"*/

import { examsListQuery } from '~/graphql/queries';
import { coursesListQuery } from '~/graphql/queries';


export default {
  data: function () {
    return {
     /* logo: logo,
      facebookLogo:facebookLogo,
      instagramLogo: instagramLogo,
      phoneIcon: phoneIcon,
      emailIcon: emailIcon*/
      examPages:[],
      coursePages:[]
    }
  },
  apollo:{
    
    examPages:{
      prefetch: true,
      variables() {
        return { locale: this.$i18n.locale }
      },
      query: examsListQuery
    },
    coursePages:{
      prefetch: true,
      variables() {
        return { locale: this.$i18n.locale }
      },
      query: coursesListQuery
    },
  }
}



</script>