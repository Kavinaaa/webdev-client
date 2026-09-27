export default function HeadingTags() {
  return (
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used
      to format plain text so that it renders in a browser as large headings.
      There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and
      h6. Tag h1 is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.
       <div id="wd-your-tag">
        <h4> Hello my name is Kavina! </h4>
            I am a third year cs and design student wanting to have a career in ux design. 
            I{" "}<span id="wd-your-span">am</span> currently on co-op as a graphic 
            designer at the Office of the Provost.
        </div>
      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        <p>
          This section is a second sample outline showing how h4, h5, and h6
          nest under one another to break a topic into smaller pieces.
        </p>
        <h5>What I built</h5>
        <p>
          A short placeholder paragraph describing the work in progress, sitting
          one level below the section heading above it.
        </p>
        <h6>Next step</h6>
        <p>
          Another placeholder sentence, this time under the smallest heading tag
          available in HTML.
        </p>
      </div>
    </div>
  );
}