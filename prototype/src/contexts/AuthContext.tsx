import React, { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole =
  | 'sapience_admin'
  | 'org_admin'
  | 'compliance_officer'
  | 'department_head'
  | 'employee';

export const ALL_ROLES: { value: UserRole; label: string; description: string }[] = [
  { value: 'sapience_admin', label: 'Sapience Admin', description: 'Platform super-admin' },
  { value: 'org_admin', label: 'Organization Admin', description: 'Healthcare org administrator' },
  { value: 'compliance_officer', label: 'Compliance Officer', description: 'Compliance master dashboard' },
  { value: 'department_head', label: 'Department Head', description: 'Department-level management' },
  { value: 'employee', label: 'Employee', description: 'Individual compliance view' },
];

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  department?: string;
}

const MOCK_USERS: Record<UserRole, User> = {
  sapience_admin: {
    id: 'usr-001',
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@sapience.io',
    role: 'sapience_admin',
    avatar: 'SC',
  },
  org_admin: {
    id: 'usr-002',
    name: 'James Mitchell',
    email: 'j.mitchell@meridianhealth.org',
    role: 'org_admin',
    avatar: 'JM',
  },
  compliance_officer: {
    id: 'usr-003',
    name: 'Dr. Rebecca Torres',
    email: 'r.torres@meridianhealth.org',
    role: 'compliance_officer',
    avatar: 'RT',
    department: 'Compliance',
  },
  department_head: {
    id: 'usr-004',
    name: 'Dr. Michael Okafor',
    email: 'm.okafor@meridianhealth.org',
    role: 'department_head',
    avatar: 'MO',
    department: 'Cardiology',
  },
  employee: {
    id: 'usr-005',
    name: 'Nurse Patricia Lane',
    email: 'p.lane@meridianhealth.org',
    role: 'employee',
    avatar: 'PL',
    department: 'Emergency Medicine',
  },
};

interface AuthContextType {
  user: User;
  role: UserRole;
  switchRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>('compliance_officer');

  const switchRole = (newRole: UserRole) => {
    setRole(newRole);
  };

  const user = MOCK_USERS[role];

  return (
    <AuthContext.Provider value={{ user, role, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
