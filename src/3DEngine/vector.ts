export class Vector3 {
  private x
  private y
  private z

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  getX = () => {
    return this.x
  }

  getY = () => {
    return this.y
  }

  getZ = () => {
    return this.z
  }

  add = (v: Vector3) => {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z)
  }
}

export class Vector2 {
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

  add = (v: Vector2) => {
    return new Vector2(this.x + v.x, this.y + v.y)
  }
}
