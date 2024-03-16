document.addEventListener("DOMContentLoaded", function() {
  /* landing page */
  const landingPage = document.getElementById('landing-page');
  const closeLandingBtn = document.getElementById('close-landing-button');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
    
  // show the landing page on load and hide other items
  landingPage.style.display = 'flex';
  header.style.display = 'none';
  main.style.display = 'none'
  
  // hide with action button
  closeLandingBtn.addEventListener('click', function() {
    landingPage.style.display = 'none';
    header.style.display = 'flex';
    main.style.display = 'flex';
  });

  /* hyperlinks */
  const buyBtn = document.getElementById('buy-button');
  const chartBtn = document.getElementById('chart-button');
  const twitterBtn = document.getElementById('twitter-button');
  const telegramBtn = document.getElementById('tg-button');
  buyBtn.addEventListener('click', function() {
    window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=', '_blank');
  });
  chartBtn.addEventListener('click', function() {
    window.open('https://dexscreener.com/', '_blank');
  });
  twitterBtn.addEventListener('click', function() {
    window.open('https://x.com/finisusdoteth', '_blank');
  });
  telegramBtn.addEventListener('click', function() {
    window.open('https://t.me/', '_blank');
  });

  /* copy contract logic */
  const copyButton = document.getElementById('copy-ca-button');
  const textToCopy = "4doMBvaDcGrJZccxm1cPySTtkm6NMNJKbJ7HWDAHY5rj";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });

  /* music widget logic */
  const musicWidget = document.getElementById('music-widget');
  const playButton = document.getElementById('play-music-button');
  const pauseButton = document.getElementById('pause-music-button');
  const audio = document.getElementById('song');
  
  let isPlaying = false;
  
  musicWidget.addEventListener('click', function() {
    if (isPlaying) {
      audio.pause();
      playButton.style.display = 'block';
      pauseButton.style.display = 'none';
    } else {
      audio.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
    }
    isPlaying = !isPlaying;
  });
  
  // handle when song ends
  audio.onended = function() {
    playButton.style.display = 'block';
    pauseButton.style.display = 'none';
    isPlaying = false;
  };

  /* website volume logic */
  const volumeDisplay = document.getElementById('volume-display');
  const volumeSliderContainer = document.getElementById('volume-slider-container');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeCurrent = document.getElementById('volume-current');
  
  let isSliderVisible = false;

  // set volume based on slider's initial set volume
  volumeSlider.value = 44;
  audio.volume = volumeSlider.value / 100;

  volumeDisplay.addEventListener('click', function() {
    isSliderVisible = !isSliderVisible;
    volumeSliderContainer.style.display = isSliderVisible ? 'block' : 'none';
  });

  //close slider when clicking outside
  document.addEventListener('click', function(event) {
    if (isSliderVisible && !volumeSliderContainer.contains(event.target) && !volumeDisplay.contains(event.target)) {
      volumeSliderContainer.style.display = 'none';
      isSliderVisible = false;
    }
  });

  volumeSlider.addEventListener('input', function() {
    const newVolume = volumeSlider.value / 100;
    audio.volume = newVolume;
    volumeCurrent.textContent = volumeSlider.value + '%';
  });

  /* Make It Rain */
  const bandsContainer = document.querySelector(".bands");
  let isAnimationOn = true; // Start animation by default

  function makeItRain() {
    const band = document.createElement("img");
    band.classList.add("cash");
    band.style.position = "absolute";
    band.style.left = `${getRandomInt(window.innerWidth)}px`;
    band.src = "./metadata/money-with-wings.png";
    band.style.width = "60px";
    band.style.height = "auto";
    bandsContainer.appendChild(band);

    setTimeout(() => {
      band.remove();
    }, 12000);
  }
  setInterval(() => {
    makeItRain();
  }, 500);
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const emojiSwitch = document.getElementById('emoji-switch-container');
  const emojiOn = document.getElementById('emoji-back-on');
  const emojiOff = document.getElementById('emoji-back-off');

  emojiSwitch.addEventListener('click', () => {
    isAnimationOn = !isAnimationOn;

    if (isAnimationOn) {
      emojiOn.style.display = 'block';
      emojiOff.style.display = 'none';
      bandsContainer.style.display = 'block'; // Show animation
      makeItRain(); // Restart animation
    } else {
      emojiOn.style.display = 'none';
      emojiOff.style.display = 'block';
      bandsContainer.style.display = 'none'; // Hide animation
      bandsContainer.innerHTML = '';  // Clear existing animations
    }
  });

  makeItRain();
});