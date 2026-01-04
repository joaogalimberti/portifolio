import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 0.5 + 0.15;
        this.size = Math.random() * 1 + 1.5;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(26, 26, 26, ${this.opacity * 0.22})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 250 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-content reveal">
        <h1 className="hero-title">
          Olá, eu sou <span className="hero-name">João Galimberti,</span> 
          <br />Desenvolvedor Web Full Stack
        </h1>

        <p className="hero-subtitle">
          Crio interfaces modernas, performáticas e bem estruturadas para a web.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-link">
            <span className="link-text">Ver projetos</span>
          </a>

          <a href="#contact" className="hero-link">
            <span className="link-text">Entrar em contato</span>
          </a>
        </div>
      </div>
    </section>
  );
}