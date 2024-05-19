
<script>

</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

    <div class="article">
        <h1 id="title">Educazione Civica</h1>

        <hr>

        <h2>L'educazione civica è un percorso per formare cittadini responsabili e include i seguenti argomenti</h2>

        <hr>
        <h2>I miei ultimi lavori</h2>
        <hr>

        <div class="box">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQeocC7g_f_EzOiTnmm9GVMNa0C1NTnlJOeiOuNedClldj74Q-ZetjU9yyASIK_WZ7NE_hkLuHnBy3i/embed?start=true&loop=true&delayms=3000" 
            frameborder="0" 
            width="580" 
            height="440" 
            allowfullscreen="true" 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true">
            </iframe>

            <div class="descrizione">
                <h2>Argomento trattato con la docente Giannatasio Maura</h2>
                <p>Ho raccolto tutti gli argomenti fatti con la Professoressa Muara Giannatasio.</p>
                <p>In particolare come ultimo argomento io come persona che ha lottato contro la mafia ho parlato di <a target="_blank" href="https://it.wikipedia.org/wiki/Giuseppe_Fava">Giuseppe Fava</a></p>
            </div>
            
        </div>

        <hr>

        <div class="box2">

        
            
        </div>


        

    </div>

    









<style>

    @media (min-width: 480px){

        .article{

            margin: auto;
            font-size: 20px;
            width: 80%;

            display: flex;
            flex-direction: column;
            margin-bottom: 4%;
            

            
            
        }

        .article > h1{
            background: linear-gradient(to right, #e6f44b, #dd7f0d,#a10be1, #b9d617);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }

        #title{
        font-size: 100px;
        font-family: 'Dancing Script', cursive;
        }

        hr{
            width: 100%;
            
            border: 1px solid black;
        }

        .box{
            display: flex;
            flex-direction: row;
            margin: auto;
            column-gap: 4vh;
            justify-content: center;
        }

        .box > .descrizione{
            width: 40%;
        }

        .descrizione > p > a{
            color: orangered;
        text-decoration: none;
        }

        .descrizione > p{
            text-align: justify;
        }
    }


    @media(max-width:480px){

        .article{

        margin: auto;
        
        width: 100%;

        display: flex;
        flex-direction: column;
        margin-bottom: 4%;




        }

        .article > h1{
        background: linear-gradient(to right, #e6f44b, #dd7f0d,#a10be1, #b9d617);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        }

        #title{
        font-size: 90px;
        font-family: 'Dancing Script', cursive;
        }

        hr{
        width: 95%;

        border: 1px solid black;
        }

        .box{
        display: flex;
        flex-direction: column;
        margin: auto;
        column-gap: 4vh;
        justify-content: center;
        }

        .box > iframe{
            width: 90%;
            height: 330px;
            margin: auto;
        }

        .box > .descrizione{
            width: 90%;
            margin: auto;
        }

        .descrizione > p > a{
        color: orangered;
        text-decoration: none;
        }

        .descrizione > p{
        text-align: justify;
        }

    }
    





</style>
