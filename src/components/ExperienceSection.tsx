import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Users, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const experiences = {
  work: [
    {
      title: 'Data Analytics Trainee',
      company: 'Escorts Kubota, Faridabad',
      period: 'Jun 2025',
      description: 'Analyzed tractor sales data to identify market trends and optimize regional sales strategies.',
      highlights: [
        'Analyzed demographic and regional tractor sales data across 50,000+ records spanning 27 regions and 13 tractor models to identify purchasing behavior trends and market performance variations',
        'Applied exploratory data analysis and comparative trend evaluation to uncover demand patterns, reducing manual data review effort by 40% and enabling data-driven regional sales prioritization strategies',
        'Python (Pandas, NumPy), Microsoft Excel (Pivot Tables, Data Transformation), Statistical Analysis',
      ],
    },
    {
      title: 'Quantitative Research and Strategy Intern',
      company: 'IgniteU Learning, Noida',
      period: 'Mar 2025 - Apr 2025',
      description: 'Built predictive models to analyze training effectiveness and improve student outcomes.',
      highlights: [
        'Analyzed training effectiveness data of 2,000+ students across 25+ technical skills to identify curriculum gaps and improve student-to-job readiness alignment',
        'Built predictive models using regression, clustering, and time-series analysis to forecast student performance and course completion rates, improving effectiveness of training by 30% and reducing manual evaluation time by 50%',
        'Automated ETL pipelines using Python (Pandas, NumPy, Scikit-learn, Statsmodels) to process training data, generate KPI dashboards, and deliver interactive Excel reports',
      ],
    },
  ],
  activities: [
    {
      title: 'Cultural Committee',
      company: 'VIT Bhopal',
      period: '2024',
      description: 'Core Team Member leading cultural events and activities.',
      highlights: [
        'Led planning and execution of "Advitya 2025" with 3000+ participants',
        'Coordinated multiple teams for successful event delivery',
        'Managed logistics and ensured smooth event operations',
      ],
    },
    {
      title: 'Chess Club',
      company: 'VIT Bhopal',
      period: '2023 - 2024',
      description: 'Sports Coordinator organizing chess tournaments and activities.',
      highlights: [
        'Organized 2 chess tournaments with 100+ participants',
        'Achieved 1600+ rating on Lichess',
        'Promoted chess culture and strategic thinking among students',
      ],
    },
  ],
  education: [
    {
      title: 'B.Tech in Computer Science with specialization in AI & ML',
      company: 'Vellore Institute of Technology, Bhopal',
      period: 'Aug. 2022 – May 2026',
      description: 'Comprehensive program focusing on AI, Machine Learning, and Data Science',
      highlights: [
        'CGPA: 8.5/10',
        'Relevant Coursework: Data Structures & Algorithms, Artificial Neural Networks, Deep Learning, Natural Language Processing, Reinforcement & Representation Learning, Applied Machine Learning, Data Mining & Data Warehousing, Computer Vision, Database Management Systems, Operating Systems, Computer Networks, Object-Oriented Programming, Python Programming, Digital Logic & Computer Architecture, Theory of Computation & Compiler Design',
        'Strong foundation in Data Structures, Algorithms, and Competitive Programming',
      ],
    },
    {
      title: 'Senior Secondary (12th Grade)- NON-Medical(PCM)',
      company: 'Delhi Public School, Faridabad',
      period: '2020 - 2021',
      description: 'CBSE Board Examination',
      highlights: [
        'Percentage: 90%+',
        'Strong foundation in Mathematics and Science',
      ],
    },
    {
      title: 'Secondary (10th Grade)',
      company: 'Delhi Public School, Faridabad',
      period: '2019 - 2020',
      description: 'CBSE Board Examination',
      highlights: [
        'Percentage: 90%+',
        'Academic excellence with consistent performance',
      ],
    },
  ],
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </motion.div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-white/5 border border-white/10">
            <TabsTrigger value="work" className="data-[state=active]:bg-primary data-[state=active]:text-[#0f0f10]">
              <Briefcase className="w-4 h-4 mr-2" />
              Work
            </TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:bg-accent data-[state=active]:text-[#0f0f10]">
              <Users className="w-4 h-4 mr-2" />
              Activities
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </TabsTrigger>
          </TabsList>

          {Object.entries(experiences).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

                <div className="space-y-8">
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-20"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_rgba(0,212,255,0.8)] border-4 border-[#0f0f10]" />

                      {/* Content card */}
                      <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] group">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl mb-1 text-white group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <TrendingUp size={16} className="text-accent" />
                              <span>{item.company}</span>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary">
                            {item.period}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                        <ul className="space-y-2">
                          {item.highlights.map((highlight, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_5px_rgba(0,255,136,0.8)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}