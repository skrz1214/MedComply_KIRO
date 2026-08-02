import { cn } from '@/lib/utils';
import {
  Gavel,
  ArrowRight,
  Scale,
  FileWarning,
  Clock,
  DollarSign,
  Building2,
  AlertOctagon,
} from 'lucide-react';

const CASE_PIPELINE = [
  { name: 'Investigation', count: 4, color: 'bg-red-400' },
  { name: 'Documentation', count: 3, color: 'bg-orange-400' },
  { name: 'Review', count: 2, color: 'bg-amber-400' },
  { name: 'Action', count: 2, color: 'bg-purple-500' },
  { name: 'Appeal', count: 1, color: 'bg-blue-400' },
  { name: 'Resolved', count: 14, color: 'bg-emerald-400' },
];


const ENFORCEMENT_CASES = [
  {
    id: 'EP-2024-031',
    title: 'Repeat HIPAA breach — unauthorized PHI access by terminated employee',
    regulatoryBody: 'HHS OCR',
    stage: 'Investigation',
    severity: 'critical',
    potentialFine: '$250,000 - $1.5M',
    department: 'IT Security',
    daysOpen: 12,
    deadline: '2024-12-20',
  },
  {
    id: 'EP-2024-029',
    title: 'CMS survey deficiency — inadequate discharge planning documentation',
    regulatoryBody: 'CMS',
    stage: 'Documentation',
    severity: 'high',
    potentialFine: '$50,000 per day',
    department: 'Case Management',
    daysOpen: 18,
    deadline: '2024-12-15',
  },
  {
    id: 'EP-2024-027',
    title: 'OSHA citation — improper sharps disposal in outpatient clinic',
    regulatoryBody: 'OSHA',
    stage: 'Action',
    severity: 'medium',
    potentialFine: '$15,625 per violation',
    department: 'Outpatient Services',
    daysOpen: 30,
    deadline: '2025-01-10',
  },
  {
    id: 'EP-2024-025',
    title: 'State licensing board complaint — supervision ratio non-compliance',
    regulatoryBody: 'State DOH',
    stage: 'Review',
    severity: 'high',
    potentialFine: 'License suspension risk',
    department: 'Nursing',
    daysOpen: 25,
    deadline: '2024-12-28',
  },
  {
    id: 'EP-2024-023',
    title: 'DEA audit finding — controlled substance discrepancy (Schedule II)',
    regulatoryBody: 'DEA',
    stage: 'Investigation',
    severity: 'critical',
    potentialFine: '$25,000 per occurrence',
    department: 'Pharmacy',
    daysOpen: 8,
    deadline: '2025-01-05',
  },
  {
    id: 'EP-2024-021',
    title: 'Joint Commission immediate threat to life — fire door propping',
    regulatoryBody: 'The Joint Commission',
    stage: 'Appeal',
    severity: 'high',
    potentialFine: 'Accreditation risk',
    department: 'Facilities',
    daysOpen: 45,
    deadline: '2025-01-30',
  },
  {
    id: 'EP-2024-019',
    title: 'FDA warning letter — medical device reporting failure (MDR)',
    regulatoryBody: 'FDA',
    stage: 'Documentation',
    severity: 'medium',
    potentialFine: '$15,000 per device',
    department: 'Biomedical Engineering',
    daysOpen: 35,
    deadline: '2025-02-01',
  },
];


export default function MicroAppEnforcePoint() {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
          <Gavel className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <h1 className="font-heading text-2xl font-bold">EnforcePoint</h1>
          <p className="text-sm text-muted-foreground">
            Regulatory enforcement actions, citations & corrective action tracking
          </p>
        </div>
      </div>

      {/* Case Pipeline */}
      <div className="rounded-xl border bg-card p-5">
        <h3 className="mb-4 font-heading font-semibold">Enforcement Case Pipeline</h3>
        <div className="flex items-center gap-1">
          {CASE_PIPELINE.map((stage, idx) => (
            <div key={stage.name} className="flex flex-1 flex-col items-center">
              <div className="flex items-center gap-1 w-full">
                <div className={cn(
                  'flex-1 h-12 rounded-lg flex flex-col items-center justify-center',
                  stage.color
                )}>
                  <span className="text-lg font-bold text-white">{stage.count}</span>
                </div>
                {idx < CASE_PIPELINE.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" />
                )}
              </div>
              <span className="mt-2 text-[10px] font-medium text-muted-foreground">
                {stage.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Enforcement Cases */}
      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="font-heading font-semibold">Active Enforcement Cases</h3>
          <div className="flex items-center gap-2">
            <AlertOctagon className="h-4 w-4 text-destructive" />
            <span className="text-xs font-medium text-destructive">
              2 critical cases require immediate attention
            </span>
          </div>
        </div>
        <div className="divide-y">
          {ENFORCEMENT_CASES.map((ec) => (
            <div key={ec.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-mono text-xs text-red-600 font-medium">{ec.id}</span>
                    <span className={cn(
                      'rounded-full px-2 py-0.5 text-[10px] font-medium',
                      ec.severity === 'critical' ? 'bg-red-100 text-red-700' :
                      ec.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-amber-100 text-amber-700'
                    )}>{ec.severity}</span>
                    <span className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-800">
                      {ec.regulatoryBody}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{ec.title}</p>
                  <div className="mt-2 flex items-center gap-4 text-[11px] text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" />{ec.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />{ec.potentialFine}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />{ec.daysOpen}d open
                    </span>
                    <span className="flex items-center gap-1">
                      <Scale className="h-3 w-3" />Deadline: {ec.deadline}
                    </span>
                  </div>
                </div>
                <span className={cn(
                  'rounded-full px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap',
                  ec.stage === 'Investigation' ? 'bg-red-100 text-red-700' :
                  ec.stage === 'Documentation' ? 'bg-orange-100 text-orange-700' :
                  ec.stage === 'Review' ? 'bg-amber-100 text-amber-700' :
                  ec.stage === 'Action' ? 'bg-purple-100 text-purple-700' :
                  ec.stage === 'Appeal' ? 'bg-blue-100 text-blue-700' :
                  'bg-emerald-100 text-emerald-700'
                )}>{ec.stage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
