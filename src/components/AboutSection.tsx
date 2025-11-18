import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const technicalSkills = {
  languagesFrameworks: [
    'C++', 'Python', 'R', 'SQL', 'PostgreSQL',
    'NumPy', 'Pandas', 'SciPy', 'Statsmodels', 'Scikit-learn', 'XGBoost', 'OpenCV'
  ],
  toolsTechnologies: [
    'Data Structures & Algorithms', 'Git/GitHub', 'MS Excel', 'Tableau', ' REST APIs', 'NSE API',
    'Object-Oriented Design', 'LLM', 'VS Code', 'Jupyter Notebook'
  ],
  dataStructuresAlgorithms: [
    'Leetcode (Rating-1757)', 'CodeForces-Specialist', 'GeeksForGeeks', 'Code360'
  ],
  blockchainWeb3: [
    'Time-Series Forecasting', ' Monte Carlo Simulation', 'Options Greeks & IV', 'Derivatives Pricing'
  ]
};

// FULL certification names
const certifications = [
  'NISM-Series-VIII: Equity Derivatives Certification Examination',
  'Financial Markets — Yale University (Coursera, taught by Robert Shiller)',
  'Options 101: Options Trading Fundamentals — Akuna Capital Training Program',
  'Pricing Options with Mathematical Models — California Institute of Technology (Caltech)',
  'Generative AI Using IBM Watsonx — IBM Skills Network',
  'Google Data Analytics Professional Certificate — Google',
  'Executive Programme in Algorithmic Trading (EPAT) — QuantInsti (Currently Pursuing)'
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl text-primary">Career Interests</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m a software engineer and quantitative trading enthusiast with a strong 
                foundation in algorithmic trading, machine learning, and data structures & 
                algorithms. I focus on building intelligent systems at the intersection of 
                finance and technology, applying advanced models and efficient algorithms to 
                solve complex problems in quantitative finance.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With experience in developing high-performance trading pipelines and conducting 
                financial research, I bring a balanced blend of technical depth, analytical 
                thinking, and market understanding to every project.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl text-accent flex items-center gap-2">
                <Award className="text-accent" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                    <p className="text-sm text-muted-foreground">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-secondary">Technical Skills</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Languages & Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="mb-3 text-sm text-primary">Languages & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.languagesFrameworks.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-primary/20 text-xs text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="mb-3 text-sm text-primary">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.toolsTechnologies.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-primary/20 text-xs text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Data Structures & Algorithms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="mb-3 text-sm text-primary">Data Structures & Algorithms</h4>
                <p className="text-xs text-muted-foreground mb-2">Solved 700+ questions across platforms:</p>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.dataStructuresAlgorithms.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-primary/20 text-xs text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Blockchain & Web3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="mb-3 text-sm text-primary">Quantitative Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.blockchainWeb3.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-primary/20 text-xs text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
