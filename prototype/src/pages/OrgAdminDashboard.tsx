import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Home,
  Building2,
  Users,
  Workflow,
  AppWindow,
  ShieldCheck,
  Check,
  X,
  MoreVertical,
  Plus,
} from 'lucide-react';

const TABS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'organization', label: 'Organization', icon: Building2 },
  { id: 'roles', label: 'Roles & Permissions', icon: Users },
  { id: 'workflows', label: 'Workflows', icon: Workflow },
  { id: 'apps', label: 'Apps', icon: AppWindow },
  { id: 'security', label: 'Security', icon: ShieldCheck },
];

const STATUS_CARDS = [
  { label: 'Active Users', value: '2,847', change: '+12%', color: 'text-primary' },
  { label: 'Departments', value: '24', change: '+2', color: 'text-success' },
  { label: 'Pending Invites', value: '38', change: '-5', color: 'text-warning' },
  { label: 'Security Alerts', value: '3', change: 'Critical', color: 'text-destructive' },
];

const ROLES_TABLE = [
  { role: 'Chief Compliance Officer', users: 2, permissions: 'Full Access', status: 'active' },
  { role: 'Department Head', users: 24, permissions: 'Department Scope', status: 'active' },
  { role: 'Compliance Analyst', users: 18, permissions: 'Read + Report', status: 'active' },
  { role: 'Training Coordinator', users: 8, permissions: 'Training Module', status: 'active' },
  { role: 'External Auditor', users: 6, permissions: 'Audit Read-Only', status: 'limited' },
  { role: 'Staff Nurse', users: 1842, permissions: 'Self-Service', status: 'active' },
];

const WORKFLOWS = [
  { name: 'Policy Approval Chain', steps: 5, active: true, lastRun: '2 hours ago' },
  { name: 'Incident Escalation', steps: 7, active: true, lastRun: '45 min ago' },
  { name: 'Training Enrollment', steps: 3, active: true, lastRun: '1 day ago' },
  { name: 'Audit Notification', steps: 4, active: false, lastRun: 'Never' },
];

const SECURITY_TOGGLES = [
  { label: 'Single Sign-On (SAML 2.0)', enabled: true, desc: 'Azure AD integration active' },
  { label: 'Multi-Factor Authentication', enabled: true, desc: 'Required for all admin roles' },
  { label: 'IP Whitelisting', enabled: false, desc: 'Restrict access by IP range' },
  { label: 'Session Timeout (15 min)', enabled: true, desc: 'Auto-logout after inactivity' },
  { label: 'Audit Log Retention (7 years)', enabled: true, desc: 'HIPAA-compliant retention' },
  { label: 'Data Encryption at Rest', enabled: true, desc: 'AES-256 encryption enabled' },
];

export default function OrgAdminDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold">Organization Administration</h1>
        <p className="text-sm text-muted-foreground">
          Meridian Health System — Manage users, roles, workflows, and security
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-xl border bg-muted/50 p-1">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                activeTab === tab.id
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Status Cards */}
      {activeTab === 'home' && (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            {STATUS_CARDS.map((card) => (
              <div key={card.label} className="rounded-xl border bg-card p-5">
                <p className="text-sm text-muted-foreground">{card.label}</p>
                <p className={cn('mt-1 font-heading text-2xl font-bold', card.color)}>{card.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.change} this month</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Roles Table */}
      {activeTab === 'roles' && (
        <div className="rounded-xl border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-heading font-semibold">Role Definitions</h3>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white">
              <Plus className="h-3 w-3" /> New Role
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-xs text-muted-foreground">
                <th className="px-4 py-3 font-medium">Role Name</th>
                <th className="px-4 py-3 font-medium">Users</th>
                <th className="px-4 py-3 font-medium">Permissions</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {ROLES_TABLE.map((row) => (
                <tr key={row.role} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="px-4 py-3 text-sm font-medium">{row.role}</td>
                  <td className="px-4 py-3 text-sm">{row.users}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{row.permissions}</td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      'rounded-full px-2 py-0.5 text-[11px] font-medium',
                      row.status === 'active' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                    )}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <MoreVertical className="h-4 w-4 text-muted-foreground" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Workflows */}
      {activeTab === 'workflows' && (
        <div className="grid grid-cols-2 gap-4">
          {WORKFLOWS.map((wf) => (
            <div key={wf.name} className="rounded-xl border bg-card p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-heading font-semibold">{wf.name}</h4>
                  <p className="text-xs text-muted-foreground">{wf.steps} steps • Last run: {wf.lastRun}</p>
                </div>
                <span className={cn(
                  'rounded-full px-2.5 py-0.5 text-[11px] font-medium',
                  wf.active ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                )}>
                  {wf.active ? 'Active' : 'Disabled'}
                </span>
              </div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: wf.steps }).map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-full bg-primary/20">
                    <div className="h-full rounded-full bg-primary" style={{ width: '100%' }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Security */}
      {activeTab === 'security' && (
        <div className="rounded-xl border bg-card divide-y">
          {SECURITY_TOGGLES.map((toggle) => (
            <div key={toggle.label} className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium">{toggle.label}</p>
                <p className="text-xs text-muted-foreground">{toggle.desc}</p>
              </div>
              <div className={cn(
                'flex h-6 w-11 items-center rounded-full px-0.5 transition-colors',
                toggle.enabled ? 'bg-success' : 'bg-muted-foreground/30'
              )}>
                <div className={cn(
                  'h-5 w-5 rounded-full bg-white shadow transition-transform',
                  toggle.enabled && 'translate-x-5'
                )} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
