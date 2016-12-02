// Define Device

Framer.Device = new Framer.DeviceComponent();
Framer.Device.setupContext();

var allCards, card, eachCard, i, j, k, label, len, main;

// Define animation Defaults

Framer.Defaults.Animation = {
  curve: "spring",
  time: ".2"
};

// Define container

main = new Layer({
  height: Screen.height,
  width: Screen.width
});

// Array for cards

allCards = [];

for (i = j = 0; j < 8; i = ++j) {
  card = new Layer({
    parent: main,
    name: "card" + i,
    height: Screen.height - (Screen.height * (i / 8)),
    width: Screen.width,
    backgroundColor: "white",
    shadowY: 3,
    shadowBlur: 40
  });
  label = new Layer({
    name: "label",
    height: 30,
    width: 300,
    y: Align.bottom(-30),
    x: Align.center,
    superLayer: card,
    backgroundColor: 'transparent',
    html: "<p style='font-size:30px; color: #333; text-align: center;''>MENU ITEM #" + (i + 1) + "</p>"
  });
  allCards.push(card);
  card.states.add({
    "default": {
      height: Screen.height - (Screen.height * (i / 8)),
      opacity: 1
    },
    open: {
      height: Screen.height,
      opacity: 1
    },
    closed: {
      height: 0,
      opacity: 0
    }
  });
  card.onTapEnd(function() {
    var k, len, ref, results, sib;
    this.states.next("open", "default");
    ref = this.siblings;
    results = [];
    for (k = 0, len = ref.length; k < len; k++) {
      sib = ref[k];
      if (sib.index > this.index) {
        results.push(sib.states.next("closed", "default"));
      } else {
        results.push(void 0);
      }
    }
    return results;
  });
}

for (k = 0, len = allCards.length; k < len; k++) {
  eachCard = allCards[k];
  eachCard.on("change:frame", function(event, layer) {
    return layer.childrenWithName("label")[0].y = Align.bottom(-30);
  });
}
