// src/components/P5Sketch.ts
import { onMounted, onUnmounted, ref } from 'vue'
import p5 from 'p5'
import sketch from '../sketches/mySketch'

export default function useP5Sketch () {
  const sketchContainer = ref<HTMLDivElement | null>(null)
  let p5Instance: p5 | null = null
  let pg: p5.Graphics | null = null
  let tX, tY, sp, dspx, dspy, fct

  onMounted(() => {
    if (sketchContainer.value) {
      p5Instance = new p5((p: p5) => {
        p.setup = () => {
          p.createCanvas(
            sketchContainer.value!.clientWidth,
            sketchContainer.value!.clientHeight
          )
          pg = p.createGraphics(
            sketchContainer.value!.clientWidth,
            sketchContainer.value!.clientHeight
          )

          tX = p.createSlider(1, 80, 16, 1)
          tX.position(20, p.height + 40)
          p.createP('Tiles X').position(20, p.height)

          tY = p.createSlider(1, 80, 16, 1)
          tY.position(20, p.height + 100)
          p.createP('Tiles Y').position(20, p.height + 60)

          sp = p.createSlider(0, 1, 0.005, 0.01)
          sp.position(20, p.height + 160)
          p.createP('Speed').position(20, p.height + 120)

          dspx = p.createSlider(0, 0.1, 0.05, 0.001)
          dspx.position(180, p.height + 40)
          p.createP('Displacement X').position(180, p.height)

          dspy = p.createSlider(0, 0.2, 0, 0.01)
          dspy.position(180, p.height + 100)
          p.createP('Displacement Y').position(180, p.height + 60)

          fct = p.createSlider(0, 300, 100, 1)
          fct.position(180, p.height + 160)
          p.createP('Offset').position(180, p.height + 120)
        }

        p.draw = () => {
          p.background(0)

          // PGraphics

          pg.background(0)
          pg.fill(255)
          // pg.textFont(font);
          pg.textSize(400)
          pg.push()
          pg.translate(p.width / 2, p.height / 2)
          pg.textAlign(p.CENTER, p.CENTER)
          pg.text('a', 0, 0)
          pg.pop()

          const tilesX = tX.value()
          const tilesY = tY.value()

          const tileW = Math.floor(p.width / tilesX)
          const tileH = Math.floor(p.height / tilesY)

          for (let y = 0; y < tilesY; y++) {
            for (let x = 0; x < tilesX; x++) {
              // WARP
              let waveX = Math.floor(
                p.sin(p.frameCount * sp.value() + x * y * dspx.value()) *
                   fct.value()
              )
              let waveY = Math.floor(
                p.sin(p.frameCount * sp.value() + x * y * dspy.value()) *
                   fct.value()
              )

              if (dspx.value() === 0) {
                waveX = 0
              }

              if (dspy.value() === 0) {
                waveY = 0
              }

              // image(pg,0,0)

              // SOURCE
              const sx = x * tileW + waveX
              const sy = y * tileH + waveY
              const sw = tileW
              const sh = tileH

              // DESTINATION
              const dx = x * tileW
              const dy = y * tileH
              const dw = tileW
              const dh = tileH

              p.copy(pg, sx, sy, sw, sh, dx, dy, dw, dh)
            }
          }
        }

        p.windowResized = () => {
          if (sketchContainer.value) {
            p.resizeCanvas(
              sketchContainer.value.clientWidth,
              sketchContainer.value.clientHeight
            )
          }
        }
      }, sketchContainer.value)
    }
  })

  onUnmounted(() => {
    if (p5Instance) {
      p5Instance.remove()
    }
  })

  return {
    sketchContainer,
  }
}
