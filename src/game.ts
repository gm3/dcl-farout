import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script2 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

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
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform8)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform9)

const faroutTest = new Entity('faroutTest')
engine.addEntity(faroutTest)
faroutTest.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(32.261558532714844, 0, 15.707432746887207),
  rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
faroutTest.addComponentOrReplace(transform10)
const gltfShape2 = new GLTFShape("db2b1dae-e2f2-431d-9ae7-37e643ed7e73/FAROUT  test4.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
faroutTest.addComponentOrReplace(gltfShape2)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(3.865518093109131, 0, 16.460861206054688),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.1434831619262695, 4, 16.86838150024414)
})
triggerArea.addComponentOrReplace(transform11)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(7.5, 0.49314820766448975, 17.678184509277344),
  rotation: new Quaternion(2.670390586106508e-15, 0.6691974997520447, -7.977454430374564e-8, 0.7430846095085144),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
messageBubble.addComponentOrReplace(transform12)

const triggerArea2 = new Entity('triggerArea2')
engine.addEntity(triggerArea2)
triggerArea2.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(21, 1, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.1697640419006348, 6, 4.711836814880371)
})
triggerArea2.addComponentOrReplace(transform13)

const messageBubble2 = new Entity('messageBubble2')
engine.addEntity(messageBubble2)
messageBubble2.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(21.406919479370117, 1.6070034503936768, 2.064754009246826),
  rotation: new Quaternion(1.6155130754197736e-14, 0.999730110168457, -1.1917709485942396e-7, -0.023234738036990166),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
messageBubble2.addComponentOrReplace(transform14)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"messageBubble","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea, channelBus))
script2.spawn(messageBubble, {"text":"Some text","fontSize":20}, createChannel(channelId, messageBubble, channelBus))
script1.spawn(triggerArea2, {"enabled":true,"onEnter":[{"entityName":"messageBubble2","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble2","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea2, channelBus))
script2.spawn(messageBubble2, {"text":"Find All \nThe Spraycans!","fontSize":18.5}, createChannel(channelId, messageBubble2, channelBus))