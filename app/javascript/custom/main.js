class CookieBar {
  constructor() {
    this.cookiesBar = document.getElementById("cookies-bar");
  }

  init() {
    if (this.cookiesAllowed()) {
    }

    this.addButtonBehaviors();
  }

  cookiesAllowed() {
    return Cookies.get("allow_cookies") === "yes";
  }

  addButtonBehaviors() {
    if (!this.cookiesBar) {
      return;
    }

    this.cookiesBar
      .querySelector(".accept")
      .addEventListener("click", () => this.allowCookies(true));

    this.cookiesBar
      .querySelector(".reject")
      .addEventListener("click", () => this.allowCookies(false));
  }

  allowCookies(allow) {
    if (allow) {
      Cookies.set("allow_cookies", 1, {
        expires: 365,
      });
    } else {
      Cookies.set("allow_cookies", 0, {
        expires: 365,
      });
    }

    this.cookiesBar.classList.add("hide-banner");
  }
}

window.onload = function () {
  const cookieBar = new CookieBar();

  cookieBar.init();
};
