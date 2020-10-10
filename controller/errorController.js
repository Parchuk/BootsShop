exports.get404 = (req, res, next) => {
    res.status(404).render("pages/404", {
      pageTitle: "BootShop - Ошибка 404, Страница не найдена",
      path: "/404",
    });
  };