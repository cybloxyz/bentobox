<script>
  import { language, currency } from '$lib/store';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  // Konten teks
  const home = { id: `menu`, en: `menu` };
  const best = { id: `masak!`, en: `cook!` };
  const currencyLabel = { id: `RP`, en: `USD` };
  const hom = { id: `home`, en: `home` };

  // Fungsi ganti data (Update store)
  const changecurr = () => currency.update(n => n === "id" ? "en" : "id");
  const changelang = () => language.update(n => n === "id" ? "en" : "id" );
  
</script>

<nav 
  class="navbar"
  in:fly={{ y: -200, duration: 800, easing: cubicOut }}
>
  <div class="group-logos flex md:gap-8 lg:gap-8 gap-1 mx-2">
    <button 
      class="nav-logo cursor-pointer select-none flex items-center bg-transparent border-none p-0"
      on:click={changecurr}
    >
      <img src="/exchange.webp" alt="exchange" class="imeg inline-block md:mr-2 lg:mr-2 mr-0" />
      <span> {currencyLabel[$currency]} </span>
    </button>

    <button 
      class="nav-logo cursor-pointer select-none flex items-center bg-transparent border-none p-0"
      on:click={changelang}
    >
      <img src="/{$language}.webp" alt="flag" class="imeg-f inline-block lg:mr-2 md:mr-2 mr-0" />
      <span class="brand-text">COOQUIZZ</span>
    </button>
  </div>
          
  <ul class="nav-links pix ">
    <li>
      <a href="/menu">{home[$language]}</a>
    </li>
    <li>
      <a href="/cook">{best[$language]}</a>
    </li>
    <li>
      <a href="/">{hom[$language]}</a>
    </li>
  </ul>
</nav>

<style>
  /* Masukkan semua CSS kamu di sini */
  .navbar {
    position: fixed;
    top: 4%;
    left: 3%;
    right: 3%;
    height: 120px;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    border-radius: 36px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    z-index: 1000;
  }

  .nav-logo {
    font-family: "pgm", sans-serif; /* Pakai nama font di layout.css */
    font-size: 36px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }

  .imeg, .imeg-f {
    height: 48px;
    image-rendering: pixelated;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 32px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-family: "pgm";
    font-size: 36px;
    display: block;
  }

  /* MEDIA QUERIES (Sama seperti punyamu) */
  @media (max-width: 1080px) {
    .navbar {
      height: 60px;
      top: 2%;
      border-radius: 14px;
      justify-content: center;
      gap: 10px;
    }
    .nav-logo, .nav-links a { font-size: 16px; }
    .imeg, .imeg-f { height: 24px; }
    .nav-links { gap: 10px; }
  }

  @media (max-width: 768px) {
    .navbar { height: 50px; padding: 0 10px; }
    .nav-logo { font-size: 14px; }
    .nav-links a { font-size: 12px; }
    .imeg, .imeg-f { height: 16px; }
  }
</style>
