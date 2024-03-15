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
  

});