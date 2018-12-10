document.addEventListener("DOMContentLoaded", function(event) {
  var options = {
    strings: [
      "Info on ainoa opiskelupaikka, joka antaa kiikarit, joilla etsiä ratkaisuja nykypäivän haasteisiin yhdistelemällä isoja digiyhteiskunnan kokonaisuuksia täysin eri tavalla kuin koskaan aiemmin.",
      "Info on ainoa Aalto-yliopiston opiskelupaikka, joka kouluttaa monipuolisia osaajia tulevaisuuden työelämään yhdistämällä teknologian, ihmisen ja yhteiskunnan toisin kuin perinteiset DI-alat.",
      "Info on ainoa oppimisympäristö, joka synnyttää digi-yhteiskunnan kriittisiä ajattelijoita ratkaisemaan maailman monialaisia ongelmia tarjoamalla ihmiskeskeisen DI-tutkinnon, toisin kuin vahvasti fokusoituneet alat.",
      "Info on ainoa yliopisto-tutkinto, joka tarjoaa mahdollisuuden valjastaa laaja-alainen osaaminen ratkomaan digiajan haasteita kouluttamalla tekniikan, talouden ja ihmisen ammattilaisia toisin kuin vahvasti teoreettiset opiskelualat.",
      "Info on DI-tutkinto, joka kasvattaa monille eri poluille ratkomaan maailman isoja ongelmia vahvalla poikkitieteellisyydellä ja käytännönläheisyydellä, toisin kuin perinteiset koulutusohjelmat.",
      "Info on DI-tutkinto, joka tarjoaa mahdollisuuden luoda ja keksiä uusia ratkaisuja sekä töissä, että muilla elämän osa-alueilla.",
      "Info on ainoa DI-tutkinto tulevaisuuden tekniikan osaajille, joille pelkkä tekniikka ei riitä.",
      "Info on ympäristö, joka muovaa uraauurtavia osaajia digiyhteiskunnan monimutkaisiin haasteisiin toisin kuin perinteisemmät yliopistotutkinnot.",
      "Info on ainoa Aalto-yliopiston opiskelupaikka, joka kouluttaa etsimään luovia ratkaisuja monimutkaisiin ongelmiin yhdistämällä tekniikan ihmisläheiseen ympäristöön täysin erilaisella tavalla."
    ],
    backDelay: 2000,
    typeSpeed: 30,
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: true,
    shuffle: true
  };

  var typed = new Typed("#typewriter", options);
});
