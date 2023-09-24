export function turnOnCookies(setCookiesAllowed) {

    const currentDate = new Date().toLocaleDateString("en-UK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  

    setCookiesAllowed({
      cookiesAllowed: true,
      date: currentDate,
    });
  }