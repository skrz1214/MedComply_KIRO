import { Bell, Search, ChevronDown } from 'lucide-react';
import { useAuth, ALL_ROLES } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function TopBar() {
  const { user, role, switchRole } = useAuth();
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);

  const currentRoleInfo = ALL_ROLES.find((r) => r.value === role);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      {/* Search */}
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search compliance items, policies..."
          className="h-9 w-full rounded-lg border bg-muted/30 pl-9 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Role Switcher */}
        <div className="relative">
          <button
            onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
            className="flex items-center gap-2 rounded-lg border-2 border-dashed border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800 transition-colors hover:bg-amber-100"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            {currentRoleInfo?.label}
            <ChevronDown className="h-3 w-3" />
          </button>

          {showRoleSwitcher && (
            <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border bg-white p-2 shadow-xl animate-fade-in">
              <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Switch Role (Dev Mode)
              </p>
              {ALL_ROLES.map((r) => (
                <button
                  key={r.value}
                  onClick={() => {
                    switchRole(r.value);
                    setShowRoleSwitcher(false);
                  }}
                  className={cn(
                    'flex w-full flex-col rounded-lg px-3 py-2 text-left transition-colors',
                    role === r.value
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted'
                  )}
                >
                  <span className="text-sm font-medium">{r.label}</span>
                  <span className="text-[11px] text-muted-foreground">{r.description}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-muted">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            {user.avatar}
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.department || user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
