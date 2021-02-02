const { Router } = require("express");
const router = Router();
const pool = require("../db");
const mailgun = require("mailgun-js");

router.post("/", async (req, res) => {
  const DOMAIN = "sandbox82cf45605b1a483e86ad7d61fb935022.mailgun.org";
  const mg = mailgun({
    apiKey: "6e0c3d9a65d3b90cb41429897a40bb70-360a0b2c-7769cf55",
    domain: DOMAIN,
  });
  console.log("email");
  try {
    const {
      watch_name,
      watch_price,
      discount_size,
      watch_quantity,
      clients,
    } = req.body;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + "." + mm + "." + yyyy;

    // await clients.map(c => {
    // console.log(c.client_email);
    const data = {
      from:
        "Mailgun Sandbox <postmaster@sandbox82cf45605b1a483e86ad7d61fb935022.mailgun.org>",
      to: "schapoval.ant@gmail.com",
      subject: "НОВЫЙ ТОВАР УЖЕ ДОСТУПЕН",
      text: "НОВЫЕ ЧАСЫ УЖЕ У НАС!!!",
      html: `
                <div style="background:#B5EAFF;">
                <header style="background:#73B5DD; font-size:22px; text-align:center;">Магазин часов "STATUS" представляет новый товар</header>
                <h2 style="color: red; font-size:18px;">Дорогой клиент,</h2>
                <h2 style="font-size:16px;">Новая модель часов <span style="color: red;">"${watch_name}"</span> уже доступна в нашем магазине</h2>
                <h2>Цена: ${watch_price} грн.</h2>
                <h2>Но именно Вам мы дарим скидку в размере ${discount_size}% на покупку данной модели</h2>
                <h2>Спеши купить, в наличии всего ${watch_quantity} штук</h2>
                <footer style="font-size:12px background:#165479;">Информация актуальна на: ${today}</footer>
                </div>
                `,
    };
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
    // })
    window.location.reload();
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
