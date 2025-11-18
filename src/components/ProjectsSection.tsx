import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Real-Time Event Prediction Market',
    description: 'Real-time event prediction trading platform with LLM-based market creation pipeline that detects trending topics and generates new event markets, reducing manual creation time by 90%. Features dynamic pricing engine driven by market sentiment.',
    tech: ['C++', 'LLM-Integration', 'WebSocket', 'PostgreSQL'],
    github: 'https://github.com/SJ-1302/Real-Time-Event-Prediction-Market',
    demo: null,
  },
  {
    title: 'Options Pricing & Greeks Dashboard',
    description: 'Real-time options pricing dashboard for NIFTY and BANKNIFTY contracts using live NSE option chain data. Implements Black-Scholes model with Greeks calculation for options trading strategy analysis and risk management.',
    tech: ['NumPy', 'Pandas', 'Streamlit', 'NSE API', 'Plotly'],
    github: 'https://github.com/SJ-1302/Indian-Options-Pricing-Greeks-Dashboard',
    demo: null,
  },
  {
    title: 'Portfolio VaR Simulation & Backtesting',
    description: 'Quantitative risk management framework using Value-at-Risk modeling for diversified portfolio of NIFTY sector ETFs. Applies Monte Carlo simulations and backtests VaR forecasts using Kupiec\'s Proportion of Failures Test.',
    tech: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib'],
    github: 'https://github.com/SJ-1302/Portfolio-VaR-Simulation-Backtesting',
    demo: null,
  },
  {
    title: 'GitHub Explorer',
    description: 'Interactive dashboard using GitHub REST API enabling users to search, filter, and sort repositories with real-time insights. Features bookmarking, personal notes, and persistent storage, improving repository discovery accuracy by 40%.',
    tech: ['React.js', 'Tailwind CSS', 'Chart.js', 'GitHub API'],
    github: 'https://github.com/SJ-1302/GitHub-Explorer',
    demo: null,
  },
  {
    title: 'Vision in Dark',
    description: 'Computer vision pipeline for autonomous vehicles enhancing low-visibility images and detecting nearby objects with real-time collision risk estimation. YOLO-based detection achieving 92% accuracy in collision probability prediction.',
    tech: ['Python', 'OpenCV', 'YOLOv8', 'TensorFlow'],
    github: 'https://github.com/SJ-1302/Vision-in-Dark',
    demo: null,
  },
  {
    title: 'Flight Itinerary Optimizer',
    description: 'Multi-criteria routing engine solving complex shortest path problem for diverse travel priorities using BFS and Dijkstra\'s algorithms. Real-time query engine achieving <5ms latency across 10,000+ flights with novel flight-as-node graph model.',
    tech: ['Graph Algos', 'Data Structures', 'C++', 'Optimization'],
    github: 'https://github.com/SJ-1302/Flight-Itinerary-Optimizer',
    demo: null,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              {/* Card */}
              <div className="relative h-full p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Content */}
                <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-white/5 border border-primary/20 text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300"
                      onClick={() => project.demo && window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}