import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import AppLayout from '@/components/layout/AppLayout';
import SapienceSetup from '@/pages/SapienceSetup';
import OrgAdminDashboard from '@/pages/OrgAdminDashboard';
import ComplianceMasterDashboard from '@/pages/ComplianceMasterDashboard';
import DepartmentDashboard from '@/pages/DepartmentDashboard';
import EmployeeDashboard from '@/pages/EmployeeDashboard';
import MicroAppFeedbackHub from '@/pages/MicroAppFeedbackHub';
import MicroAppComplianceConnect from '@/pages/MicroAppComplianceConnect';
import MicroAppRiskGuard from '@/pages/MicroAppRiskGuard';
import MicroAppAuditPro from '@/pages/MicroAppAuditPro';
import MicroAppEnforcePoint from '@/pages/MicroAppEnforcePoint';

function RoleRouter() {
  const { role } = useAuth();

  const getDefaultRoute = () => {
    switch (role) {
      case 'sapience_admin':
        return '/onboarding';
      case 'org_admin':
        return '/admin';
      case 'compliance_officer':
        return '/compliance-master';
      case 'department_head':
        return '/department/cardiology';
      case 'employee':
        return '/my-compliance';
      default:
        return '/compliance-master';
    }
  };

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/onboarding" element={<SapienceSetup />} />
        <Route path="/admin" element={<OrgAdminDashboard />} />
        <Route path="/compliance-master" element={<ComplianceMasterDashboard />} />
        <Route path="/department/:departmentId" element={<DepartmentDashboard />} />
        <Route path="/my-compliance" element={<EmployeeDashboard />} />
        <Route path="/apps/feedback-hub" element={<MicroAppFeedbackHub />} />
        <Route path="/apps/compliance-connect" element={<MicroAppComplianceConnect />} />
        <Route path="/apps/risk-guard" element={<MicroAppRiskGuard />} />
        <Route path="/apps/audit-pro" element={<MicroAppAuditPro />} />
        <Route path="/apps/enforce-point" element={<MicroAppEnforcePoint />} />
        <Route path="*" element={<Navigate to={getDefaultRoute()} replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <RoleRouter />
      </AuthProvider>
    </HashRouter>
  );
}
