import type { ReactNode } from "react";

export type ProjectId = "mgdev" | "buildsync" | "taskly" | "movies" | "old";
export interface Project {
  id: ProjectId;
  header: string;
  description: ReactNode;
  code?: string | null;
  demo?: string | null;
}
