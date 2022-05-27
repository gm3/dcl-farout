import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script2 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import { createCoin } from './coin'
import { cPuzzlee, createButton, cMuralScene, solarPunkLink, puzzleRewardLink } from './game-obj'
import * as myUI from './ui'
import { getUserData } from "@decentraland/Identity"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
// import { totalCans } from './coin'

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
//triggerArea.addComponent(new BoxShape())
const transform11 = new Transform({
  position: new Vector3(27, 2, -27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 4, 4)
})
triggerArea.addComponentOrReplace(transform11)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5) 

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, -24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, -24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7) 

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(24, 0, -40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(8, 0, -40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)  

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
//triggerArea2.addComponent(new BoxShape())
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
script1.spawn(triggerArea, { "enabled": true, "onEnter": [{ "entityName": "messageBubble", "actionId": "open", "values": {} }], "onLeave": [{ "entityName": "messageBubble", "actionId": "close", "values": {} }] }, createChannel(channelId, triggerArea, channelBus))
script2.spawn(messageBubble, { "text": "Find All \nThe Spraycans! \n Get A PoaP!", "fontSize": 18.5 }, createChannel(channelId, messageBubble, channelBus))
script1.spawn(triggerArea2, { "enabled": true, "onEnter": [{ "entityName": "messageBubble2", "actionId": "open", "values": {} }], "onLeave": [{ "entityName": "messageBubble2", "actionId": "close", "values": {} }] }, createChannel(channelId, triggerArea2, channelBus))
script2.spawn(messageBubble2, { "text": "Complete Mural \nPuzzles For \n A PoaP!", "fontSize": 18.5 }, createChannel(channelId, messageBubble2, channelBus))





//solar punk link
let externalLink = new solarPunkLink()
externalLink.setParent(_scene)
externalLink.hideLink()

const script3 = new Script3()
script3.spawn(externalLink, { "url": "https://doingud.com/exhibition/solar-punk-exhibition-b26efbd6-c1b5-4572-9763-b6a4292dbfdb", "name": "SolarPunk Exhibition" }, createChannel(channelId, externalLink, channelBus))


//Puzzle Reward Link
let puzzleRLink = new puzzleRewardLink()
puzzleRLink.setParent(_scene)
puzzleRLink.hideLink()

const sc = new Script3()
sc.spawn(puzzleRLink, { "url": "https://doingud.com/exhibition/solar-punk-exhibition-b26efbd6-c1b5-4572-9763-b6a4292dbfdb", "name": "Puzzle Reward Link[change this]" }, createChannel(channelId, puzzleRLink, channelBus))



// adding coin came logic below
const coinShape = new GLTFShape('models/spray_can_Animate_2_upload.glb') // Include the spinning animation


// Contains the positions for each can
const coinPositions = [
  new Vector3(2.2, 10, -2.5),
  new Vector3(13, 10, 3),
  new Vector3(14, 10, -4),
  new Vector3(24, 7, 7),
  new Vector3(12.5, 10, 13),
  new Vector3(14, 10, -19),
  new Vector3(25, 18, -11.5),
  new Vector3(8, 7, -11),
  new Vector3(8, 7, -20),
  new Vector3(12, 10, -40),
  new Vector3(29, 6.8, -33),
  new Vector3(29, 1.5, -26),
  new Vector3(18, 1.5, -32),
  new Vector3(23, 1.5, -1.4),
  new Vector3(25, 7, -10),
  new Vector3(19, 1.5, -12.8),
  new Vector3(25, 8, -22),
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
    triggerBoxShape,
    externalLink
  )
}



// start mural game code

myUI.buildUI()

let FarOutMural = new cMuralScene(puzzleRLink)

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
faroutBuilding.addComponent(new GLTFShape('models/FAROUT_test6_merged_fixednormals.glb'))
faroutBuilding.addComponent(
  new Transform({
    position: new Vector3(16.3, 0, -15.3),
    //scale: new Vector3(1.6, 0.1, 1.6)
  })
)
engine.addEntity(faroutBuilding)






let puzzle1 = new cPuzzlee(4,
  7,
  new Vector3(10.6, 1.43, -38.76), // position
  Quaternion.Euler(90, 90, 0),//rotation
  new Vector3(0.98, 1, 1.1), // scale
  "puzzle1",
  new Vector3(0, -0.1, -1), //plate position
  new Vector3(.1, 5.5, 4.2), //plate scale
  FarOutMural
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
  new Vector3(.1, 5.5, 4.2), //plate scale
  FarOutMural
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
  new Vector3(.1, 5.5, 4.2), //plate scale
  FarOutMural
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
  new Vector3(.1, 5.5, 4.2), //plate scale
  FarOutMural
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
  new Vector3(.1, 5.5, 4.2), //plate scale
  FarOutMural
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
  FarOutMural,
  1.3 // distance
);
puzzle6.setup()

let btn6 = createButton(
  new Vector3(15.1, 0.7, -13.8),
  new Vector3(1.6, 1, 1.6),
  puzzle6
)


