
<script>

    import Header from "../lib/components/Header.svelte";

    

    let VERSION_SOFTWARE = " 0.2.4";
    

    

</script>

<svelte:head>
    <meta name="theme-color" content="#023e7d" />
</svelte:head>

<div class="app">

    <Header />

<main>
    
    <slot />

</main>

<footer>

    <p>Sono contattabile all'indirizzo email : <a href="mailto:sebastiano.peluso@istitutoagnelli.it">sebastiano.peluso@istitutoagnelli.it</a> per il codice sorgente <a target="_blank" href="https://github.com/Sebastiano-Peluso/Portofolio">GITHUB</a>  ( v{VERSION_SOFTWARE} ) </p>
    
</footer>

</div>


<style>

:global(body){
        background-color: #caf0f8;
    }

    .app{
        display: flex;
        flex-direction: column;
       
    }

    @media(min-width:480px){
        main{
        width: 100%;
        margin: auto;
        
        text-align: center;
    }

    footer{
        
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin: auto;
        background-color: #023e7d;
        color: white;
        font-size: 16px;
        border-radius: 20px;
        padding-left: 10px;
        padding-right: 10px;
        box-shadow: 2px 2px 20px 4px #023e7d;
    }



    footer > p > a{
        color: orangered;
        text-decoration: none;
    }

    }

    @media(max-width:480px){
        main{
        width: 100%;
        margin: auto;
        
        text-align: center;
        }

        footer{
            
            display: flex;
            justify-content: center;
            text-align: center;
            flex-direction: row;
            margin: auto;
            background-color: #023e7d;
            color: white;
            font-size: 16px;
            border-radius: 20px;
            padding-left: 10px;
            padding-right: 10px;
            box-shadow: 2px 2px 20px 4px #023e7d;
        }



        footer > p > a{
            color: orangered;
            text-decoration: none;
        }
    }

    
</style>



