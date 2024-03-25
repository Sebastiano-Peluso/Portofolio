<script>

    let open = false;

    function change() {

        open = !open;

        

        
        
    }

    

</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<div class="nav">
    <ul>
        <div class="item">

            <a href="/">
            <span class="material-symbols-outlined">
                home
            </span>
            Home
            </a>
        
        </div>

        <div class="item">
            <div class="center">
                <div class="option"><a href="/2020-21/">2020/21</a></div>
                <div class="option"><a href="/2021-22/">2021/22</a></div>
                <div class="option"><a href="/2022-23/">2022/23</a></div>
                <div class="option"><a href="/2023-24/">2023/24</a></div>
            </div>
        </div>

<!--         <button class="item dropdown" on:click={change}>I miei progetti
        
            {#if open == false}

                <span class="material-symbols-outlined">
                expand_more
                </span>
            {:else}
                <span class="material-symbols-outlined">
                expand_Less
                </span>

            {/if}


        </button> -->



            <div class="item">

                <a href="/ChiSono">
                    <span class="material-symbols-outlined">
                    account_circle
                    </span>
                    Chi Sono
                </a>


            </div>


        
        
    </ul>

</div>

<!-- {#if open }
<div class="dettagli">
    <div class="option"><a href="/2023-24/">2023/24</a></div>
    <div class="option"><a href="/2022-23/">2022/23</a></div>
    <div class="option"><a href="/2021-22/">2021/22</a></div>
    <div class="option"><a href="/2020-21/">2020/21</a></div>
</div>

{/if} -->




<style>

:global(body){
        padding: 0;
        margin: 0;
    }

@media (min-width: 480px){

    .nav > ul > .item > .center{
        display: flex;
        flex-direction: row;
        

        column-gap: 10px;
        
        
    }

/*     .dettagli{
        
        
        position: absolute;
        background-color: white;
        display: flex;
        flex-direction: column;
        
        border-radius: 6px;
        box-shadow: 2px 4px 10px  black;
        margin-left: 98vh;
        margin-top: 70px;

        width: 9.5%;
        text-align: center;

        
    } */

    .center > .option{
        display: flex;
        flex-direction: column;
        font-size: 21px;
        line-height: 4vh;
        width: 100%;
        

        
    }

    .center > .option:hover{
        cursor: pointer;
        
        transition: 1s;
        text-decoration: none;
        
        
    }

    .option > a{
        text-decoration: none;
        color: black;
    }

    .option > a:hover{
        color: orangered;

        
        
    }

/*     .dropdown{
        display: flex;
        flex-direction: row;

        border: none;
    } */

    .nav{
        position: sticky;
        top: 0;
        background-color: #023e7d;
    }

    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        justify-content: space-around;
        position: relative;

    }

    ul > .item{
        
        
        padding: 10px;
        border-radius: 6px;
        font-size: 20px;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    .item:hover{
        cursor: pointer;
    }

    .item > a{
        text-decoration: none;
        align-items: center;
        column-gap: 10px;
        display: flex;
        color: black;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

}

/********MOBILE****VERSION********/

@media (max-width: 480px){
/*     .dettagli{
        
        
        position: absolute;
        background-color: white;
        display: flex;
        flex-direction: column;
        
        border-radius: 6px;
        box-shadow: 2px 4px 10px  black;
        margin-left: 19vh;
        margin-top: 70px;

        width: 22%;
        text-align: center;
        background-size: contain;
        contain: content;

        
    }
 */
    .dettagli > .option{
        display: flex;
        flex-direction: column;
        font-size: 20px;
        line-height: 4vh;
    }

    .dettagli > .option:hover{
        cursor: pointer;

        background-color: #023e7d;
        

        transition: 1s;
        text-decoration: none;
        
    }

    .option > a{
        text-decoration: none;
        color: black;
    }

    .option > a:hover{
        color: white;
    }

    .dropdown{
        display: flex;
        flex-direction: row;

        border: none;
    }

    .nav{
        
        
        
        margin-top: -20px;
        margin-left: -8px;
        margin-right: -8px;
        
        position: sticky;
        top: 0;
        background-color: #023e7d;
    }

    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        justify-content: center;
        position: relative;
        column-gap: 10px;
    }

    ul > .item{
        
        padding: 10px;
        border-radius: 6px;
        font-size: 15px;
        width: 30%;
        background-size: contain;
        background-color: white;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }

    .item:hover{
        cursor: pointer;
    }

    .item > a{
        text-decoration: none;

        align-items: center;

        column-gap: 10px;
        display: flex;

        color: black;
    }

}
</style>