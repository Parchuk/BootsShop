const Product = require('./models/product');
exports.createProducts = () => {
    return Product.insertMany([{
        title: 'Телевізор Hisense H43B7100',
        price: 7000,
        sale: 4000,
        imageUrl: 'https://i2.rozetka.ua/goods/19772022/hisense_h43b7100_images_19772022877.jpg',
        quantity: 30,
        color: 'black',
        shortDescription: 'Діагональ екрана 43" Роздільна здатність 3840x2160 Smart-платформа VIDAA Smart Діапазони цифрового тюнера DVB-C DVB-DVB-S2DVB-DVB-T2 Частота розгортки панелі 60 Гц',
        fullDescription: 'Діагональ екрана\r\n43\"\r\nПідтримка Smart TV\r\nз Smart TV\r\nРоздільна здатність\r\n3840x2160\r\nБездротовий інтерфейс\r\nТак\r\nТВ-тюнер\r\n2 ТВ-тюнери (аналоговий + цифровий)\r\nЯскравість\r\n200 кд/м2\r\nSmart-платформа\r\nVIDAA Smart\r\nКолір рамки\r\nЧорний\r\nДіапазони цифрового тюнера\r\nDVB-C\r\nDVB-S\r\nDVB-S2\r\nDVB-T\r\nDVB-T2\r\nHDR\r\nЗ HDR\r\nПризначення\r\nДля вітальні\r\nВихідна потужність звуку, Вт\r\n2 x 7\r\nПідтримка 3D\r\nБез 3D\r\nДодатково\r\nВбудований браузер\r\nКут огляду\r\n176°\r\nЧастота розгортки панелі\r\n60 Гц\r\nКраїна-виробник товару\r\nКитай\r\nАудіосистема\r\n14 Вт\r\nКраїна реєстрації бренда\r\nКитай\r\nГарантія\r\n12 місяців\r\nUSB-порт\r\nТак\r\nCI (PCMCIA) слот\r\nТак\r\nРоз\'єми (порти)\r\n3 х HDMI\r\n2 x USB\r\n1 x Антенний вхід RF\r\n1 x Антенний вхід (супутниковий)\r\n1 x Цифровий аудіовихід (оптичний)\r\n1 x Композитний AV вхід\r\n1 х Композитний аудіовихід\r\n1 х RJ-45 (LAN)\r\n1 х CI слот\r\nЕнергоспоживання\r\nУ режимі очікування: 0.5 Вт\r\nVESA\r\n200x200 мм\r\nРозміри з підставкою\r\n969 х 612 х 193 мм\r\nРозміри без підставки\r\n696 х 564 х 85 мм\r\nВага з підставкою\r\n7.1 кг\r\nВага без підставки\r\n7 кг\r\nКомплект постачання\r\nТелевізор\r\nПульт ДК\r\nДокументація\r\nФорма екрана\r\nПлоский',
        brand: 'Hisense',
        model: 'H43B7100',
        released: '2020-09-09 00:00:00',
        dimensions: '969 х 612 х 193 мм',
        displaySize: 50,
        features: 'Чітке зображення 4К Телевізори компанії Hisense з сертифікацією UHD підтримують роздільну здатність, що в 4 рази перевищує роздільну здатність формату FULL HD, дозволяючи побачити ще більше деталей зображення. ',
        userId: '5f86ce9ef2bd3e172e8702bb'
    },
    {
        title: 'Телевізор Kivi 40F600GU',
        price: 200000,
        sale: 3000,
        imageUrl: 'https://i2.rozetka.ua/goods/19703770/kivi_40f600g_images_19703770861.jpg',
        quantity: 25,
        color: 'gray',
        shortDescription: 'Діагональ екрана 40" Роздільна здатність 1920x1080 Smart-платформа Android Діапазони цифрового тюнера DVB-C DVB-T2 Частота оновлення 300 Гц (MEMC)',
        fullDescription: 'Діагональ екрана\r\n40\"\r\nПідтримка Smart TV\r\nз Smart TV\r\nРоздільна здатність\r\n1920x1080\r\nБездротовий інтерфейс\r\nBluetooth\r\nТак\r\nТВ-тюнер\r\n2 ТВ-тюнери (аналоговий + цифровий)\r\nЯскравість\r\n350 кд/м²\r\nSmart-платформа\r\nAndroid\r\nКолір рамки\r\nСірий\r\nДіапазони цифрового тюнера\r\nDVB-C\r\nDVB-T2\r\nКонтрастність\r\n8500:1\r\nHDR\r\nЗ HDR\r\nЧас відгуку\r\n9 мс\r\nВихідна потужність звуку, Вт\r\n2 x 8\r\nЧастота оновлення\r\n300 Гц (MEMC)\r\nКут огляду\r\n178° / 178°\r\nКраїна-виробник товару\r\nКитай\r\nСистема кольоровості (підтримувані стандарти)\r\nPAL, SECAM\r\nКраїна реєстрації бренда\r\nНідерланди\r\nГарантія\r\n36 місяців\r\nПідтримувані формати\r\nMPEG / MP4 / AVI(XVID) / AVI(MotionJpeg) / WMV9 / MKV / WEBM / 3GPP/ WAV / MP3 / WMA / FLAC / JPEG / PNG / BMP / GIF\r\nПідтримувані відеосигнали\r\n1080p, 1080i, 720p, 576p, 576i, 480p, 480i, 24p\r\nUSB-порт\r\nТак\r\nCI (PCMCIA) слот\r\nТак\r\nРоз\'єми (порти)\r\n2 x USB\r\n2 x HDMI\r\n3.5 Audio\r\n1 x Оптичний аудіовихід\r\n1 х Композитний вхід\r\n1 х компонентний вхід\r\n1 х Ethernet\r\nДодаткові характеристики\r\nHDMI CEC\r\nHDMI ARC\r\nЕнергоспоживання\r\nУ режимі роботи: 60 Вт\r\nVESA\r\n200x200 мм\r\nРозміри з підставкою\r\n912x594x230 мм\r\nРозміри без підставки\r\n912x536x69 мм\r\nВага з підставкою\r\n6.6 кг\r\nВага без підставки\r\n6.3 кг\r\nКомплект постачання\r\nТелевізор\r\nПідставка\r\nПульт ДК (з батарейками)\r\nІнструкція\r\nГарантійний талон\r\nФорма екрана\r\nПлоский',
        brand: 'Kivi',
        model: '40F600GU',
        released: '2020-09-04 00:00:00',
        dimensions: '912x594x230 мм',
        displaySize: 50,
        features: '  Краще зображення LED дисплея Матриця класу А+ від провідних світових виробників',
        userId: '5f86ce9ef2bd3e172e8702bb'
    },
    {
        title: 'Телевізор Samsung UE50NU7002UXUA',
        price: 5000,
        sale: 3000,
        imageUrl: 'https://stylus.ua/thumbs/378x378/79/0b/1554681.jpeg',
        quantity: 20,
        color: 'black',
        shortDescription: 'Діагональ екрана\r\n32\"\r\nРоздільна здатність\r\n1920x1080\r\nSmart-платформа\r\nTizen\r\nДіапазони цифрового тюнера\r\nDVB-C\r\nDVB-S\r\nDVB-S2\r\nDVB-T\r\nDVB-T2',
        fullDescription: 'Діагональ екрана\r\n50\"\r\nПідтримка Smart TV\r\nз Smart TV\r\nРоздільна здатність\r\n3840x2160\r\nБездротовий інтерфейс\r\nТак\r\nТВ-тюнер\r\n2 ТВ-тюнери (аналоговий + цифровий)\r\nSmart-платформа\r\nTizen\r\nКолір рамки\r\nЧорний\r\nДіапазони цифрового тюнера\r\nDVB-C\r\nDVB-S2\r\nDVB-T2\r\nКонтрастність\r\nMega Contrast\r\nHDR\r\nЗ HDR\r\nЧастота оновлення\r\n1300 Гц (PQI)\r\nПроцесор зображення\r\nQuad-Core\r\nКраїна-виробник товару\r\nКитай\r\nСистема кольоровості (підтримувані стандарти)\r\nPurColor\r\nАудіосистема\r\nВихідна потужність звуку: 20 Вт\r\nDolby Digital Plus\r\nКраїна реєстрації бренда\r\nКорея\r\nГарантія\r\n12 місяців офіційної гарантії від виробника\r\nПідтримувані формати\r\nAVI, MKV, ASF, MP4, 3GP, MOV, FLV, VRO, VOB, PS, TS, SVAF\r\nUSB-порт\r\nТак\r\nCI (PCMCIA) слот\r\nТак\r\nРоз\'єми (порти)\r\n2 x HDMI;\r\n1 x USB;\r\n1 x Оптичний цифровий аудіовихід;\r\n1 x CI слот;\r\n1 x Антенний вхід;\r\n1 x Антенний вхід (супутниковий);\r\nVESA\r\n200x200 мм\r\nВага з підставкою\r\n9.5 кг\r\nВага без підставки\r\n9.4 кг\r\nКомплект постачання\r\nТелевізор\r\nПідставка\r\nПульт ДК з батарейками\r\nКабель живлення\r\nДокументація\r\nФорма екрана\r\nПлоский',
        brand: 'Samsung',
        model: 'UE50NU7002UXUA',
        released: '2020-09-13 00:00:00',
        dimensions: '3840x2160 мм',
        displaySize: 50,
        features: '  Краще зображення LED дисплея Матриця класу А+ від провідних світових виробників',
        userId: '5f86ce9ef2bd3e172e8702bb'
    },
    {
        title: 'Телевізор Samsung UE32T5300AUXUA',
        price: 7000,
        sale: 6999,
        imageUrl: 'https://stylus.ua/thumbs/378x378/2a/83/1552176.jpeg',
        quantity: 45,
        color: 'black',
        shortDescription: 'Діагональ екрана\r\n50\"\r\nРоздільна здатність\r\n3840x2160\r\nSmart-платформа\r\nTizen\r\nДіапазони цифрового тюнера\r\nDVB-C\r\nDVB-S2\r\nDVB-T2\r\nЧастота оновлення\r\n1300 Гц (PQI)',
        fullDescription: 'Діагональ екрана\r\n50\"\r\nПідтримка Smart TV\r\nз Smart TV\r\nРоздільна здатність\r\n3840x2160\r\nБездротовий інтерфейс\r\nТак\r\nТВ-тюнер\r\n2 ТВ-тюнери (аналоговий + цифровий)\r\nSmart-платформа\r\nTizen\r\nКолір рамки\r\nЧорний\r\nДіапазони цифрового тюнера\r\nDVB-C\r\nDVB-S2\r\nDVB-T2\r\nКонтрастність\r\nMega Contrast\r\nHDR\r\nЗ HDR\r\nЧастота оновлення\r\n1300 Гц (PQI)\r\nПроцесор зображення\r\nQuad-Core\r\nКраїна-виробник товару\r\nКитай\r\nСистема кольоровості (підтримувані стандарти)\r\nPurColor\r\nАудіосистема\r\nВихідна потужність звуку: 20 Вт\r\nDolby Digital Plus\r\nКраїна реєстрації бренда\r\nКорея\r\nГарантія\r\n12 місяців офіційної гарантії від виробника\r\nПідтримувані формати\r\nAVI, MKV, ASF, MP4, 3GP, MOV, FLV, VRO, VOB, PS, TS, SVAF\r\nUSB-порт\r\nТак\r\nCI (PCMCIA) слот\r\nТак\r\nРоз\'єми (порти)\r\n2 x HDMI;\r\n1 x USB;\r\n1 x Оптичний цифровий аудіовихід;\r\n1 x CI слот;\r\n1 x Антенний вхід;\r\n1 x Антенний вхід (супутниковий);\r\nVESA\r\n200x200 мм\r\nВага з підставкою\r\n9.5 кг\r\nВага без підставки\r\n9.4 кг\r\nКомплект постачання\r\nТелевізор\r\nПідставка\r\nПульт ДК з батарейками\r\nКабель живлення\r\nДокументація\r\nФорма екрана\r\nПлоский',
        brand: 'Samsung',
        model: 'UE50NU7002UXUA',
        released: '2020-09-13 00:00:00',
        dimensions: '969 х 612 х 193 мм мм',
        displaySize: 50,
        features: 'Зображення у ваших улюблених ТБ-програмах і фільмах тепер не відрізняється від реальності. Роздільна здатність Full HD удвічі перевищує роздільну здатність зображення HD-телевізорів.',
        userId: '5f86ce9ef2bd3e172e8702bb'
    }]);
};