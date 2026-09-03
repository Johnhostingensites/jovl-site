# JOVL site update v9

Deze versie lost de logo-hover definitief op. Elk logo gebruikt één echte kleurenafbeelding. Die afbeelding wordt standaard met CSS grijs getoond en bij hover/focus in de echte merkkleuren. De homepage en de pagina Website laten maken gebruiken exact dezelfde implementatie.

Belangrijk: upload ook `assets/styles-v9.css` en de map `assets/logos/color-v9`. De nieuwe bestandsnamen voorkomen dat een oude Cloudflare- of browsercache zichtbaar blijft.

# JOVL website-update v5

Deze map bevat de bijgewerkte JOVL-site:

- `index.html` — homepage
- `website/index.html` — salespagina voor het websiteaanbod
- `bedankt/index.html` — eigen bedankpagina na het formulier
- `assets/styles.css` — gedeelde vormgeving
- `assets/site.js` — mobiel menu, animaties, FAQ, muiswaas en dynamisch jaartal

## Wat is aangepast

- Het tekstballonnetje bij de muis is volledig verwijderd.
- Over de hele site volgt nu een subtiel JOVL-waasje de muis, zonder tekst en zonder de normale cursor te vervangen.
- Kleine sectiekoppen zoals `De kern` en `Toegepast bij` zijn zwaarder gezet.
- CTA-knoppen gebruiken bij hover de turquoise JOVL-kleur.
- De logo-elementen zijn op beide pagina's gelijkgetrokken met de oorspronkelijke opbouw: de originele 348 × 160 logo-tegels, zonder extra kader in een kader.
- Op de websitepagina staat bij `Wanneer betaal ik?` de nieuwe no-cure-no-paytekst.
- Het formulier gebruikt nu een gewone, betrouwbare HTML-post naar FormSubmit en stuurt daarna door naar de eigen bedankpagina. De eerdere AJAX-laag is verwijderd.

## Formulier eenmalig activeren

FormSubmit vraagt bij het eerste gebruik om bevestiging van `john@jovl.nl`.

1. Publiceer deze bestanden.
2. Open `https://jovl.nl/website/#vragenlijst`.
3. Verstuur zelf één testinzending.
4. Zoek in `john@jovl.nl` naar de activatiemail van FormSubmit. Controleer ook Ongewenste e-mail.
5. Klik op de bevestigingslink.
6. Verstuur daarna nog een test.

Na activatie ontvang je iedere inzending als tabeloverzicht. Via het e-mailadres van de invuller kun je direct antwoorden.

## Publiceren

Plaats de inhoud van deze map in de root van de GitHub-repository. Laat de mappenstructuur intact: `/assets/`, `/website/` en `/bedankt/` zijn nodig.


## Versie 6
- Het blok “Praktisch toegepast” is één-op-één teruggebracht naar de oorspronkelijke kop, tekst, 4×2-logo-indeling en hoverstijl.
- Het formulier is ongewijzigd; FormSubmit-inzendingen werken na activatie. Markeer de afzender als geen spam om nieuwe aanvragen in je inbox te krijgen.


## Versie 10

- CTA's op de pagina Website laten maken heten nu `Dit wil ik` en linken naar het formulier.
- De homepage is ongewijzigd.
- De vraag over extra functionaliteit is verwijderd.
- De twee inhoudelijke vragen zijn optioneel en hebben extra uitleg en voorbeelden gekregen.
