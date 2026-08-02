import { NavLink } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Settings,
  Shield,
  Building2,
  Users,
  FileCheck,
  MessageSquare,
  Link2,
  AlertTriangle,
  ClipboardCheck,
  Gavel,
  Rocket,
  Heart,
  Brain,
  Stethoscope,
  Activity,
} from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  roles: string[];
}

const mainNav: NavItem[] = [
  { label: 'Platform Setup', path: '/onboarding', icon: <Rocket className="h-4 w-4" />, roles: ['sapience_admin'] },
  { label: 'Admin Console', path: '/admin', icon: <Settings className="h-4 w-4" />, roles: ['org_admin'] },
  { label: 'Compliance Master', path: '/compliance-master', icon: <Shield className="h-4 w-4" />, roles: ['compliance_officer', 'org_admin'] },
  { label: 'My Compliance', path: '/my-compliance', icon: <FileCheck className="h-4 w-4" />, roles: ['employee'] },
];

const departments: NavItem[] = [
  { label: 'Cardiology', path: '/department/cardiology', icon: <Heart className="h-4 w-4" />, roles: ['compliance_officer', 'department_head', 'org_admin'] },
  { label: 'Neurology', path: '/department/neurology', icon: <Brain className="h-4 w-4" />, roles: ['compliance_officer', 'department_head', 'org_admin'] },
  { label: 'Emergency Med', path: '/department/emergency', icon: <Activity className="h-4 w-4" />, roles: ['compliance_officer', 'department_head', 'org_admin'] },
  { label: 'Surgery', path: '/department/surgery', icon: <Stethoscope className="h-4 w-4" />, roles: ['compliance_officer', 'department_head', 'org_admin'] },
];

const microApps: NavItem[] = [
  { label: 'Feedback Hub', path: '/apps/feedback-hub', icon: <MessageSquare className="h-4 w-4" />, roles: ['compliance_officer', 'org_admin', 'department_head'] },
  { label: 'Compliance Connect', path: '/apps/compliance-connect', icon: <Link2 className="h-4 w-4" />, roles: ['compliance_officer', 'org_admin'] },
  { label: 'RiskGuard', path: '/apps/risk-guard', icon: <AlertTriangle className="h-4 w-4" />, roles: ['compliance_officer', 'org_admin'] },
  { label: 'AuditPro', path: '/apps/audit-pro', icon: <ClipboardCheck className="h-4 w-4" />, roles: ['compliance_officer', 'org_admin'] },
  { label: 'EnforcePoint', path: '/apps/enforce-point', icon: <Gavel className="h-4 w-4" />, roles: ['compliance_officer', 'org_admin'] },
];

function NavSection({ title, items }: { title?: string; items: NavItem[] }) {
  const { role } = useAuth();
  const filtered = items.filter((item) => item.roles.includes(role));

  if (filtered.length === 0) return null;

  return (
    <div className="mb-6">
      {title && (
        <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-blue-300/60">
          {title}
        </p>
      )}
      <nav className="space-y-1">
        {filtered.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
                isActive
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-blue-100/70 hover:bg-white/5 hover:text-white'
              )
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex w-64 flex-col bg-[hsl(213,94%,12%)] text-white">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-cyan-300">
          <Building2 className="h-4 w-4 text-blue-900" />
        </div>
        <div>
          <h1 className="font-heading text-base font-bold tracking-tight">MedComply</h1>
          <p className="text-[10px] text-blue-300/60">Healthcare Compliance</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <NavSection items={mainNav} />
        <NavSection title="Departments" items={departments} />
        <NavSection title="Micro Apps" items={microApps} />
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-blue-200/60">System Operational</span>
        </div>
      </div>
    </aside>
  );
}
