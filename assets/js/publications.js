/* ==========================================================================
   Neuropolitics Research Lab — publication data + list rendering.

   Every record below was checked against OpenAlex (DOI, venue, year, author
   order) in August 2026. Records without a DOI are ones where the lab's own
   listing is the authority — add one when it becomes available.

   To add a publication, drop an object into PUBLICATIONS. Fields:
     year     number
     type     'journal' | 'conference' | 'chapter' | 'book' | 'report'
     title    string
     authors  string — lab members are bolded automatically, see LAB_MEMBERS
     venue    string
     doi      string — bare DOI, no https://doi.org/ prefix. Optional.
     url      string — used when there is no DOI. Optional.
     featured true to pin a short label on the thumbnail. Optional.
     note     string — one line of context. Optional.
   ========================================================================== */

/* Full-name patterns, not bare surnames: several papers have co-authors who
   share a surname with a lab member (Johanna Moore on the 2009 NLG paper is
   not Adam Moore). Each entry is a regex source string. */
var LAB_MEMBERS = [
  'Laura Cram',
  'Clare Llewellyn(?:-MacRae)?',
  'Robin L\\. Hill',
  'Adam Moore',
  'Sara Dalzel-Job',
  'Feiteng Long',
  'Luke Stephens',
  'Constantine(?:s)?(?: George| G\\.)? Kyritsopoulos',
  'Arman Prangere',
  'Su-Jin Hong'
];

var TYPE_LABELS = {
  journal: 'Journal article',
  conference: 'Conference paper',
  chapter: 'Book section',
  book: 'Book',
  report: 'Report',
  preprint: 'Preprint'
};

var PUBLICATIONS = [
  /* ------------------------------------------------------------- 2026 -- */
  {
    year: 2026, type: 'conference',
    title: 'Can Large Language Models Facilitate Qualitative Political Narrative Analysis?',
    authors: 'Luke Stephens, Clare Llewellyn, Lauren Rogers, Constantine Kyritsopoulos, Arman Prangere, Feiteng Long, Peyton Snyder, Laura Cram',
    venue: 'Computational Humanities Research',
    doi: '10.63317/4rwv2gsphhck',
    featured: true,
    note: 'A lab-wide collaboration testing whether LLMs can recover both the structure and the themes of political narratives at scale.'
  },
  {
    year: 2026, type: 'conference',
    title: 'Gendered Communication Patterns of Political Elites on Truth Social',
    authors: 'Tom Bidewell, Artemis Deligianni, Tuğrulcan Elmas, Clare Llewellyn, Björn Ross',
    venue: 'ACM Conference proceedings',
    doi: '10.1145/3795766.3799762'
  },
  {
    year: 2026, type: 'journal',
    title: "People feel but don't tell: Dispositional honesty and emotional responses to others' (mis)fortunes",
    authors: 'Zi Ye, Feiteng Long, Roujia Feng, Wilco van Dijk, Ranran Li',
    venue: 'Journal of Experimental Social Psychology',
    doi: '10.1016/j.jesp.2026.104966'
  },
  {
    year: 2026, type: 'journal',
    title: "Why Consumers Prefer Chatbots' Simulated Empathy: Revisiting the Empathy–Honesty Trade-Off",
    authors: 'Zi Ye, Feiteng Long, Lijuan Luo',
    venue: 'Journal of Consumer Behaviour',
    doi: '10.1002/cb.70138'
  },
  {
    year: 2026, type: 'chapter',
    title: 'Learning Together Across Modes: Online and On-Site Pair Programming in a Fusion Course',
    authors: 'Beatrice Alex, Clare Llewellyn-MacRae, Paweł Orzechowski, Luke Stephens',
    venue: 'University of Edinburgh Press',
    doi: '10.2218/ed.9781836450795.22'
  },
  {
    year: 2026, type: 'chapter',
    title: '3 Stars and 1 Wish: Small and Frequent Student Reflections Promote a Sense of Wonder and a Community of Vulnerability',
    authors: 'Paweł Orzechowski, Elaine Mowat, Karim Rivera Lares, Rebecca Sewell, Clare Llewellyn-MacRae, Beatrice Alex, Kasia Banas',
    venue: 'University of Edinburgh Press',
    doi: '10.2218/ed.9781836450795.17'
  },

  /* ------------------------------------------------------------- 2025 -- */
  {
    year: 2025, type: 'journal',
    title: 'An uneasy union: The moral and ideological divides of territorial identification in post-Brexit Scotland',
    authors: 'Constantine G. Kyritsopoulos, Adam Moore, Laura Cram',
    venue: 'The British Journal of Politics and International Relations',
    doi: '10.1177/13691481251391645',
    featured: true
  },
  {
    year: 2025, type: 'journal',
    title: 'Intuitive judgements towards artificial intelligence verdicts of moral transgressions',
    authors: 'Yuxin Liu, Adam Moore',
    venue: 'British Journal of Social Psychology',
    doi: '10.1111/bjso.12908'
  },
  {
    year: 2025, type: 'journal',
    title: 'Power Motivations and Risk Preferences',
    authors: 'Andrew Ithurburn, Adam Moore, Julie M. E. Pedersen',
    venue: 'SAGE Open',
    doi: '10.1177/21582440251363317'
  },
  {
    year: 2025, type: 'journal',
    title: 'Leftists and Rightists Differ in Their Cardiovascular Responses to Changing Public Opinion on Migration',
    authors: 'Feiteng Long, Ruthie Pliskin, Daan Scheepers',
    venue: 'Psychophysiology',
    doi: '10.1111/psyp.70140'
  },
  {
    year: 2025, type: 'journal',
    title: 'When allies join the fight: How joint collective action shapes social change and intergroup relations',
    authors: 'Feiteng Long, Zi Ye, Lijuan Luo',
    venue: 'Journal of Experimental Social Psychology',
    doi: '10.1016/j.jesp.2025.104811'
  },
  {
    year: 2025, type: 'journal',
    title: 'Who values competent minds and who likes warm hearts? The role of right-wing authoritarianism and social dominance orientation in shaping voter preferences for political candidates',
    authors: 'Feiteng Long, Zi Ye',
    venue: 'British Journal of Social Psychology',
    doi: '10.1111/bjso.70004'
  },
  {
    year: 2025, type: 'journal',
    title: 'The network dynamics of antiprejudice norms: A field experiment testing antiprejudice interventions in real groups',
    authors: 'Feiteng Long, Daan Scheepers, Tibor Zingora, Ruthie Pliskin',
    venue: 'Political Psychology',
    doi: '10.1111/pops.70029'
  },
  {
    year: 2025, type: 'journal',
    title: "Who considers migrants' competence important? The role of political ideology",
    authors: 'Feiteng Long, Zi Ye, Guohua Liu',
    venue: 'Personality and Individual Differences',
    doi: '10.1016/j.paid.2025.113272'
  },
  {
    year: 2025, type: 'journal',
    title: '“Who Islamises us?”: Does political ideology moderate the effects of exposure to different Great Replacement Conspiracy explanations on radical collective action against different targets?',
    authors: 'Hakan Çakmak, Valentin Mang, Feiteng Long',
    venue: 'British Journal of Social Psychology',
    doi: '10.1111/bjso.12852'
  },
  {
    year: 2025, type: 'journal',
    title: 'Enriching exhibition scholarship',
    authors: 'Clare Llewellyn, Andrew Shapland, Tyler Bonnet, Robert Sanderson, Kevin Page, Aruna Bhaugeerutty, Kayla Shipp, Kelly K. Davis, Jasmin Payne, Emmanuelle Delmas-Glass',
    venue: 'Digital Scholarship in the Humanities',
    doi: '10.1093/llc/fqaf074'
  },
  {
    year: 2025, type: 'journal',
    title: 'Can Topic Modeling of Local Newspaper Texts Enhance Understanding of Neighborhood Effects on Health?',
    authors: 'Eleojo Abubakar, Andreas Grivas, Bruce Guthrie, Chunyu Zheng, Claire Grover, Clare Llewellyn, Clare MacRae, Richard Tobin, Beatrice Alex, Chris Dibben, Jamie Pearce, Alan Marshall',
    venue: 'Geographical Analysis',
    doi: '10.1111/gean.70016'
  },

  /* ------------------------------------------------------------- 2024 -- */
  {
    year: 2024, type: 'journal',
    title: "Communicating Europe: a computational analysis of the evolution of the European Commission's communication on Twitter",
    authors: 'Roberta Rocca, Katharina Lawall, Manos Tsakiris, Laura Cram',
    venue: 'Journal of Computational Social Science',
    doi: '10.1007/s42001-024-00271-w'
  },
  {
    year: 2024, type: 'journal',
    title: 'Moral trade-offs reveal foundational representations that predict unique variance in political attitudes',
    authors: 'Amrita Ahluwalia-McMeddes, Adam Moore, Calum Marr, Zara Kunders',
    venue: 'British Journal of Social Psychology',
    doi: '10.1111/bjso.12781'
  },
  {
    year: 2024, type: 'journal',
    title: 'Shared social identity and social norms shape risk-taking at mass gatherings',
    authors: 'Waleed Alhajri, Adam Moore, Anne Templeton',
    venue: 'British Journal of Social Psychology',
    doi: '10.1111/bjso.12767'
  },
  {
    year: 2024, type: 'journal',
    title: 'Perceptions of Edinburgh: Capturing neighbourhood characteristics by clustering geoparsed local news',
    authors: 'Andreas Grivas, Claire Grover, Richard Tobin, Clare Llewellyn, Eleojo Abubakar, Chunyu Zheng, Chris Dibben, Alan Marshall, Jamie Pearce, Beatrice Alex',
    venue: 'Information Processing & Management',
    doi: '10.1016/j.ipm.2024.103910'
  },
  {
    year: 2024, type: 'journal',
    title: 'How ingroup norms of multiculturalism (and tolerance) affect intergroup solidarity: The role of ideology',
    authors: 'Feiteng Long, Hakan Çakmak',
    venue: 'British Journal of Social Psychology',
    doi: '10.1111/bjso.12778'
  },
  {
    year: 2024, type: 'journal',
    title: 'Economic Inequality Reduces Preferences for Competent Leaders',
    authors: 'Feiteng Long, Zi Ye, Guohua Liu',
    venue: 'Personality and Social Psychology Bulletin',
    doi: '10.1177/01461672241235381'
  },
  {
    year: 2024, type: 'journal',
    title: 'Norms of equality reduce prejudice towards migrants, but only among conservatives',
    authors: 'Feiteng Long, Ruthie Pliskin, Daan Scheepers',
    venue: 'Journal of Community & Applied Social Psychology',
    doi: '10.1002/casp.2836'
  },

  /* ------------------------------------------------------------- 2022 -- */
  {
    year: 2022, type: 'journal',
    title: 'Skill and self-knowledge: empirical refutation of the dual-burden account of the Dunning–Kruger effect',
    authors: 'Robert D. McIntosh, Adam Moore, Yuxin Liu, Sergio Della Sala',
    venue: 'Royal Society Open Science',
    doi: '10.1098/rsos.191727'
  },
  {
    year: 2022, type: 'journal',
    title: 'The Lothian Diary Project: sociolinguistic methods during the COVID-19 lockdown',
    authors: 'Lauren Hall-Lew, Claire Cowie, Catherine Lai, Nina Markl, Stephen Joseph McNulty, Shan-Jan Sarah Liu, Clare Llewellyn, Beatrice Alex, Zuzana Elliott, Anita Klingler',
    venue: 'Linguistics Vanguard',
    doi: '10.1515/lingvan-2021-0053'
  },
  {
    year: 2022, type: 'conference',
    title: 'Start Making Sense: Identifying Behavioural Indicators When Things Go Wrong During Interaction with Artificial Agents',
    authors: 'Sara Dalzel-Job, Robin L. Hill, Ronald P. A. Petrick',
    venue: 'Lecture Notes in Computer Science',
    doi: '10.1007/978-3-031-21203-1_36'
  },
  {
    year: 2022, type: 'conference',
    title: 'Artificial Moral Advisors',
    authors: 'Yuxin Liu, Adam Moore, Jamie Webb, Shannon Vallor',
    venue: 'AAAI/ACM Conference on AI, Ethics, and Society (AIES)',
    doi: '10.1145/3514094.3534139'
  },

  /* ------------------------------------------------------------- 2021 -- */
  {
    year: 2021, type: 'journal',
    title: 'Trust in information, political identity and the brain: an interdisciplinary fMRI study',
    authors: 'Adam Moore, Su-Jin Hong, Laura Cram',
    venue: 'Philosophical Transactions of the Royal Society B: Biological Sciences',
    doi: '10.1098/rstb.2020.0140',
    featured: true,
    note: 'Behavioural data and analysis code are openly available on figshare.'
  },
  {
    year: 2021, type: 'journal',
    title: 'The Lothian Diary Project: Investigating the Impact of the COVID-19 Pandemic on Edinburgh and Lothian Residents',
    authors: 'Lauren Hall-Lew, Claire Cowie, Stephen Joseph McNulty, Nina Markl, Shan-Jan Sarah Liu, Catherine Lai, Clare Llewellyn, Beatrice Alex, Nini Fang, Zuzana Elliott, Anita Klingler',
    venue: 'Journal of Open Humanities Data',
    doi: '10.5334/johd.25'
  },
  {
    year: 2021, type: 'journal',
    title: 'Increased representation of the non-dominant hand in pianists demonstrated by measurement of 3D morphology of the central sulcus',
    authors: 'Adam Harvey, Lewis Hou, Kirsteen Davidson-Kelly, Rebecca Schaefer, Su-Jin Hong, Jean-François Mangin, Katie Overy, Neil Roberts',
    venue: 'Psychoradiology',
    doi: '10.1093/psyrad/kkab004'
  },
  {
    year: 2021, type: 'conference',
    title: 'The Online Pivot: Lessons Learned from Teaching a Text and Data Mining Course in Lockdown',
    authors: 'Beatrice Alex, Clare Llewellyn, Paweł Orzechowski, Maria Boutchkova',
    venue: 'Workshop on Teaching NLP',
    doi: '10.18653/v1/2021.teachingnlp-1.24'
  },
  {
    year: 2021, type: 'conference',
    title: 'Backtranslation Feedback Improves User Confidence in MT, Not Quality',
    authors: 'Vilém Zouhar, Michal Novák, Matúš Žilinec, Ondřej Bojar, Mateo Obregón, Robin L. Hill, Frédéric Blain, Marina Fomicheva, Lucia Specia, Lisa Yankovskaya',
    venue: 'NAACL',
    doi: '10.18653/v1/2021.naacl-main.14'
  },

  /* ------------------------------------------------------------- 2019 -- */
  {
    year: 2019, type: 'journal',
    title: 'For Whom the Bell Trolls: Shifting Troll Behaviour in the Twitter Brexit Debate',
    authors: 'Clare Llewellyn, Laura Cram, Robin L. Hill, Adrian Favero',
    venue: 'JCMS: Journal of Common Market Studies',
    doi: '10.1111/jcms.12882',
    featured: true
  },
  {
    year: 2019, type: 'journal',
    title: 'Dominance desires predicting conspiracy beliefs and Trump support in the 2016 U.S. Election',
    authors: 'Felix Suessenbach, Adam Moore',
    venue: 'Motivation Science',
    doi: '10.1037/mot0000146'
  },
  {
    year: 2019, type: 'report',
    title: 'Understanding our Political Nature: How to put knowledge and reason at the heart of political decision-making',
    authors: 'Laura Cram and others (contributing author)',
    venue: 'European Commission, Joint Research Centre',
    url: 'https://publications.jrc.ec.europa.eu/repository/handle/JRC117161'
  },
  {
    year: 2019, type: 'conference',
    title: 'Combining Cognitive and Affective Measures with Epistemic Planning for Explanation Generation',
    authors: 'Ronald P. A. Petrick, Sara Dalzel-Job, Robin L. Hill',
    venue: 'Workshop on Explainable Planning'
  },

  /* ------------------------------------------------------------- 2018 -- */
  {
    year: 2018, type: 'journal',
    title: 'Fair Is Fair, or Is It? Territorial Identity Triggers Influence Ultimatum Game Behavior',
    authors: 'Laura Cram, Adam Moore, Victor Olivieri, Felix Suessenbach',
    venue: 'Political Psychology',
    doi: '10.1111/pops.12543',
    featured: true
  },
  {
    year: 2018, type: 'conference',
    title: 'Russian Troll Hunting in a Brexit Twitter Archive',
    authors: 'Clare Llewellyn, Laura Cram, Adrian Favero, Robin L. Hill',
    venue: 'ACM/IEEE Joint Conference on Digital Libraries (JCDL)',
    doi: '10.1145/3197026.3203876',
    featured: true
  },
  {
    year: 2018, type: 'journal',
    title: 'The Dominance, Prestige, and Leadership Account of Social Power Motives',
    authors: 'Felix Suessenbach, Steve Loughnan, Felix D. Schönbrodt, Adam Moore',
    venue: 'European Journal of Personality',
    doi: '10.1002/per.2184'
  },

  /* ------------------------------------------------------------- 2017 -- */
  {
    year: 2017, type: 'conference',
    title: 'Distinguishing the Wood from the Trees: Contrasting Collection Methods to Understand Bias in a Longitudinal Brexit Twitter Dataset',
    authors: 'Clare Llewellyn, Laura Cram',
    venue: 'International AAAI Conference on Web and Social Media (ICWSM)',
    doi: '10.1609/icwsm.v11i1.14924'
  },
  {
    year: 2017, type: 'conference',
    title: 'fMRI study of social exclusion and national identity using a cyberball paradigm',
    authors: 'Laura Cram, Su-Jin Hong, Adam Moore, Neil Roberts, Agamemnon Krasoulis, Cyril Pernet, Alexandra Morcom',
    venue: 'Organization for Human Brain Mapping'
  },
  {
    year: 2017, type: 'conference',
    title: 'Transformative Methods for Understanding a Transforming Union: Experimental and Big Data Approaches',
    authors: 'Laura Cram',
    venue: '24th International Conference of Europeanists'
  },

  /* ------------------------------------------------------------- 2016 -- */
  {
    year: 2016, type: 'conference',
    title: 'Brexit? Analyzing Opinion on the UK-EU Referendum within Twitter',
    authors: 'Clare Llewellyn, Laura Cram',
    venue: 'International AAAI Conference on Web and Social Media (ICWSM)',
    doi: '10.1609/icwsm.v10i1.14708',
    featured: true
  },
  {
    year: 2016, type: 'conference',
    title: "Avoiding the Drunkard's Search: Investigating Collection Strategies for Building a Twitter Dataset",
    authors: 'Clare Llewellyn, Laura Cram, Adrian Favero',
    venue: 'ACM Conference on Web Science (WebSci)',
    doi: '10.1145/2910896.2925433'
  },
  {
    year: 2016, type: 'conference',
    title: 'Homing in on Twitter Users: Evaluating an Enhanced Geoparser for User Profile Locations',
    authors: 'Clare Llewellyn, Claire Grover, Beatrice Alex, Jon Oberlander, Richard Tobin',
    venue: 'Language Resources and Evaluation Conference (LREC)'
  },
  {
    year: 2016, type: 'journal',
    title: 'Getting the Message Across in the Twittersphere',
    authors: 'Clare Llewellyn, Laura Cram',
    venue: 'Political Insight'
  },
  {
    year: 2016, type: 'journal',
    title: 'A cluster-based approach to selecting representative stimuli from the International Affective Picture System (IAPS) database',
    authors: 'Alexandra C. Constantinescu, Maria Wolters, Adam Moore, Sarah E. MacPherson',
    venue: 'Behavior Research Methods',
    doi: '10.3758/s13428-016-0750-0'
  },
  {
    year: 2016, type: 'chapter',
    title: 'User-Driven Text Mining of Historical Text',
    authors: 'Clare Llewellyn, Claire Grover, Beatrice Alex, Jon Oberlander, Richard Tobin',
    venue: 'Digital Humanities volume'
  },

  /* ------------------------------------------------------------- 2015 -- */
  {
    year: 2015, type: 'journal',
    title: 'Better the devil you know: Threat effects and attachment to the European Union',
    authors: 'Stratos Patrikios, Laura Cram',
    venue: 'Comparative European Politics',
    doi: '10.1057/cep.2014.54'
  },
  {
    year: 2015, type: 'conference',
    title: 'Effect of Implicit Indicators of National Identity on Brain Activation When Viewing In-Group and Out-Group Members in Pain',
    authors: 'Laura Cram, Joshua Skewes, Su-Jin Hong, Else-Marie Elmholdt Jegindø, Adam Moore, Kenneth M. Prkachin, Andreas Roepstorff, Neil Roberts',
    venue: 'ESMRMB 32nd Annual Scientific Meeting',
    doi: '10.1007/s10334-015-0487-2'
  },
  {
    year: 2015, type: 'journal',
    title: 'Individual differences in the explicit power motive predict “utilitarian” choices in moral dilemmas, especially when this choice is self-beneficial',
    authors: 'Felix Suessenbach, Adam Moore',
    venue: 'Personality and Individual Differences',
    doi: '10.1016/j.paid.2015.06.031'
  },
  {
    year: 2015, type: 'conference',
    title: 'Extracting a Topic Specific Dataset from a Twitter Archive',
    authors: 'Clare Llewellyn, Claire Grover, Jon Oberlander, Beatrice Alex',
    venue: 'Theory and Practice of Digital Libraries (TPDL)'
  },

  /* -------------------------------------------------------- earlier --- */
  {
    year: 2011, type: 'conference',
    title: "Don't look now: the relationship between mutual gaze, task performance and staring in Second Life",
    authors: 'Sara Dalzel-Job, Jon Oberlander, Tim J. Smith',
    venue: 'Annual Meeting of the Cognitive Science Society'
  },
  {
    year: 2011, type: 'chapter',
    title: 'Contested staring: issues and the use of mutual gaze as an on-line measure of social presence',
    authors: 'Sara Dalzel-Job, Jon Oberlander, Tim J. Smith',
    venue: 'Birkbeck, University of London'
  },
  {
    year: 2009, type: 'conference',
    title: 'Validating the web-based evaluation of NLG systems',
    authors: 'Alexander Koller, Kristina Striegnitz, Donna Byron, Justine Cassell, Robert Dale, Sara Dalzel-Job, Jon Oberlander, Johanna Moore',
    venue: 'ACL-IJCNLP',
    doi: '10.3115/1667583.1667676'
  },
  {
    year: 2008, type: 'chapter',
    title: 'Model-Based Target Sonification in Small Screen Devices',
    authors: 'Parisa Eslambolchilar, Andrew Crossan, Roderick Murray-Smith, Sara Dalzel-Job, Frank Pollick',
    venue: 'IGI Global',
    doi: '10.4018/978-1-59904-871-0.ch029'
  },
  {
    year: 2007, type: 'journal',
    title: "Let's you do that: Sharing the cognitive burdens of dialogue",
    authors: 'Ellen Gurman Bard, Anthony Anderson, Yuning Chen, Hannele Nicholson, Catriona Havard, Sara Dalzel-Job',
    venue: 'Journal of Memory and Language',
    doi: '10.1016/j.jml.2006.12.003'
  },
  {
    year: 1997, type: 'book',
    title: 'Policy-making in the European Union: Conceptual Lenses and the Integration Process',
    authors: 'Laura Cram',
    venue: 'Routledge, London'
  }
];

/* ==========================================================================
   Rendering
   ========================================================================== */

function boldLabMembers(authors) {
  var escaped = authors
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  LAB_MEMBERS.forEach(function (pattern) {
    var re = new RegExp('(' + pattern + ')(?![^<]*<\\/span>)', 'g');
    escaped = escaped.replace(re, '<span class="lab-member">$1</span>');
  });
  return escaped;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function thumbLabel(pub) {
  if (pub.featured) return 'Lab<br>highlight';
  return (TYPE_LABELS[pub.type] || pub.type).replace(' ', '<br>');
}

function renderPub(pub) {
  var links = [];
  if (pub.doi) {
    links.push('<a class="pub-link" href="https://doi.org/' + escapeHtml(pub.doi) +
      '" rel="noopener">DOI</a>');
  }
  if (pub.url) {
    links.push('<a class="pub-link" href="' + escapeHtml(pub.url) + '" rel="noopener">Link</a>');
  }

  return '' +
    '<article class="pub" data-type="' + pub.type + '" data-year="' + pub.year + '">' +
      '<div class="pub-thumb' + (pub.featured ? ' is-purple' : '') + '" aria-hidden="true">' +
        thumbLabel(pub) +
      '</div>' +
      '<div class="pub-body">' +
        '<h3 class="pub-title">' + escapeHtml(pub.title) + '</h3>' +
        '<p class="pub-authors">' + boldLabMembers(pub.authors) + '</p>' +
        '<p class="pub-venue">' + escapeHtml(pub.venue) + ', ' + pub.year + '</p>' +
        (pub.note ? '<p class="pub-note">' + escapeHtml(pub.note) + '</p>' : '') +
        '<div class="pub-tags">' +
          '<span class="tag' + (pub.featured ? ' tag-purple' : '') + '">' +
            escapeHtml(TYPE_LABELS[pub.type] || pub.type) + '</span>' +
        '</div>' +
        (links.length ? '<div class="pub-links">' + links.join('') + '</div>' : '') +
      '</div>' +
    '</article>';
}

/* Renders `list` into `mount`, grouped by year, newest first. */
function renderPublicationList(mount, list) {
  if (!list.length) {
    mount.innerHTML = '<p class="empty-state">No publications match those filters.</p>';
    return;
  }

  var byYear = {};
  list.forEach(function (p) {
    (byYear[p.year] = byYear[p.year] || []).push(p);
  });

  var html = Object.keys(byYear)
    .map(Number)
    .sort(function (a, b) { return b - a; })
    .map(function (year) {
      return '<h2 class="pub-year-heading">' + year + '</h2>' +
        byYear[year].map(renderPub).join('');
    })
    .join('');

  mount.innerHTML = html;
}
