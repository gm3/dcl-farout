import * as ui from '@dcl/ui-scene-utils'

export let puzzleCompletion : ui.UIBar

export function buildUI() {

  let healthLabel = new ui.CornerLabel('Progress:', -180, 495)
  puzzleCompletion = new ui.UIBar(0, -30, 500, Color4.Green(), ui.BarStyles.ROUNDSILVER, 1)
  // Create screenspace component
  // const canvas = new UICanvas()

  // // Create a textShape component, setting the canvas as parent
  // const text = new UIText(canvas)
  // text.value = "Welcome to FarOut Murals!"
  // text.fontSize = 15
  // text.width = 120
  // text.height = 30
  // //text.vAlign = "bottom"
  // text.positionY = -5


}


export function welcomeMessage(){
  let prompt = new ui.OkPrompt(
    'Hello and welcome to FarOut Mural!\n We\'ve created several Mural Puzzles for you to solve in order to win a prize.',
    () => {
      log(`accepted`)
    },
    'Ok',
    true
  )
}