var i, j, layer, page;

// Set background color
bg = new BackgroundLayer({
  backgroundColor: "#28affa"
});

// Create page component
page = new PageComponent({
  x: Align.center,
  y: Align.center,
  width: 300,
  borderRadius: 6,
  scrollVertical: false
});

// Populate page
for (i = j = 0; j < 8; i = ++j) {
  layer = new Layer({
    parent: page.content,
    name: "Page " + i,
    x: 210 * i,
    backgroundColor: "#00AAFF",
    borderRadius: 6
  });
}

// Set current page to white
page.currentPage.backgroundColor = "#FFF";

// Adjust color based on animation
page.onChange("currentPage", function() {
  page.previousPage.animate({
    backgroundColor: "#00AAFF",
    options: {
      time: 0.8
    }
  });
  return page.currentPage.animate({
    backgroundColor: "#FFF",
    options: {
      time: 0.8
    }
  });
});
