import React, { createContext, useContext, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft,
  Bookmark,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleUserRound,
  FileText,
  Gauge,
  HeartHandshake,
  Home,
  MapPin,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Star,
  Upload,
  X
} from 'lucide-react';
import './styles.css';

const jobs = [
  {
    id: 1,
    title: 'Senior UX Designer',
    company: 'Stripe',
    initial: 'S',
    companyColor: '#635BFF',
    location: 'San Francisco, CA',
    workType: 'Hybrid',
    salary: '$120k - $160k',
    postedDays: 2,
    matchScore: 92,
    categories: { skill: 95, experience: 88, role: 96, tool: 97, industry: 82, location: 90 },
    matchedKeywords: ['UX Design', 'Figma', 'Design Systems', 'User Research', 'Prototyping', 'Accessibility'],
    missingKeywords: ['A/B Testing', 'SQL'],
    whyMatch: "Your UX/UI background and Figma expertise align strongly with Stripe's complex product surface. Design systems experience is a direct match for their component-driven approach.",
    responsibilities: [
      'Lead end-to-end design for checkout and dashboard experiences',
      "Define and evolve Stripe's design system alongside product teams",
      'Run discovery sprints and usability studies with enterprise customers',
      'Partner with engineering on high-fidelity implementation'
    ],
    requirements: ['5+ years of product design experience', 'Deep Figma and prototyping skills', 'Experience with design systems at scale'],
    benefits: ['Health & Dental', 'Equity', 'Remote-friendly Fridays', 'Annual Learning Budget'],
    industry: 'Fintech',
    seniority: 'Senior'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Linear',
    initial: 'L',
    companyColor: '#5E6AD2',
    location: 'Remote',
    workType: 'Remote',
    salary: '$110k - $145k',
    postedDays: 1,
    matchScore: 88,
    categories: { skill: 90, experience: 82, role: 91, tool: 88, industry: 78, location: 95 },
    matchedKeywords: ['UI Design', 'Figma', 'Design Systems', 'Prototyping', 'React'],
    missingKeywords: ['Product Analytics', 'Growth Design'],
    whyMatch: "Linear's design-first culture fits your UI and systems background. Your component and prototype work maps directly to their product.",
    responsibilities: ['Design new project management features', 'Maintain Linear design language', 'Work closely with engineers on implementation'],
    requirements: ['3+ years product design experience', 'Strong visual and interaction design skills', 'Experience with developer handoff'],
    benefits: ['Fully Remote', 'Equity', 'Flexible Hours', 'Home Office Budget'],
    industry: 'Developer Tools',
    seniority: 'Mid'
  },
  {
    id: 3,
    title: 'UI Engineer / Designer',
    company: 'Vercel',
    initial: 'V',
    companyColor: '#111111',
    location: 'Remote',
    workType: 'Remote',
    salary: '$105k - $140k',
    postedDays: 3,
    matchScore: 84,
    categories: { skill: 82, experience: 80, role: 83, tool: 92, industry: 76, location: 95 },
    matchedKeywords: ['UI Design', 'React', 'CSS', 'HTML', 'Figma', 'Accessibility'],
    missingKeywords: ['Next.js', 'TypeScript', 'Motion'],
    whyMatch: 'Your blend of UI design and front-end skills is a strong fit for a hybrid design engineering role.',
    responsibilities: ['Build marketing and documentation UI', 'Bridge design and engineering for components', 'Create interactive prototypes'],
    requirements: ['Strong React and modern CSS knowledge', 'Pixel-level attention to detail', 'Experience with performance-focused frontend work'],
    benefits: ['Fully Remote', 'Equity', 'Unlimited PTO', 'Learning Stipend'],
    industry: 'Developer Tools',
    seniority: 'Mid'
  },
  {
    id: 4,
    title: 'Design Systems Designer',
    company: 'Notion',
    initial: 'N',
    companyColor: '#000000',
    location: 'New York, NY',
    workType: 'Hybrid',
    salary: '$115k - $150k',
    postedDays: 5,
    matchScore: 79,
    categories: { skill: 85, experience: 75, role: 80, tool: 88, industry: 72, location: 65 },
    matchedKeywords: ['Design Systems', 'Figma', 'UI Design', 'Documentation', 'Accessibility'],
    missingKeywords: ['Brand Design', 'Motion Design', 'Iconography'],
    whyMatch: "Your design systems experience and Figma depth are a strong foundation for scaling Notion's visual language.",
    responsibilities: ['Build and document a multi-platform design system', 'Create Figma components with variables', 'Partner on React implementation'],
    requirements: ['3+ years design systems experience', 'Expert-level Figma', 'Strong documentation skills'],
    benefits: ['Health & Dental', 'Hybrid Flexibility', 'Equity', 'Commuter Benefits'],
    industry: 'Productivity',
    seniority: 'Mid'
  },
  {
    id: 5,
    title: 'Senior Product Designer',
    company: 'Figma',
    initial: 'F',
    companyColor: '#F24E1E',
    location: 'San Francisco, CA',
    workType: 'Hybrid',
    salary: '$135k - $175k',
    postedDays: 7,
    matchScore: 76,
    categories: { skill: 80, experience: 68, role: 85, tool: 90, industry: 75, location: 85 },
    matchedKeywords: ['UX Design', 'UI Design', 'Figma', 'Prototyping', 'User Research'],
    missingKeywords: ['Enterprise Design', 'Design Tool Strategy', '5+ Years'],
    whyMatch: 'Your Figma expertise and product design foundation fit well, though the seniority bar is high.',
    responsibilities: ['Design core editor and collaboration experiences', 'Run research synthesis', 'Partner with product and engineering'],
    requirements: ['5+ years product design at scale', 'Deep design tooling expertise', 'Strong research and product strategy skills'],
    benefits: ['Health & Dental', 'Hybrid Flexibility', 'RSUs', 'Top-tier Benefits'],
    industry: 'Design Tools',
    seniority: 'Senior'
  },
  {
    id: 6,
    title: 'UX Designer',
    company: 'Loom',
    initial: 'L',
    companyColor: '#625DF5',
    location: 'Remote',
    workType: 'Remote',
    salary: '$90k - $120k',
    postedDays: 4,
    matchScore: 71,
    categories: { skill: 75, experience: 70, role: 76, tool: 72, industry: 65, location: 95 },
    matchedKeywords: ['UX Design', 'User Research', 'Prototyping', 'Figma'],
    missingKeywords: ['Video Product', 'B2C Design', 'Growth Experimentation'],
    whyMatch: 'Good UX foundation, but the video-specific domain and B2C focus may differ from your background.',
    responsibilities: ['Design async video features', 'Conduct interviews and usability studies', 'Improve onboarding flows'],
    requirements: ['2+ years UX design experience', 'Consumer product design experience', 'Video or media product experience preferred'],
    benefits: ['Fully Remote', 'Equity', 'Health & Dental', 'Async-first Culture'],
    industry: 'Communication',
    seniority: 'Mid'
  }
];

const profile = {
  name: 'Maya Chen',
  title: 'UX/UI Designer',
  yearsExp: 3,
  location: 'San Francisco, CA',
  workType: 'Hybrid',
  salaryTarget: '$100k - $150k',
  targetRoles: ['UX Designer', 'Product Designer', 'UI Designer'],
  profileStrength: 78,
  keywords: {
    skills: ['UX Design', 'UI Design', 'User Research', 'Prototyping', 'Wireframing', 'Accessibility'],
    tools: ['Figma', 'Sketch', 'InVision', 'CSS', 'HTML', 'React'],
    experience: ['Design Systems', 'Mobile Design', 'SaaS Products', 'B2B UX'],
    soft: ['Cross-functional collaboration', 'Design critique', 'Stakeholder communication']
  }
};

const AppContext = createContext(null);

function AppProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [skippedJobIds, setSkippedJobIds] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [screen, setScreen] = useState('discover');
  const [toast, setToast] = useState(null);
  const discoverJobs = jobs.filter((job) => !skippedJobIds.includes(job.id));

  const saveJob = (job) => setSavedJobs((prev) => (prev.some((item) => item.id === job.id) ? prev : [...prev, job]));
  const toggleSaveJob = (job) => {
    setSavedJobs((prev) => (prev.some((item) => item.id === job.id) ? prev.filter((item) => item.id !== job.id) : [...prev, job]));
  };
  const applyJob = (job) => {
    setApplications((prev) =>
      prev.some((item) => item.id === job.id)
        ? prev
        : [...prev, { ...job, status: 'Applied', date: new Date().toLocaleDateString(), notes: '' }]
    );
  };
  const skipJob = (job) => {
    setSkippedJobIds((prev) => (prev.includes(job.id) ? prev : [...prev, job.id]));
    setToast({ job, message: `Skipped ${job.company}` });
  };
  const undoSkip = () => {
    if (!toast?.job) return;
    setSkippedJobIds((prev) => prev.filter((id) => id !== toast.job.id));
    setToast(null);
  };

  const value = useMemo(
    () => ({
      applications,
      applyJob,
      discoverJobs,
      saveJob,
      savedJobs,
      screen,
      selectedJob,
      setApplications,
      setScreen,
      setSelectedJob,
      skipJob,
      toast,
      toggleSaveJob,
      undoSkip
    }),
    [applications, discoverJobs, savedJobs, screen, selectedJob, toast]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useFitRole() {
  return useContext(AppContext);
}

function App() {
  const [stage, setStage] = useState('landing');

  return (
    <AppProvider>
      <main className="app-shell">
        <div className="phone">
          {stage === 'landing' && <LandingScreen onStart={() => setStage('onboarding')} />}
          {stage === 'onboarding' && <OnboardingScreen onDone={() => setStage('app')} />}
          {stage === 'app' && <MobileExperience />}
        </div>
      </main>
    </AppProvider>
  );
}

function LandingScreen({ onStart }) {
  return (
    <section className="screen landing-screen">
      <header className="topbar">
        <Logo />
        <button className="small-button" onClick={onStart}>Start</button>
      </header>
      <div className="hero">
        <p className="eyebrow">AI job matching</p>
        <h1>Find jobs that actually fit you.</h1>
        <p>FitRole scores every role against your skills and experience so you can decide quickly and with less noise.</p>
        <button className="primary-button" onClick={onStart}>
          Get matched
          <ChevronRight size={18} />
        </button>
      </div>
      <article className="preview-card">
        <JobCard job={jobs[0]} compact />
      </article>
      <div className="steps">
        {[
          ['Build your profile', 'Upload a resume or review extracted keywords.'],
          ['Compare fit', 'See skill, role, tool, and location match scores.'],
          ['Act fast', 'Open details, save, skip, or apply from the ranked feed.']
        ].map(([title, body], index) => (
          <div className="step" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>{title}</strong>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OnboardingScreen({ onDone }) {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState('Product Design');
  const steps = ['Goal', 'Resume', 'Keywords', 'Preferences'];

  return (
    <section className="screen onboarding-screen">
      <div className="progress-row">{steps.map((item, index) => <span className={index <= step ? 'active' : ''} key={item} />)}</div>
      <p className="eyebrow">Step {step + 1} of {steps.length} · {steps[step]}</p>
      {step === 0 && (
        <Panel title="What kind of role are you targeting?" subtitle="This tunes your matches before resume parsing kicks in.">
          <div className="choice-list">
            {['Product Design', 'UX Research', 'Design Systems', 'UI Engineering'].map((item) => (
              <button className={goal === item ? 'choice active' : 'choice'} onClick={() => setGoal(item)} key={item}>
                {item}
                {goal === item && <Check size={16} />}
              </button>
            ))}
          </div>
        </Panel>
      )}
      {step === 1 && (
        <Panel title="Upload your resume" subtitle="For now this prototype simulates extraction with Maya's profile.">
          <div className="upload-box">
            <Upload size={30} />
            <strong>Resume parser ready</strong>
            <span>PDF or Word · max 5MB</span>
          </div>
        </Panel>
      )}
      {step === 2 && (
        <Panel title="Review your keywords" subtitle="Remove weak signals later from your profile tab.">
          <ChipCloud items={[...profile.keywords.skills, ...profile.keywords.tools.slice(0, 4)]} />
        </Panel>
      )}
      {step === 3 && (
        <Panel title="Set preferences" subtitle="These can be expanded into real filters next.">
          <div className="preference-grid">
            {['Remote', 'Hybrid', 'Mid-level', '$100k+'].map((item) => <span key={item}>{item}</span>)}
          </div>
        </Panel>
      )}
      <footer className="onboarding-actions">
        {step > 0 && <button className="secondary-button" onClick={() => setStep((value) => value - 1)}>Back</button>}
        <button className="primary-button" onClick={() => (step < steps.length - 1 ? setStep((value) => value + 1) : onDone())}>
          {step < steps.length - 1 ? 'Continue' : 'Find matches'}
        </button>
      </footer>
    </section>
  );
}

function MobileExperience() {
  const { screen, selectedJob, toast, undoSkip } = useFitRole();

  return (
    <section className="screen app-screen">
      <StatusBar />
      {screen === 'discover' && <DiscoverScreen />}
      {screen === 'saved' && <SavedScreen />}
      {screen === 'applications' && <ApplicationsScreen />}
      {screen === 'profile' && <ProfileScreen />}
      {selectedJob && <JobDetail />}
      {toast && (
        <div className="undo-toast">
          <span>{toast.message}</span>
          <button onClick={undoSkip}>Undo</button>
        </div>
      )}
      <BottomNav />
    </section>
  );
}

function DiscoverScreen() {
  const { applications, discoverJobs, savedJobs, setSelectedJob, skipJob, toggleSaveJob, applyJob } = useFitRole();

  return (
    <div className="content discover">
      <div className="screen-heading">
        <div>
          <h2>Discover</h2>
          <p>{discoverJobs.length} ranked role matches</p>
        </div>
        <button className="icon-button" aria-label="Discovery settings"><Settings2 size={19} /></button>
      </div>
      <section className="insight-strip">
        <Sparkles size={18} />
        <span>Strongest signal today: design systems roles with React-adjacent tooling.</span>
      </section>
      <div className="feed-controls" aria-label="Sort options">
        <button className="active">Best match</button>
        <button>Recent</button>
        <button>Remote</button>
      </div>
      <div className="job-feed">
        {discoverJobs.length === 0 ? (
          <EmptyState icon={<HeartHandshake size={36} />} title="No roles left in Discover" body="Saved jobs and applications are still available in their tabs." />
        ) : discoverJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            saved={savedJobs.some((item) => item.id === job.id)}
            applied={applications.some((item) => item.id === job.id)}
            onOpen={() => setSelectedJob(job)}
            onSave={() => toggleSaveJob(job)}
            onApply={() => applyJob(job)}
            onSkip={() => skipJob(job)}
          />
        ))}
      </div>
    </div>
  );
}

function JobDetail() {
  const { selectedJob: job, setSelectedJob, saveJob, applyJob, savedJobs, applications } = useFitRole();
  const saved = savedJobs.some((item) => item.id === job.id);
  const applied = applications.some((item) => item.id === job.id);

  return (
    <aside className="detail-sheet">
      <header className="detail-header">
        <button className="icon-button" onClick={() => setSelectedJob(null)} aria-label="Close details"><ArrowLeft size={20} /></button>
        <div>
          <strong>{job.title}</strong>
          <span>{job.company}</span>
        </div>
        <MatchPill score={job.matchScore} />
      </header>
      <div className="detail-body">
        <JobHero job={job} />
        <Section title="Why this matches you"><p>{job.whyMatch}</p></Section>
        <Section title="Match breakdown"><ScoreBars categories={job.categories} /></Section>
        <Section title="Matched keywords"><ChipCloud items={job.matchedKeywords} type="match" /></Section>
        <Section title="Keywords to build"><ChipCloud items={job.missingKeywords} type="gap" /></Section>
        <Section title="Responsibilities"><BulletList items={job.responsibilities} /></Section>
        <Section title="Requirements"><BulletList items={job.requirements} /></Section>
        <Section title="Benefits"><ChipCloud items={job.benefits} /></Section>
      </div>
      <footer className="detail-actions">
        <button className={saved ? 'secondary-button success' : 'secondary-button'} onClick={() => saveJob(job)}>
          <Bookmark size={17} />
          {saved ? 'Saved' : 'Save'}
        </button>
        <button className={applied ? 'primary-button success' : 'primary-button'} onClick={() => applyJob(job)}>
          <Check size={17} />
          {applied ? 'Applied' : 'Apply'}
        </button>
      </footer>
    </aside>
  );
}

function SavedScreen() {
  const { savedJobs, setSelectedJob, applyJob, applications } = useFitRole();
  return (
    <ListScreen title="Saved" subtitle={`${savedJobs.length} saved roles`}>
      {savedJobs.length === 0 ? (
        <EmptyState icon={<Bookmark size={36} />} title="No saved jobs yet" body="Swipe up on roles you want to revisit later." />
      ) : savedJobs.map((job) => (
        <MiniJobCard key={job.id} job={job} onOpen={() => setSelectedJob(job)}>
          {applications.some((item) => item.id === job.id)
            ? <StatusBadge status="Applied" />
            : <button className="small-button dark" onClick={(event) => { event.stopPropagation(); applyJob(job); }}>Apply</button>}
        </MiniJobCard>
      ))}
    </ListScreen>
  );
}

function ApplicationsScreen() {
  const { applications, setApplications, setSelectedJob } = useFitRole();
  const [tab, setTab] = useState('Applied');
  const tabs = ['Applied', 'Interviewing', 'Offer', 'Rejected'];
  const filtered = applications.filter((job) => job.status === tab);

  return (
    <div className="content list-content">
      <div className="screen-heading"><div><h2>Applications</h2><p>{applications.length} tracked roles</p></div></div>
      <div className="tabs">
        {tabs.map((item) => <button className={tab === item ? 'active' : ''} onClick={() => setTab(item)} key={item}>{item}</button>)}
      </div>
      <div className="list-stack">
        {applications.length === 0 && <EmptyState icon={<FileText size={36} />} title="No applications yet" body="Swipe right or tap apply to start tracking." />}
        {applications.length > 0 && filtered.length === 0 && <p className="quiet-empty">No jobs in this stage.</p>}
        {filtered.map((job) => (
          <MiniJobCard key={job.id} job={job} onOpen={() => setSelectedJob(job)}>
            <select
              value={job.status}
              onClick={(event) => event.stopPropagation()}
              onChange={(event) => setApplications((prev) => prev.map((item) => item.id === job.id ? { ...item, status: event.target.value } : item))}
            >
              {['Applied', 'Interviewing', 'Offer', 'Rejected', 'Archived'].map((item) => <option key={item}>{item}</option>)}
            </select>
          </MiniJobCard>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  const [keywords, setKeywords] = useState(profile.keywords);
  const [editing, setEditing] = useState(null);
  const [draft, setDraft] = useState('');

  const addKeyword = (category) => {
    if (!draft.trim()) return;
    setKeywords((prev) => ({ ...prev, [category]: [...prev[category], draft.trim()] }));
    setDraft('');
    setEditing(null);
  };

  return (
    <div className="content profile-content">
      <section className="profile-card">
        <div className="avatar">M</div>
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.title} · {profile.yearsExp} yrs</p>
          <p>{profile.location} · {profile.workType} · {profile.salaryTarget}</p>
        </div>
      </section>
      <section className="strength-card">
        <div><strong>Profile strength</strong><span>{profile.profileStrength}%</span></div>
        <span className="meter"><i style={{ width: `${profile.profileStrength}%` }} /></span>
      </section>
      {Object.entries(keywords).map(([category, words]) => (
        <section className="keyword-section" key={category}>
          <div className="section-title-row">
            <h3>{category}</h3>
            <button onClick={() => setEditing(editing === category ? null : category)}><Plus size={15} /> Add</button>
          </div>
          <ChipCloud
            items={words}
            onRemove={(word) => setKeywords((prev) => ({ ...prev, [category]: prev[category].filter((item) => item !== word) }))}
          />
          {editing === category && (
            <div className="add-keyword">
              <input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && addKeyword(category)} placeholder="Add keyword" autoFocus />
              <button onClick={() => addKeyword(category)}>Add</button>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

function BottomNav() {
  const { screen, setScreen, savedJobs, applications } = useFitRole();
  const items = [
    ['discover', Search, 'Discover'],
    ['saved', Bookmark, 'Saved', savedJobs.length],
    ['applications', BriefcaseBusiness, 'Applied', applications.length],
    ['profile', CircleUserRound, 'Profile']
  ];
  return (
    <nav className="bottom-nav">
      {items.map(([id, Icon, label, count]) => (
        <button className={screen === id ? 'active' : ''} onClick={() => setScreen(id)} key={id}>
          <Icon size={20} />
          <span>{label}</span>
          {count > 0 && <i>{count}</i>}
        </button>
      ))}
    </nav>
  );
}

function JobCard({ job, compact = false, saved = false, applied = false, onOpen, onSave, onApply, onSkip }) {
  const interactive = Boolean(onOpen);

  return (
    <article
      className={compact ? 'job-card compact' : 'job-card feed-card'}
      onClick={onOpen}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(event) => {
        if (!interactive) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="job-card-header">
        <CompanyLogo job={job} />
        <div>
          <strong>{job.title}</strong>
          <span>{job.company}</span>
        </div>
        <div className="card-score-actions">
          <ScoreRing score={job.matchScore} />
          {onSave && (
            <button
              className={saved ? 'card-icon-button saved' : 'card-icon-button'}
              aria-label={saved ? `Unsave ${job.title}` : `Save ${job.title}`}
              onClick={(event) => {
                event.stopPropagation();
                onSave();
              }}
            >
              <Bookmark size={17} fill={saved ? 'currentColor' : 'none'} />
            </button>
          )}
        </div>
      </div>
      <div className="meta-row">
        <WorkTypeBadge type={job.workType} />
        <span><MapPin size={13} />{job.location}</span>
        <strong>{job.salary}</strong>
      </div>
      <ChipCloud items={job.matchedKeywords.slice(0, compact ? 3 : 4)} type="match" />
      {!compact && <ChipCloud items={job.missingKeywords.slice(0, 2)} type="gap" />}
      {!compact && (
        <div className="card-footer">
          <div className="card-state">
            {saved && <StatusBadge status="Saved" />}
            {applied && <StatusBadge status="Applied" />}
          </div>
          <div className="card-actions">
            <button
              className="card-action-button skip"
              onClick={(event) => {
                event.stopPropagation();
                onSkip();
              }}
            >
              <X size={16} />
              Skip
            </button>
            <button
              className={applied ? 'card-action-button apply applied' : 'card-action-button apply'}
              onClick={(event) => {
                event.stopPropagation();
                onApply();
              }}
            >
              <Check size={16} />
              {applied ? 'Applied' : 'Apply'}
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function JobHero({ job }) {
  return (
    <section className="job-hero">
      <CompanyLogo job={job} large />
      <div>
        <h2>{job.title}</h2>
        <p>{job.company} · {job.industry} · {job.seniority}</p>
        <div className="meta-row"><WorkTypeBadge type={job.workType} /><span><MapPin size={13} />{job.location}</span><strong>{job.salary}</strong></div>
      </div>
    </section>
  );
}

function MiniJobCard({ job, onOpen, children }) {
  return (
    <article className="mini-card" onClick={onOpen}>
      <CompanyLogo job={job} />
      <div>
        <strong>{job.title}</strong>
        <span>{job.company} · {job.workType}</span>
        <ChipCloud items={job.matchedKeywords.slice(0, 2)} type="match" />
      </div>
      <div className="mini-right">
        <ScoreRing score={job.matchScore} small />
        {children}
      </div>
    </article>
  );
}

function ListScreen({ title, subtitle, children }) {
  return (
    <div className="content list-content">
      <div className="screen-heading"><div><h2>{title}</h2><p>{subtitle}</p></div></div>
      <div className="list-stack">{children}</div>
    </div>
  );
}

function Panel({ title, subtitle, children }) {
  return <div className="onboarding-panel"><h1>{title}</h1><p>{subtitle}</p>{children}</div>;
}

function Section({ title, children }) {
  return <section className="detail-section"><h3>{title}</h3>{children}</section>;
}

function BulletList({ items }) {
  return <ul className="bullet-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function EmptyState({ icon, title, body }) {
  return <div className="empty-state">{icon}<strong>{title}</strong><span>{body}</span></div>;
}

function ChipCloud({ items, type = 'neutral', onRemove }) {
  return (
    <div className="chip-cloud">
      {items.map((item) => (
        <span className={`chip ${type}`} key={item}>
          {type === 'match' && <Check size={12} />}
          {type === 'gap' && <Plus size={12} />}
          {item}
          {onRemove && <button onClick={() => onRemove(item)} aria-label={`Remove ${item}`}><X size={12} /></button>}
        </span>
      ))}
    </div>
  );
}

function ScoreBars({ categories }) {
  const labels = { skill: 'Skill match', experience: 'Experience', role: 'Role fit', tool: 'Tools', industry: 'Industry', location: 'Location' };
  return (
    <div className="score-bars">
      {Object.entries(categories).map(([key, score]) => (
        <div key={key}>
          <span><em>{labels[key]}</em><strong>{score}%</strong></span>
          <i><b style={{ width: `${score}%` }} /></i>
        </div>
      ))}
    </div>
  );
}

function ScoreRing({ score, small = false }) {
  const size = small ? 40 : 54;
  const stroke = small ? 4 : 5;
  const radius = (size - stroke * 2) / 2;
  const circumference = Math.PI * 2 * radius;
  const offset = circumference * (1 - score / 100);
  return (
    <svg className="score-ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={radius} />
      <circle cx={size / 2} cy={size / 2} r={radius} strokeDasharray={circumference} strokeDashoffset={offset} />
      <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle">{score}</text>
    </svg>
  );
}

function MatchPill({ score }) {
  const label = score >= 90 ? 'Excellent' : score >= 75 ? 'Strong' : score >= 60 ? 'Possible' : 'Low';
  return <span className="match-pill">{label}</span>;
}

function CompanyLogo({ job, large = false }) {
  return <span className={large ? 'company-logo large' : 'company-logo'} style={{ backgroundColor: job.companyColor }}>{job.initial}</span>;
}

function WorkTypeBadge({ type }) {
  return <span className={`work-badge ${type.toLowerCase()}`}>{type}</span>;
}

function StatusBadge({ status }) {
  return <span className="status-badge">{status}</span>;
}

function Logo() {
  return <span className="logo"><Home size={18} />FitRole</span>;
}

function StatusBar() {
  return (
    <header className="status-bar">
      <span>9:41</span>
      <Logo />
      <span><Gauge size={14} />100%</span>
    </header>
  );
}

createRoot(document.getElementById('root')).render(<App />);
