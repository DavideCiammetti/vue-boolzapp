'use strict';
// import luxon 
// import DateTime from 'luxon/src/datetime.js';

const { createApp } = Vue;

createApp({
  data() {
    return {
        contacts: [
            {
                name: 'Michele',
                avatar: '../img/avatar_1.jpg',
                visible: true,

                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '../img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '../img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '../img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '../img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '../img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '../img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '../img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        dropDown: false,
                        indexMenu: false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        dropDown: false,
                        indexMenu: false,
                    }
                ],
            }
        ],
        curIndex: 0,
        newMessage: '',
        searchText: '',
    };
  },

    methods:{
        
        // cambia utente
        changeUser(index){
            this.curIndex = index;
        },
        // funzione aggiungi messaggio 
        addMessage() {
            let DateTime = luxon.DateTime.now();
            let now = DateTime.toFormat("HH:mm:ss");
            if (this.newMessage !== null && this.newMessage.trim() !== '') {
                const contact = this.contacts[this.curIndex];
                contact.messages.push({
                    date: now,
                    message: this.newMessage,
                    status: 'sent',
                    dropDown: false,
                    indexMenu: false,
                });
                this.newMessage = '';
            }
            this.timeResponse();
            this.validator = true;
            return now;
        },
        // funzione per settare l'invio di un 'ok' dopo 1 secondo 
        timeResponse(){
            setTimeout(this.response, 1000);
          },
        // funzione per creare un messaggio di ok ma come se fosse ricevuto (status: 'received')
        response(){
            let DateTime = luxon.DateTime.now();
            let now = DateTime.toFormat("HH:mm:ss");
            const contact = this.contacts[this.curIndex];
            contact.messages.push({
                date: now,
                message: 'ok',
                status: 'received',
                dropDown: false,
                indexMenu: false,
            });
        },
        // funzione per cercare elementi nella lista
        newSearch() {
            if (this.searchText !== '') {
                const lowerText = this.searchText.toLowerCase();
                this.contacts.forEach((contact) => {
                    const lowerName = contact.name.toLowerCase();
                    if (lowerName.includes(lowerText)) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
                return this.contacts.filter(contact => contact.visible);
            } else {
                this.contacts.forEach((contact) => {
                    contact.visible = true;
                });
                return this.contacts;
            }
        },
        changeIndex(index){
            console.log(index);
            this.curIndex = index;
        },

        showMenu(mexIndex,index) {
            const contact = this.contacts[index];
            let message = contact.messages;

                if (message[mexIndex].dropDown === false) {
                    message[mexIndex].dropDown = true;
                 return message.dropDown;
                } else if(message[mexIndex].dropDown === true){
                  message[mexIndex].dropDown = false; 
                }
          },
        //   funzione elimin messaggi---> ho messo un v-show sul secondo div con classe="two-message-container" che al click imposta display none alla riga 
          deleteMessage(mexIndex,index){
            const contact = this.contacts[index];
            let message = contact.messages;
            message[mexIndex].indexMenu = true;
          },
        //   funzione gestione tempo minuti e ore 
        timeControl(){
            let DateTime = luxon.DateTime.now();
            let now = DateTime.toFormat("HH:mm:ss");
            return now;
        },
        lastAccess(contact) {
            let DateTime = luxon.DateTime.now();
            let now = DateTime.toFormat("HH:mm:ss");
            let message = contact.messages;
            let time;
            message.date = now;
                for(let i = 0; i < message.length; i++){
                    console.log(message[i].date);
                    time = message[i].date;
                }
                return time;
        }
    }
    
}).mount('#app')

// console.log('ciao');
