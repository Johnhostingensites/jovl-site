# JOVL website-update v2

Deze map bevat twee statische pagina's:

- `index.html` — vernieuwde homepage
- `website/index.html` — compacte salespagina voor het websiteaanbod
- `assets/styles.css` — gedeelde vormgeving
- `assets/site.js` — mobiel menu, animaties, FAQ, dynamisch jaartal en formulierafhandeling

## Belangrijk

- Het originele JOVL-logo staat lokaal in `assets/logo-jovl.png` en wordt op beide pagina's gebruikt.
- Er zijn geen persoonlijke foto's opgenomen.
- Het copyright toont minimaal 2026 en loopt vanaf 2027 automatisch mee met het kalenderjaar.
- Alle interface-iconen staan lokaal in `assets/icons/`. Er is dus geen externe iconendienst die bij publicatie kan wegvallen.
- De vaste investering op de websitepagina is €1.950 excl. btw; er staat geen introductiekorting meer op de site.

## Online vragenlijst koppelen

Het formulier gebruikt `data-endpoint=""`. Zonder endpoint opent na verzenden het e-mailprogramma met de antwoorden.
Vul bij voorkeur een eigen Formspree-, Basin- of ander formulierendpoint in bij het attribuut `data-endpoint` in `website/index.html`.

## Publiceren

Plaats de inhoud van deze map in de root van de GitHub-repository. Test eerst via een preview-deployment. De pagina `/website/` gebruikt relatieve assets en werkt vanaf hetzelfde domein.
