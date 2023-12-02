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
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        dropDown: false
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
                        dropDown: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        dropDown: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        dropDown: false
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
                        dropDown: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        dropDown: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        dropDown: false
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
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        dropDown: false
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
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        dropDown: false
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
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        dropDown: false
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
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        dropDown: false
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
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        dropDown: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        dropDown: false
                    }
                ],
            }
        ],
        curIndex: 0,
        newMessage: '',
        searchText: '',
        indexMenu: true,
    };
  },

    methods:{
        
        // cambia utente
        changeUser(index){
            this.curIndex = index;
        },
        // funzione aggiungi messaggio 
        addMessage() {
            if (this.newMessage !== null && this.newMessage.trim() !== '') {
                const contact = this.contacts[this.curIndex];
                contact.messages.push({
                    date: 0,
                    message: this.newMessage,
                    status: 'sent',
                    dropDown: false
                });
                this.timeResponse();
                this.newMessage = '';
            }
        },
        // funzione per settare l'invio di un 'ok' dopo 1 secondo 
        timeResponse(){
            const setTime = setTimeout(this.response, 1000);
          },
        // funzione per creare un messaggio di ok ma come se fosse ricevuto (status: 'received')
        response(){
            const contact = this.contacts[this.curIndex];
            contact.messages.push({
                date: 0,
                message: 'ok',
                status: 'received',
                dropDown: false
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
                console.log(message.dropDown);    
          },
          
          
          
    }
    
}).mount('#app')

// console.log('ciao');
 // let DateTime = luxon.DateTime.local();
// console.log(DateTime);