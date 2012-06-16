//Overwrite stuff
var l = qwebirc.ui.lang;
qwebirc.ui.UI_COMMANDS = [
  [l.menu_options, "options"],
  ["Obtenir irc !", "wiki_irc"],
//  [l.menu_privpolicy, "privacy"], //Quand on aura la foi de l'écrire
  [l.menu_about, "about"]
];

var tab = qwebirc.config.DEFAULT_OPTIONS;
for( var i in tab) {
    if( tab[1] != "STYLE_HUE") continue;
    tab[3] = function() {
     return {class_: qwebirc.config.HueOption, default_: 20};
   }
}

