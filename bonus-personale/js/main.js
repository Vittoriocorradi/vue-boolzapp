const { createApp } = Vue;

createApp({
    data() {
        return {
            activeConversation: 0,       // Variabile di stato
            newText: '',                 // Nuovo messaggio
            searchKeys: '',              // Testo barra di ricerca contatti
            menuOpen: false,              // Variabile menù tendina aperto/chiuso
            contacts: [                  // Lista contatti
                {
                    name: 'Michele',
                    avatar: '../img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
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
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
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
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            randomReplies: [
                'Non ci sono più le mezze stagioni',
                'Ma non mi dire',
                'No, non penso',
                'Sì, ottima idea!',
                'Come no',
                'Parlando di altro, hai visto il fungo atomico?',
                "Ehi, quello è Godzilla?",
                "Smettila di scrivermi",
                "Io ti aspetto alle venti davanti al cinema",
                "Per stasera invece sushi o pizza?",
                "Vabbè, tu ascoltati il nuovo disco di Harry Styles",
                "Dimmi veloce che tra poco vado a mangiare",
                "Se vieni stasera, porta il Risiko",
                "Mi parli con durezza",
                "Oggi guardando le nuvole ho visto un castello",
                "Domani andiamo a dare da mangiare alle papere?",
                "Facciamo una jam session con gli ukulele?",
                "Ti sparo con una cerbottana",
                "Però è salito ancora il prezzo della birra",
                "Finisco di studiare ancora due capitoli",
                "Il mio colore preferito è il veryperi",
                "Oggi mi sa che non vado in palestra, non ne ho tanta voglia",
                "Boh",
                "Non dirmi quello che devo fare",
                "Ho deciso che quest'estate andiamo in Brasile",
                "Comunque mi devi ancora venti euro",
                "Ma smettila",
                "Poi passami la ricetta della carbonara",
                "Forse quest'anno vinciamo lo scudetto",
                "Dove vanno d'inverno le anatre di Central Park?",
                "Anche la lotta verso la cima basta a riempire il cuore di un uomo. Bisogna immaginare Sisifo felice.",
                "C'è del marcio in Danimarca",
                "La vita è come il tennis, vince chi serve meglio",
                "Le attività noiose diventano perversamente molto meno noiose se ci si concentra molto su di esse",
            ]
        }
    },
    methods: {
        // Rendi la conversazione attiva al click
        activeContact(index) {
            this.activeConversation = index;
        },
        // Metodo per formattazione ora
        getTime(index) {
            const time = this.contacts[this.activeConversation].messages[index].date.split(' ');
            const hours = time[1].split(':');
            return `${hours[0]}:${hours[1]}`;
        },
        // Generatore numeri casuali
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },
        // Formatta orario ultimo messaggio
        getLastTime(index) {
            const time = this.contacts[index].messages[this.contacts[index].messages.length - 1].date.split(' ');
            const hours = time[1].split(':');
            return `${hours[0]}:${hours[1]}`;
        },
        // Nuovo messaggio
        newMessage() {
            if (this.newText.trim() !== '') {
                this.contacts[this.activeConversation].messages.push({
                    date: '10/01/2020 17:34:00',
                    message: this.newText,
                    status: 'sent'
                })
                this.newText = '';
                setTimeout(this.contactReply, 1000)
            }
        },
        // Risposta dell'interlocutore
        contactReply() {
            this.contacts[this.activeConversation].messages.push({
                date: '10/01/2020 17:35:00',
                message: this.randomReplies[this.getRndInteger(0, this.randomReplies.length - 1)],
                status: 'received'
            })
        },
        // Contatti visibili quando filtrati
        visibleContacts() {
                this.contacts.forEach((element, index) => {
                    if (!element.name.toLowerCase().includes(this.searchKeys.toLowerCase())) {
                        this.contacts[index].visible = false;
                    } else {
                        this.contacts[index].visible = true;
                    }
                })
        },
        // Apri/chiudi il menù a tendina con un click
        openMenu() {
            this.menuOpen = !this.menuOpen;
        },
        // Chiudi il menu a tendina
        closeMenu() {
            this.menuOpen = false;
        },
        // Cancella il messaggio
        deleteMessage(index) {
            this.contacts[this.activeConversation].messages.splice(index, 1);
        }
    }
}).mount('#app');