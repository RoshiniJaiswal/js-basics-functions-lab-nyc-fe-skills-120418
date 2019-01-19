// Code your solution in this file!
const StartingPoint = 42
const feetInBlock = 264
// 43 -> 1
function distanceFromHqInBlocks(block) {
  return block - startingPoint
  if (block < startingPoint) {
    return starting Point - block
  } else {
    return block - startingPoint
  }
}
 
 fuction distanceFromHqInBlocks(block) {
   if (block < startingPoint) {
     return (starting Point - block) * feetInBlock
   } else {
     return (block - startingPoint) * feetInBlock
   }
 }
 
 function distanceTravelledInFeet
 (startingBlock, endingBlock) {
  return (startingBlock -endingBlock) * feetInBlock
 } else {
   return (endingBlock - startingBlock) * feetInBlock
 }
 }
 
 function calculatesFarePrice(startingBlock, endingBlock) {
   const feetTravelled distanceTravelledInFeet(startingBlock, endingBlock)
   if (feetTraveled <= 400) {
     return 0
   } else if (400 < feetTraveled && feetTraveled < 2000) {
     return (feetTraveledc- 400) * 0.02
   }else if (2000 < feetTraveled < 2500) {
     return 25
   }else if (feetTraveled > 2500) {
     return 'cannot travel that far'
   }
 }