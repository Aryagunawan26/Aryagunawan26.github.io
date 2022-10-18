$(document).ready(() => {
    $("td").click(function (event) {
      alert("Sekarang ada di " + $(this).html() + "!");
    });
    $("th").click(function (event) {
      alert("sekarang ada di " + $(this).html() + "!");
    });
  });