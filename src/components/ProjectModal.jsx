import { ArrowUpRight, Check, X } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="modal-close icon-button" aria-label="Close project details" onClick={onClose}><X size={20}/></button>
      <div className="modal-visual"><ProjectVisual type={project.visual}/></div>
      <div className="modal-content"><span className="eyebrow">CASE STUDY / {project.number}</span><h2 id="modal-title">{project.title}</h2><p className="modal-subtitle">{project.subtitle}</p><p>{project.description}</p><div className="modal-outcome"><Check size={18}/><span>{project.outcome}</span></div><h3>Focus areas</h3><div className="tag-list">{project.services.map(item => <span className="skill-tag" key={item}>{item}</span>)}</div><button className="text-link" onClick={() => { onClose(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); }}>Discuss a similar project <ArrowUpRight size={17}/></button></div>
    </section>
  </div>;
}
