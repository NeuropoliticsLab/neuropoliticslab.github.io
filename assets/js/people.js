/* ==========================================================================
   Neuropolitics Research Lab — people data, grid and profile rendering.

   One source of truth: the grid on people.html and the profile pages at
   person.html?id=<slug> are both rendered from PEOPLE below.

   ---------------------------------------------------------------------------
   LINKS — READ BEFORE ADDING
   Only URLs that have been checked and resolve to a real page are listed. A
   fabricated profile link is worse than a missing one, so most members
   currently have an empty `links` array. Fill them in as you confirm them;
   the icon row renders only what is present, so partial data looks fine.

   Supported link types: email, web, pure, scholar, orcid, osf, github,
   linkedin, x, bluesky.
   ---------------------------------------------------------------------------

   Groups are rendered in the order given by GROUPS.
   ========================================================================== */

var GROUPS = [
  { id: 'faculty', label: 'Faculty and senior staff' },
  { id: 'researchers', label: 'Researchers' },
  { id: 'assistants', label: 'Research assistants' },
  { id: 'past', label: 'Past members' }
];

var PEOPLE = [
  {
    slug: 'laura-cram',
    pubPattern: 'Laura Cram',
    name: 'Laura Cram',
    shortName: 'Laura Cram',
    role: 'Professor of European Politics, Lab Director',
    fullRole: 'Professor of European Politics, Director NRLabs Neuropolitics Research, School of Social and Political Science, University of Edinburgh',
    group: 'faculty',
    photo: 'assets/img/team/laura-cram.jpg',
    bio: [
      'Laura is the esteemed director of the Neuropolitics Research Lab, leading the team with a strong commitment to rigorous and innovative science.',
      'With a multidisciplinary background, her expertise spans European public policy, European identity, and the neuropolitics of both identity and public policy. She is experienced in experimental research methods, including fMRI, physiological studies, behavioural games, and the investigation of identity triggers.',
      'Laura has supervised numerous PhD students, all of whom completed their degrees within the recommended four-year period. Many have gone on to hold academic or public research positions. Her supervisory interests include European identity, banal Europeanism, neuropolitics, physiology and behaviour in relation to identity, implicit identity triggers, experimental approaches to identity and policy, as well as EU social policy, civil society, governance, and the EU policy process.'
    ],
    links: [
      { type: 'web', href: 'https://www.sps.ed.ac.uk/staff/laura-cram' },
      { type: 'pure', href: 'https://www.research.ed.ac.uk/en/persons/laura-cram' }
    ]
  },
  {
    slug: 'clare-llewellyn',
    pubPattern: 'Clare Llewellyn(?:-MacRae)?',
    name: 'Clare Llewellyn',
    shortName: 'Clare Llewellyn',
    role: 'Senior Lecturer in Governance, Technology, and Data',
    fullRole: 'Senior Lecturer in Governance, Technology, and Data',
    group: 'faculty',
    photo: 'assets/img/team/clare-llewellyn.jpg',
    bio: [
      'Clare is an expert in computational social science and the analysis of social media. She combines computer techniques like machine learning and natural language processing with social science research to understand public opinion and political debates.',
      'Clare has collected one of the largest sets of Brexit-related tweets, which helps answer important questions such as how social media influenced the Leave campaign, whether foreign actors affected the debate, and what topics dominated online discussions during elections.'
    ],
    links: [
      { type: 'web', href: 'https://www.sps.ed.ac.uk/staff/clare-llewellyn-macrae' },
      { type: 'pure', href: 'https://www.research.ed.ac.uk/en/persons/clare-llewellyn' },
      { type: 'scholar', href: 'https://scholar.google.co.uk/citations?user=4UetE8oAAAAJ' }
    ]
  },
  {
    slug: 'adam-moore',
    pubPattern: 'Adam Moore',
    name: 'Adam Moore',
    shortName: 'Adam Moore',
    role: 'Lecturer in Psychology',
    fullRole: 'Lecturer in the School of Philosophy, Psychology and Language Sciences',
    group: 'faculty',
    photo: 'assets/img/team/adam-moore.jpg',
    bio: [
      "Adam's research explores the complex relationship between morality, power, and politics. He focuses on how consistent — or inconsistent — moral judgments and intuitions are, and how both environmental and individual factors influence these processes. A central theme in his work is how political identity can lead to self-serving biases and moral disengagement.",
      'Using a combination of computational modeling, advanced statistical analysis, experimental design, neuroimaging, and studies of individual differences, Adam investigates moral and economic decision-making. He examines how emotion and cognition interact, particularly the balance between automatic and controlled information processing. His research also looks at the roles of working memory, intelligence, self-control, and empathy in decisions about oneself and others.',
      'Adam employs behavioural experiments, computational models, and neuroimaging techniques, and welcomes supervision enquiries.'
    ],
    links: [
      { type: 'web', href: 'https://www.ed.ac.uk/profile/adam-moore' },
      { type: 'pure', href: 'https://www.research.ed.ac.uk/en/persons/adam-moore' }
    ]
  },
  {
    slug: 'robin-hill',
    pubPattern: 'Robin L\\. Hill',
    name: 'Robin Hill',
    shortName: 'Robin Hill',
    role: 'Senior Laboratory Manager, NRLabs',
    fullRole: 'Senior Laboratory Manager, NRLabs',
    group: 'faculty',
    photo: 'assets/img/team/robin-hill.jpg',
    bio: [
      "Robin is a cognitive scientist who was previously based at the University of Edinburgh in the Institute for Language, Cognition and Computation, and the Human Communication Research Centre, specialising in Human-Machine Interaction (robots, virtual agents, computer interfaces), multimodal communication and technology use for the older population.",
      "He is involved in analysing people's eye movements while they read, interact with technology, or engage in dialogue and co-operative actions — to unravel the mysteries of human cognition while simultaneously improving the efficiency, interfaces and design of computer systems."
    ],
    links: [
      { type: 'pure', href: 'https://www.research.ed.ac.uk/en/persons/robin-hill' }
    ]
  },
  {
    slug: 'sara-dalzel-job',
    pubPattern: 'Sara Dalzel-Job',
    name: 'Sara Dalzel-Job',
    shortName: 'Sara Dalzel-Job',
    role: 'Research Fellow',
    fullRole: 'Research Fellow',
    group: 'researchers',
    photo: 'assets/img/team/sara-dalzel-job.jpg',
    bio: [
      "Sara studies people's emotional, cognitive, and behavioural responses to various stimuli using a blend of biophysiological methods (eye tracking, electrodermal activity, heart rate, facial expression), cognitive tasks, and self-report measures. Her recent research examines how different information presentation methods affect the situational readiness of frontline emergency workers.",
      "She has also explored user interactions with virtual humans — both AI-controlled and human-controlled — investigating how embodied AI behaviour influences user perceptions, behaviour, and cognitive outcomes. Additionally, Sara's work addresses social presence and trust in human-computer interactions."
    ],
    links: []
  },
  {
    slug: 'feiteng-long',
    pubPattern: 'Feiteng Long',
    name: 'Feiteng Long',
    shortName: 'Feiteng Long',
    role: 'Research Fellow',
    fullRole: 'Research Fellow',
    group: 'researchers',
    photo: 'assets/img/team/feiteng-long.jpg',
    bio: [
      'Feiteng is a postdoctoral research fellow at the Neuropolitics Research Lab. His research explores the social and psychological processes behind intergroup relations and social change. He focuses on how norm messages can reduce prejudice, promote collective action, and mitigate polarization, particularly for migrants and LGBT+ groups.',
      'Feiteng also studies how individuals respond to social change, using experimental and social media data to understand the roles of allies and intergroup emotions in supporting change. His recent work applies psychophysiological methods to examine how people experience social change, measuring cardiovascular and skin conductance responses that reflect feelings of threat or challenge.',
      "He earned his PhD in Social, Economic, and Organisational Psychology from Leiden University and holds a master's degree in Comparative Public Policy from the University of Edinburgh."
    ],
    links: []
  },
  {
    slug: 'luke-stephens',
    pubPattern: 'Luke Stephens',
    name: 'Luke Stephens',
    shortName: 'Luke Stephens',
    role: 'Research Fellow',
    fullRole: 'Research Fellow',
    group: 'researchers',
    photo: 'assets/img/team/luke-stephens.jpg',
    bio: [
      'Luke is a doctoral researcher at the Neuropolitics Research Lab. His research explores the use of Large Language Models (LLMs) to extract and interpret political narratives from texts. Narratives play a central role in human sense-making, connecting events and actors to construct identities and values. Political actors strategically use narratives to influence interpretations and mobilize support, making them vital to political dynamics.',
      "Traditionally, narrative research has been qualitative and limited to smaller datasets due to the need for contextual understanding. Luke's work investigates whether LLMs can reliably identify both the structure and themes of narratives at scale. By combining computational analysis with traditional qualitative methods, his research aims to enhance the tools available for large-scale narrative analysis, improving our understanding of political discourse and communication.",
      "Luke's broader interests include British foreign policy, state identity, and East and Southeast Asian politics."
    ],
    links: []
  },
  {
    slug: 'constantinos-kyritsopoulos',
    pubPattern: 'Constantin(?:e|os)(?: George| G\\.)? Kyritsopoulos',
    name: 'Constantinos Kyritsopoulos',
    shortName: 'Constantinos Kyritsopoulos',
    role: 'Research Fellow',
    fullRole: 'Research Fellow',
    group: 'researchers',
    photo: 'assets/img/team/constantine-kyritsopoulos.jpg',
    bio: [
      'Constantine is a doctoral researcher at the Neuropolitics Lab, supervised by Professors Laura Cram, Adam Moore, and Marc Hooghe. His research focuses on the psychology of identity, ideology, and values within political contexts, combining behavioral experiments with quantitative survey methods.',
      'His dissertation investigates territorial identity in Europe, exploring how moral foundations — core values that shape political ideology and communication — vary across the continent. Building on previous findings that highlight differences in moral values between European and nationalist identities, Constantine is conducting a large-scale survey across Germany, Italy, Denmark, and Poland to map these moral landscapes.',
      'The survey serves as the foundation for experimental work examining how moral framing can influence public support for EU solidarity policies, particularly among groups typically resistant to such ideas. By understanding the moral rhetoric that resonates across diverse European populations, his research aims to inform strategies that foster greater unity and cooperation within the EU.'
    ],
    links: []
  },
  {
    slug: 'arman-prangere',
    pubPattern: 'Arman Prangere',
    name: 'Arman Prangere',
    shortName: 'Arman Prangere',
    role: 'Research Assistant',
    fullRole: 'Research Assistant',
    group: 'assistants',
    photo: 'assets/img/team/arman-prangere.jpg',
    bio: [
      'Arman is a Research Assistant at the Neuropolitics Research Lab and an undergraduate student in Philosophy and Politics, currently on exchange at the University of Edinburgh.',
      'He contributes to a range of lab projects, from helping to set up experiments and offering feedback on study designs to running data analysis.',
      'Arman is currently a recipient of the <em>Our Mind</em> Summer Project Scholarship. His research examines the potential relationship between early life adversity and restrictive attitudes toward immigration, exploring psychological pathways such as threat sensitivity, anxiety, and social trust.',
      'This work aims to deepen our understanding of how personal histories influence political attitudes and how these insights might support more constructive public debate.'
    ],
    links: []
  },
  {
    slug: 'sujin-hong',
    pubPattern: 'Su-Jin Hong',
    name: 'Sujin Hong',
    shortName: 'Sujin Hong',
    role: 'Research Fellow (former)',
    fullRole: 'Research Fellow, NRLabs Neuropolitics Research, School of Social and Political Science, University of Edinburgh',
    group: 'past',
    photo: 'assets/img/team/sujin-hong.png',
    bio: [
      "Sujin is a cognitive neuroscientist whose interdisciplinary background spans psychology, sociology, music theory, and neuroimaging. She earned her BA in Psychology and Sociology from Yonsei University and an MA in Music Theory from Seoul National University, where she studied emotional responses to music. At Gachon University's Neuroscience Research Institute, she specialized in fMRI, contributing to research on vision, language, and music.",
      'Sujin completed her PhD in Music at the University of Edinburgh, with a thesis on the neural correlates of rhythm and metre perception, supported by a Marie Curie EBRAMUS Fellowship. Her work examined the role of the inferior frontal gyrus in musical timing using fMRI.',
      "As a research fellow in the Neuropolitics Research Lab and Edinburgh Imaging, she explored the cognitive and neural underpinnings of identity, empathy, and emotion, applying advanced neuroimaging methods to questions in European public policy and group identity. Sujin was a key member of the Lab's fMRI research team."
    ],
    links: []
  }
];

/* ==========================================================================
   Icons — 16px, currentColor, inherit sizing from the link.
   ========================================================================== */

var ICONS = {
  email: '<path d="M2 4h12v8H2z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M2 4.5l6 4 6-4" fill="none" stroke="currentColor" stroke-width="1.4"/>',
  web: '<circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M2 8h12M8 2c1.8 2 1.8 10 0 12M8 2C6.2 4 6.2 12 8 14" fill="none" stroke="currentColor" stroke-width="1.4"/>',
  pure: '<path d="M3 3h7a2 2 0 012 2v8H5a2 2 0 00-2 2z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M3 3v10" fill="none" stroke="currentColor" stroke-width="1.4"/>',
  scholar: '<path d="M8 2L1 6l7 4 7-4z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M4 8v3c0 1.1 1.8 2 4 2s4-.9 4-2V8" fill="none" stroke="currentColor" stroke-width="1.4"/>',
  orcid: '<circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M6 5.5v5M6 5.5h1.6a2.5 2.5 0 010 5H6" fill="none" stroke="currentColor" stroke-width="1.4"/>',
  osf: '<circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="8" cy="8" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/>',
  github: '<path d="M8 1.5a6.5 6.5 0 00-2.05 12.67c.32.06.44-.14.44-.31v-1.2c-1.8.39-2.18-.87-2.18-.87-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.65.05 1 .67 1 .67.58.99 1.51.7 1.88.54.06-.42.23-.7.41-.87-1.44-.16-2.95-.72-2.95-3.2 0-.71.25-1.29.67-1.74-.07-.16-.29-.82.06-1.71 0 0 .55-.18 1.79.66a6.2 6.2 0 013.26 0c1.24-.84 1.79-.66 1.79-.66.35.89.13 1.55.06 1.71.42.45.67 1.03.67 1.74 0 2.49-1.51 3.04-2.95 3.2.23.2.44.59.44 1.2v1.78c0 .17.12.38.45.31A6.5 6.5 0 008 1.5z" fill="currentColor"/>',
  linkedin: '<rect x="1.6" y="1.6" width="12.8" height="12.8" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M4.6 6.6v4.4M4.6 4.6v.05M7.4 11V6.6M7.4 8.3c0-1 .7-1.7 1.7-1.7s1.6.7 1.6 1.7V11" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  x: '<path d="M2 2l5.2 6.6L2.3 14h1.5l4.1-4.5L11.4 14H14L8.6 7.1 13.2 2h-1.5L7.9 6.2 4.6 2z" fill="currentColor"/>',
  bluesky: '<path d="M8 6.2C7 4.3 4.6 1.9 3.1 1.9c-1 0-1.4.8-1.4 1.9 0 1 .4 3.7.6 4.2.3.9 1.1 1.2 1.9 1.1-1.3.2-1.7 1-.9 2 1.4 1.7 2.9 1 4.7-1.4 1.8 2.4 3.3 3.1 4.7 1.4.8-1 .4-1.8-.9-2 .8.1 1.6-.2 1.9-1.1.2-.5.6-3.2.6-4.2 0-1.1-.4-1.9-1.4-1.9-1.5 0-3.9 2.4-4.9 4.3z" fill="currentColor"/>'
};

var LINK_LABELS = {
  email: 'Email', web: 'Website', pure: 'Research Explorer profile',
  scholar: 'Google Scholar', orcid: 'ORCID', osf: 'OSF',
  github: 'GitHub', linkedin: 'LinkedIn', x: 'X', bluesky: 'Bluesky'
};

function renderLinkRow(person) {
  if (!person.links || !person.links.length) return '';
  return '<div class="person-links">' + person.links.map(function (l) {
    var icon = ICONS[l.type];
    if (!icon) return '';
    var href = l.type === 'email' ? 'mailto:' + l.href : l.href;
    return '<a href="' + href + '" rel="noopener" title="' +
      (LINK_LABELS[l.type] || l.type) + '" aria-label="' +
      person.name + ' — ' + (LINK_LABELS[l.type] || l.type) + '">' +
      '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">' +
      icon + '</svg></a>';
  }).join('') + '</div>';
}

/* Circular-avatar grid, grouped, each card linking to the profile page.
   Options:
     exclude   array of group ids to leave out (the home page drops 'past')
     headings  false to render one flat grid with no group titles */
function renderPeopleGrid(mount, opts) {
  opts = opts || {};
  var skip = opts.exclude || [];
  var showHeadings = opts.headings !== false;

  var groups = GROUPS.filter(function (g) { return skip.indexOf(g.id) === -1; });

  function card(p) {
    return '<div class="avatar-card">' +
      '<a class="avatar-link" href="person.html?id=' + p.slug + '">' +
        '<span class="avatar"><img src="' + p.photo + '" alt="' + p.name +
          '" loading="lazy" width="180" height="180"></span>' +
        '<span class="avatar-name">' + p.name + '</span>' +
      '</a>' +
      '<p class="avatar-role">' + p.role + '</p>' +
      renderLinkRow(p) +
    '</div>';
  }

  function membersOf(g) {
    return PEOPLE.filter(function (p) { return p.group === g.id; });
  }

  // Without headings there is nothing to separate the groups, so everyone goes
  // into one grid and wraps as a single centred block.
  if (!showHeadings) {
    var all = groups.reduce(function (acc, g) { return acc.concat(membersOf(g)); }, []);
    mount.innerHTML = '<div class="avatar-grid">' + all.map(card).join('') + '</div>';
    return;
  }

  mount.innerHTML = groups.map(function (g) {
    var members = membersOf(g);
    if (!members.length) return '';
    return '<section class="people-group">' +
      '<h2 class="people-group-title">' + g.label + '</h2>' +
      '<div class="avatar-grid">' + members.map(card).join('') + '</div>' +
    '</section>';
  }).join('');
}
