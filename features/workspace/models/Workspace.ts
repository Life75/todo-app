import Selectable from '../../../models/Selectable';

export default interface Workspace extends Selectable {
    id: string,
    icon?: string,
    name: string, 
}