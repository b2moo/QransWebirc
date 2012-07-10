    var l = qwebirc.ui.lang;

    //Titres des fenêtres
    l.add_webchat = "Insérer ce webchat sur votre site"//"Add webchat to your site [international]";
    l.options   = "Options";
    l.about = "À propos";   //About
    l.privpolicy = "Vie privée";
    l.feedback = "Feedback";
    l.faq = "Foire aux questions";

    //Titre les boutons du menu
    l.menu_options = l.options;
    l.menu_add_webchat = l.add_webchat;
    l.menu_about = l.about;
    l.menu_privpolicy = l.privpolicy;
    l.menu_feedback = l.feedback;
    l.menu_faq = "FAQ";

    //Toolbar actions

    //general purpose
    l.cancel = "Annuler"; //"Cancel";
    l.close = "Fermer"; //"Close";
    l.save = "Sauvegarder"; //"Save";

    //
    l.connection_details = "Paramètres de connexion"; //"Connection details";

    l.activity = "Activité !"; //Activity !

    //Activité irc
    l.signon = "Authentifé !"; //"Signed on!";
    l.connected = "Connecté au serveur"; //"Connected to server.";
    l.disconnected = "Déconnecté du serveur: $m"; //"Disconnected from server: $m";
    l.error = "ERREUR: $m";//"ERROR: $m";
    l.join = "${$N$} [$h] a rejoint $c";//"${$N$} [$h] has joined $c";
    l.ourjoin = "${$N$} [$h] a rejoint $c"; //"${$N$} [$h] has joined $c";
    l.part = "${$N$} [$h] a quitté $c [$m]"; //"${$N$} [$h] has left $c [$m]"
    l.kick = "${$v$} a été kické de $c par ${$N$} [$m]"; //"${$v$} was kicked from $c by ${$N$} [$m]"
    l.mode = "mode/$c [$m] par ${$N$}"; //"mode/$c [$m] by ${$N$}"
    l.quit = "${$N$} [$h] s'est déconnecté [$m]"; //"${$N$} [$h] has quit [$m]"
    l.nick = "${$n$} s'appelle désormais ${$[$w$]$}"; //"${$n$} has changed nick to ${$[$w$]$}"
    l.topic = "${$N$} a changé le topic de $c: $m"; //"${$N$} changed the topic of $c to: $m"
    l.umode = "Changement de mode utilisateur: $m"; //"Usermode change: $m"
    l.invite = "$N vous invite à rejoindre $c"; //"$N invites you to join $c"
    l.chanctcp = "$N [$h] vous a envoyé une requête CTCP $x sur $c: $m"; //"$N [$h] requested CTCP $x from $c: $m"
    l.privctcp = "$N [$h] vous a envoyé une requête CTCP $x sur $-: $m"; //"$N [$h] requested CTCP $x from $-: $m"
    l.ctcpreply = "Réponse CTCP $x de $N: $m"; //"CTCP $x reply from $N: $m"
    l.realname = "Nom réel"; //realname
    l.channels = "Canaux";
    l.otherChannels = "Autres";
    l.server = "Serveur";
    l.account = "Compte";
    l.idle = "Occupé";
    l.away = "Absent";
    l.connected_status = "Connecté";
    l.ircop = "Operateur IRC";
    l.whoisend = "Fin du WHOIS"; //"End of WHOIS"
    l.is_away = "$N est absent(e): $m"; //"$N is away: $m"
    l.channelcreationtime = "Canal $c créé le: $m"; //"Channel $c was created at: $m"
    l.channelmodeis = "Les modes du canal $c sont: $m"; //"Channel modes on $c are: $m"

    //Page de connexion principale
    l.toconnect = function(networkName,c) {
        //return "To connect to " + networkName + " IRC and join "+ chan +" "
        return "Pour se connecter au réseau irc " + networkName + " et rejoindre "+ (
            c.length>1?"le canal":"les canaux") + " ";
    };

    l.and = "et";
    l.as = "en tant que";
    l.clickconnect = "cliquez sur 'Se connecter'.";//"click 'Connect'."
    l.connectto = function (networkName) {
        return "Se connecter au réseau IRC " + networkName + "";
        //return "Connect to " + networkName + " IRC";
    };
    l.nick = "Pseudonyme";
    l.username = "Nom d'utilisateur";
    l.password = "Mot de passe";
    l.connect = "Se connecter";

    l.nickrequired = "Vous devez fournir un pseudonyme."; //"You must supply a nickname."
    l.invalidnick = "Votre pseudonyme a été jugé invalide et a été corrigé; merci de vérifier le pseudonyme modifié et cliquer sur 'Se connecter' à nouveau.";
        //"Your nickname was invalid and has been corrected; please check your altered nickname and press     Connect again."
    l.config = {};
    l.config.beep_on_mention = "Émettre un beep lorsque mon pseudo est écrit ou lors de la réception d'un message privé (requiert Flash)";
        //"Beep when nick mentioned or on query activity (requires Flash)";
    l.config.flash_on_mention = "Afficher une notification dans la barre de titre lorsque mon pseudo est écrit ou lors de la réception d'un message privé";
        //"Flash titlebar when nick mentioned or on query activity";
    l.config.dedicated_msg_window = "Afficher les messages privés (privmsg) dans des fenêtres séparées";
        //"Send privmsgs to dedicated messages window";
    l.config.dedicated_notice_window = "Affiche les notices dans des fenêtres séparées";
        //"Send notices to dedicated message window";
    l.config.nick_ov_status = "Afficher les status (@/+) devant les pseudonymes";
        //"Show status (@/+) before nicknames in channel lines";
    l.config.accept_service_invites = "Rejoindre automatiquement le canal lors d'une invitation par Q";
        //"Automatically join channels when invited by Q";
    l.config.use_hiddenhost = "Cacher le nom d'hôte (hostname) quand authentifié par Q (+x)";
        //"Hide your hostmask when authed to Q (+x)";
    l.config.lastpos_line = "Afficher une barre de dernière lecture dans les conversations";
        //"Show a last position indicator for each window";
    l.config.nick_colours = "Colorer automatiquement les pseudonymes";
        //"Automatically colour nicknames";
    l.config.hide_joinparts = "Cacher JOINS/PARTS/QUITS";
        //"Hide JOINS/PARTS/QUITS";
    l.config.style_hue = "Ajuster la teinte de l'interface";
        //"Adjust user interface hue";
    l.config.query_on_nick_click = "Click sur pseudonyme déclenche conversation privée (QUERY)";
        //"Query on nickname click in channel";
    l.config.show_nicklist = "Afficher la liste des pseudonymes sur le canal";
        //"Show nickname list in channels";
    l.config.show_timestamps = "Afficher l'heure";
        // "Show timestamps";
