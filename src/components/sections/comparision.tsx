'use client'

import Section from '@/components/section'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisonData: Array<{
  feature: string
  us: boolean | string
  others: boolean | string
  usHighlight?: 'success' | 'danger'
  othersHighlight?: 'success' | 'danger'
}> = [
  {
    feature: 'Gray / BH Ads Support',
    us: true,
    others: false,
  },
  {
    feature: 'Unlimited Spending Limit',
    us: true,
    others: false,
  },
  {
    feature: 'Unlimited Ad Accounts',
    us: true,
    others: false,
  },
  {
    feature: 'Account Trust Score',
    us: 'Platinum',
    others: 'Silver',
  },
  {
    feature: "CPM's & CPA's",
    us: 'Low',
    others: 'High',
    usHighlight: 'success',
    othersHighlight: 'danger',
  },
  {
    feature: 'Ad Approval Rate Increase',
    us: '687%',
    others: '0%',
  },
  {
    feature: '24/7 Customer Support',
    us: true,
    others: false,
  },
  {
    feature: 'Average Ad Approval Time',
    us: '5 Minutes',
    others: '5-9 Hours',
  },
  {
    feature: 'Payment Options',
    us: 'Bank, Card, Crypto',
    others: 'Card Only',
  },
  {
    feature: 'US/EU Accounts Available',
    us: true,
    others: false,
  },
]

const renderCell = (value: boolean | string, highlight?: 'success' | 'danger') => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className='h-5 w-5 text-green-500' />
    ) : (
      <X className='h-5 w-5 text-red-500' />
    )
  }

  if (highlight === 'success') {
    return (
      <span className='inline-flex items-center rounded-full bg-green-100 dark:bg-green-950/30 px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400'>
        {value}
      </span>
    )
  }

  if (highlight === 'danger') {
    return (
      <span className='inline-flex items-center rounded-full bg-red-100 dark:bg-red-950/30 px-3 py-1 text-sm font-medium text-red-700 dark:text-red-400'>
        {value}
      </span>
    )
  }

  return <span className='text-foreground font-medium'>{value}</span>
}

export default function Comparison() {
  return (
    <Section
      title='Comparison'
      subtitle='Why Choose Us Over Traditional Agencies'
      description='See how our services deliver superior value and results compared to traditional ad account providers.'
    >
      <motion.div
        className='mx-auto mt-16 max-w-5xl'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className='overflow-hidden rounded-2xl border border-border bg-background shadow-sm'>
          {/* Table Header */}
          <div className='grid grid-cols-3 gap-4 border-b border-border bg-neutral-50 dark:bg-neutral-900 p-6'>
            <div className='text-sm font-medium text-muted-foreground'>Feature</div>
            <div className='text-center'>
              <span className='inline-flex items-center rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary'>
                Our Service
              </span>
            </div>
            <div className='text-center'>
              <span className='inline-flex items-center rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-muted-foreground'>
                Traditional Agencies
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div className='divide-y divide-border'>
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                className='grid grid-cols-3 gap-4 p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className='flex items-center text-sm font-medium text-foreground'>
                  {row.feature}
                </div>
                <div className='flex items-center justify-center'>
                  {renderCell(row.us, row.usHighlight)}
                </div>
                <div className='flex items-center justify-center'>
                  {renderCell(row.others, row.othersHighlight)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
