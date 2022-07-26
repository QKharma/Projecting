export class Point {
  private x
  private y

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  getX = () => {
    return this.x
  }

  getY = () => {
    return this.y
  }
}
