export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalCourses: number;
}

export interface DashboardData {
  stats: DashboardStats;
  recentActivity: any[];
}
