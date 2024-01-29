require("./utils/editOrReply");
const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('6914351165:AAElJDlItLYim7SEO_nNamJEse6appHW9gY')

if (bot === undefined) {
  throw new Error('Токена не существует!')
}
else {
  console.clear()
  console.log('token start!')
  // bot.use(Telegraf.log())
}


(async () => {
bot.start(async (ctx) => { 
  ctx.editOrReply(`Привет ${ctx.from.first_name}! Выберите сериал: `, {
    reply_markup: {
        inline_keyboard: [
            [ { text: "Солдаты", callback_data: "soldati" }, { text: "Морская душа", callback_data: "morskaya" }, { text: "Бородин. Возвращение генерала", callback_data: "borodin" }],
            [ { text: "Колобков. Настоящий полковник", callback_data: "kolobkov" }, { text: "Прапорщик Шматко, или Ё-моё", callback_data: "prapor" }, { text: "Смальков. Двойной шантаж", callback_data: "smalkov" }]
          ]
    }
    
  }).catch(e => {});
})

const soldatiCmd = (ctx) => { 
  ctx.editOrReply('Сезоны', {
    reply_markup: {
        inline_keyboard: [
            [ { text: "1 сезон", callback_data: "soldati_season1" }, { text: "2 сезон", callback_data: "season2" }, { text: "3 сезон", callback_data: "season3" }],
            [ { text: "4 сезон", callback_data: "season4" }, { text: "5 сезон", callback_data: "season5" }, { text: "6 сезон", callback_data: "season6" }],
            [ { text: "7 сезон", callback_data: "season7" }, { text: "8 сезон", callback_data: "season8" }, { text: "9 сезон", callback_data: "season9" }],
            [ { text: "10 сезон", callback_data: "season10" }, { text: "11 сезон", callback_data: "season11" }, { text: "12 сезон", callback_data: "season12" }],
            [ { text: "13 сезон", callback_data: "season13" }, { text: "14 сезон", callback_data: "season14" }, { text: "15 сезон", callback_data: "season15" }],
            [ { text: "16 сезон", callback_data: "season16" }, { text: "17 сезон", callback_data: "season17" }]
        ]
    }
    
  }).catch(e => {});
};

bot.command('soldati_season1', (ctx) => { 
  ctx.editOrReply('Все серии 1 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...').catch(e => {});
})

bot.command('soldati', soldatiCmd);

bot.launch();

})();



process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))