window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const certFromURL = params.get("OUK-BCOM-2005-1147");
  if (certFromURL) {
    document.getElementById("certInput").value = certFromURL;
    verifyCert(certFromURL);
  }
};
