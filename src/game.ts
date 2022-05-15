import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script2 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import { createCoin } from './coin'
import { cPuzzlee, createButton, cMuralScene } from './game-obj'
import * as myUI from './ui'
import { getUserData } from "@decentraland/Identity"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

// Praycan Triggle Box area
const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
// triggerArea.addComponent(new BoxShape())
const transform11 = new Transform({
  position: new Vector3(27, 2, -27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
triggerArea.addComponentOrReplace(transform11)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(30, 2.5, -27),
  rotation: new Quaternion(2.670390586106508e-15, 0.6691974997520447, -7.977454430374564e-8, 0.7430846095085144),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
messageBubble.addComponentOrReplace(transform12)

// end message bubble


// 2nd message bubble
const triggerArea2 = new Entity('triggerArea2')
engine.addEntity(triggerArea2)
triggerArea2.setParent(_scene)
// triggerArea2.addComponent(new BoxShape())
const transform13 = new Transform({
  position: new Vector3(22, 2, -3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 4, 6)
})
triggerArea2.addComponentOrReplace(transform13)

const messageBubble2 = new Entity('messageBubble2')
engine.addEntity(messageBubble2)
messageBubble2.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(18, 2, -2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
messageBubble2.addComponentOrReplace(transform14)
// end message bubble

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"messageBubble","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea, channelBus))
script2.spawn(messageBubble, {"text":"Find All \nThe Spraycans!","fontSize":18.5}, createChannel(channelId, messageBubble, channelBus))
script1.spawn(triggerArea2, {"enabled":true,"onEnter":[{"entityName":"messageBubble2","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble2","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea2, channelBus))
script2.spawn(messageBubble2, {"text":"Find All \nThe Spraycans!","fontSize":18.5}, createChannel(channelId, messageBubble2, channelBus))

// adding coing came logic below

// Adding base scene models
// const base = new Entity()
// base.addComponent(new GLTFShape('models/baseLight.glb'))
// engine.addEntity(base)


const coinShape = new GLTFShape('models/spraycan_fixed.glb') // Include the spinning animation


// Contains the positions for each can
const coinPositions = [
  new Vector3(2.2, 1.5, 0),
  new Vector3(5.2, 1.5, 0),
  new Vector3(8, 1.5, 0),
  new Vector3(10, 1.5, 0),
  new Vector3(12, 1.5, 0),
  new Vector3(14, 1.5, 0),
  new Vector3(16, 1.5, 0),
  new Vector3(16, 1.5, -2),
  new Vector3(16, 1.5, -4),
  new Vector3(16, 1.5, -6),
  new Vector3(16, 1.5, -8),
  new Vector3(16, 1.5, -10),
  new Vector3(16, 1.5, -12),
  new Vector3(16, 1.5, -14),
  new Vector3(16, 1.5, -16),
  new Vector3(16, 1.5, -18),
  new Vector3(16, 1.5, -20), 
]

const triggerBoxShape = new utils.TriggerBoxShape(
  new Vector3(1.5, 3, 1.5),
  new Vector3(0, 1, 0)
) // Trigger shape for coin

// Setup the cans
for (const coinPosition of coinPositions) {
  createCoin(
    coinShape,
    new Transform({ position: coinPosition }),
    triggerBoxShape
  )
}



// start mural game code

myUI.buildUI()

let FarOutMural = new cMuralScene
 
executeTask(async () => {
  //myUI.welcomeMessage();
  let myPlayer = await getUserData()

  onEnterSceneObservable.add((player) => {
    myUI.welcomeMessage()
  })

  onLeaveSceneObservable.add((player) => {
    // log("player left scene: ", player.userId)
    // if (player.userId === myPlayer?.userId) {
    //   log("I left the scene!")
    // }
  })
})
  

// farout building main
const faroutBuilding = new Entity()
faroutBuilding.addComponent(new GLTFShape('models/FAROUTtest4.glb'))
faroutBuilding.addComponent(
  new Transform({
    position: new Vector3(16.3, 0, -15.3),
    //scale: new Vector3(1.6, 0.1, 1.6)
  })
)
engine.addEntity(faroutBuilding)


//  // ground
// const floor = new Entity()
// floor.addComponent(new GLTFShape('models/FloorBaseGrass.glb'))
// floor.addComponent(
//   new Transform({
//     position: new Vector3(8, 0, 8),
//     scale: new Vector3(1.6, 0.1, 1.6)
//   })
// )
// engine.addEntity(floor)




let puzzle1 = new cPuzzlee(4, 
  7,
  new Vector3(10.6, 1.43, -38.76), // position
  Quaternion.Euler(90, 90, 0),//rotation
  new Vector3(0.98, 1, 1.1), // scale
  "puzzle1",
  new Vector3(0, -0.1, -1), //plate position
  new Vector3(.1, 5.5, 4.2) //plate scale
); 
puzzle1.setup()


let btn1 = createButton(
  new Vector3(13, 0.6, -38.79),
  new Vector3(1.6, 1, 1.6),
  puzzle1
)




let puzzle2 = new cPuzzlee(4, 
  5,
  new Vector3(10.6, 1.43, -33), // position
  Quaternion.Euler(90, 90, 0),//rotation
  new Vector3(1.1, 1, 1.1), // scale
  "puzzle2",
  new Vector3(0, -0.1, -1), //plate position
  new Vector3(.1, 5.5, 4.2) //plate scale
); 
puzzle2.setup()

let btn2 = createButton(
  new Vector3(13, 0.8, -33),
  new Vector3(1.6, 1, 1.6),
  puzzle2
) 






let puzzle3 = new cPuzzlee(4, 
  6,
  new Vector3(12.1, 1.45, -28.98), // position
  Quaternion.Euler(90, 90, 0),//rotation
  new Vector3(.72, 1, .9), // scale
  "puzzle3",
  new Vector3(0, -0.1, -1), //plate position
  new Vector3(.1, 5.5, 4.2) //plate scale
); 
puzzle3.setup()

let btn3 = createButton(
  new Vector3(15.1, 0.6, -28.98),
  new Vector3(1.6, 1, 1.6),
  puzzle3
) 



let puzzle4 = new cPuzzlee(4, 
  6,
  new Vector3(12.1, 1.45, -24.75), // position
  Quaternion.Euler(90, 90, 0),//rotation
  new Vector3(0.98, 1, .9), // scale
  "puzzle4",
  new Vector3(0, -0.1, -1), //plate position
  new Vector3(.1, 5.5, 4.2) //plate scale
); 
puzzle4.setup()

let btn4 = createButton(
  new Vector3(15.1, 0.6, -24.75),
  new Vector3(1.6, 1, 1.6),
  puzzle4
) 




let puzzle5 = new cPuzzlee(4, 
  6,
  new Vector3(12.1, 1.45, -20.2), // position
  Quaternion.Euler(90, 90, 0),//rotation
  new Vector3(.96, 1, .9), // scale
  "puzzle5",
  new Vector3(0, -0.1, -1), //plate position
  new Vector3(.1, 5.5, 4.2) //plate scale
); 
puzzle5.setup()
let btn5 = createButton(
  new Vector3(15.1, 0.6, -20.2),
  new Vector3(1.6, 1, 1.6),
  puzzle5
) 




let puzzle6 = new cPuzzlee(3, 
  6,
  new Vector3(12.1, 1.6, -12.5), // position
  Quaternion.Euler(90, 90, 0),//rotation
  new Vector3(.78, 1, .78), // scale
  "puzzle6",
  new Vector3(0, -0.1, -1), //plate position
  new Vector3(.1, 5.5, 4.2), //plate scale
  1.3 // distance
); 
puzzle6.setup()

let btn6 = createButton(
  new Vector3(15.1, 0.7, -13.8),
  new Vector3(1.6, 1, 1.6),
  puzzle6
)

//solar punk link
const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
externalLink.addComponent(new Material)
externalLink.addComponent(new PlaneShape())
const transform8 = new Transform({
  position: new Vector3(11.6, 2, 10),
  rotation: new Quaternion(270, 0, 270, 1),
  scale: new Vector3(5 , 5, 1)
})
externalLink.addComponentOrReplace(transform8)

const script3 = new Script3()
script3.spawn(externalLink, {"url":"https://doingud.com/exhibition/solar-punk-exhibition-b26efbd6-c1b5-4572-9763-b6a4292dbfdb","name":"SolarPunk Exhibition"}, createChannel(channelId, externalLink, channelBus))



  

