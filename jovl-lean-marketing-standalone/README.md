# JOVL website-update v3

Deze map bevat de bijgewerkte JOVL-site:

- `index.html` — homepage
- `website/index.html` — salespagina voor het websiteaanbod
- `assets/styles.css` — gedeelde vormgeving
- `assets/site.js` — mobiel menu, animaties, FAQ, dynamisch jaartal en formulierafhandeling

## Wat is aangepast

- Het oude JOVL-favicon is teruggezet als los J-beeldmerk.
- De homepage gebruikt weer het bekende beeld met **minder / lean / beter**.
- De typografie gebruikt weer Montserrat, zoals in de eerdere site.
- Buttons krijgen bij hover weer de donkergroene JOVL-kleur.
- Klantlogo’s gaan bij hover van grijs naar kleur en linken weer naar de organisaties.
- Op de salespagina is `Factuur bij livegang` vervangen door `No cure, no pay`.
- Het formulier verstuurt de ingevulde antwoorden rechtstreeks als overzicht naar `john@jovl.nl`.

## Formulier eenmalig activeren

Het formulier is gekoppeld via FormSubmit. Daar is geen account voor nodig.

1. Publiceer deze bestanden.
2. Open `https://jovl.nl/website/#vragenlijst`.
3. Verstuur zelf één testinzending.
4. FormSubmit stuurt een activatiemail naar `john@jovl.nl`.
5. Klik in die mail op de bevestigingslink.
6. Verstuur daarna nog een test. Vanaf dat moment komen aanvragen als tabeloverzicht in de inbox binnen.

Controleer eventueel ook de map Ongewenste e-mail bij stap 4.

Het formulier gebruikt een verborgen honeypot tegen eenvoudige spam. Voeg FormSubmit ook toe aan de privacyverklaring als externe formulierverwerker.

## Publiceren

Plaats de inhoud van deze map in de root van de GitHub-repository. Bestaande bestanden met dezelfde naam mogen worden vervangen. Verwijder de mappenstructuur niet: `/website/` en `/assets/` moeten intact blijven.
