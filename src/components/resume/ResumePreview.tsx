
import { useResume } from '@/context/ResumeContext';
import { Card } from '@/components/ui/card';
import { formatDate } from '@/lib/date-utils';

const ResumePreview = () => {
  const { resume } = useResume();
  const { personalInfo, education, experience, skills, languages, certifications, socialLinks } = resume;
  
  return (
    <Card id="resume-container" className="shadow-lg bg-white p-6 md:p-8 w-full h-full resume-preview">
      {/* Cabeçalho com info pessoal */}
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold">{personalInfo.fullName || 'Seu Nome'}</h1>
        {personalInfo.jobTitle && <p className="text-lg text-muted-foreground mt-1">{personalInfo.jobTitle}</p>}
        
        <div className="flex flex-wrap justify-center gap-x-4 mt-2 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
        
        {socialLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-4 mt-2 text-sm">
            {socialLinks.map(link => (
              <a 
                key={link.id} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Resumo Profissional */}
      {personalInfo.summary && (
        <section className="mb-6 section">
          <h2>Resumo Profissional</h2>
          <p>{personalInfo.summary}</p>
        </section>
      )}
      
      {/* Experiência Profissional */}
      {experience.length > 0 && (
        <section className="mb-6 section">
          <h2>Experiência Profissional</h2>
          {experience.map(job => (
            <div key={job.id} className="mb-4 item">
              <div className="flex flex-col md:flex-row justify-between">
                <h3>{job.position} em {job.company}</h3>
                <span className="text-sm text-muted-foreground">
                  {formatDate(job.startDate)} - {job.currentlyWorking ? 'Atual' : formatDate(job.endDate)}
                </span>
              </div>
              {job.location && <p className="text-sm italic mb-1">{job.location}</p>}
              <p className="whitespace-pre-line">{job.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Formação */}
      {education.length > 0 && (
        <section className="mb-6 section">
          <h2>Formação Acadêmica</h2>
          {education.map(edu => (
            <div key={edu.id} className="mb-4 item">
              <div className="flex flex-col md:flex-row justify-between">
                <h3>{edu.degree} em {edu.field}</h3>
                <span className="text-sm text-muted-foreground">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </span>
              </div>
              <p className="text-sm mb-1">{edu.institution}</p>
              {edu.description && <p className="text-sm">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Habilidades */}
      {skills.length > 0 && (
        <section className="mb-6 section">
          <h2>Habilidades & Competências</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span 
                key={skill.id} 
                className="bg-accent px-3 py-1 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Idiomas */}
      {languages.length > 0 && (
        <section className="mb-6 section">
          <h2>Idiomas</h2>
          <ul>
            {languages.map(language => (
              <li key={language.id}>
                <span className="font-medium">{language.name}</span>: {language.proficiency}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Certificações */}
      {certifications.length > 0 && (
        <section className="section">
          <h2>Certificações</h2>
          <ul>
            {certifications.map(certification => (
              <li key={certification.id}>
                <div>
                  <span className="font-medium">{certification.name}</span> - {certification.issuer}
                  {certification.date && <span className="text-sm text-muted-foreground ml-2">({formatDate(certification.date)})</span>}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Card>
  );
};

export default ResumePreview;

