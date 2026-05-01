<script>
  import { slide } from 'svelte/transition';
  import { language } from '$lib/store';

  // Data FAQ (Pindahan dari faq.jsx)
  const faqs = {
    en: [
      {
        question: "What is BentoBox?✮⋆˙",
        answer: "BentoBox is a creative service platform I built. Through BentoBox, you can order various services all in one place: custom illustrations, personalized t-shirts, interactive websites, game development, and custom stickers."
      },
      {
        question: "How to order? 📦",
        answer: "You can click the 'Shop Now' button and choose your favorite menu. After that, you can contact me via WhatsApp or Email."
      }
    ],
    id: [
      {
        question: "Apa itu BentoBox?✮⋆˙",
        answer: "BentoBox adalah platform layanan kreatif yang saya bangun. Lewat BentoBox, kamu bisa pesan berbagai layanan dalam satu tempat: ilustrasi custom, kaos personal, website interaktif, hingga stiker custom."
      },
      {
        question: "Gimana cara pesannya? 📦",
        answer: "Kamu bisa klik tombol 'Belanja Sekarang' dan pilih menu favoritmu. Setelah itu, kamu bisa hubungi saya lewat WhatsApp atau Email."
      }
    ]
  };

  // State untuk melacak FAQ mana yang terbuka (null = semua tutup)
  let openIndex = null;

  function toggle(index) {
    if (openIndex === index) {
      openIndex = null;
    } else {
      openIndex = index;
    }
  }
</script>

<div class="bg-transparent pt-4 pb-20 px-3 sm:px-5">
  <div class="lg:max-w-3xl sm:max-w-lg md:max-w-2xl max-w-xs mx-auto">
    
    <h1 class="bg-[#713822] text-white px-6 py-6 rounded-full text-center mb-4 text-3xl sm:text-5xl pgm shadow-xl">
      {$language === "en" ? "Frequently Asked Questions" : "Pertanyaan Umum"}
    </h1>
    
    <p class="text-center mb-10 font-light text-white/80">
      {$language === "en" ? "Here are some questions that may help you!" : "Beberapa pertanyaan yang mungkin membantu kamu!"}
    </p>

    {#each faqs[$language] as faq, i}
      <article class="flex flex-col gap-3 bg-[#ddbc93]/60 backdrop-blur-xl border-[6px] border-[#380d07] rounded-2xl px-5 py-6 mb-4 shadow-lg transition-all">
        <button
          class="flex justify-between items-center text-left text-lg sm:text-xl font-bold text-[#380d07]"
          on:click={() => toggle(i)}
        >
          <h2>{faq.question}</h2>
          <span class="transform transition-transform {openIndex === i ? 'rotate-180' : ''}">
            {openIndex === i ? "★" : "☆"}
          </span>
        </button>

        {#if openIndex === i}
          <div transition:slide={{ duration: 300 }}>
            <p class="text-base text-yellow-900 sm:text-lg leading-7 font-medium pt-2 border-t border-[#380d07]/20">
              {faq.answer}
            </p>
          </div>
        {/if}
      </article>
    {/each}

    <div class="bby text-center mt-12 text-white">
      {$language === "en" ? "Haven't got your answer?" : "Belum ketemu jawabannya?"}
      <a href="mailto:emailmu@gmail.com" class="underline font-bold hover:text-[#713822]">Contact Me!</a>
    </div>
  </div>
</div>

<style>
  .pgm {
    font-family: 'pgm', sans-serif;
  }

  .bby {
    font-family: 'bby', sans-serif;
  }
</style>