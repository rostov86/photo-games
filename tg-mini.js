(function () {
  var HUB = "https://rostov86.github.io/photo-games/";

  function onHub() {
    var path = (location.pathname || "").replace(/\/+$/, "");
    return /\/photo-games$/.test(path) || /\/photo-games\/index\.html$/.test(path);
  }

  function boot() {
    var tg = window.Telegram && window.Telegram.WebApp;
    if (!tg) return;
    try { tg.ready(); } catch (e) {}
    try { tg.expand(); } catch (e) {}
    try {
      if (typeof tg.disableVerticalSwipes === "function") tg.disableVerticalSwipes();
    } catch (e) {}
    if (onHub()) {
      try { tg.setHeaderColor("#111111"); } catch (e) {}
      try { tg.setBackgroundColor("#111111"); } catch (e) {}
      if (tg.BackButton) tg.BackButton.hide();
      return;
    }
    if (tg.BackButton) {
      tg.BackButton.show();
      tg.BackButton.onClick(function () {
        location.href = HUB;
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
