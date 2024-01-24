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
            [ { text: "1 сезон", callback_data: "season1" }, { text: "2 сезон", callback_data: "season2" }, { text: "3 сезон", callback_data: "season3" }],
            [ { text: "4 сезон", callback_data: "season4" }, { text: "5 сезон", callback_data: "season5" }, { text: "6 сезон", callback_data: "season6" }],
            [ { text: "7 сезон", callback_data: "season7" }, { text: "8 сезон", callback_data: "season8" }, { text: "9 сезон", callback_data: "season9" }],
            [ { text: "10 сезон", callback_data: "season10" }, { text: "11 сезон", callback_data: "season11" }, { text: "12 сезон", callback_data: "season12" }],
            [ { text: "13 сезон", callback_data: "season13" }, { text: "14 сезон", callback_data: "season14" }, { text: "15 сезон", callback_data: "season15" }],
            [ { text: "16 сезон", callback_data: "season16" }, { text: "17 сезон", callback_data: "season17" }]
        ]
    }
    
  }).catch(e => {});
};

const season1 = (ctx) => { 
  ctx.reply('Все серии 1 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season2 = (ctx) => { 
  ctx.reply('Все серии 2 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season3 = (ctx) => { 
  ctx.reply('Все серии 3 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season4 = (ctx) => { 
  ctx.reply('Все серии 4 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season5 = (ctx) => { 
  ctx.reply('Все серии 5 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season6 = (ctx) => { 
  ctx.reply('Все серии 6 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season7 = (ctx) => { 
  ctx.reply('Все серии 7 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season8 = (ctx) => { 
  ctx.reply('Все серии 8 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season9 = (ctx) => { 
  ctx.reply('Все серии 9 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season10 = (ctx) => { 
  ctx.reply('Все серии 10 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season11 = (ctx) => { 
  ctx.reply('Все серии 11 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season12 = (ctx) => { 
  ctx.reply('Все серии 12 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season13 = (ctx) => { 
  ctx.reply('Все серии 13 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season14 = (ctx) => { 
  ctx.reply('Все серии 14 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season15 = (ctx) => { 
  ctx.reply('Все серии 15 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season16 = (ctx) => { 
  ctx.reply('Все серии 16 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад" }]
      ]
  }
  }).catch(e => {});
};
const season17 = (ctx) => { 
  ctx.reply('Все серии 17 сезона:\n 1 серия: (ссылка)\n 2 серия: (ссылка)...', {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад"}]
      ]
  }
  }).catch(e => {});
};

bot.hears('Назад', (ctx) => {
  ctx.editOrReply('Сезоны', {
    reply_markup: {
        inline_keyboard: [
            [ { text: "1 сезон", callback_data: "season1" }, { text: "2 сезон", callback_data: "season2" }, { text: "3 сезон", callback_data: "season3" }],
            [ { text: "4 сезон", callback_data: "season4" }, { text: "5 сезон", callback_data: "season5" }, { text: "6 сезон", callback_data: "season6" }],
            [ { text: "7 сезон", callback_data: "season7" }, { text: "8 сезон", callback_data: "season8" }, { text: "9 сезон", callback_data: "season9" }],
            [ { text: "10 сезон", callback_data: "season10" }, { text: "11 сезон", callback_data: "season11" }, { text: "12 сезон", callback_data: "season12" }],
            [ { text: "13 сезон", callback_data: "season13" }, { text: "14 сезон", callback_data: "season14" }, { text: "15 сезон", callback_data: "season15" }],
            [ { text: "16 сезон", callback_data: "season16" }, { text: "17 сезон", callback_data: "season17" }]
        ]
    }
    
  }).catch(e => {});
})

bot.command('soldati', soldatiCmd);
bot.action('soldati', soldatiCmd); 

bot.command('season1', season1);
bot.action('season1', season1); 

bot.command('season2', season2);
bot.action('season2', season2); 

bot.command('season3', season3);
bot.action('season3', season3); 

bot.command('season4', season4);
bot.action('season4', season4); 

bot.command('season5', season5);
bot.action('season5', season5); 

bot.command('season6', season6);
bot.action('season6', season6); 

bot.command('season7', season7);
bot.action('season7', season7); 

bot.command('season8', season8);
bot.action('season8', season8); 

bot.command('season9', season9);
bot.action('season9', season9); 

bot.command('season10', season10);
bot.action('season10', season10); 

bot.command('season11', season11);
bot.action('season11', season11); 

bot.command('season12', season12);
bot.action('season12', season12); 

bot.command('season13', season13);
bot.action('season13', season13); 

bot.command('season14', season14);
bot.action('season14', season14); 

bot.command('season15', season15);
bot.action('season15', season15); 

bot.command('season16', season16);
bot.action('season16', season16); 

bot.command('season17', season17);
bot.action('season17', season17); 

bot.launch();

})();



process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))