<script>

    

import accessoAabusivo from '$lib/img/accesso-a-abusivo.png';

import codicefiscale from '$lib/img/calcolo-codice.webp';


</script>

<svelte:head>
    <title>2022/23</title>
</svelte:head>

<h1>2022/23</h1>

<hr>


<div class="article" >


   <div  class="box" >

    <img src={accessoAabusivo} alt="">

        <div class="descrizione">
            
            <p>Nel primo periodo dell'anno con il Docente di TPSI ogni alunno ha scelto un argomento di cui parlare.</p>
            <p>L'articolo dopo essere stato corretto dalla Docente di Italiano è stato riscritto in <i>MarkDown</i>,</p>
            <p>si può trovare il mio articolo pubblicato online sul blog del Professore al seguente <a target="_blank" href="https://prof.mancusoa.it/blog/accesso-abusivo-ad-un-sistema-informatico/">link</a></p> 

        

        </div>
    
    </div>
    <hr>

    <div id="boxRev" class="box">

        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQeocC7g_f_EzOiTnmm9GVMNa0C1NTnlJOeiOuNedClldj74Q-ZetjU9yyASIK_WZ7NE_hkLuHnBy3i/embed?start=true&loop=false&delayms=3000" 
            frameborder="0" 
            width="580" 
            height="440" 
            allowfullscreen="true" 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true">
        </iframe>

        <div class="descrizione">
            <p>Con la Professoressa di Italiano dopo aver concluso il percorso di Agende Rosse con la visione del film <a href="https://www.raiplay.it/programmi/lamafiauccidesolodestate" target="_blank" rel="noopener noreferrer">"La mafia uccide solo d'estate"</a> e dopo aver ascoltato la testimonianza del Sign. Ferdinando Domè.</p>
            <p>Che è stato figlio di una vittima innocente di Mafia "Strage di viale Lazio" che avvenuta a dicembre 1969.</p>
            <p>In relazione al percorso Agende Rosse abbiamo fatto una presentazione su un personaggio a scelta tra quelli che hanno lottato contro la mafia ed io ho parlato di <a target="_blank" href="https://it.wikipedia.org/wiki/Giuseppe_Fava">Giuseppe Fava</a></p>
        </div>

    </div>

    <hr>

    <div id="boxRev" class="box">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/JjV_6RxNlyY?si=AHvWohyw5MSt4GmB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div class="descrizione">
            <p>Inoltre sempre riguardante questo tema abbiamo potuto vedere un spettacolo teatrale presso il teatro Juvarra "Mi chiamo Rita Atria", figlia di un importante boss mafioso che quale era riuscita a scappare dalla Sicilia grazie a Paolo Borsellino. </p>
            <p>abbiamo avuto modo di partecipare all’iniziativa “Insieme per capire” promossa dalla fondazione Amici della scuola e la Fondazione Corriere della Sera. <br> Come Ospite della giornata il Procuratore della Repubblica Nicola Gratteri. Titolo dell’incontro <br> “LA MIA LOTTA CONTRO LA ‘ NDRANGHETA.”</p>
            <p>Come ultimo incontro Gratteri ha raccontato la sua esperienza professionale e di vita che lo costringono a vivere sotto scorta da vent’anni</p>
        </div>

    </div>

    <div id="" class="boxTesto">
        <div class="descrizione">
            <p>Durante questo anno affrontanto il tema della pena di morte nel corso del tempo dal passato fino ai tempi di oggi, leggendo il romanzo di Victor Hugo <a href="https://www.amazon.it/Lultimo-giorno-condannato-Victor-Hugo/dp/8807902494" target="_blank" rel="noopener noreferrer">"L'ultimo giorno di un condannato a morte"</a></p>
            <p>abbiamo anche parlato anche degli Anni di Piombio che è stato un periodo  tra 1960 e il 1980 dove in Italia in questi anni era presente un terrorismo di tipo politico.</p>
            <p>A maggio abbiamo incontrato la scrittrice Benedetta Tobagi che è figlia di Walter Tobagi, un giornalista che è stato assasinato dalle brigate rosse in particolare dalla <a href="https://it.wikipedia.org/wiki/Brigata_XXVIII_marzo" target="_blank" rel="noopener noreferrer">Brigata XXVII marzo</a>.<br>
                Prima dell'incontro con l'autrice del abbiamo letto il suo libro <a href="https://www.amazon.it/batte-forte-cuore-Storia-padre/dp/8806207806" target="_blank" rel="noopener noreferrer">"Come mi batte forte il tuo cuore"</a>. </p>
        </div>

    </div>


    <hr>

    <div id="" class="box">

        <img src={codicefiscale} alt="">

        <div class="descrizione">
            <p>Con la Professoressa Arruzza Emanuela nella materia informatica abbiamo creato un programma che calcola il codice fiscale programmato in C#.</p>
            <p>Studiando come viene composto e come calcolare le sue varie parti.</p>
        </div>

    </div>


    

</div>












<style>

    @media (min-width: 480px){
            .article{
                display: flex;
                flex-direction: column;
                margin-bottom: 4%;
                
                
                
            }

        
            #boxRev{
                flex-direction: row-reverse;
            }

            .box > img{
                width: 46%;
                border-radius: 20px;
            }

            .article > .boxTesto{
                width: 70%;
                margin: auto;
                text-align: justify;
                
                font-size: 26px;
            }


        .article > .box{
            display: flex;
            flex-direction: row;
            width: 70%;
            margin: auto;
            column-gap: 4vh;
            
            
        }

        .box > .descrizione{
            text-align: justify;
            width: 50%;
            font-size: 26px;
            
            
        }

        .descrizione > h2{
            text-align: center;
            font-size: 4vh;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        h1{
            font-size: 100px;
            font-family: 'Dancing Script', cursive;
        }

        hr{
            width: 70%;
            
            border: 1px solid black;
        }

        .descrizione > p > a{
            color: orangered;
        text-decoration: none;
        }


    }

    @media(max-width:480px){

        .article{
            display: flex;
            flex-direction: column;
            margin-bottom: 4%;
            
            
            
        }

        .box > iframe{
            width: 100%;
            margin: auto;
        }


        .article > .box{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;

        }

        .article > .boxTesto{
                width: 80%;
                margin: auto;
                text-align: justify;
                font-size: 26px;
            }




        .box > .descrizione{
        text-align: justify;
        font-size: 26px;
        width: 90%;
        margin: auto;
        }

        .box > img{
        width: 100%;
        height: 340px;
        border-radius: 10px;
        margin: auto;

        }

        h1{
        font-size: 100px;
        font-family: 'Dancing Script', cursive;

        }

        hr{
        width: 90%;

        border: 1px solid black;
        }

    }


    









</style>



