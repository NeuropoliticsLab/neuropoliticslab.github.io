# Neuropolitics Research Lab — static site

A parallel build of <https://neuropolitics.sps.ed.ac.uk>, with three sections the live site
doesn't have: **Projects**, **Publications** and **Working papers**.

Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no npm.

```
.
├── index.html              ← home
├── research.html           ← what we do, methods, the four programmes
├── projects.html           ← individual studies (new)
├── publications.html       ← filterable publication list (new)
├── working-papers.html     ← preprints, registered reports, in prep (new)
├── engagement.html         ← teaching, press, policy
├── about.html              ← team + collaborators
└── assets/
    ├── css/style.css       ← all styling
    ├── js/main.js          ← nav
    ├── js/publications.js  ← publication DATA + list rendering
    └── img/                ← team portraits, collaborators, figures
```

## Branding

The palette is taken from the live site's own generated theme CSS
(`wp-content/uploads/the-core-style.css`), not eyeballed:

| Token | Value | Used for |
|---|---|---|
| `--green` | `#48797d` | primary, links, rules, active filters |
| `--purple` | `#812266` | accents, buttons, eyebrows, year filters |
| `--ink` | `#5d5c59` | body copy |
| `--rule` | `#dee0e1` | borders |

Typefaces match the live site: **Montserrat** for headings, **Open Sans** for body.
Every colour is a CSS custom property under `:root` at the top of `assets/css/style.css`.

## Editing publications

All publication data lives in one array at the top of `assets/js/publications.js`.
Adding an entry is enough — the year headings, the type filter chips and the year filter
chips are all generated from the data, so they can't drift out of sync.

```js
{
  year: 2026,
  type: 'journal',        // journal | conference | chapter | book | report
  title: 'Title here',
  authors: 'First Last, First Last',
  venue: 'Journal Name',
  doi: '10.1234/xyz',     // bare DOI, no https://doi.org/ prefix
  featured: true,         // optional — pins a "Lab highlight" label
  note: 'One line of context.'   // optional
}
```

Working papers are a separate array inline in `working-papers.html`, using the same shape
plus the types `preprint`, `registered` and `inprep`.

### Author bolding

Lab members are bolded automatically. `LAB_MEMBERS` holds **full-name patterns**, not bare
surnames — several papers have co-authors who share a surname with a lab member (Johanna
Moore on the 2009 NLG paper is not Adam Moore). Add new members in the same style.

## Provenance of the publication list

Records were pulled from the OpenAlex API and checked by hand — DOI, venue, year and author
order. Edinburgh's Research Explorer returns 403 to automated fetches, so it was not usable
as a source.

**This list needs a human pass before it goes public.** Two known limits:

- It is built from what OpenAlex indexes. Book chapters, reports and older conference work
  are systematically under-represented there, so the list is thinner pre-2015 than reality.
- Author disambiguation on common names is genuinely hard. Anything attributed to
  Clare Llewellyn, Adam Moore or Robin Hill was filtered by hand against topic and
  co-authors, but a lab member should confirm the attributions.

Entries without a DOI are the ones to check first.

## Previewing locally

Open `index.html` directly in a browser — it works with no server, since everything is
relative paths and inline data.

## Relationship to the live WordPress site

This is a **standalone static site**, not a WordPress theme. It does not plug into the
existing install. If the goal is to update the live site rather than replace it, the content
and palette here port over, but the delivery mechanism would need to be a child theme or a
set of page templates instead.
