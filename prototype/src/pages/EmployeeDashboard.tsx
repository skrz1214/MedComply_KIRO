import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import {
  CheckCircle2,
  Clock,
  Award,
  BookOpen,
  FileText,
  AlertCircle,
  Lock,
  Star,
} from 'lucide-react';

const TASKS = [
  { title: 'Complete Annual HIPAA Training Module', type: 'Training', due: '2024-12-15', status: 'in-progress', progress: 75 },
  { title: 'Sign Updated Patient Privacy Policy', type: 'Policy', due: '2024-12-10', status: 'pending', progress: 0 },
  { title: 'Submit Hand Hygiene Self-Assessment', type: 'Assessment', due: '2024-12-20', status: 'pending', progress: 0 },
  { title: 'Review Emergency Code Procedures', type: 'Training', due: '2024-12-08', status: 'completed', progress: 100 },
  { title: 'Complete Infection Control Quiz', type: 'Assessment', due: '2024-12-05', status: 'completed', progress: 100 },
  { title: 'Acknowledge Workplace Violence Policy', type: 'Policy', due: '2024-12-18', status: 'pending', progress: 0 },
  { title: 'Fire Safety Annual Refresher', type: 'Training', due: '2024-12-22', status: 'pending', progress: 0 },
  { title: 'Update Emergency Contact Information', type: 'Admin', due: '2024-12-30', status: 'completed', progress: 100 },
  { title: 'Blood-borne Pathogen Training', type: 'Training', due: '2024-11-30', status: 'completed', progress: 100 },
  { title: 'Medication Administration Competency', type: 'Assessment', due: '2024-12-25', status: 'in-progress', progress: 40 },
  { title: 'Patient Rights and Responsibilities Review', type: 'Policy', due: '2024-12-12', status: 'completed', progress: 100 },
  { title: 'Cultural Competency Module', type: 'Training', due: '2024-12-28', status: 'pending', progress: 0 },
  { title: 'Restraint Use Protocol Acknowledgment', type: 'Policy', due: '2024-12-14', status: 'completed', progress: 100 },
  { title: 'Hazardous Materials Handling Quiz', type: 'Assessment', due: '2024-12-16', status: 'completed', progress: 100 },
];


const TRAINING_PROGRESS = [
  { name: 'HIPAA & Privacy', progress: 75, total: 8, completed: 6 },
  { name: 'Infection Control', progress: 100, total: 5, completed: 5 },
  { name: 'Patient Safety', progress: 60, total: 10, completed: 6 },
  { name: 'Emergency Procedures', progress: 100, total: 4, completed: 4 },
  { name: 'Clinical Competencies', progress: 40, total: 12, completed: 5 },
];

export default function EmployeeDashboard() {
  const { user } = useAuth();
  const completedTasks = TASKS.filter(t => t.status === 'completed').length;
  const totalTasks = TASKS.length;

  return (
    <div className="animate-fade-in space-y-6">
      {/* Gradient Header Card */}
      <div className="rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Welcome back, {user.name}</h1>
            <p className="mt-1 text-blue-100">
              {user.department} • Your compliance journey is on track
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="font-heading text-3xl font-bold">96%</p>
              <p className="text-xs text-blue-200">Compliance Score</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold">{completedTasks}/{totalTasks}</p>
              <p className="text-xs text-blue-200">Tasks Done</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                <p className="font-heading text-3xl font-bold">A+</p>
              </div>
              <p className="text-xs text-blue-200">Rating</p>
            </div>
          </div>
        </div>
      </div>


      {/* Read-only Notice */}
      <div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
        <Lock className="h-4 w-4 text-primary" />
        <p className="text-xs text-primary">
          This is your personal compliance view. Tasks are assigned by your department's compliance officer and cannot be modified.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Task List */}
        <div className="col-span-2 space-y-3">
          <h2 className="font-heading text-lg font-bold">My Compliance Tasks</h2>
          <div className="space-y-2">
            {TASKS.filter(t => t.status !== 'completed').map((task) => (
              <div key={task.title} className="rounded-xl border bg-card p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {task.status === 'in-progress' ? (
                      <Clock className="mt-0.5 h-4 w-4 text-primary" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{task.title}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium">
                          {task.type}
                        </span>
                        <span className="text-[11px] text-muted-foreground">Due: {task.due}</span>
                      </div>
                    </div>
                  </div>
                  {task.progress > 0 && (
                    <span className="text-xs font-bold text-primary">{task.progress}%</span>
                  )}
                </div>
                {task.progress > 0 && (
                  <div className="mt-2 h-1.5 rounded-full bg-muted">
                    <div
                      className="h-1.5 rounded-full bg-primary transition-all"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Completed Section */}
          <h3 className="mt-6 font-heading text-sm font-semibold text-muted-foreground">
            Completed ({completedTasks})
          </h3>
          <div className="space-y-1">
            {TASKS.filter(t => t.status === 'completed').slice(0, 4).map((task) => (
              <div key={task.title} className="flex items-center gap-3 rounded-lg p-2 opacity-70">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span className="text-sm line-through">{task.title}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Training Progress Sidebar */}
        <div className="space-y-4">
          <h2 className="font-heading text-lg font-bold">Training Progress</h2>
          <div className="rounded-xl border bg-card p-4 space-y-4">
            {TRAINING_PROGRESS.map((tp) => (
              <div key={tp.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">{tp.name}</span>
                  <span className="text-muted-foreground">{tp.completed}/{tp.total}</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className={cn(
                      'h-2 rounded-full transition-all',
                      tp.progress === 100 ? 'bg-success' :
                      tp.progress >= 60 ? 'bg-primary' : 'bg-warning'
                    )}
                    style={{ width: `${tp.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="rounded-xl border bg-card p-4">
            <h3 className="mb-3 font-heading text-sm font-semibold">Recent Achievements</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-xs font-medium">Perfect Attendance</p>
                  <p className="text-[10px] text-muted-foreground">30 days streak</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs font-medium">Fast Learner</p>
                  <p className="text-[10px] text-muted-foreground">5 modules in 1 week</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-success" />
                <div>
                  <p className="text-xs font-medium">Policy Expert</p>
                  <p className="text-[10px] text-muted-foreground">All policies reviewed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
