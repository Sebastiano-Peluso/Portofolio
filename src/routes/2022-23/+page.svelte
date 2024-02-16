<script>

    

import accessoAabusivo from '$lib/img/accesso-a-abusivo.png';


</script>

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
            <p>Con la Professoressa di Italiano dopo aver concluso il percorso di Agende Rosse, abbiamo ascoltato la testimonianza del Sign. Ferdinando Domè.</p>
            <p>Che è stato figlio di una vittima innocente di Mafia "Strage di viale Lazio" che avvenuta a dicembre 1969.</p>
            <p>In relazione al percorso Agende Rosse abbiamo fatto una presentazione su un personaggio a scelta tra quelli che lottato contro la mafia ed io ho parlato di <a target="_blank" href="https://it.wikipedia.org/wiki/Giuseppe_Fava">Giuseppe Fava</a></p>
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


    









</style>



