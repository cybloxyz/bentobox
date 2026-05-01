<script>
  import Navbar from '$lib/components/navbar.svelte';
  import { language, currency, manualRates, cookedRecipes } from '$lib/store'; // Tambah cookedRecipes
  import { menuData } from '$lib/data/menudata'; 
  import "../../routes/styles/navbar.css";

  // Filter menuData: hanya tampilkan yang ID-nya ada di store cookedRecipes
  $: unlockedMenu = menuData.filter(item => $cookedRecipes.includes(item.id));
</script>

<div class="min-h-screen" style="background-color: #facfa2; background-image: url('/bgup3c.png');">
  <Navbar/>

  <div class="min-h-screen backdrop-blur-lg">
    <div class="pt-42 px-10 pb-32">
      
      {#if unlockedMenu.length === 0}
        <div class="flex flex-col items-center justify-center mt-20 text-center">
          <img src="/emp.png" alt="Empty" class="w-48 mb-6 opacity-70" />
          <h1 class="bby text-4xl text-[#380d07]">There is no recipe here, start cooking!</h1>
          <a href="/cook" class="mt-6 px-8 py-4 bg-[#380d07] text-white rounded-full pgm hover:scale-110 transition-all">
            Go to Kitchen
          </a>
        </div>
      {:else}
<div class="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10"> {#each unlockedMenu as item}
    <a href="/menu/recipes/{item.id}" class="block no-underline"> <div class="bg-[#e8d1b9] p-5 rounded-xl border-4 border-[#380d07] hover:scale-105 transition-all duration-300 shadow-xl h-full flex flex-col">
        <div class="w-full aspect-square flex justify-center items-center overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name.en} 
            class="w-full h-full object-contain drop-shadow-md"
          />
        </div>
        
        <div class="mt-4 flex-grow">
          <div class="pix text-[10px] bg-[#380d07] text-white inline-block px-2 py-0.5 rounded mb-2">
            {item.rarity}
          </div>

          <h2 class="text-xl pgm uppercase leading-tight">{item.name[$language]}</h2>
          
          <p class="text-lg font-bold mt-2 text-[#713822]">
            {#if $currency === 'id'}
              Rp {(item.price * manualRates.id).toLocaleString('id-ID')}
            {:else}
              $ {item.price.toFixed(2)}
            {/if}
          </p>
        </div>
      </div>
    </a>
  {/each} 
</div>
      {/if}

    </div>
  </div>
</div>

<style>
  /* Font face tetap sama seperti kode kamu */
  .pgm { font-family: 'pgm', sans-serif; }

  .bby { font-family: 'bby', sans-serif; }
</style>