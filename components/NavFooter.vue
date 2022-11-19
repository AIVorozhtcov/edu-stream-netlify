<template>
    <div style="background-color: #253984; padding-top:5vh; padding-bottom:5vh">
        <div class="flex flex-column font-normal items-start justify-between text-sm global-margins">
            <div class="flex w-full flex-row items-start pt-2 justify-between text-xs-responsive">
                <div class="w-1/6">
                    <nuxt-link to="/">  
                        <img :src="logo" />
                    </nuxt-link>
                </div>
                <div class="w-1/12">
                    <div class="flex flex-column items-start">
                        <h1 class="text-xs-header-responsive font-bold">{{$t('menu.courses.self')}}</h1>
                        <nuxt-link class="hover:no-underline text-white" :to="localePath('/courses/german')">{{$t('menu.courses.de_short')}}</nuxt-link>
                        <nuxt-link class="hover:no-underline text-white" :to="localePath('/courses/english')">{{$t('menu.courses.en_short')}}</nuxt-link>
                        <nuxt-link class="hover:no-underline text-white" :to="localePath('/courses/italian')">{{$t('menu.courses.it_short')}}</nuxt-link>
                    </div>
                </div>
                <div class="w-1/12">
                    <div class="flex flex-column items-start">
                        <h1 class="text-xs-header-responsive font-bold">{{$t('menu.exams.self')}}</h1>
                        <nuxt-link class="hover:no-underline text-white" :to="localePath('/exams/oif')">OIF</nuxt-link>
                        <nuxt-link class="hover:no-underline text-white" :to="localePath('/exams/osd')">OSD</nuxt-link>
                    </div>
                </div>
                <div class="flex flex-column w-1/12">
                    <h1 class="text-xs-header-responsive font-bold">{{$t('menu.about_us.self')}}</h1>
                    <nuxt-link class="hover:no-underline text-white" :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
                    <nuxt-link class="hover:no-underline text-white" :to="localePath('/about/contacts')">{{$t('menu.about_us.contacts')}}</nuxt-link>
                </div>
                <div class="w-1/12"></div>
                <div class="flex w-3/12 flex-column items-start" >
                    <h1 class=" text-xs-header-responsive font-bold">Address</h1>
                    <p class="mb-1">Rennweg 9/6, 1030 Wien</p>
                    <p>{{$t('footer.opening_hours')}}</p>
                    <p>{{$t('footer.mon_thu')}}</p>
                    <p>{{$t('footer.friday')}}</p>
                    <p class="mb-2.5">{{$t('footer.sat_sun')}}</p>
                    <div class="mb-0.5 flex flex-row">
                        <img style="width: 1.2vw; height: auto" :src="phoneIcon" />
                        <div class="text-white pl-1" v-html="$t('footer.phone_number')"></div>
                    </div>
                    <div class="flex flex-row">
                        <img style="width: 1.2vw; height: auto" :src="emailIcon" />
                        <div class="text-white pl-1" v-html="$t('footer.email_address')"></div>
                    </div>
                </div>
            </div>
            <div class="flex w-full flex-row items-center justify-between mt-3 mb-1 pt-1 text-2xs-responsive" style="border-top-width: 1px;	border-bottom-width: 1px;">
                <p class="w-7/12 leading-4">
                    {{$t('footer.m/w/d')}}
                </p>
                <div id="last-column" class="flex flex-row" >
                    <a href="https://www.facebook.com/edustream.vienna" style="margin-right:15%" target="_blank">
                        <img style="width: 2vw; height: auto" :src="facebookLogo" />
                    </a>
                    <a href="https://www.instagram.com/edustream.at" target="_blank">
                        <img style="width: 2vw; height: auto" :src="instagramLogo" />
                    </a>
                </div>
            </div>
            <div class="flex w-full flex-row items-start justify-start pb-1 pt-3 text-2xs-responsive" style="border-top-width: 1px;">
                <p class=" text-white text-2xs-responsive cursor-default">© 2022 EduStream GmbH  |</p>
                <button type="button" class="" @click="$bvModal.show('modal-2')" >
                    <p class="text-2xs-responsive">     AGB |</p>
                </button>
                <button type="button" class="" @click="$bvModal.show('modal-3')" >
                    <p class="text-2xs-responsive">     Impressum |     </p>
                </button>
                <button type="button" class="" @click="$bvModal.show('modal-4')" >
                    <p class="text-2xs-responsive">     Datenschutz</p>
                </button>
            </div>
        </div>
        <b-modal centered :busy="true" id="modal-2" :hide-header='true' :hide-footer='true' style="width:30%;">
        
        <div class="flex flex-column" style="margin-left:7%; margin-right:7%">
            <div class="t390__wrapper t-align_center"> 
                <div class="text-center text-3xl pb-3" style=""><strong>Allgemeine Geschäftsbedingungen EDUStream GmbH</strong></div> 
                <div class="text-center" style=""><strong>1.Geltungsbereich</strong><br><br>Die Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäfte, die sich auf Sprach, Fachkurse sowie Prüfungen beziehen, die zwischen der Firma EDUStream GmbH (nachfolgend: EDUStream GmbH) und dessen Kunden abgeschlossen werden.<br>Die Fassung der Allgemeinen Geschäftsbedingungen, die zum Zeitpunkt des Vertragsschlusses gültig war, ist maßgebend. Die Allgemeine Geschäftsbedingungen gelten auch für künftige Vereinbarungen, auch wenn in Ergänzungsverträge nicht ausdrücklich darauf hingewiesen wird. Abweichungen von diesen Allgemeinen Geschäftsbedingungen sind möglich, wenn dies in den entsprechenden Vertrag zwischen der EDUStream GmbH und dessen Kunden schriftlich vereinbart wurde.<br>Wenn die Kunden Minderjährige sind, dann müssen sie sich durch bevollmächtigte gesetzliche oder vertragliche Vertreter vertreten lassen. Der Vertreter haftet der EDUStream GmbH für finanzielle Verpflichtungen, die aus dem Vertrag folgen, sowie für mögliche Schäden.<br>Alle relevanten Beschreibungen, die für Personen gelten, gelten für Frauen und für Männer gleichermaßen.<br><br><br><strong>2.Kursteilnahmebedingungen&nbsp;</strong><br>Die Kurse sind für Kinder, Jugendliche und Erwachsene bestimmt. Falls es zusätzliche Bedingungen für die Teilnahme an Kursen gibt, werden diese in der Kurs- oder Veranstaltungsbeschreibung separat angegeben und müssen vom Kunden beachten werden.<br><strong>&nbsp;</strong><br>Die Anmeldung zu den Kursen der EDUStream GmbH erfolgt persönlich, telefonisch oder schriftlich.<br>Die persönliche Anmeldung erfolgt im Büro der Firma EDUStream GmbH unter der Adresse Rennweg 9, Büro 6, 1030 Wien, während der Öffnungszeiten der Sprachschule: Montag bis Donnerstag von 9.00 bis 17:00 Uhr, Freitag von 9.00 bis 15.00 Uhr. Die Kunden können sich auch unter der Telefonnummer + 43 1 890 89 48 oder schriftlich unter der E-Mail-Adresse:&nbsp;<a href="mailto:info@edu-stream.at">info@edu-stream.at</a>&nbsp;anmelden.<br>Um sich anzumelden, müssen Sie unserer Datenschutzerklärung zustimmen und unterschreiben sowie die Kursgebühr bezahlen. Die Bedingungen dieser AGB gelten als vom Kunden akzeptiert und bestätigt, sobald der Kunde die Zahlung auf die in den AGB angegebene Zahlungsart und zu den dort genannten Bedingungen getätigt und die Anmeldung unterschrieben hat. Die Reihenfolge des Zahlungseingangs bestimmt die Reihenfolge der Anmeldung für den Kurs.<br>Die Bestimmung des angemessenen Niveaus des Kurses (dies bezieht sich zunächst auf Sprachkurse) erfolgt auf der Grundlage eines Einstufungstests, der vor der Anmeldung zum Kurs durchgeführt wird.<br><strong>3</strong>.<strong>Kursgebühr&nbsp;</strong><br><br>Die Kosten des entsprechenden Kurses sind in der Beschreibung der Kurse auf der Website&nbsp;<a href="http://www.edu-stream.at/">www.edu-stream.at</a>&nbsp;angegeben, oder man kann sie vor Ort (EDUStream GmbH) anfragen.<br>Die Kosten des Kurses beinhalten nicht die Kosten der Lehrbücher, der Ausflüge und der Besichtigungen.<br>Der Kurs wird mit der erforderlichen Mindestteilnehmerzahl durchgeführt. EDUStream GmbH behält sich das Recht vor, im Falle eines Teilnehmermangels einen Kurs durchzuführen, wenn weniger Teilnehmer als nötig anwesend sind, wobei die Anzahl der Kurseinheiten verringert oder die Kosten des Kurses erhöht werden. Wenn Kunden damit nicht einverstanden sind, können sie den geplanten Kurs pausieren oder eine Rückerstattung der gezahlten Kursgebühr zurückverlangen.<br><br><br><strong>4.Angebote</strong><br>Die Angaben über die aktuellen Rabatte können Sie auf der Webseite&nbsp;<a href="http://www.edu-stream.at/">www.edu-stream.at</a>&nbsp;oder vor Ort (EDUStream GmbH, Rennweg 9/6 1030 Wien) nachfragen.<br><br><br><strong>5.Zahlungsbedingungen</strong><br><br>Die Zahlung des entsprechenden Kurses/ der Prüfung erfolgt bar Vorort oder bargeldlos per Onlineüberweisung ohne Abzüge und unter Angabe des entsprechenden Kurses in der Spalte «Zweckverwendung» sowie unter Angabe des Vor- und Nachnamens des Zahlers. Wenn der Kurs nicht vom Kursteilnehmer, sondern von einer anderen Person (Verwandten, anderen Personen) bezahlt wird, muss der Zahler im Feld «Zweckverwendung» den Vor- und Nachnamen des Kursteilnehmers angeben.<br><br>Die Zahlung für Kurse oder Prüfungen erfolgt auf das unten angegebene Firmenkonto:<br><br>Kontoinhaber: EDUStream GmbH<br>IBAN: AT112011183826858900<br>BIC: GIBAATWWXXX<br>Bankname: Erste Bank der österreichischen Sparkassen AG<br><br>Der entsprechende Betrag muss spätestens 7 (sieben) Tage nach Rechnungsausstellung auf das Konto von EDUStream GmbH eingehen; Erfolgt die Anmeldung kurz vor Kursbeginn, muss die Zahlung in jedem Fall vor Kursbeginn eingegangen sein. Erfolgt die Anmeldung zu einem Zeitpunkt, an dem der Kurs bereits begonnen hat, ist die Rechnung innerhalb von 24 Stunden zu begleichen.<br><br>Bei Nichtzahlung ist eine Teilnahme an dem Kurs nicht möglich.<br><br><br><strong>6.Allgemeine Informationen zu den Kursen, Rechten und Pflichten&nbsp;</strong><br><br>Die Dauer des Kurses ist in der Anzahl der Unterrichtseinheiten angegeben. Die Dauer einer Unterrichtseinheit (1 UE) beträgt 45 Min.<br>Die Anzahl der Kursteilnehmer beträgt 4 – 10 Personen.<br>EDUStream GmbH behält sich das Recht vor:<br>- Den Lehrplan der angebotenen Kurse eigenständig zu entwickeln;<br>- Den Kurs gemäß dem entwickelten Kursprogramm durchzuführen;<br>- Den geplanten Kursstart zu verschieben;<br>- Die Trainer im Laufe des Kurses bei Bedarf zu ersetzen;<br>- Die Teilnehmerzahl in den Kursen zu erweitern<br><br>EDUStream GmbH ist berechtigt und verpflichtet:<br>-Qualifiziertes Lehrpersonal mit einschlägiger Hochschulausbildung, hoher fachlicher Qualifikation und einschlägiger Berufserfahrung zu gewinnen;<br>-Den Lernprozess gemäß dem mit dem Kunden vereinbarten Lehrplan zu organisieren;<br><br><br><br><strong>7.Stornobedingungen</strong><br><strong>&nbsp;</strong><br><strong>Prüfung</strong><br><br>Ein Rücktritt von der Prüfung ist möglich, es besteht jedoch kein Anspruch auf Rückerstattung von bereits entrichteten Prüfungsgebühren. Es wird Ihnen der nächste Prüfungstermin der jeweiligen Prüfung angeboten.<br>Erfolgt der Rücktritt vor Prüfungsbeginn, gilt die Prüfung als nicht abgelegt. Wird die Prüfung nach Beginn abgebrochen, gilt die Prüfung als nicht bestanden.<br>Um im Falle eines Rücktritts von der Prüfung oder eines Abbruchs der Prüfung Krankheitsgründe geltend zu machen, muss beim zuständigen Prüfungszentrum unverzüglich ein ärztliches Attest vorgelegt werden. Liegt ein ärztliches Attest vor, haben Sie die Möglichkeit den nächsten Prüfungstermin in Anspruch zu nehmen.<br>Sollte der Prüfungstermin seitens des Prüfungszentrums bzw. seitens des ÖIF/ÖSD storniert werden, werden Sie automatisch für den nächsten Prüfungstermin angemeldet.<br><strong>Sprachkurs</strong><br>Der Kursteilnehmer (bei Minderjährigen vertreten durch den gesetzlichen Vertreter) meldet sich verbindlich zu dem bezeichneten Kurs an und verpflichtet sich zur Zahlung von Kursgebühren laut Rechnung. Die Kursteilnahme ist erst nach vollständiger Bezahlung der jeweilig fälligen Kursgebühr möglich.<br><br>Die Kosten für Lehrbücher werden nicht erstattet.<br><br><br><br><br><strong>8.Verbote</strong><br>In den Räumen des EDUStream GmbH besteht ein absolutes Rauchverbot.<br><br><br><br><strong>9.Schadensvergütung</strong><br><br><br>Der Zubehör, der Raum und die Ausrüstung sollen unter sorgfältigem Umgang und Verwendung unterliegen. Die Kunden müssen alle von ihnen verursachten Schäden erstatten.<br><br><br><br><strong>10.Verantwortungsausschluß</strong><br><br><br>Die EDUStream GmbH haftet nicht, insbesondere auch bei Diebstahl, für persönliche Gegenstände des Kunden oder für die zur Verfügung gestellten Schulungsunterlagen.<br>Der Lernprozess in den Kursen hat informativen Charakter. Der Lernerfolg des Kursteilnehmers und/oder ein positives Ergebnis bei den Prüfungen können nicht gewährleistet werden.<br><br><br><strong>11.Anwendbares Recht und Gerichtsstand</strong><br>Als anwendbares Recht gilt ausschließlich nur österreichisches Recht unter Ausschluss von Referenzstandards. Alle Streitigkeiten werden ausschließlich am zuständigen Gericht der Stadt Wien entschieden.<br>Aktualisiert, am 1.06.2022<br>EDUStream GmbH<br><br></div> 
            </div>
        </div>
      </b-modal>
      <b-modal centered :busy="true" id="modal-3" :hide-header='true' :hide-footer='true' style="width:30%;">
        
        <div class="flex flex-column" style="margin-left:7%; margin-right:7%">
            <div class="t390__wrapper t-align_center"> 
                <div class="text-center text-3xl pb-3" style="">Impressum</div> 
                <div class="text-center" style=""><strong>Herausgeberin dieser Webseite:</strong><br><br><strong>EDUStream Gmbh</strong><br>Sprachschule<br>FN 482870d, Handelsgericht Wien<br><br>Rennweg 9, Top 6<br>1030 Wien<br><br>Tel: +43 1 890-89-48<br>E-Mail:&nbsp;<a href="mailto:info@edu-stream.at">info@edu-stream.at</a><br><br><strong>Geschäftsführung:</strong><br>Oborin Irina<br><br>UID: ATU 73006034<br><br><br></div> 
            </div>
        </div>
      </b-modal>
      <b-modal centered :busy="true" id="modal-4" :hide-header='true' :hide-footer='true' style="width:30%;">
        
        <div class="flex flex-column" style="margin-left:7%; margin-right:7%">
            <div class="t390__wrapper t-align_center"> 
                Неясно содержимое - на актуальном сайте ссылка идет вникуда
            </div>
        </div>
      </b-modal>
    </div>
    
</template>

<style scoped>
    
.text-xs-responsive{
  font-size: calc(1px + 0.70625vw);
}
.text-xs-header-responsive{
    font-size: calc(1px + 0.90625vw);
}
.text-2xs-responsive{
    font-size: calc(1px + 0.60625vw);
}

   

    p, h1{
        color:white;
    }

</style>

<script>

import logo from "~/assets/edu-stream_logo.png"
import facebookLogo from "~/assets/facebook_logo.svg"
import instagramLogo from "~/assets/instagram_logo.svg"
import phoneIcon from "~/assets/phone_icon.svg"
import emailIcon from "~/assets/email_icon.svg"


export default {
  data: function () {
    return {
      logo: logo,
      facebookLogo:facebookLogo,
      instagramLogo: instagramLogo,
      phoneIcon: phoneIcon,
      emailIcon: emailIcon
    }
  }
}



</script>