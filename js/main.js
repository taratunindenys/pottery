<script>
$(document).ready(function () {
  var lang = document.getElementById("lang");
  lang.onchange = function () {
    window.location =
      "https://studyintomsk.ru" +
      lang.options[lang.options.selectedIndex].value;
  };
});
</script>