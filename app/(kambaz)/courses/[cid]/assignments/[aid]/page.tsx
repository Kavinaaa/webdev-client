import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <textarea
          id="wd-description"
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel and Github."
          className="h-36 w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="wd-points" className="w-1/4 text-right">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          className="flex-1 rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="wd-group" className="w-1/4 text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="flex-1 rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="wd-display-grade-as" className="w-1/4 text-right">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="flex-1 rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="COMPLETE_INCOMPLETE">Complete/Incomplete</option>
        </select>
      </div>

      <div className="mb-4 flex items-start gap-4">
        <label htmlFor="wd-submission-type" className="w-1/4 pt-2 text-right">
          Submission Type
        </label>
        <div className="flex-1 rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-4 w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <div className="mb-2 font-semibold">Online Entry Options</div>
          <div className="mb-2">
            <input type="checkbox" id="wd-text-entry" className="me-2" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="wd-website-url" className="me-2" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="wd-media-recordings" className="me-2" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              id="wd-student-annotation"
              className="me-2"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div>
            <input type="checkbox" id="wd-file-upload" className="me-2" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-start gap-4">
        <span className="w-1/4 pt-4 text-right">Assign</span>
        <div className="flex-1 rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            id="wd-due-date"
            type="date"
            defaultValue="2026-05-13"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-semibold"
              >
                Available from
              </label>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2026-05-06"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-semibold"
              >
                Until
              </label>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2026-05-20"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block font-medium">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          className="h-36 w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <hr className="mb-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-black no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
