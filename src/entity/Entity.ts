import World from '../World'
import Vector from '../Vector'
import Location from '../Location'
import Nameable from '../Nameable'
import CommandSender from '../CommandSender'
import PistonMoveReaction from '../enum/PistonMoveReaction'
import EntityDamageEvent from '../event/entity/EntityDamageEvent'

export default interface Entity extends Nameable, CommandSender {
  isGlowing: boolean // readonly
  vehicle: Entity // readonly
  location: Location // readonly
  maxFireTicks: number // readonly
  passengers: Entity[] // readonly
  pistonMoveReaction: PistonMoveReaction // readonly
  scoreboardTags: string[] // readonly
  type: string // readonly
  uniqueId: string // readonly
  entityId: number // readonly
  width: number // readonly
  world: World // readonly
  isCustomNameVisible: boolean // readonly
  isDead: boolean // readonly
  isEmpty: boolean // readonly
  height: number // readonly
  isInvulnerable: boolean // readonly
  isOnGround: boolean // readonly
  isSilent: boolean // readonly
  isValid: boolean // readonly
  isInsideVehicle: boolean // readonly
  customNameVisible: boolean
  fallDistance: number
  fireTicks: number
  glowing: boolean
  invulnerable: boolean
  lastDamageCause: EntityDamageEvent
  portalCooldown: number
  silent: boolean
  ticksLived: number
  velocity: Vector
  gravity: boolean
  addPassenger (passenger: Entity): boolean
  eject (): boolean
  getLocation (loc: Location): Location
  addScoreboardTag (tag: string): boolean
  leaveVehicle (): boolean
  playEffect (type: string): void
  remove (): void
  removePassenger (passenger: Entity): boolean
  removeScoreboardTag (tag: string): boolean
  teleport (des: Entity | Location): boolean
}