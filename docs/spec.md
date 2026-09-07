# Specification for Portfolio Page V1

Intended to be read by the agent(s) working on the project.


## Section 1: Overview

### What - Project Overview

The portfolio webpage (referred to as the "webpage" or the "site" in this document) is designed to serve as the portfolio
for a college student applying to internships or jobs, and as such is designed to showcase the skills, projects, experience,
and education of the individual. The student in question is an aspiring Software Engineer/Developer majoring in Computer Science,
and as such has experience and understanding of the code and frameworks involved in the project. The student will also
be involved directly in the code and frameworks of the project, and at all times proper code quality, clean architecture,
and specified languages and constructs should be used. Should a judgement decision be required and an obvious answer
fitting into the overall project architecture be available, use that answer. Should the answer be unclear, direct your
question to the user.

Your job is *not* to fill out the portfolio with projects, experience, or education fabricated or assumed. The responsibility
for providing accurate information lies with the student. You may, when directed, fill in placeholder information when necessary,
provided that such information is clearly marked as a placeholder or easily inferred as such.

### How - Project Tech Stack

The webpage is intended to be simple, straightforward, and easily observable. It is not intended to be highly interactive or
computationally heavy. Its purpose is to convey information in a clear, concise manner. To fulfill this goal, the following
technologies have been chosen to build the site, and **only** these technologies should be used. If there is a significant
conflict between the chosen technologies and a requirement, you must inform the user of the conflict immediately and await
the user's input.

This project will use React, Vite, and Typescript as the main language and framework. CSS will be used for styling.

The deployment framework will consist of using AWS and GitHub resources. A GitHub Action will have the responsibility
of deploying the bundled code to AWS. An S3 bucket will be used to store the bundled assets, and a CloudFront Distribution
will be used to serve the site.

Backend resources, databases, or other similar technologies will not be necessary.

### Content

The webpage will present the following information, discussed further in the sections below, in the following order:

**Intro**

- Name, role, links to sites like GitHub, and contact information.

**Projects**

- Each project will consist of several parts, which will be explained in more detail below.

**Experience**

- These are past job experiences and internships, again gone into more detail below

**Skills**

- Individual, specific skills built over time

**Education**

- University currently being attended, along with estimated graduation dates and a small list of classes taken

**About**

- Small about section

**Contact**

- Contact section, repeating information from the intro section and have perhaps more contact methods

## Section 2: Content Specifics

### Intro

The intro will consist of some basic information about the student, and should be a hero section taking up the full width of the 
webpage. Info should be neatly formatted, have a clear flow, and prioritize the most important things.

Includes:

- Student Name
- Profile Picture
- Title (i.e. Computer Science Student)
- Short description (1-2 sentences)
- Downloadable pdf of resume
- Contact email
- Links to GitHub, LinkedIn

### Projects

Each project should be a card, either full-width or half-width and 2 per row, whichever fits better. Project cards should also be expandable,
with the unexpanded mode showing some brief information, and expanding it (by clicking on an "expand" with a chevron or something similar) showing
more detailed information. What each mode should contain are explained below:

Unexpanded (Collapsed) mode:

- Project Name
- Brief (one sentence) explanation
- Most important technologies used (not full list of technologies, just those marked important)
- GitHub Link

Expanded mode:

- Project name
- Same description
- GitHub link
- full list of technologies used
- Screenshot or visual (if applicable, some may not)
- Additional bullet points explaining engineering decisions or important pieces

Aim is to have 3-4 projects on the webpage at most

### Experience

Experience should again be organized into cards, with the most recent jobs being closer to the top of the section. These cards are
not expandable.

Includes:

- Role
- Organization
- Dates (could be two past dates or a date to current)
- 2-4 bullet points detailing accomplishments

### Skills

The skills section will consist of smaller sub-sections with skills organized beneath them. The subsection title should be just above
and right-formatted above the skill cards. Each skill card will also be expandable. In its unexpanded version, the skill card
should just consist of the name of the skill. If expandable (this should be optional within the code) and in expanded mode,
it will have both the name of the skill and brief description of what it is or how it's useful.

### Education

This section will consist of only a single card (might not be visually a card, make the best visual choice to keep the site consistent).
This section will include the following information:

- University
- Degree
- Expected graduation date
- GPA
- A small list of relevant courses with short descriptions. This subsection should be expandable. When collapsed, only show a title
like "Relevant Courses." When expanded, show the list of course titles and descriptions.

### About

Short about section, again only a single card (or perhaps not visually a card, same as above). Consist of a short paragraph about me

### Contact

Contact section reiterating contact information contained above.

## Section 3: Implementation Details

In all cases, implementation should follow this general idea: The code defines the *structure* of what the page looks like, and a separate
section of code/json describes *what* fills in that structure. Meaning, in most cases, information is not hard-coded into the jsx file.
Instead, use a ts or json file that contains information about what each section should use. For the Intro section, this might be a simple
object that contains key-value pairs for each field, and for the Project section it might be an array of objects containing key-value pairs
for the different information.

The goal here is that the student can update the content of the webpage without having to go into jsx or similar areas where code logic
or styling occur. The *data* should be stored separately and read into the webpage in some manner (through a variable or such). 

A special note is in the project section, where there should be two properies on the data object: the important technologies (displayed
in unexpanded state) and the rest (displayed in the full list of technologies in the expanded state).

When implementing, do the following:

First, set up the React project and npm workspace. Make all necessary edits to configuration files.
Second, build out the webpage. Do this in discrete steps, perhaps a step for each section, and a sub step within each for styling. You
have permission to spawn sub-agents if necessary.
Third, validate and present. You may fill in some placeholder information for presentation purposes.

At this time you do not need to build any deployment pipeline. That will be set up at a later date.

Special note: make sure the webpage is nicely designed and styled, with errors resolved. Be consistent with formatting and styles,
and use individual css files corresponding to each jsx (or other) file. In the case a CSS property is global, you may use
a global or main stylesheet. Add small, clean animations where applicable and where it contributes to the webpage.

It would be acceptable to build the main content and logic of the webpage, then spawn a sub-agent specifically for building the
CSS for it.
