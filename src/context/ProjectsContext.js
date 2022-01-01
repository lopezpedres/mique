import { createContext } from "react"
import data from "../data/projects.json"

const ProjectContext = createContext()
const ProjectsContext = ({children}) => {



    return (
        <div>
            <ProjectContext.Provider value={data}>
                {children}
            </ProjectContext.Provider>
            
        </div>
    )
}

export default ProjectContext
export {ProjectsContext}
