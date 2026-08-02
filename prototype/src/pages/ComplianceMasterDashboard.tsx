import { cn } from '@/lib/utils';
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Clock,
  FileWarning,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const KPI_CARDS = [
  { label: 'Overall Compliance Score', value: '94.2%', trend: '+2.1%', up: true, icon: TrendingUp },
  { label: 'Open Action Items', value: '23', trend: '-8', up: true, icon: AlertCircle },
  { label: 'Pending Audits', value: '4', trend: '+1', up: false, icon: Clock },
  { label: 'Policy Adherence', value: '97.8%', trend: '+0.5%', up: true, icon: CheckCircle2 },
];


const MONTHLY_DATA = [
  { month: 'Jan', value: 88 }, { month: 'Feb', value: 90 },
  { month: 'Mar', value: 87 }, { month: 'Apr', value: 91 },
  { month: 'May', value: 93 }, { month: 'Jun', value: 92 },
  { month: 'Jul', value: 94 }, { month: 'Aug', value: 93 },
  { month: 'Sep', value: 95 }, { month: 'Oct', value: 94 },
  { month: 'Nov', value: 96 }, { month: 'Dec', value: 94 },
];

const DEPARTMENTS = [
  { name: 'Cardiology', score: 97, tasks: 2, color: 'bg-primary' },
  { name: 'Neurology', score: 94, tasks: 5, color: 'bg-blue-500' },
  { name: 'Emergency Medicine', score: 91, tasks: 8, color: 'bg-amber-500' },
  { name: 'Surgery', score: 96, tasks: 3, color: 'bg-emerald-500' },
  { name: 'Radiology', score: 89, tasks: 12, color: 'bg-purple-500' },
  { name: 'Pharmacy', score: 98, tasks: 1, color: 'bg-cyan-500' },
];


const ACTION_ITEMS = [
  { title: 'Update HIPAA Privacy Notice', priority: 'high', due: '2 days', dept: 'Legal' },
  { title: 'Complete Fire Safety Drill Report', priority: 'medium', due: '5 days', dept: 'Facilities' },
  { title: 'Review Opioid Prescribing Policy', priority: 'high', due: '1 day', dept: 'Pharmacy' },
  { title: 'Submit CMS Quality Measures', priority: 'critical', due: 'Overdue', dept: 'Quality' },
  { title: 'Annual OSHA Training Renewal', priority: 'medium', due: '2 weeks', dept: 'HR' },
];

const MICROAPP_GRID = [
  { name: 'Feedback Hub', count: 47, status: 'active', color: 'bg-purple-500' },
  { name: 'Compliance Connect', count: 12, status: 'active', color: 'bg-blue-500' },
  { name: 'RiskGuard', count: 8, status: 'warning', color: 'bg-amber-500' },
  { name: 'AuditPro', count: 4, status: 'active', color: 'bg-teal-500' },
  { name: 'EnforcePoint', count: 3, status: 'critical', color: 'bg-red-500' },
  { name: 'PolicyVault', count: 156, status: 'active', color: 'bg-indigo-500' },
];

const AUDIT_FINDINGS = [
  { id: 'AF-2024-089', finding: 'Incomplete medication reconciliation documentation', severity: 'Major', dept: 'Pharmacy', status: 'Open' },
  { id: 'AF-2024-085', finding: 'Staff credential verification delay >30 days', severity: 'Minor', dept: 'HR', status: 'In Progress' },
  { id: 'AF-2024-082', finding: 'Patient consent form version mismatch', severity: 'Critical', dept: 'Surgery', status: 'Open' },
  { id: 'AF-2024-078', finding: 'Infection control hand hygiene compliance below 85%', severity: 'Major', dept: 'Nursing', status: 'Resolved' },
];


export default function ComplianceMasterDashboard() {
  const maxValue = Math.max(...MONTHLY_DATA.map(d => d.value));

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-2xl font-bold">Compliance Master Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Meridian Health System — Real-time compliance overview across all departments
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {KPI_CARDS.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{kpi.label}</p>
                <Icon className={cn('h-4 w-4', kpi.up ? 'text-success' : 'text-destructive')} />
              </div>
              <p className="mt-2 font-heading text-3xl font-bold">{kpi.value}</p>
              <p className={cn('mt-1 text-xs font-medium', kpi.up ? 'text-success' : 'text-destructive')}>
                {kpi.trend} vs last month
              </p>
            </div>
          );
        })}
      </div>


      {/* Chart + Departments Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Bar Chart */}
        <div className="col-span-2 rounded-xl border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-heading font-semibold">Compliance Trend (12 Months)</h3>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-end gap-2 h-40">
            {MONTHLY_DATA.map((d) => (
              <div key={d.month} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[10px] font-medium text-muted-foreground">{d.value}%</span>
                <div
                  className="w-full rounded-t bg-primary/80 transition-all hover:bg-primary"
                  style={{ height: `${(d.value / maxValue) * 100}%` }}
                />
                <span className="text-[10px] text-muted-foreground">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Department Progress */}
        <div className="rounded-xl border bg-card p-5">
          <h3 className="mb-4 font-heading font-semibold">Department Scores</h3>
          <div className="space-y-3">
            {DEPARTMENTS.map((dept) => (
              <div key={dept.name}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-medium">{dept.name}</span>
                  <span className="text-muted-foreground">{dept.score}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className={cn('h-2 rounded-full transition-all', dept.color)}
                    style={{ width: `${dept.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Action Items + Microapps */}
      <div className="grid grid-cols-3 gap-4">
        {/* Action Items */}
        <div className="col-span-2 rounded-xl border bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-heading font-semibold">Priority Action Items</h3>
            <span className="text-xs text-muted-foreground">{ACTION_ITEMS.length} items</span>
          </div>
          <div className="space-y-2">
            {ACTION_ITEMS.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <FileWarning className={cn(
                    'h-4 w-4',
                    item.priority === 'critical' ? 'text-destructive' :
                    item.priority === 'high' ? 'text-warning' : 'text-muted-foreground'
                  )} />
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.dept}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    'rounded-full px-2 py-0.5 text-[11px] font-medium',
                    item.priority === 'critical' ? 'bg-destructive/10 text-destructive' :
                    item.priority === 'high' ? 'bg-warning/10 text-warning' :
                    'bg-muted text-muted-foreground'
                  )}>
                    {item.due}
                  </span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Microapp Grid */}
        <div className="rounded-xl border bg-card p-5">
          <h3 className="mb-4 font-heading font-semibold">Micro Apps</h3>
          <div className="grid grid-cols-2 gap-2">
            {MICROAPP_GRID.map((app) => (
              <div key={app.name} className="rounded-lg border p-3 hover:bg-muted/50 cursor-pointer transition-colors">
                <div className={cn('mb-2 h-2 w-8 rounded-full', app.color)} />
                <p className="text-xs font-medium">{app.name}</p>
                <p className="text-lg font-heading font-bold">{app.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Audit Findings Table */}
      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="font-heading font-semibold">Recent Audit Findings</h3>
          <button className="text-xs font-medium text-primary hover:underline">View All</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-xs text-muted-foreground">
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Finding</th>
              <th className="px-4 py-3 font-medium">Severity</th>
              <th className="px-4 py-3 font-medium">Dept</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {AUDIT_FINDINGS.map((finding) => (
              <tr key={finding.id} className="border-b last:border-0 hover:bg-muted/50">
                <td className="px-4 py-3 text-xs font-mono text-primary">{finding.id}</td>
                <td className="px-4 py-3 text-sm">{finding.finding}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    'rounded-full px-2 py-0.5 text-[11px] font-medium',
                    finding.severity === 'Critical' ? 'bg-destructive/10 text-destructive' :
                    finding.severity === 'Major' ? 'bg-warning/10 text-warning' :
                    'bg-muted text-muted-foreground'
                  )}>
                    {finding.severity}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{finding.dept}</td>
                <td className="px-4 py-3">
                  <span className={cn(
                    'rounded-full px-2 py-0.5 text-[11px] font-medium',
                    finding.status === 'Resolved' ? 'bg-success/10 text-success' :
                    finding.status === 'Open' ? 'bg-destructive/10 text-destructive' :
                    'bg-blue-100 text-blue-700'
                  )}>
                    {finding.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
