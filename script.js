let urlInput = document.getElementById("urlInput");
let shortenBtn = document.getElementById("shortenBtn");
let result = document.getElementById("result");

shortenBtn.addEventListener("click", function () {

    let longUrl = urlInput.value;

    if (longUrl === "") {
        alert("Please enter a URL");
        return;
    }

    let shortId = Math.random()
        .toString(36)
        .substring(2, 8);

    result.innerHTML = `
    <p>Your Short Link:</p>

    <a href="${longUrl}" target="_blank">
      short.link/${shortId}
    </a>
  `;

});