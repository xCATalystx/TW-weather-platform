# weather-platform

本氣象平台是以vue3，搭配CLI以及vue-router做行撰寫。

本程式架構為App.vue連接到兩個頁面，分別為Home.vue和TownPage.vue。
Home.vue以臺灣地圖的呈現全臺各縣市的氣象資訊，可以透過點擊氣象小圖或該縣市區域查詢相關的氣象資訊；
TownPage.vue可以選擇特定縣市的鄉鎮市區進行查詢，可以獲得更詳細的氣象資訊以及未來一週的氣象預報。

本程式向中央氣象局索取最即時的氣象資料，提供欲得知氣象者另一種查詢管道。因為本程式專為氣象而製作，可以延伸應用至中央氣象局所提供的不同氣象資訊進行修改，例如氣候或天文等等。