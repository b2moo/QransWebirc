qwebirc.ui.themes.ThemeControlCodeMap = {
  "C": "\x03",
  "B": "\x02",
  "U": "\x1F",
  "O": "\x0F",
  "{": "\x00",
  "}": "\x00",
  "[": "qwebirc://whois/",
  "]": "/",
  "$": "$"
};

(function () {
var l = qwebirc.ui.lang;
qwebirc.ui.themes.Default = {
  "PREFIX": ["$C4==$O "],
  "SIGNON": [l.signon, true],
  "CONNECT": [l.connected, true],
  "RAW": ["$m", true],
  "DISCONNECT": [l.disconnected, true],
  "ERROR": [l.error, true],
  "SERVERNOTICE": ["$m", true],
  "JOIN": [l.join, true],
  "OURJOIN": [l.ourjoin, true],
  "PART": [l.part, true],
  "KICK": [l.kick, true],
  "MODE": [l.mode, true],
  "QUIT": [l.quit, true],
  "NICK": [l.nick, true],
  "TOPIC": [l.topic, true],
  "UMODE": [l.umode, true],
  "INVITE": [l.invite, true],
  "HILIGHT": ["$C4"],
  "HILIGHTEND": ["$O"],
  "CHANMSG": ["<${$@$($N$)$}> $m"],
  "PRIVMSG": ["<$($N$)> $m"],
  "CHANNOTICE": ["-${$($N$)$}:$c- $m"],
  "PRIVNOTICE": ["-$($N$)- $m"],
  "OURCHANMSG": ["<$@$N> $m"],
  "OURPRIVMSG": ["<$N> $m"],
  "OURTARGETEDMSG": ["*$[$t$]* $m"],
  "OURTARGETEDNOTICE": ["[notice($[$t$])] $m"],
  "OURCHANNOTICE": ["-$N:$t- $m"],
  "OURPRIVNOTICE": ["-$N- $m"],
  "OURCHANACTION": [" * $N $m"],
  "OURPRIVACTION": [" * $N $m"],
  "CHANACTION": [" * ${$($N$)$} $m"],
  "PRIVACTION": [" * $($N$) $m"],
  "CHANCTCP": [l.chanctcp],
  "PRIVCTCP": [l.privctcp],
  "CTCPREPLY": [l.ctcpreply],
  "OURCHANCTCP": ["[ctcp($t)] $x $m"],
  "OURPRIVCTCP": ["[ctcp($t)] $x $m"],
  "OURTARGETEDCTCP": ["[ctcp($t)] $x $m"],
  "WHOISUSER": ["$B$N$B [$h]", true],
  "WHOISREALNAME": [" " + l.realname + " : $m", true],
  "WHOISCHANNELS": [" " + l.channels + " : $m", true],
  "WHOISSERVER": [" " + l.server + "   : $x [$m]", true],
  "WHOISACCOUNT": [" " + l.account + "  : qwebirc://qwhois/$m", true],
  "WHOISIDLE": [" " + l.idle + "     : $x [" + l.connected_status + ": $m]", true],
  "WHOISAWAY": [" " + l.away + "     : $m", true],
  "WHOISOPER": ["          : $" + l.ircop + "$B", true],
  "WHOISOPERNAME": [" operedas : $m", true],
  "WHOISACTUALLY": [" realhost : $m [ip: $x]", true],
  "WHOISGENERICTEXT": ["          : $m", true],
  "WHOISEND": [l.whoisend, true],
  "AWAY": [l.is_away, true],
  "GENERICERROR": ["$m: $t", true],
  "GENERICMESSAGE": ["$m", true],
  "WALLOPS": ["WALLOP $n: $t", true],
  "CHANNELCREATIONTIME": [l.channelcreationtime, true],
  "CHANNELMODEIS": [l.channelmodeis, true]
};
})()

qwebirc.ui.Theme = new Class({
  initialize: function(themeDict) {
    this.__theme = qwebirc.util.dictCopy(qwebirc.ui.themes.Default);
    
    if(themeDict)
      for(var k in themeDict)
        this.__theme[k] = themeDict[k];

    for(var k in this.__theme) {
      if(k == "PREFIX")
        continue;

      var data = this.__theme[k];
      if(data[1]) {
        this.__theme[k] = this.__theme["PREFIX"] + data[0];
      } else {
        this.__theme[k] = data[0];
      }
    }
    
    this.__ccmap = qwebirc.util.dictCopy(qwebirc.ui.themes.ThemeControlCodeMap);
    this.__ccmaph = qwebirc.util.dictCopy(this.__ccmap);

    this.__ccmaph["("] = this.message("HILIGHT", {}, this.__ccmap);
    this.__ccmaph[")"] = this.message("HILIGHTEND", {}, this.__ccmap);
    this.__ccmaph["{"] = this.__ccmaph["}"] = "";
  },
  __dollarSubstitute: function(x, h, mapper) {
    var msg = [];

    var n = x.split("");
    for(var i=0;i<n.length;i++) {
      var c = n[i];
      if(c == "$" && (i <= n.length - 1)) {
        var c2 = n[++i];

        var o = mapper[c2];
        if(!o)
          o = h[c2];
        if(o)
          msg.push(o);
      } else {
        msg.push(c);
      }
    }
    
    return msg.join("");
  },
  message: function(type, data, hilight) {
    var map;
    if(hilight) {
      map = this.__ccmaph;
    } else {
      map = this.__ccmap;
    }
    
    if(data && data["n"])
      data["N"] = "qwebirc://whois/" + data.n + "/";
    return this.__dollarSubstitute(this.__theme[type], data, map);
  }
});
