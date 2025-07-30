window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const certFromURL = params.get("cert");
  if (certFromURL) {
    document.getElementById("certInput").value = certFromURL;
    verifyCert(certFromURL);
  }
};
