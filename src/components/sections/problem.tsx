import BlurFade from '@/components/magicui/blur-fade'
import Section from '@/components/section'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Shield, Zap } from 'lucide-react'

const problems = [
  {
    title: 'Policy Violations',
    description:
      'Asset restrictions frequently stem from non-compliance with Meta’s Advertising Policies or Community Standards. Automated enforcement systems flag Business Managers, Profiles, and Pages when ad content, targeting practices, or account behavior falls outside approved guidelines. A deep understanding of policy frameworks is critical to maintaining uninterrupted campaign delivery.',
    icon: Brain,
  },
  {
    title: 'Suspicious Activity',
    description:
      'Accounts without verified identities, payment histories, or stable spend patterns are categorized as low-trust assets within Meta’s internal scoring models. Such signals elevate restriction risk and undermine scalability. Deploying aged, verified assets with established trust parameters provides the resilience required for sustained advertising operations',
    icon: Zap,
  },
  {
    title: 'Low Trust Signals',
    description:
      'With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.',
    icon: Shield,
  },
]

export default function Component() {
  return (
    <Section title='Problem' subtitle='Why Facebook Assets Get Restricted.'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className='bg-background border-none shadow-none'>
              <CardContent className='p-6 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <problem.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>{problem.title}</h3>
                <p className='text-muted-foreground'>{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}
