document.addEventListener("DOMContentLoaded", function() {
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

  // phone optimization
  volumeSlider.addEventListener('touchstart', function(event) {
    event.preventDefault();
    handleVolumeUpdate(event);
  });
  volumeSlider.addEventListener('touchmove', function(event) {
    event.preventDefault();
    handleVolumeUpdate(event);
  });
  function handleVolumeUpdate(event) {
    const touch = event.touches[0]; // Get the first touch point
    const sliderRect = volumeSlider.getBoundingClientRect();
    const touchX = touch.clientX - sliderRect.left; // Touch position relative to slider

    // Calculate percentage (ensure it stays between 0 and 100)
    let newVolumePercent = Math.max(0, Math.min(100, (touchX / sliderRect.width) * 100));

    // Update slider and audio volume
    volumeSlider.value = newVolumePercent;
    audio.volume = newVolumePercent / 100;
    volumeCurrent.textContent = newVolumePercent + '%';
  }
});