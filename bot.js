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
            [ { text: "Солдаты", callback_data: "soldati" }]
          ]
    }
    
  }).catch(e => {});
})

const soldatiCmd = (ctx) => { 
  ctx.editOrReply('Сезоны', {
    reply_markup: {
        inline_keyboard: [
          [ { text: "1 сезон", callback_data: "soldati_season1" }]
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