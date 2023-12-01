# Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

## Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

## Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

## Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

## riferito alla milestone 4

### prendere elementi da un input di ricerca
 <!-- <input type="text" placeholder="Cerca o inizia una nuova chat" 
name="search" class="serch-in" v-model="searchText" @keyup="newSearch"> -->   questo snippet di codice lo utilizzo nel campo di input per cercare gli users.Per farlo uso:
 v-model="searchText" @keyup="newSearch" --> con <!--v-model:--> ho la possibilità di creare una connessione tra gli elementi del mio html e js  mentre con <!--@keyup="newSearch"--> ad ogni singolo rilascio del tasto per la parola rilascio l'evento che in questo caso è --newSearch-- cioè una funzione 

### filtrare gli elementi presi con la ricerca 

 <!-- <li v-show="contact.visible" v-for="(contact, index) in contacts" class="list" @click="changeIndex(index)"> -->  questo snippet mostra un tag <li></li> della  lista che ho usato per contenere le immagini con nomi data e ora  ----v-show="contact.visible"----> con questo sto chiedendo di prendere tutti gli elementi in contact cioè nel mio array di oggetti -contacts- e di prenere gli alementi che hanno visible a true per **v-show** ritorna solo o true o false 
mentre con  v-for="(contact, index) in contacts"-------> ciclo gli elementi nel mio li e prendo l'idex che mi servira come parametro nella funzione che passo a:
@click="changeIndex(index)----> al click sul <li> elemento si scatena la funzione che prende l'index e lo usa per fare da ponte con ò'index chiamato curIndex in js

### creazione barra in alto con foto dell'utenete con cui si sta chattando

 <!-- <div class="user-img">
    <img :src="contacts[curIndex].avatar" alt="friend.img" class="friend-img" >
    <p class="name-friend visibility-friend-container">{{ contacts[curIndex].name }}</p>
</div> -->

questo snippet lo uso per prendere una delle immagini cliccate nella lista e quindi aprire la chat con quella persona ----- <img :src="contacts[curIndex].avatar" -----> in questo modo senza usare il ciclo for uso il muo curIndex in js e mi fa da indice corrente per scorrere l'array principale e prendere poi avatar= foto
nel mio array.
faccio la stessa cosa per prendere il nome ----contacts[curIndex].name---->

## Milestone 5 
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
