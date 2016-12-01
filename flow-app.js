// Background color until I can figure out how to use screen

// TODO: Check back later on Screen 
// Commented out below until I figure out the workaround
// Screen.backgroundColor = "#28affa"

bg = new BackgroundLayer({backgroundColor: "#28affa"})

// Create layers to switch between

layerA = new Layer({x:0, y:0, width:400, height:400,borderRadius: 4, backgroundColor:"white"})
layerB = new Layer({x:0, y:0, width:400, height:400,borderRadius: 4, backgroundColor:"red"})

// Create parent layer to clip, and position the flow componennt

layerC = new Layer({width: 400, height: 400, borderRadius: 4, x: Align.center, y: Align.center})
layerC.clip = true


// TODO: evaluate rendering glitches
// Create FlowComponent, show layerA

flow = new FlowComponent({})
flow.parent = layerC

flow.showNext(layerA)

// Switch screens on press

layerA.on(Events.Click, function() {
	flow.showNext(layerB)
})

layerB.on(Events.Click, function() {
	flow.showPrevious(layerA)
})
