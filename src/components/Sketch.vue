<script setup>
import { ref } from 'vue';
import p5 from 'p5';

const sketch = (p5) => {
  let particles = [];
  const maxParticles = 10;

  p5.setup = () => {
    p5.createCanvas(700, 200);
    p5.fill(255); // Red fill color for hearts
    p5.noStroke();
  };

  p5.draw = () => {
    // p5.background(220);

    // Update and display particles
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].display();
      if (particles[i].isFinished()) {
        particles.splice(i, 1);
      }
    }
  };

  p5.mouseClicked = () => {
    if (particles.length < maxParticles) {
      particles.push(new HeartParticle(p5.mouseX, p5.mouseY));
    }
  };

  class HeartParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = p5.random(20, 40); // Random size for each heart
      this.speed = p5.random(1, 3); // Random speed
      this.rotation = p5.random(p5.TWO_PI); // Random initial rotation
    }

    update() {
      this.y -= this.speed; // Move upwards
      this.rotation += p5.PI / 60; // Rotate slightly
    }

    display() {
      p5.push();
      p5.translate(this.x, this.y);
      p5.rotate(this.rotation);
      // Draw heart shape
      p5.beginShape();
      const scale = this.size / 10;
      p5.vertex(0, -7 * scale);
      p5.bezierVertex(10 * scale, -10 * scale, 15 * scale, 0, 0, 15 * scale);
      p5.bezierVertex(-15 * scale, 0, -10 * scale, -10 * scale, 0, -7 * scale);
      p5.endShape(p5.CLOSE);
      p5.pop();
    }

    isFinished() {
      return this.y < -this.size; // Remove particle when off-screen
    }
  }
};
</script>
<template>
  <P5 :sketch="sketch" />
</template>
