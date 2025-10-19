export interface User {
  uid: string;
  email: string;
  displayName: string;
  tenantId: string;
  role: 'ADMIN' | 'AGENT' | 'VIEWER';
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  status: string;
  priority: string;
  source: string;
  assignedTo?: string;
  tenantId: string;
  customFields?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  lastContactedAt?: Date;
}

export interface Interaction {
  id: string;
  leadId: string;
  userId: string;
  type: string;
  channel: string;
  subject?: string;
  content: string;
  tenantId: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  status: string;
  message: string;
}
