<script>

    

    


</script>

<svelte:head>
    <title>2023/24</title>
</svelte:head>

<h1>2023/24</h1>

<hr>


<div class="article" >


   <div  class="box" >

    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTcgb5QniWRRUAxcYhIkMgECoowxFdz-hTiVT4nj20U-rKcAYxH4jpeO70bJdHxwnvCGE-NjX-k6grz/embed?start=true&loop=true&delayms=3000" 
    frameborder="0" 
    width="1490" 
    height="340" 
    allowfullscreen="true" 
    mozallowfullscreen="true" 
    webkitallowfullscreen="true">
    </iframe>

        <div class="descrizione">
            <h2>The risks and dangerous of social media </h2>
            <p>Nel prima parte dell'anno di Inglese abbiamo approfondito la tematica sui rischi che possono portare i social media, i videogames e gli smartphone.</p> 

        

        </div>
    
    </div>
    <hr>

    <div id="boxRev" class="box">
        
        
        <div class="descrizione">
            <h2>I campi di concentramento giapponesi e i campi USA per i giapponesi </h2>
            <p>...</p> 
        </div>

        

    </div>

    <div id="video" class="box">
        <iframe height="415" src="https://www.youtube.com/embed/uXQVgp7g0Xk?si=5_Ur7D52GIeJeu5q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe height="415" src="https://www.youtube.com/embed/2CMOupbiZ58?si=vAgNB61xTyivshH_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe  height="415" src="https://www.youtube.com/embed/6yXNjIq50Dw?si=LHSegktvMTTg4JuC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe  height="415" src="https://www.youtube.com/embed/SKOP830ETKk?si=IXgukCya1PsFDAoa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <hr>

    
    <div id="boxTesto" class="descrizione">
        <p>Abbiamo affrontanto il tema sulla condizione manicomiale prima della legge Basaglia.<br>
            grazie alla lettura del libro <a href="https://www.amazon.it/Laltra-verit%C3%A0-Diario-una-diversa/dp/8817065358" target="_blank" rel="noopener noreferrer">"L'altra verità"</a>. Libro che è tratto dalla esperienza in prima persona della poetessa Alda Merini quando era rinchiusa nel manicomio.
        </p>
    </div>

    <div id="boxTesto" class="descrizione">
        <p>Durante questo anno abbiamo trattato la situazione carceraria italiana. Dove io sono andato a vedere un spettacolo teatrale
            tenuto dai stessi detenuti presso la "casa circondaria Lorusso e Cotugno di Torino". <br>
            Successivamente abbiamo incontrato l'ex direttrice del carcere di Torino Cosima Buccoliero e la scrittrice Serena Uccello autrici del libro che abbiamo letto <a href="https://www.amazon.it/Senza-sbarre-Storia-carcere-aperto-ebook/dp/B09XQMLK84" target="_blank" rel="noopener noreferrer">"Senza Sbarre"</a>
        </p>
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

        
        .article > #boxTesto{
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
        align-items: center;
        
    }

    .article > #video{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 10px;
        
    }

    .descrizione > p > a{
            color: orangered;
        text-decoration: none;
        }


    





    .box > .descrizione{
        text-align: justify;
        padding: 40px;
        font-size: 26px;
        
    }

    .descrizione > h2{
        text-align: center;
        font-size: 4vh;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .descrizione > p > a{
        color: orangered;
        text-decoration: none;
    }

    .box > iframe{
            width: 100%;
            margin: auto;
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


    }

    @media(max-width:480px){

        .article{
            display: flex;
            flex-direction: column;
            margin-bottom: 4%;
            
            
            
        }

        .descrizione > p > a{
        color: orangered;
        text-decoration: none;
        }

        
        .article > #boxTesto{
                width: 80%;
                margin: auto;
                text-align: justify;
                font-size: 26px;
            }

        .box > iframe{
            width: 100%;
            margin: auto;
        }

        .article > #video{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        
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

    }


    









</style>



