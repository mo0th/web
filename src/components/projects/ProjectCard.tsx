import { ProjectFrontMatter } from '@/types/project'
import Link from 'next/link'
import { CodeIcon, ExternalIcon, InfoIcon } from '../icons'
import ClinicallyRelevantCard from './clinically-relevant/ClinicallyRelevantCard'
import JupyterJsCard from './jupyter-js/JupyterJsCard'
import NotMessengerCard from './not-messenger/NotMessengerCard'

interface ProjectCardProps {
  project: ProjectFrontMatter
}

export type ProjectCardComponent = React.FC<ProjectCardProps>

const projectCardMap: Record<string, ProjectCardComponent> = {
  'jupyter-js': JupyterJsCard,
  'clinically-relevant': ClinicallyRelevantCard,
  'not-messenger': NotMessengerCard,
}

const ProjectCard: ProjectCardComponent = ({ project }) => {
  if (project.slug in projectCardMap) {
    const Comp = projectCardMap[project.slug]
    return <Comp project={project} />
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className="text-xl font-bold text-drac-pink font-display">{project.title}</div>
      <div className="flex-1">{project.shortDescription}</div>
      <div>
        <div className="flex flex-wrap -mt-1 -ml-2 text-xs text-opacity-80 text-drac-fg">
          {project.stack.map(tech => (
            <span key={tech} className="mt-1 ml-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 text-sm">
        <Link href={`/projects/${project.slug}`}>
          <a
            aria-label={`See details for ${project.title}`}
            className="inline-flex items-center space-x-1 underline text-drac-pink hover:text-drac-purple"
          >
            <InfoIcon className="inline-block w-4 h-4" />
            <span>Details</span>
            <span className="sr-only"> for {project.title}</span>
          </a>
        </Link>

        {project.live && (
          <a
            href={project.live}
            aria-label={`View the live site for ${project.title}`}
            className="inline-flex items-center space-x-1 underline text-drac-pink hover:text-drac-purple"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalIcon className="inline-block w-4 h-4" />
            <span>
              See <span className="sr-only">{project.title}</span> Live
            </span>
          </a>
        )}

        {project.source && (
          <a
            href={project.source}
            aria-label={`View the source code for ${project.title}`}
            className="inline-flex items-center space-x-1 underline text-drac-pink hover:text-drac-purple"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon className="inline-block w-4 h-4" />
            <span>Source</span>
            <span className="sr-only"> for {project.title}</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
