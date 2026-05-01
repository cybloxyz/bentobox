<script>
  import { language } from '$lib/store';
  import { menuData } from '$lib/data/menudata';

  // Kita ambil 4 item teratas untuk tampilan 2x2 seperti desain aslimu
  const staffPicks = menuData.slice(0, 4);
</script>

<div class="px-4 md:px-20 lg:px-48">
  <div class="md:my-12 my-6 gap-4 md:gap-8 grid grid-cols-2 grid-rows-2 bg-transparent">
    
    {#each staffPicks as item}
      <div class="group flex justify-center items-center text-center col-span-1 row-span-1 rounded-3xl bg-[#e8d1b9] border-[#380d07] border-8border-[16px] hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden h-45 md:h-75">
        
        <div class="grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-6 w-full h-full">
          <div class="flex justify-center items-center p-2">
            <img 
              src={item.image} 
              alt={item.name.en} 
              class="w-full max-w-30 md:max-w-50 object-contain drop-shadow-md group-hover:rotate-12 transition-transform"
            />
          </div>
          
          <h2 class="pgm text-sm md:text-3xl uppercase leading-tight text-[#380d07]">
            {item.name[$language] || item.name.en}
          </h2>
          
        </div>

      </div>
    {/each}

  </div>
</div>

<style>
  .pgm {
    font-family: 'Pgm', sans-serif;
  }
</style>