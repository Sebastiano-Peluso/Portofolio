<script>

    
    import informatica_Portfolio from '$lib/img/informatica_Portfolio.jpg';
    


</script>

<h1>2020/21</h1>

<hr>


<div class="article" >


   <div  class="box" >

        <img src="https://www.consorziolgiata.it/wp-content/uploads/2016/12/costituzione.jpg" alt="costituzione">

        <div class="descrizione">
            <h2>La Costituzione</h2>
        <p>La Costituzione è la legge fondamentale dello Stato e fondativa della Repubblica Italiana, che contiene i principi cardine su cui è costruita la nostra democrazia è entrata in vigore il 1 gennaio 1948</p>

        </div>
    
    </div>
    <hr>

    <div id="boxRev" class="box">

        <img src="https://www.avvocatodonatelladecaria.it/wp-content/uploads/2019/10/legge-famiglia.jpg" alt="dirittoAllaFamiglia">

        <div class="descrizione">
            <h2>Il diritto di famiglia</h2>
        <p>Da questo principio deriva quello della pari responsabilità del marito e della moglie nella conduzione della famiglia, cioè nella scelta della casa, nell'educazione dei figli, nella proprietà dei beni acquistati.</p>

        </div>

    </div>

    <hr>

    <div id=3 class="box">

        <img src="https://anci.lombardia.it/images/upload/1682_raccomandazioni.png" id="IMG3" alt="raccomandazioniCOVID19">

        <div class="descrizione">
            <h2>L'educazione alla salute</h2>
        <p>l'educazione alla salute comprende il CORONAVIRUS (COVID-19) che si è diffuso dal mercato del pesce di WUHAN. La diffusione si è avuta a causa della globalizzazione mondiale.</p>
        <p>COME FARE A CAPIRE SE SI HA CONTRATTO IL CORONOVIRUS E A NON PRENDERSELO ?</p>
        <p>sei hai Sintomi come: febbre e affaticamento potresti avere contratto il COVID-19 per prevenire il contatto basta seguire le regole poste nell'immagine qui affianco.</p>
        </div>

    </div>

    <hr>

    

    <div id="boxRev" class="box">

        <img src="https://www.paperfirst.it/wp-content/uploads/la-casa-di-paolo.png" id="IMG4" alt="laCasaDiPaolo">

        <div class="descrizione">
            <h2>Legalità è contrasto alle mafie</h2>
        <p>Un percorso educativo per fare conoscere la legalità e il contrasto alle mafie. Un libro che parla di questo è "La casa di Paolo".</p>
        <p>Questo libro racconta l'esperienza dei ragazzi di una scuola di Milano che prestano il loro volontariato nella casa di Paolo, una casa al centro di Palermo per aiutare i bambini più bisognosi.</p>
        <p>Sotto si può trovare il sito di LIBERA una associazione contro le mafie.</p>

        

        </div>

    
        

    </div>

    
        <a href="https://www.libera.it/" target="_blank"  ><img id="libera" src="https://upload.wikimedia.org/wikipedia/it/0/09/Logo_Libera.jpg" alt="libera"></a>


        <hr>

        <div id=5 class="box">

            <img src={informatica_Portfolio} id="IMG3" alt="raccomandazioniCOVID19">
    
            <div class="descrizione">
                <h2>Informatica</h2>
                <p>Riguardo alla materia di Informatica ho creato questo portfolio con Google sites dove ho raccolto tutti gli argomenti fatti negli anni. </p>
                <p>Successivamente ho convertito il sito di Educazione civiva nel liguaggio di programmazione Svelte e SvelteKit tutto il codice sorgente e disponibile su Github.</p>
            </div>
    
        </div>
    
        <hr>
    

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

        #IMG3{
            
            height: 400px;
        }

        #IMG4{
            height: 460px;
        }


    .article > .box{
        display: flex;
        flex-direction: row;
        width: 70%;
        margin: auto;
        
    }
    





    .box > .descrizione{
        text-align: justify;
        padding: 40px;
        font-size: 26px;
    }

    .box > img{
        width: 600px;
        height: 340px;
        border-radius: 10px;
        margin: auto;
        
    }

    h1{
        font-size: 100px;
        font-family: 'Dancing Script', cursive;
    }

    hr{
        width: 70%;
        
        border: 1px solid black;
    }


    #libera{
        width: 500px;
        height: 200px;
        margin: auto;
        border-radius: 20px;
        
    }
    }


    @media(max-width:480px){

        .article{
            display: flex;
            flex-direction: column;
            margin-bottom: 4%;
            
            
            
        }

    


        #IMG3{
            
            height: 400px;
        }

        #IMG4{
            height: 460px;
        }


    .article > .box{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
        
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


    #libera{
        width: 90%;
        height: 200px;
        margin: auto;
        border-radius: 20px;
        
    }

    }


    









</style>



