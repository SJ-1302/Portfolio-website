import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { Button } from './ui/button';

export function ResumeSection() {
  const handleDownloadResume = () => {
    // Direct download of the resume inside public folder
    window.open('/SHREYANSH_JAIN_Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Download Button Only */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 text-primary-foreground px-8 py-6"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Only Resume Preview */}
          <div className="flex justify-center">
            <div className="relative group w-full">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl mb-4 text-primary">Resume Preview</h3>

                <div className="bg-white rounded-lg shadow-2xl overflow-auto" style={{ height: 'calc(100vh - 250px)' }}>
                  <iframe
                    src="/SHREYANSH_JAIN_Resume.pdf#view=FitH"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}