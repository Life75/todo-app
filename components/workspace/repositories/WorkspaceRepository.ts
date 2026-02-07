
import WorkspaceResponse from "../../../models/responses/WorkspaceResponse";
import { BaseRepository } from '../../../infrastructure/BaseRepository';
import { Result, ok } from '../../../models/Result';

export default class WorkspaceRepository extends BaseRepository {
  constructor() {
    // You can point this to a specific microservice or base path
    super("/api/workspaces");
  }
  async getWorkspaces(): Promise<Result<WorkspaceResponse[]>> {
    // Simulate a 1-second network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData: WorkspaceResponse[] = [
          {
            id: "1",
            name: "Personal Notes",
            icon: "📓",
            isSelected: true,
          },
          {
            id: "2",
            name: "Work Projects",
            icon: "💼",
            isSelected: false,
          },
          {
            id: "3",
            name: "Startup Idea",
            icon: "🚀",
            isSelected: false,
          },
        ];

        // Wrap the successful data in our 'ok' Result helper
        resolve(ok(mockData));
      }, 1000);
    });
  }
  /*
  async createWorkspace(data: Partial<WorkspaceResponse>): Promise<Result<WorkspaceResponse>> {
    return this.post<WorkspaceResponse>('/', data);
  }

  async updateWorkspace(id: string, data: Partial<WorkspaceResponse>): Promise<Result<WorkspaceResponse>> {
    return this.put<WorkspaceResponse>(`/${id}`, data);
  }

  async deleteWorkspace(id: string): Promise<Result<void>> {
    return this.delete<void>(`/${id}`);
  }
    */
}
