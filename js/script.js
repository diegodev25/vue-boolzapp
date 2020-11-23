let app = new Vue({
  el: '#app',
  data: {
    // dato per controllare la chat attiva
    index: 0,
    // array della sezione contatti
    contacts: [
      {
        name: 'Michele',
        img: 'img/avatar_1.jpg',
        message: [
          {
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            modality: 'exit'
          },
          {
            text: 'Si, ma preferirei andare al cinema',
            modality: 'entry'
          },
          {
            text: 'Ok, va bene!',
            modality: 'exit'
          },
          {
            text: 'Ci vediamo dopo!',
            modality: 'exit'
          },
          {
            text: 'Perfetto, a dopo!',
            modality: 'entry'
          }
        ]
      },
      {
        name: 'Fabio',
        img: 'img/avatar_2.jpg',
        message: [
          {
            text: 'Ciao Fabio, come va?',
            modality: 'exit'
          },
          {
            text: 'Ehilà, tutto bene, a te come va?',
            modality: 'entry'
          },
          {
            text: 'Tutto bene anche io, grazie!',
            modality: 'exit'
          },
        ]
      },
      {
        name: 'Samuele',
        img: 'img/avatar_3.jpg'
      },
      {
        name: 'Luisa',
        img: 'img/avatar_4.jpg'
      }
    ] // fine array sezione contatti
  }, // fine sezione data
  methods: {
    // funzione per verificare la chat Attiva
    chatActive: function (i) {
      this.index = i;
    }
  }
})
