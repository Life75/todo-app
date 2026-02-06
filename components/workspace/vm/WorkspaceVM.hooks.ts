import { useState } from "react";

export default function useWorkspaceVM() {
    //todo get the workspace correlated with the user 

    const [workspaceItems, setWorkspaceItems] = useState([])



    return {
        workspaceItems
    }
}