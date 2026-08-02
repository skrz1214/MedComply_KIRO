import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Users,
  CheckCircle2,
  AlertTriangle,
  Clock,
  TrendingUp,
  FileText,
  Target,
  UserCheck,
} from 'lucide-react';

const DEPARTMENTS_META: Record<string, { name: string; head: string; staff: number }> = {
  cardiology: { name: 'Cardiology', head: 'Dr. Michael Okafor', staff: 156 },
  neurology: { name: 'Neurology', head: 'Dr. Lisa Huang', staff: 89 },
  emergency: { name: 'Emergency Medicine', head: 'Dr. James Wright', staff: 234 },
  surgery: { name: 'Surgery', head: 'Dr. Amara Obi', staff: 178 },
};


const METRIC_TILES = [
  { label: 'Compliance Score', value: '96.4%', icon: TrendingUp, color: 'text-success' },
  { label: 'Open Tasks', value: '14', icon: Clock, color: 'text-warning' },
  { label: 'Staff Trained', value: '149/156', icon: UserCheck, color: 'text-primary' },
  { label: 'Active Risks', value: '3', icon: AlertTriangle, color: 'text-destructive' },
];

const TASKS = [
  { title: 'Complete Q4 Hand Hygiene Audit', assignee: 'Dr. Sarah Kim', due: '2024-12-15', status: 'in-progress', priority: 'high' },
  { title: 'Update Cardiac Cath Lab Protocols', assignee: 'Nurse James Bell', due: '2024-12-20', status: 'pending', priority: 'medium' },
  { title: 'Submit STEMI Response Time Data', assignee: 'Dr. Michael Okafor', due: '2024-12-10', status: 'overdue', priority: 'critical' },
  { title: 'Annual Equipment Certification Review', assignee: 'Tech Lead R. Patel', due: '2024-12-30', status: 'pending', priority: 'low' },
  { title: 'Staff Competency Assessments (Batch 3)', assignee: 'HR Coord. T. Martinez', due: '2024-12-18', status: 'in-progress', priority: 'medium' },
  { title: 'Infection Control Monthly Report', assignee: 'IC Nurse A. Johnson', due: '2024-12-05', status: 'completed', priority: 'high' },
];

const KPIS = [
  { metric: 'Door-to-Balloon Time', target: '<90 min', actual: '72 min', status: 'met' },
  { metric: 'Hand Hygiene Compliance', target: '>95%', actual: '97.2%', status: 'met' },
  { metric: 'Falls Rate', target: '<2 per 1000', actual: '1.8', status: 'met' },
  { metric: 'Medication Error Rate', target: '<0.5%', actual: '0.7%', status: 'not-met' },
  { metric: 'Patient Satisfaction', target: '>90%', actual: '92.4%', status: 'met' },
  { metric: 'Staff Turnover', target: '<12%', actual: '14.2%', status: 'not-met' },
];

const TEAM_MEMBERS = [
  { name: 'Dr. Sarah Kim', role: 'Attending Cardiologist', compliance: 98, tasks: 2 },
  { name: 'Nurse James Bell', role: 'Charge Nurse', compliance: 95, tasks: 4 },
  { name: 'R. Patel', role: 'Cath Lab Tech Lead', compliance: 100, tasks: 1 },
  { name: 'Dr. Wei Zhang', role: 'Fellow', compliance: 92, tasks: 3 },
  { name: 'A. Johnson', role: 'Infection Control', compliance: 97, tasks: 2 },
];


export default function DepartmentDashboard() {
  const { departmentId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const dept = DEPARTMENTS_META[departmentId || 'cardiology'] || DEPARTMENTS_META.cardiology;

  const tabs = ['overview', 'tasks', 'kpis', 'team'];

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header with Department Selector */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold">{dept.name} Department</h1>
          <p className="text-sm text-muted-foreground">
            Head: {dept.head} • {dept.staff} staff members
          </p>
        </div>
        <select className="rounded-lg border bg-card px-3 py-2 text-sm font-medium">
          {Object.entries(DEPARTMENTS_META).map(([key, val]) => (
            <option key={key} value={key}>{val.name}</option>
          ))}
        </select>
      </div>

      {/* Metric Tiles */}
      <div className="grid grid-cols-4 gap-4">
        {METRIC_TILES.map((tile) => {
          const Icon = tile.icon;
          return (
            <div key={tile.label} className="rounded-xl border bg-card p-4">
              <div className="flex items-center gap-2">
                <Icon className={cn('h-4 w-4', tile.color)} />
                <span className="text-xs text-muted-foreground">{tile.label}</span>
              </div>
              <p className={cn('mt-2 font-heading text-2xl font-bold', tile.color)}>{tile.value}</p>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'px-4 py-2 text-sm font-medium capitalize transition-colors border-b-2',
              activeTab === tab
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            )}
          >
            {tab}
          </button>
        ))}
      </div>


      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="mb-3 font-heading font-semibold">Compliance Summary</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Policy Adherence</span><span className="font-medium">98%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[98%] rounded-full bg-success" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Training Completion</span><span className="font-medium">95%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[95%] rounded-full bg-primary" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Incident Response</span><span className="font-medium">88%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[88%] rounded-full bg-warning" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="mb-3 font-heading font-semibold">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm"><CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /><span>Cardiac arrest protocol updated and approved</span></div>
              <div className="flex gap-3 text-sm"><AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" /><span>Equipment calibration due for Echo Lab</span></div>
              <div className="flex gap-3 text-sm"><FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" /><span>Q3 quality report submitted to CMS</span></div>
              <div className="flex gap-3 text-sm"><Users className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" /><span>3 new staff pending compliance orientation</span></div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tasks' && (
        <div className="rounded-xl border bg-card">
          <div className="divide-y">
            {TASKS.map((task) => (
              <div key={task.title} className="flex items-center justify-between p-4 hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'h-2 w-2 rounded-full',
                    task.status === 'completed' ? 'bg-success' :
                    task.status === 'overdue' ? 'bg-destructive' :
                    task.status === 'in-progress' ? 'bg-primary' : 'bg-muted-foreground'
                  )} />
                  <div>
                    <p className="text-sm font-medium">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.assignee} • Due: {task.due}</p>
                  </div>
                </div>
                <span className={cn(
                  'rounded-full px-2.5 py-0.5 text-[11px] font-medium',
                  task.priority === 'critical' ? 'bg-destructive/10 text-destructive' :
                  task.priority === 'high' ? 'bg-warning/10 text-warning' :
                  task.priority === 'medium' ? 'bg-blue-100 text-blue-700' :
                  'bg-muted text-muted-foreground'
                )}>{task.priority}</span>
              </div>
            ))}
          </div>
        </div>
      )}


      {activeTab === 'kpis' && (
        <div className="rounded-xl border bg-card">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-xs text-muted-foreground">
                <th className="px-4 py-3 font-medium">KPI Metric</th>
                <th className="px-4 py-3 font-medium">Target</th>
                <th className="px-4 py-3 font-medium">Actual</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {KPIS.map((kpi) => (
                <tr key={kpi.metric} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="px-4 py-3 text-sm font-medium">{kpi.metric}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{kpi.target}</td>
                  <td className="px-4 py-3 text-sm font-medium">{kpi.actual}</td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      'flex items-center gap-1 text-xs font-medium',
                      kpi.status === 'met' ? 'text-success' : 'text-destructive'
                    )}>
                      {kpi.status === 'met' ? <CheckCircle2 className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}
                      {kpi.status === 'met' ? 'Met' : 'Not Met'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="grid grid-cols-1 gap-3">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="flex items-center justify-between rounded-xl border bg-card p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm font-bold text-success">{member.compliance}%</p>
                  <p className="text-[10px] text-muted-foreground">Compliance</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{member.tasks}</p>
                  <p className="text-[10px] text-muted-foreground">Open Tasks</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
