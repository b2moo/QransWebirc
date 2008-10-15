var QUIWindow = new Class({
  Extends: UIWindow,
  
  initialize: function(parentObject, client, type, name) {
    this.parent(parentObject, client, type, name);

    this.tab = new Element("span");
    this.tab.addClass("tab");
    
    this.tab.appendText(name);
    this.tab.addEvent("click", function() {
      parentObject.selectWindow(this);
    }.bind(this));

    parentObject.tabs.appendChild(this.tab);
    
    if(type != WINDOW_STATUS) {
      tabclose = new Element("span");
      tabclose.addClass("tabclose");
      tabclose.addEvent("click", function(e) {
        new Event(e).stop();
        
        if(type == WINDOW_CHANNEL)
          this.client.exec("/PART " + name);

        this.close();
      }.bind(this));
      tabclose.set("text", "X");
      this.tab.appendChild(tabclose);
    }

    this.parentObject.reflow();
    
    this.window = new Element("div");
    this.window.addClass("window");
    parentObject.container.appendChild(this.window);
    
    this.lines = new Element("div");
    this.lines.addClass("lines");
    this.window.appendChild(this.lines);
    
    var formdiv = new Element("div");
    this.window.appendChild(formdiv);  
    
    var form = new Element("form");
    var inputbox = new Element("input");
    formdiv.addClass("input");
  
    form.addEvent("submit", function(e) {
      new Event(e).stop();
    
      this.client.exec(inputbox.value);
      inputbox.value = "";
    }.bind(this));
    formdiv.appendChild(form);
    form.appendChild(inputbox);
    
    var toppos = 0;
    var rightpos = 0;
    var bottompos = formdiv.getSize().y;
    
    if(type == WINDOW_CHANNEL) {
      this.nicklist = new Element("div");
      this.nicklist.addClass("nicklist");
      this.nicklist.setStyle("bottom", (bottompos - 1) + "px");
      
      this.window.appendChild(this.nicklist);
      rightpos = this.nicklist.getSize().x;

      this.topic = new Element("div");
      this.topic.addClass("topic");
      this.topic.set("html", "&nbsp;");
      this.topic.setStyle("right", rightpos + "px");
      this.window.appendChild(this.topic);
      
      toppos = this.topic.getSize().y;
    }

    this.lines.setStyle("top", toppos + "px");
    this.lines.setStyle("bottom", bottompos + "px");
    this.lines.setStyle("right", rightpos + "px");
    this.lines.addClass("lines");
  },
  updateNickList: function(nicks) {
    this.parent(nicks);
    
    var n = this.nicklist;
    while(n.firstChild)
      n.removeChild(n.firstChild);

    nicks.each(function(nick) {
      var e = new Element("div");
      n.appendChild(e);
      e.appendChild(document.createTextNode(nick));
    });
  },
  updateTopic: function(topic) {
    this.parent(topic);
    
    var t = this.topic;
    
    while(t.firstChild)
      t.removeChild(t.firstChild);

    Colourise(topic, t);
  },
  select: function() {
    this.parent();
    
    this.window.removeClass("tab-invisible");
    this.tab.removeClass("tab-unselected");
    this.tab.addClass("tab-selected");
  },
  deselect: function() {
    this.parent();
    
    this.window.addClass("tab-invisible");
    this.tab.removeClass("tab-selected");
    this.tab.addClass("tab-unselected");
  },
  close: function() {
    this.parent();
    
    this.parentObject.container.removeChild(this.window);
    this.parentObject.tabs.removeChild(this.tab);
  },
  addLine: function(type, line, colour) {
    var e = new Element("div");

    if(colour) {
      e.setStyles({"background": colour});
    } else if(this.lastcolour) {
      e.addClass("linestyle1");
    } else {
      e.addClass("linestyle2");
    }
    this.lastcolour = !this.lastcolour;
        
    this.parent(type, line, colour, e);
  },
  setHilighted: function(state) {
    this.parent(state);
    
    if(state) {
      this.tab.addClass("tab-highlighted");
    } else {
      this.tab.removeClass("tab-highlighted");
    }
  }
});

var QUI = new Class({
  Extends: UI,
  initialize: function(parentElement, theme) {
    this.parent(parentElement, QUIWindow, "qui");
    this.theme = theme;
    this.parentElement = parentElement;
  },
  reflow: function() {
    var tabheight = this.tabs.getSize().y;
    this.container.setStyle("top", tabheight + "px"); 
  },
  postInitialize: function() {
    this.outerContainer = new Element("div");
    this.outerContainer.addClass("outercontainer");
    this.parentElement.appendChild(this.outerContainer);
        
    this.tabs = new Element("div");
    this.tabs.addClass("tabbar");
    this.outerContainer.appendChild(this.tabs);
    
    var tester = new Element("span");
    this.tabs.appendChild(tester);
    
    this.tabheight = this.tabs.getSize().y;
    this.tabs.removeChild(tester);

    this.container = new Element("div");
    this.container.addClass("container");
    this.outerContainer.appendChild(this.container);
  },
  loginBox: function(callbackfn, intialNickname, initialChannels) {
    this.parent(function(options) {
      this.postInitialize();
      callbackfn(options);
    }.bind(this), intialNickname, initialChannels);
  }
});
