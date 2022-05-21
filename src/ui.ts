import * as ui from '@dcl/ui-scene-utils'
import * as myUI from '/ui'


export let puzzleCompletion : ui.UIBar
export let canPuzzleCompletion : ui.UIBar
export let canRewardURL: string = 'https://docs.decentraland.org';

export function buildUI() {

  let healthLabel = new ui.CornerLabel('Progress:', -180, 495)
  puzzleCompletion = new ui.UIBar(0, -30, 500, Color4.Green(), ui.BarStyles.ROUNDSILVER, 1)
 

  let cansProgress = new ui.CornerLabel('Cans:', -200, 445)
  canPuzzleCompletion = new ui.UIBar(0, -30, 450, Color4.Green(), ui.BarStyles.ROUNDSILVER, 1)



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



export function rewardMessage( ){
  let prompt = new ui.OkPrompt(
    'Congratulations on solving all the puzzles!',
    () => {      
      log(`accepted`)
    },
    'Ok',
    true
  )
}

export function canPuzzleRewardMessage( ){
  let prompt = new ui.OkPrompt(
    'Congratulations you found all the cans!',
    () => {      
      log(`accepted`)

    },
    'Ok',
    true
  )
  // openExternalURL(this.canRewardURL)
}