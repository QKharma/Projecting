import { Point } from './point'
import { Vector2 } from './vector'

export class DrawModule {
  private ctx: CanvasRenderingContext2D

  constructor(drawContext: CanvasRenderingContext2D) {
    this.ctx = drawContext
  }

  draw2DLine(origin: Point, vector: Vector2) {
    this.ctx.beginPath()
    this.ctx.moveTo(origin.getX(), origin.getY())
    this.ctx.lineTo(
      origin.getX() + vector.getX(),
      origin.getY() + vector.getY()
    )
    this.ctx.stroke()
  }
}
