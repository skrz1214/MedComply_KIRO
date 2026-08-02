import { cn } from '@/lib/utils';
import {
  ClipboardCheck,
  Calendar,
  ArrowRight,
  Users,
  Clock,
  FileSearch,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const LIFECYCLE_STAGES = [
  { name: 'Planning', color: 'bg-slate-400', count: 3 },
  { name: 'Fieldwork', color: 'bg-blue-500', count: 2 },
  { name: 'Analysis', color: 'bg-purple-500', count: 1 },
  { name: 'Reporting', color: 'bg-teal-500', count: 1 },
  { name: 'Follow-up', color: 'bg-amber-500', count: 4 },
  { name: 'Closed', color: 'bg-emerald-500', count: 18 },
];


const ACTIVE_AUDITS = [
  {
    id: 'AUD-2024-012',
    title: 'Annual HIPAA Privacy & Security Assessment',
    type: 'Regulatory',
    auditor: 'External — Deloitte Health',
    stage: 'Fieldwork',
    progress: 65,
    startDate: '2024-11-01',
    dueDate: '2024-12-31',
    findings: 8,
    departments: ['All Departments'],
  },
  {
    id: 'AUD-2024-011',
    title: 'Surgical Services Quality Review',
    type: 'Internal',
    auditor: 'Dr. R. Torres, Compliance',
    stage: 'Analysis',
    progress: 80,
    startDate: '2024-10-15',
    dueDate: '2024-12-15',
    findings: 12,
    departments: ['Surgery', 'Anesthesiology'],
  },
  {
    id: 'AUD-2024-010',
    title: 'Medication Management Systems Audit',
    type: 'Regulatory',
    auditor: 'Joint Commission Surveyor',
    stage: 'Reporting',
    progress: 90,
    startDate: '2024-09-20',
    dueDate: '2024-12-10',
    findings: 5,
    departments: ['Pharmacy', 'Nursing'],
  },
  {
    id: 'AUD-2024-009',
    title: 'Emergency Department Throughput & Safety',
    type: 'Internal',
    auditor: 'Quality Team',
    stage: 'Follow-up',
    progress: 45,
    startDate: '2024-08-01',
    dueDate: '2024-12-20',
    findings: 15,
    departments: ['Emergency Medicine'],
  },
  {
    id: 'AUD-2024-008',
    title: 'Patient Rights & Informed Consent Review',
    type: 'Regulatory',
    auditor: 'CMS Regional Office',
    stage: 'Follow-up',
    progress: 70,
    startDate: '2024-07-15',
    dueDate: '2025-01-15',
    findings: 3,
    departments: ['Patient Services', 'Legal'],
  },
  {
    id: 'AUD-2024-015',
    title: 'Infection Prevention & Control Program Effectiveness',
    type: 'Internal',
    auditor: 'IC Committee',
    stage: 'Planning',
    progress: 10,
    startDate: '2024-12-01',
    dueDate: '2025-02-28',
    findings: 0,
    departments: ['Infection Control', 'Environmental Services'],
  },
];


export default function MicroAppAuditPro() {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100">
          <ClipboardCheck className="h-5 w-5 text-teal-600" />
        </div>
        <div>
          <h1 className="font-heading text-2xl font-bold">AuditPro</h1>
          <p className="text-sm text-muted-foreground">
            Audit lifecycle management — from planning through closure
          </p>
        </div>
      </div>

      {/* Audit Lifecycle Pipeline */}
      <div className="rounded-xl border bg-card p-5">
        <h3 className="mb-4 font-heading font-semibold">Audit Lifecycle</h3>
        <div className="flex items-center gap-1">
          {LIFECYCLE_STAGES.map((stage, idx) => (
            <div key={stage.name} className="flex flex-1 flex-col items-center">
              <div className="flex items-center gap-1 w-full">
                <div className={cn(
                  'flex-1 h-12 rounded-lg flex flex-col items-center justify-center',
                  stage.color
                )}>
                  <span className="text-lg font-bold text-white">{stage.count}</span>
                </div>
                {idx < LIFECYCLE_STAGES.length - 1 && (
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

      {/* Active Audits */}
      <div className="space-y-4">
        <h3 className="font-heading font-semibold">Active Audits</h3>
        {ACTIVE_AUDITS.map((audit) => (
          <div key={audit.id} className="rounded-xl border bg-card p-5 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-teal-600 font-medium">{audit.id}</span>
                  <span className={cn(
                    'rounded-full px-2 py-0.5 text-[10px] font-medium',
                    audit.type === 'Regulatory' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'
                  )}>{audit.type}</span>
                  <span className={cn(
                    'rounded-full px-2 py-0.5 text-[10px] font-medium',
                    audit.stage === 'Fieldwork' ? 'bg-blue-100 text-blue-700' :
                    audit.stage === 'Analysis' ? 'bg-purple-100 text-purple-700' :
                    audit.stage === 'Reporting' ? 'bg-teal-100 text-teal-700' :
                    audit.stage === 'Follow-up' ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-700'
                  )}>{audit.stage}</span>
                </div>
                <p className="text-sm font-medium">{audit.title}</p>
                <div className="mt-1.5 flex items-center gap-4 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" />{audit.auditor}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{audit.startDate} → {audit.dueDate}</span>
                  <span className="flex items-center gap-1"><FileSearch className="h-3 w-3" />{audit.findings} findings</span>
                </div>
                <div className="mt-2 flex gap-1.5">
                  {audit.departments.map((dept) => (
                    <span key={dept} className="rounded bg-teal-50 px-2 py-0.5 text-[10px] font-medium text-teal-700">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm font-bold text-teal-600">{audit.progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 rounded-full bg-muted">
              <div
                className={cn(
                  'h-2 rounded-full transition-all',
                  audit.progress >= 80 ? 'bg-teal-500' :
                  audit.progress >= 50 ? 'bg-blue-500' : 'bg-amber-400'
                )}
                style={{ width: `${audit.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
