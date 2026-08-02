import { cn } from '@/lib/utils';
import {
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Filter,
  Star,
} from 'lucide-react';

const STATS = [
  { label: 'Total Feedback', value: '847', change: '+23 this week', icon: MessageSquare },
  { label: 'Resolved', value: '692', change: '81.7% resolution rate', icon: CheckCircle2 },
  { label: 'Avg Response Time', value: '4.2h', change: '-1.3h from last month', icon: Clock },
  { label: 'Satisfaction Score', value: '4.6/5', change: '+0.2 trending up', icon: Star },
];


const FEEDBACK_ITEMS = [
  {
    id: 'FB-2024-341',
    title: 'HIPAA training module too long — suggest breaking into micro-lessons',
    submitter: 'Anonymous (Nursing)',
    category: 'Training',
    sentiment: 'negative',
    votes: 34,
    status: 'under-review',
    date: '2 hours ago',
  },
  {
    id: 'FB-2024-338',
    title: 'Excellent new hand hygiene monitoring stations in ICU',
    submitter: 'Dr. K. Patel (Cardiology)',
    category: 'Equipment',
    sentiment: 'positive',
    votes: 21,
    status: 'acknowledged',
    date: '5 hours ago',
  },
  {
    id: 'FB-2024-335',
    title: 'Incident reporting form is confusing — too many required fields',
    submitter: 'Anonymous (Emergency)',
    category: 'Process',
    sentiment: 'negative',
    votes: 56,
    status: 'in-progress',
    date: '1 day ago',
  },
  {
    id: 'FB-2024-332',
    title: 'Request for bilingual compliance materials (Spanish)',
    submitter: 'T. Rodriguez (Patient Services)',
    category: 'Accessibility',
    sentiment: 'neutral',
    votes: 89,
    status: 'planned',
    date: '2 days ago',
  },
  {
    id: 'FB-2024-329',
    title: 'Medication disposal protocol signage unclear in outpatient areas',
    submitter: 'Anonymous (Pharmacy)',
    category: 'Signage',
    sentiment: 'negative',
    votes: 12,
    status: 'resolved',
    date: '3 days ago',
  },
  {
    id: 'FB-2024-325',
    title: 'Appreciate the new compliance dashboard — very intuitive',
    submitter: 'J. Mitchell (Admin)',
    category: 'Technology',
    sentiment: 'positive',
    votes: 45,
    status: 'acknowledged',
    date: '4 days ago',
  },
  {
    id: 'FB-2024-320',
    title: 'Night shift staff struggle to complete online training during shifts',
    submitter: 'Anonymous (Nursing)',
    category: 'Scheduling',
    sentiment: 'negative',
    votes: 67,
    status: 'under-review',
    date: '5 days ago',
  },
];


export default function MicroAppFeedbackHub() {
  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
            <MessageSquare className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold">Feedback Hub</h1>
            <p className="text-sm text-muted-foreground">
              Staff compliance feedback & suggestions management
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-xl border bg-card p-4">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-purple-500" />
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
              <p className="mt-2 font-heading text-2xl font-bold">{stat.value}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Feedback List */}
      <div className="rounded-xl border bg-card">
        <div className="border-b p-4">
          <h3 className="font-heading font-semibold">Recent Feedback</h3>
        </div>
        <div className="divide-y">
          {FEEDBACK_ITEMS.map((item) => (
            <div key={item.id} className="flex items-start justify-between p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-3 flex-1">
                <div className={cn(
                  'mt-1 rounded-full p-1.5',
                  item.sentiment === 'positive' ? 'bg-success/10' :
                  item.sentiment === 'negative' ? 'bg-destructive/10' : 'bg-muted'
                )}>
                  {item.sentiment === 'positive' ? (
                    <ThumbsUp className="h-3 w-3 text-success" />
                  ) : item.sentiment === 'negative' ? (
                    <ThumbsDown className="h-3 w-3 text-destructive" />
                  ) : (
                    <MessageSquare className="h-3 w-3 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <div className="mt-1 flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span>{item.submitter}</span>
                    <span className="rounded bg-purple-50 px-1.5 py-0.5 text-purple-700 font-medium">{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3" /> {item.votes}
                </div>
                <span className={cn(
                  'rounded-full px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap',
                  item.status === 'resolved' ? 'bg-success/10 text-success' :
                  item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  item.status === 'planned' ? 'bg-purple-100 text-purple-700' :
                  item.status === 'under-review' ? 'bg-warning/10 text-warning' :
                  'bg-muted text-muted-foreground'
                )}>
                  {item.status.replace('-', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
