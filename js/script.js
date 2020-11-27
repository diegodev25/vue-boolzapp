let app = new Vue({
  el: '#app',
  data: {
    // dato per controllare la chat attiva
    index: 0,
    msg: '',
    isActive: false,
    search: '',
    reply: 'Ok',
    emoticon: ["😀","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"],
    // array della sezione contatti
    contacts: [
      {
        name: 'Michele',
        img: 'img/avatar_1.jpg',
        message: [
          {
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            date: '10/01/2020 15:30:55',
            modality: 'exit',
          },
          {
            text: 'Si, ma preferirei andare al cinema',
            date: '10/01/2020 15:50:00',
            modality: 'entry'
          },
          {
            text: 'Ok, va bene!',
            date: '20/11/2020 10:52:02',
            modality: 'exit'
          },
          {
            text: 'Ci vediamo dopo!',
            date: '20/11/2020 12:01:31',
            modality: 'exit'
          },
          {
            text: 'Perfetto, a dopo!',
            date: '20/11/2020 12:02:00',
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
            date: '18/11/2020 10:34:22',
            modality: 'exit'
          },
          {
            text: 'Ehilà, tutto bene, a te come va?',
            date: '18/11/2020 10:45:56',
            modality: 'entry'
          },
          {
            text: 'Tutto bene anche io, grazie!',
            date: '18/11/2020 11:30:09',
            modality: 'exit'
          }
        ]
      },
      {
        name: 'Samuele',
        img: 'img/avatar_3.jpg',
        message: [
          {
            text: 'Ciao Samu, oggi pomeriggio ti va di andare a fare una corsetta?',
            date: '22/11/2020 14:30:11',
            modality: 'exit'
          },
          {
            text: 'Si certo, quando vuoi!',
            date: '22/11/2020 14:45:29',
            modality: 'entry'
          },
          {
            text: 'Perfetto, ci vediamo più tardi!',
            date: '22/11/2020 15:01:34',
            modality: 'exit'
          }
        ]
      },
      {
        name: 'Luisa',
        img: 'img/avatar_4.jpg',
        message: [
          {
            text: 'Ciao Luisa, come stai?',
            date: '23/11/2020 11:09:23',
            modality: 'exit'
          },
          {
            text: 'Ehi, tutto bene, tu?',
            date: '23/11/2020 11:25:02',
            modality: 'entry'
          },
          {
            text: 'Benissimo, grazie!',
            date: '23/11/2020 11:52:44',
            modality: 'exit'
          }
        ]
      }
    ] // fine array sezione contatti
  }, // fine sezione data
  methods: {
    // funzione per verificare la chat Attiva
    chatActive: function (i) {
      this.index = i;
    },
    // funzione per inserire il nuovo messaggio nella chat selezionata
    enterMessage: function () {
      if (this.msg != '') {
        // variabile che stabilisce data e ora instantanea
        let moment = new Date().toLocaleString();
        console.log(moment);
        // variabile che stabilisce un oggetto di dati del messaggio inviato
        var objectMsg = {
          text: this.msg,
          date: moment,
          modality: 'exit'
        };
        // inserire l'oggetto dentro all'array contacts
        this.contacts[this.index].message.push(objectMsg);
        this.msg = '';
        setTimeout(this.autoReply, 1000);
        this.scrollAuto();
      }
    },
    // funzione che genera la risposta dopo un secondo
    autoReply: function () {
      // variabile che stabilisce data e ora instantanea
      let moment = new Date().toLocaleString();
      var replyPc = {
        text: this.reply,
        date: moment,
        modality: 'entry'
      };
      // inserire l'oggetto dentro all'array contacts
      this.contacts[this.index].message.push(replyPc);
      this.scrollAuto();
    },
    // funzione per scrollare a fine pagina con l'ultimo messaggio
    scrollToEnd: function () {
      var container = this.$el.querySelector("#container-chat");
      container.scrollTop = container.scrollHeight;
    },
    // impostare un tempo per far si che la funzione scroll si attivi
    scrollAuto: function () {
      setTimeout(this.scrollToEnd, 1);
    },
    // Funzione rimuovere selezione messaggi
    removeSelect: function() {
      this.contacts[this.index].message.forEach((item, i) => Vue.delete(this.contacts[this.index].message[i], "isSelected"));
    },
    // Funzione selezione messaggio (per sottomenu)
    dropdownView: function(i) {
      if (this.contacts[this.index].message[i].isSelected === true) {
        Vue.delete(this.contacts[this.index].message[i], "isSelected")
      } else {
        this.removeSelect()
        Vue.set(this.contacts[this.index].message[i], "isSelected", true)
      }
    },
    // funzione per eliminare il messaggio
    deleteMsg: function (i) {
      Vue.delete(this.contacts[this.index].message, i)
    },
    // funzione per inserire un emoticon al click
    append(emoji) {
      this.msg += emoji;
    }
  }
})
