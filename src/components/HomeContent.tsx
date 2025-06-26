// This is a full-page layout between Navbar and Footer for the Nepali Stutter Detection app
// Sections: Hero, How It Works, Try Test, Therapy, About Model, Testimonials, Newsletter

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBrain, FaMicrophone, FaChartLine, FaRedo } from 'react-icons/fa';

const HomeContent = () => {
  return (
    <div className="pt-24">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Speak Freely with <span className="text-blue-600">SMART BOLI</span>
        </motion.h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Real-time AI-powered stuttering detection and therapy in Nepali
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold">
            Start Test
          </Link>
          <Link to="/practice-test" className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition font-semibold">
            Practice
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <FaMicrophone size={24} />, title: "Speak", desc: "Read a paragraph in Nepali." },
            { icon: <FaBrain size={24} />, title: "Detect", desc: "AI analyzes your speech in real-time." },
            { icon: <FaChartLine size={24} />, title: "Score", desc: "Get your stuttering percentage." },
            { icon: <FaRedo size={24} />, title: "Practice", desc: "Repeat with guided drills." },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow"
            >
              <div className="mb-4 text-blue-600 dark:text-blue-400">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Try the Test Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Try Our Stutter Test</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Live detection with visual feedback, confidence levels, and adaptive difficulty.</p>
        <Link to="/dashboard" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold">
          Start Now
        </Link>
      </section>

      {/* Therapy Sessions */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Therapy Tools</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>🔁 Repetition drills to improve flow</li>
              <li>🧘 Breathing and pacing practice</li>
              <li>📈 Progress tracking over time</li>
              <li>🗣️ Adaptive paragraph levels</li>
            </ul>
          </div>
          <img src="/speech_therapy_image.png" alt="Therapy Demo" className="rounded-xl shadow-lg dark:border dark:border-gray-700" />
        </div>
      </section>

      {/* About the Model */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How Our AI Works</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Trained on 4,000+ Nepali speech samples (balanced fluent/stuttered), our CNN model analyzes 1.5s audio chunks using Mel Spectrograms and predicts fluency in real-time. Here is our model accuracy and loss plot which indicates our model performance with top notch precision.
        </p>
        <div className="mt-8 flex justify-center gap-8 flex-wrap">
            <figure className="w-[450px] text-center">
                <img 
                src="accuracy_plot.png" 
                alt="Accuracy Plot" 
                className="w-full rounded shadow" 
                />
                <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Figure: Accuracy Plot
                </figcaption>
            </figure>

            <figure className="w-[450px] text-center">
                <img 
                src="loss_plot.png" 
                alt="Loss Plot" 
                className="w-full rounded shadow" 
                />
                <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Figure: Loss Plot
                </figcaption>
            </figure>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            "SMART BOLI helped me recognize and reduce my stutter. It's simple and empowering.",
            "I finally found a tool in Nepali that supports my speech journey. Thank you!",
          ].map((quote, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow"
            >
              <p className="text-gray-800 dark:text-gray-100 italic">“{quote}”</p>
              <div className="mt-3 text-blue-600 dark:text-blue-400 font-semibold">– User {idx + 1}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup Placeholder */}
      <section className="py-20 bg-blue-50 dark:bg-blue-900 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Newsletter coming soon. Get updates on tools, therapy, and community.</p>
        <input
          type="email"
          placeholder="Your email"
          disabled
          className="px-4 py-3 w-80 rounded-full bg-white dark:bg-gray-800 text-gray-500 text-center cursor-not-allowed"
        />
      </section>
    </div>
  );
};

export default HomeContent;