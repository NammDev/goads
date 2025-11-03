'use client'

import Section from '@/components/section'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { AlertTriangle, XCircle, ShieldAlert, CheckCircle, Shield, TrendingUp } from 'lucide-react'

const problems = [
  {
    title: 'Policy Violations',
    description:
      "Ads, targeting, or account behavior trigger Meta's policy filters. Even small non-compliant actions can lead to instant restrictions.",
    icon: XCircle,
  },
  {
    title: 'Suspicious Activity',
    description:
      'Unusual logins, inconsistent IP/device usage, sudden info changes, or no spending history signal "risky behavior" to Meta\'s system.',
    icon: AlertTriangle,
  },
  {
    title: 'Low-Trust Assets',
    description:
      'New BMs, fresh pages, or non-verified profiles with no activity or spend history have a weak trust score and get restricted easily — especially when scaling.',
    icon: ShieldAlert,
  },
]

const solutions = [
  {
    title: 'Follow Smart Compliance',
    description:
      'Understand and apply core Meta policies, optimize ad behavior, and avoid risky actions to keep assets clean and stable.',
    icon: CheckCircle,
  },
  {
    title: 'Maintain Authentic Activity',
    description:
      'Use consistent devices, stable IPs, real engagement, and healthy warm-up routines to build trust gradually and naturally.',
    icon: Shield,
  },
  {
    title: 'Leverage High-Trust Assets',
    description:
      'Use verified BMs, aged profiles, and active real pages with proven history — boosting trust, durability, and scalability.',
    icon: TrendingUp,
  },
]

export default function Component() {
  return (
    <Section
      title='Problem & Solution'
      subtitle='Why Facebook Assets Get Restricted'
      description='Understanding the challenges and implementing proven strategies to maintain healthy, scalable Facebook advertising assets.'
    >
      <div className='my-16 space-y-12'>
        {/* Problems Row */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={cn(
                'group relative overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl',
                'hover:bg-red-500/10 transition-all duration-500 ease-out'
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 30,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div>
                <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 dark:bg-red-950/20 mb-4'>
                  <problem.icon className='h-6 w-6 text-red-500' />
                </div>
                <h3 className='font-semibold mb-2 text-foreground'>{problem.title}</h3>
                <p className='text-foreground'>{problem.description}</p>
              </div>

              <div className='absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none'></div>
            </motion.div>
          ))}
        </div>

        {/* Solutions Row */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={cn(
                'group relative overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl',
                'hover:bg-green-500/10 transition-all duration-500 ease-out'
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 30,
                delay: 0.3 + index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div>
                <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 dark:bg-green-950/20 mb-4'>
                  <solution.icon className='h-6 w-6 text-green-500' />
                </div>
                <h3 className='font-semibold mb-2 text-foreground'>{solution.title}</h3>
                <p className='text-foreground'>{solution.description}</p>
              </div>

              <div className='absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none'></div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
