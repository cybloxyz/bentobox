<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/navbarcook.svelte';
  import { fade, scale, fly } from 'svelte/transition';
  import { cookedRecipes, language } from '$lib/store'; // Tambah language store
  import { menuData } from '$lib/data/menudata';
  import { goto } from '$app/navigation';
  import { allQuestions } from '$lib/data/quiz';
  import { globalStreak } from '$lib/store';

  // Konten teks UI Statis
  const ui = {
    title: { id: "Siap Memasak?", en: "Ready to Cook?" },
    desc: { id: "Jawab 5 pertanyaan tentang bahan makanan untuk membuka menu baru!", en: "Answer 5 food ingredient questions to unlock a new menu!" },
    start: { id: "MULAI!", en: "START!" },
    question: { id: "Pertanyaan", en: "Question" },
    score: { id: "Skor", en: "Score" },
    failedTitle: { id: "Yah Ampun!", en: "Oh No!" },
    failedDesc: { id: "Masakanmu gosong! Gagal mendapatkan menu baru.", en: "Your food is burnt! Failed to get a new menu." },
    revealTitle: { id: "Kamu Mendapatkan", en: "You Revealed" },
    revealDesc: { id: "Resep ini sekarang tersedia di menu kamu!", en: "This recipe is now available in your menu!" },
    btnMenu: { id: "KE MENU", en: "GO TO MENU" },
    btnCook: { id: "COBA LAGI", en: "TRY AGAIN" }
  };

  let currentQuestions = [];
  let step = 0; 
  let currentQIndex = 0;
  let score = 0;
  let showPopup = false;
  let finalStatus = "";
  let revealedMeal = null;
  let streak = 0; // Untuk melacak jawaban benar berturut-turut
  let maxStreak = 0; // Streak tertinggi dalam satu sesi masak

  onMount(() => {
    // Ambil 5 soal random
    currentQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
  });

function resetGame() {
    // Reset semua state ke awal
    step = 0;
    currentQIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;
    showPopup = false;
    finalStatus = "";
    revealedMeal = null;
    
    // Ambil soal baru lagi dari quiz.js
    if (allQuestions && allQuestions.length > 0) {
      currentQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
    }
  }

  // Panggil resetGame saat pertama kali load
  onMount(() => {
    resetGame();
  });

function handleAnswer(index) {
    if (index === currentQuestions[currentQIndex].c) {
      score++;
      streak++; // Tambah streak kalau benar
      if (streak > maxStreak) maxStreak = streak; // Catat streak tertinggi
    } else {
      streak = 0; // Reset streak kalau salah satu saja
    }

    if (currentQIndex < 4) {
      currentQIndex++;
    } else {
      calculateResult();
    }
  }

function calculateResult() {
    // Cek apakah di sesi (kuis) ini dia bener SEMUA (5/5)
    if (score === 5) {
        // Kalau bener semua, streak global bertambah
        globalStreak.update(n => n + 1);
    } else {
        // Kalau ada salah satu saja dalam satu kuis, streak global PUTUS (reset ke 0)
        globalStreak.set(0);
    }

    // Tentukan status berdasarkan STREAK GLOBAL (antar kuis)
    if ($globalStreak >= 5) {
        finalStatus = "SUPER RARE";
    } else if ($globalStreak >= 3) {
        finalStatus = "RARE";
    } else if (score > 0) {
        finalStatus = "AVERAGE";
    } else {
        finalStatus = "FAILED";
    }

    // 2. Tentukan Menu yang di-reveal
    if (finalStatus === "FAILED") {
      // Menu khusus makanan gosong
      revealedMeal = {
        name: { id: "Makanan Gosong", en: "Burnt Food" },
        image: "/emp.png", // Pastikan ada gambarnya di folder static
        id: "burnt"
      };
    } else {
      // Ambil menu random dari database kamu
      revealedMeal = menuData[Math.floor(Math.random() * menuData.length)];
      
      // Simpan ke menu otomatis kalau bukan failed
      cookedRecipes.update(current => {
        if (!current.includes(revealedMeal.id)) {
          return [...current, revealedMeal.id];
        }
        return current;
      });
    }

    showPopup = true;
    // Reset streak untuk sesi masak berikutnya
    streak = 0;
    maxStreak = 0;
  }
</script>

<div class="min-h-screen flex flex-col items-center justify-center p-6" 
     style="background-color: #facfa2; background-image: url('/bgup3c.png');">
     <Navbar/>
  
  {#if step === 0}
    <div in:scale class="text-center bg-white/80 p-10 rounded-3xl border-4 border-[#380d07] backdrop-blur-md">
      <h1 class="pgm text-5xl mb-6 uppercase">{ui.title[$language]}</h1>
      <p class="bby text-xl mb-8">{ui.desc[$language]}</p>
      <button on:click={() => step = 1} 
              class="px-12 py-5 bg-[#713822] text-white pgm text-2xl rounded-full hover:scale-110 transition-all shadow-lg">
        {ui.start[$language]}
      </button>
    </div>

  {:else if step === 1 && currentQuestions.length > 0}
    <div in:fade class="w-full max-w-lg bg-[#e8d1b9] p-8 rounded-2xl border-4 border-[#380d07] shadow-2xl">
      <div class="flex justify-between mb-4">
        <span class="pix text-lg">{ui.question[$language]} {currentQIndex + 1}/5</span>
        <span class="pix text-lg">{ui.score[$language]}: {score}</span>
      </div>
      
      <h2 class="bby text-3xl mb-8 text-center">{currentQuestions[currentQIndex].q[$language]}</h2>
      
      <div class="grid gap-4">
        {#each currentQuestions[currentQIndex].a[$language] as answer, i}
          <button on:click={() => handleAnswer(i)}
                  class="w-full py-4 px-6 bg-white hover:bg-[#713822] hover:text-white border-2 border-[#380d07] rounded-xl transition-all bby text-xl text-left">
            {answer}
          </button>
        {/each}
      </div>
    </div>
  {/if}

  {#if showPopup}
    <div class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
      <div in:fly={{ y: 50 }} class="bg-white rounded-3xl border-8 border-[#713822] p-8 max-w-sm w-full text-center relative overflow-hidden">
        
        {#if finalStatus === "FAILED"}
          <h2 class="pgm text-4xl text-red-600 mb-4 uppercase">{ui.failedTitle[$language]}</h2>
          <p class="bby text-xl mb-6">{ui.failedDesc[$language]}</p>
        {:else}
          <h2 class="pgm text-3xl mb-2 uppercase text-[#713822]">{ui.revealTitle[$language]}</h2>
          <h1 class="pgm text-5xl mb-4 text-[#541a0e] tracking-widest">{finalStatus}!</h1>
          
          <div class="bg-[#fdf2e9] p-4 rounded-xl mb-6 border-2 border-dashed border-[#713822]">
            <img src={revealedMeal.image} alt="result" class="w-32 h-32 mx-auto object-contain mb-2" />
            <p class="pgm text-2xl uppercase">{revealedMeal.name[$language]}</p>
          </div>
          
          <p class="bby text-lg mb-6 text-gray-600">{ui.revealDesc[$language]}</p>
        {/if}

        <button on:click={() => goto('/menu')} 
                class="w-full py-4 my-4 bg-[#713822] text-white pgm text-2xl rounded-xl hover:bg-[#380d07] transition-all">
          {ui.btnMenu[$language]}
        </button>
        <button on:click={resetGame} 
                class="w-full py-4 bg-[#713822] text-white pgm text-2xl rounded-xl hover:bg-[#380d07] transition-all">
          {ui.btnCook[$language]}
        </button>
      </div>
    </div>
  {/if}
</div>
<style>
    .pix { font-family: 'pix';}
    .bby { font-family: 'bby';}
    .pgm { font-family: 'pgm';}
</style>
