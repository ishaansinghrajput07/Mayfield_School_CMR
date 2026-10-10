import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Trophy,
  TrendingUp,
  CalendarCheck,
  Award,
  BookOpen,
  ClipboardList,
  Wallet,
  Megaphone,
  CalendarDays,
  IdCard,
  Library,
  School,
} from "lucide-react";

const STATS = [
  { icon: GraduationCap, value: "2,500+", label: "Students" },
  { icon: Users, value: "150+", label: "Teachers" },
  { icon: Trophy, value: "25+", label: "Years of Excellence" },
  { icon: TrendingUp, value: "98%", label: "Board Results" },
];

// Small floating info cards, per spec - muted green/beige accents rather
// than the earlier feature-chip row.
const INFO_CARDS = [
  { icon: CalendarCheck, label: "Attendance", tone: "sage" },
  { icon: IdCard, label: "Digital ID", tone: "gold" },
  { icon: BookOpen, label: "Homework", tone: "sage" },
  { icon: Library, label: "Library", tone: "olive" },
  { icon: Award, label: "Results", tone: "gold" },
  { icon: Wallet, label: "Fee Status", tone: "sage" },
];

const TONE_CLASSES = {
  sage: "bg-navy-50 text-navy-700",
  olive: "bg-navy-50 text-navy-600",
  gold: "bg-red-50 text-school-red",
};

export default function AuthHero() {
  return (
    <div className="relative hidden overflow-hidden bg-surface lg:flex lg:w-[56%] lg:flex-col lg:justify-between lg:p-12 xl:p-16">
      {/* Soft organic blobs - no stock photo, just gentle abstract shapes */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-28 top-0 h-[26rem] w-[26rem] rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-navy-500/[0.12] blur-2xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 22, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 bottom-0 h-[24rem] w-[24rem] rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-school-red/[0.08] blur-2xl"
        />
        <div className="absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-navy-500/[0.06] blur-3xl" />
      </div>

      {/* Logo + school name */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-500 text-white shadow-md shadow-navy-500/20">
          <GraduationCap size={22} />
        </div>
        <div>
          <p className="font-display text-base font-bold leading-tight text-navy-900">St. Thomas Convent</p>
          <p className="text-xs text-navy-500">Hr. Sec. School, Indore</p>
        </div>
      </motion.div>

      {/* Welcome copy + soft illustration */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative z-10 max-w-lg">
        <div className="relative mb-2 flex h-16 w-16 items-center justify-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-navy-700 shadow-[0_8px_24px_rgba(30,58,95,0.12)]"
          >
            <School size={30} strokeWidth={1.6} />
          </motion.div>
        </div>

        <h1 className="font-display text-4xl font-bold leading-tight text-navy-900 xl:text-5xl">
          Empowering Education <span className="text-school-red">Through Technology</span>
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-navy-600">
          Access attendance, assignments, results, fee management, notices, digital ID cards, and academic resources — all from one secure portal.
        </p>

        {/* Floating info cards */}
        <div className="mt-7 flex flex-wrap gap-2.5">
          {INFO_CARDS.map(({ icon: Icon, label, tone }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white/85 px-3.5 py-2 shadow-sm backdrop-blur-sm"
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-full ${TONE_CLASSES[tone]}`}>
                <Icon size={12.5} />
              </span>
              <span className="text-xs font-medium text-navy-700">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-2 gap-4">
        {STATS.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            whileHover={{ y: -3 }}
            className="rounded-xl border border-navy-100 bg-white p-4 shadow-card"
          >
            <Icon size={18} className="text-navy-700" />
            <p className="mt-2 font-display text-xl font-bold text-navy-900">{value}</p>
            <p className="text-xs text-navy-500">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
