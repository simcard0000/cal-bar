const { menubar } = require('menubar');

const mb = menubar();

mb.on('ready', () => {
    console.log('cal-bar is ready!');
});