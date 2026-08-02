import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Building2,
  Palette,
  GitBranch,
  Scale,
  Lock,
  Rocket,
  Check,
  ChevronRight,
} from 'lucide-react';

const STEPS = [
  { id: 1, label: 'Client Profile', icon: Building2, description: 'Organization details & licensing' },
  { id: 2, label: 'Branding', icon: Palette, description: 'Logo, colors & white-labeling' },
  { id: 3, label: 'Org Hierarchy', icon: GitBranch, description: 'Departments & reporting structure' },
  { id: 4, label: 'Regulatory Setup', icon: Scale, description: 'Frameworks & jurisdictions' },
  { id: 5, label: 'Security', icon: Lock, description: 'SSO, MFA & access policies' },
  { id: 6, label: 'Deployment', icon: Rocket, description: 'Go-live configuration' },
];

const REGULATORY_FRAMEWORKS = [
  { name: 'HIPAA', status: 'active', rules: 847 },
  { name: 'HITECH Act', status: 'active', rules: 312 },
  { name: 'Joint Commission (TJC)', status: 'pending', rules: 1024 },
  { name: '42 CFR Part 2', status: 'active', rules: 156 },
  { name: 'OSHA Healthcare', status: 'pending', rules: 489 },
  { name: 'CMS Conditions of Participation', status: 'active', rules: 672 },
];

export default function SapienceSetup() {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold text-foreground">Platform Onboarding</h1>
        <p className="text-sm text-muted-foreground">
          Configure Meridian Health System on the MedComply platform
        </p>
      </div>

      <div className="flex gap-6">
        {/* Step Sidebar */}
        <div className="w-72 shrink-0">
          <div className="rounded-xl border bg-card p-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Setup Progress
            </p>
            <div className="space-y-1">
              {STEPS.map((step) => {
                const Icon = step.icon;
                const isComplete = step.id < currentStep;
                const isCurrent = step.id === currentStep;
                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all',
                      isCurrent && 'bg-primary/10 text-primary',
                      isComplete && 'text-success',
                      !isCurrent && !isComplete && 'text-muted-foreground hover:bg-muted'
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-lg',
                        isCurrent && 'bg-primary text-white',
                        isComplete && 'bg-success/10 text-success',
                        !isCurrent && !isComplete && 'bg-muted'
                      )}
                    >
                      {isComplete ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{step.label}</p>
                      <p className="text-[11px] text-muted-foreground">{step.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 rounded-lg bg-muted p-3">
              <div className="mb-1 flex justify-between text-xs">
                <span className="font-medium">Overall Progress</span>
                <span className="text-primary font-semibold">50%</span>
              </div>
              <div className="h-2 rounded-full bg-muted-foreground/20">
                <div className="h-2 w-1/2 rounded-full bg-primary transition-all" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="rounded-xl border bg-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-heading text-lg font-bold">Regulatory Framework Setup</h2>
                <p className="text-sm text-muted-foreground">
                  Select applicable compliance frameworks for Meridian Health System
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Step 4 of 6
              </span>
            </div>

            {/* Framework Grid */}
            <div className="grid gap-3">
              {REGULATORY_FRAMEWORKS.map((fw) => (
                <div
                  key={fw.name}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-lg',
                      fw.status === 'active' ? 'bg-success/10' : 'bg-warning/10'
                    )}>
                      <Scale className={cn(
                        'h-5 w-5',
                        fw.status === 'active' ? 'text-success' : 'text-warning'
                      )} />
                    </div>
                    <div>
                      <p className="font-medium">{fw.name}</p>
                      <p className="text-xs text-muted-foreground">{fw.rules} compliance rules</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      'rounded-full px-2.5 py-0.5 text-[11px] font-medium',
                      fw.status === 'active'
                        ? 'bg-success/10 text-success'
                        : 'bg-warning/10 text-warning'
                    )}>
                      {fw.status === 'active' ? 'Configured' : 'Pending'}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-between border-t pt-4">
              <button className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted">
                Previous Step
              </button>
              <button className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90">
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
