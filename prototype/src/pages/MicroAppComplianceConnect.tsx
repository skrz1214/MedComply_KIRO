import { cn } from '@/lib/utils';
import {
  Link2,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ExternalLink,
  Building2,
} from 'lucide-react';

const PIPELINE_STAGES = [
  { name: 'Identified', count: 12, color: 'bg-slate-400' },
  { name: 'Assessed', count: 8, color: 'bg-blue-400' },
  { name: 'Remediation', count: 5, color: 'bg-amber-400' },
  { name: 'Validation', count: 3, color: 'bg-purple-400' },
  { name: 'Monitoring', count: 7, color: 'bg-cyan-400' },
  { name: 'Closed', count: 24, color: 'bg-emerald-400' },
];


const ISSUES = [
  {
    id: 'CC-2024-067',
    title: 'Cross-department medication reconciliation gap between ED and Cardiology',
    departments: ['Emergency', 'Cardiology'],
    framework: 'Joint Commission',
    stage: 'Remediation',
    priority: 'high',
    daysOpen: 14,
    owner: 'Dr. R. Torres',
  },
  {
    id: 'CC-2024-064',
    title: 'Patient transfer documentation incomplete — missing nursing assessments',
    departments: ['Nursing', 'Surgery'],
    framework: 'CMS CoP',
    stage: 'Assessed',
    priority: 'critical',
    daysOpen: 7,
    owner: 'J. Martinez',
  },
  {
    id: 'CC-2024-061',
    title: 'Lab result notification delay exceeding 60-minute threshold',
    departments: ['Laboratory', 'Nursing'],
    framework: 'HIPAA',
    stage: 'Validation',
    priority: 'medium',
    daysOpen: 21,
    owner: 'K. Chen',
  },
  {
    id: 'CC-2024-058',
    title: 'Radiology contrast agent allergy protocol inconsistency across sites',
    departments: ['Radiology', 'Pharmacy'],
    framework: 'Patient Safety',
    stage: 'Identified',
    priority: 'high',
    daysOpen: 3,
    owner: 'Dr. A. Obi',
  },
  {
    id: 'CC-2024-055',
    title: 'Surgical site infection surveillance data sharing with Infection Control',
    departments: ['Surgery', 'Infection Control'],
    framework: 'CDC/NHSN',
    stage: 'Monitoring',
    priority: 'low',
    daysOpen: 45,
    owner: 'A. Johnson',
  },
  {
    id: 'CC-2024-052',
    title: 'Behavioral health screening integration with Primary Care EHR',
    departments: ['Behavioral Health', 'Primary Care'],
    framework: 'HIPAA',
    stage: 'Remediation',
    priority: 'medium',
    daysOpen: 30,
    owner: 'T. Williams',
  },
];


export default function MicroAppComplianceConnect() {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
          <Link2 className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h1 className="font-heading text-2xl font-bold">Compliance Connect</h1>
          <p className="text-sm text-muted-foreground">
            Cross-department compliance issue tracking & resolution
          </p>
        </div>
      </div>

      {/* 6-Stage Pipeline */}
      <div className="rounded-xl border bg-card p-5">
        <h3 className="mb-4 font-heading font-semibold">Issue Pipeline</h3>
        <div className="flex items-center gap-2">
          {PIPELINE_STAGES.map((stage, idx) => (
            <div key={stage.name} className="flex flex-1 flex-col items-center">
              <div className="flex items-center gap-1 w-full">
                <div className={cn('flex-1 h-10 rounded-lg flex flex-col items-center justify-center', stage.color)}>
                  <span className="text-lg font-bold text-white">{stage.count}</span>
                </div>
                {idx < PIPELINE_STAGES.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
              </div>
              <span className="mt-2 text-[11px] font-medium text-muted-foreground">{stage.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Issues List */}
      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="font-heading font-semibold">Active Cross-Department Issues</h3>
          <span className="text-xs text-muted-foreground">{ISSUES.length} open issues</span>
        </div>
        <div className="divide-y">
          {ISSUES.map((issue) => (
            <div key={issue.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-blue-600 font-medium">{issue.id}</span>
                    <span className={cn(
                      'rounded-full px-2 py-0.5 text-[10px] font-medium',
                      issue.priority === 'critical' ? 'bg-destructive/10 text-destructive' :
                      issue.priority === 'high' ? 'bg-warning/10 text-warning' :
                      issue.priority === 'medium' ? 'bg-blue-100 text-blue-700' :
                      'bg-muted text-muted-foreground'
                    )}>{issue.priority}</span>
                  </div>
                  <p className="text-sm font-medium">{issue.title}</p>
                  <div className="mt-2 flex items-center gap-3 flex-wrap">
                    {issue.departments.map((dept) => (
                      <span key={dept} className="flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                        <Building2 className="h-3 w-3" />{dept}
                      </span>
                    ))}
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <FileText className="h-3 w-3" />{issue.framework}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {issue.daysOpen}d open • {issue.owner}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    'rounded-full px-2.5 py-0.5 text-[11px] font-medium',
                    issue.stage === 'Monitoring' ? 'bg-cyan-100 text-cyan-700' :
                    issue.stage === 'Validation' ? 'bg-purple-100 text-purple-700' :
                    issue.stage === 'Remediation' ? 'bg-amber-100 text-amber-700' :
                    issue.stage === 'Assessed' ? 'bg-blue-100 text-blue-700' :
                    'bg-slate-100 text-slate-700'
                  )}>{issue.stage}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
