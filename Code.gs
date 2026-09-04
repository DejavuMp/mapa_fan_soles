function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('Pase Fan · Sucursales y retos')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
