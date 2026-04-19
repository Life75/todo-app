import WorkspaceRepository from '../repositories/WorkspaceRepository';
import WorkspaceResponse from '../../../models/responses/WorkspaceResponse';
import { Result } from '../../../models/types/Result';
export default class WorkspaceService {
  private repository: WorkspaceRepository;

  constructor(repo: WorkspaceRepository) {
    this.repository = repo;
  }

  async getWorkspaces(): Promise<Result<WorkspaceResponse[]>> {
    const result = await this.repository.getWorkspaces();
    return result;
  }

  async createWorkspace(name: string): Promise<Result<void>> {
    const result = await this.repository.createWorkspace(name)
    return result 
  }
}