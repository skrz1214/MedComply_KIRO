import { cn } from '@/lib/utils';
import {
  AlertTriangle,
  Shield,
  TrendingUp,
  ArrowRight,
  Activity,
  Flame,
  Zap,
  Eye,
} from 'lucide-react';

const RISK_LEVELS = [
  { level: 'Critical', count: 2, color: 'bg-red-500', textColor: 'text-red-700', bgColor: 'bg-red-50' },
  { level: 'High', count: 8, color: 'bg-amber-500', textColor: 'text-amber-700', bgColor: 'bg-amber-50' },
  { level: 'Medium', count: 15, color: 'bg-yellow-400', textColor: 'text-yellow-700', bgColor: 'bg-yellow-50' },
  { level: 'Low', count: 34, color: 'bg-emerald-400', textColor: 'text-emerald-700', bgColor: 'bg-emerald-50' },
];

const PROCESS_STAGES = [
  { name: 'Identify', icon: Eye, active: true },
  { name: 'Assess', icon: Activity, active: true },
  { name: 'Mitigate', icon: Shield, active: true },
  { name: 'Monitor', icon: TrendingUp, active: true },
  { name: 'Report', icon: Flame, active: false },
];


const RISKS = [
  {
    id: 'RG-2024-018',
    title: 'PHI exposure risk — unencrypted portable devices in radiology',
    category: 'Data Security',
    level: 'Critical',
    likelihood: 'High',
    impact: 'Severe',
    department: 'Radiology',
    mitigation: 'Device encryption mandate issued',
    daysOpen: 5,
  },
  {
    id: 'RG-2024-016',
    title: 'Surgical wrong-site prevention checklist non-compliance trend',
    category: 'Patient Safety',
    level: 'Critical',
    likelihood: 'Medium',
    impact: 'Severe',
    department: 'Surgery',
    mitigation: 'Mandatory time-out protocol reinforcement',
    daysOpen: 8,
  },
  {
    id: 'RG-2024-014',
    title: 'Staffing shortage increasing medication error risk in night shifts',
    category: 'Operational',
    level: 'High',
    likelihood: 'High',
    impact: 'Major',
    department: 'Nursing',
    mitigation: 'Temp staffing agency engaged; double-check protocol',
    daysOpen: 12,
  },
  {
    id: 'RG-2024-012',
    title: 'Expired emergency medications found in crash carts (3 locations)',
    category: 'Patient Safety',
    level: 'High',
    likelihood: 'Medium',
    impact: 'Major',
    department: 'Pharmacy',
    mitigation: 'Weekly inspection schedule implemented',
    daysOpen: 3,
  },
  {
    id: 'RG-2024-010',
    title: 'Vendor access control gaps — third-party maintenance staff',
    category: 'Security',
    level: 'High',
    likelihood: 'Medium',
    impact: 'Moderate',
    department: 'Facilities',
    mitigation: 'Badge access audit underway',
    daysOpen: 18,
  },
  {
    id: 'RG-2024-008',
    title: 'Incomplete discharge planning documentation pattern',
    category: 'Compliance',
    level: 'Medium',
    likelihood: 'High',
    impact: 'Moderate',
    department: 'Case Management',
    mitigation: 'EHR template revision in progress',
    daysOpen: 25,
  },
];


export default function MicroAppRiskGuard() {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h1 className="font-heading text-2xl font-bold">RiskGuard</h1>
          <p className="text-sm text-muted-foreground">
            Enterprise risk identification, assessment & mitigation tracking
          </p>
        </div>
      </div>

      {/* Risk Levels */}
      <div className="grid grid-cols-4 gap-4">
        {RISK_LEVELS.map((rl) => (
          <div key={rl.level} className={cn('rounded-xl border p-4', rl.bgColor)}>
            <div className="flex items-center gap-2">
              <div className={cn('h-3 w-3 rounded-full', rl.color)} />
              <span className={cn('text-sm font-medium', rl.textColor)}>{rl.level}</span>
            </div>
            <p className={cn('mt-2 font-heading text-3xl font-bold', rl.textColor)}>{rl.count}</p>
            <p className="text-[11px] text-muted-foreground">active risks</p>
          </div>
        ))}
      </div>

      {/* 5-Stage Process */}
      <div className="rounded-xl border bg-card p-5">
        <h3 className="mb-4 font-heading font-semibold">Risk Management Process</h3>
        <div className="flex items-center justify-between">
          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div key={stage.name} className="flex items-center gap-2">
                <div className={cn(
                  'flex flex-col items-center gap-2',
                )}>
                  <div className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-xl',
                    stage.active ? 'bg-amber-100 text-amber-700' : 'bg-muted text-muted-foreground'
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium">{stage.name}</span>
                </div>
                {idx < PROCESS_STAGES.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground mx-4 mb-5" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Risks List */}
      <div className="rounded-xl border bg-card">
        <div className="border-b p-4">
          <h3 className="font-heading font-semibold">Active Risks</h3>
        </div>
        <div className="divide-y">
          {RISKS.map((risk) => (
            <div key={risk.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-amber-600 font-medium">{risk.id}</span>
                    <span className={cn(
                      'rounded-full px-2 py-0.5 text-[10px] font-medium',
                      risk.level === 'Critical' ? 'bg-red-100 text-red-700' :
                      risk.level === 'High' ? 'bg-amber-100 text-amber-700' :
                      'bg-yellow-100 text-yellow-700'
                    )}>{risk.level}</span>
                    <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium">{risk.category}</span>
                  </div>
                  <p className="text-sm font-medium">{risk.title}</p>
                  <div className="mt-2 flex items-center gap-4 text-[11px] text-muted-foreground">
                    <span>Dept: {risk.department}</span>
                    <span>Likelihood: {risk.likelihood}</span>
                    <span>Impact: {risk.impact}</span>
                    <span>{risk.daysOpen}d open</span>
                  </div>
                  <p className="mt-1.5 text-xs text-primary">
                    <Zap className="inline h-3 w-3 mr-1" />{risk.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
