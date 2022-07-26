import { useEffect, useRef, useState } from 'react'
import { setConstantValue } from 'typescript'
import { DrawModule } from '../3DEngine/draw'
import { Point } from '../3DEngine/point'
import { Vector2 } from '../3DEngine/vector'

const Projection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const canvasW = 1000
  const canvasH = 800
  const canvasMiddle = new Point(canvasW / 2, canvasH / 2)

  const setupCanvas = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) => {
    canvas.height = canvasH
    canvas.width = canvasW
    context.imageSmoothingEnabled = false
    context.fillStyle = '#cccccc'
    context.fillRect(0, 0, canvasW, canvasH)

    const drawModule = new DrawModule(context)

    for (let i = -30; i < 30; i++) {
      drawModule.draw2DLine(
        new Point(canvasMiddle.getX() + i * 10, canvasMiddle.getY() + i * 5),
        new Vector2(100, 10 * i)
      )
      //drawModule.draw2DLine(canvasMiddle, new Vector2(-100, 10 * i))
      //drawModule.draw2DLine(canvasMiddle, new Vector2(10 * i, 100))
      //drawModule.draw2DLine(canvasMiddle, new Vector2(10 * i, -100))
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return
    setupCanvas(canvas, context)
  }, [])

  return (
    <div className='flex flex-row justify-center'>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Projection
