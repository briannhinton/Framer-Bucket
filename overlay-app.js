// Background color until I can figure out how to use screen

// TODO: Check back later on Screen
// Commented out below until I figure out the workaround
// Screen.backgroundColor = "#28affa"

bg = new BackgroundLayer({backgroundColor: "#28affa"})

// Create parent layer

layerC = new Layer({width: 400, height: 400, borderRadius: 4, x: Align.center, y: Align.center})
layerC.clip = true

// Create flow layer

flow = new FlowComponent({})

// Create layers to switch between

layerA = new Layer({x: Align.center, y: 290, width:375, height:100, borderRadius: 4, backgroundColor:"white"})
layerB = new Layer({x:0, y:0, width:375, height:200,borderRadius: 4, backgroundColor:"white"})

// TODO: make this actually work

layerA.on(Events.Click, function() {
	flow.showOverlayCenter(layerB)
})

layerB.on(Events.Click, function() {
	flow.hide()
})


