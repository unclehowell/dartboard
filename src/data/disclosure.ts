export type Status = "dormant" | "evidence" | "nuisance" | "closed" | "suspicious";

export type RingId =
  | "open"
  | "reply"
  | "chase"
  | "review"
  | "complaint"
  | "regulator"
  | "democratic"
  | "forum";

export type Kind = "authority" | "private" | "political";

export type Cell = {
  status: Status;
  title: string;
  detail: string;
  date?: string;
  ref?: string;
  correspondent?: string;
  url?: string;
};

export type Ring = {
  id: RingId;
  name: string;
  short: string;
  blurb: string;
};

export type Party = {
  id: string;
  name: string;
  short: string;
  kind: Kind;
  remit: string;
  cells: Partial<Record<RingId, Cell>>;
};

/** Outside first. Each step inward is the next route that has to be used up. */
export const rings: Ring[] = [
  {
    id: "open",
    name: "Opening enquiry",
    short: "Enquiry",
    blurb: "The first FOI, EIR, subject-access or archive request.",
  },
  {
    id: "reply",
    name: "Substantive reply",
    short: "Reply",
    blurb: "What they actually sent back: a record, a refusal, or a holding note.",
  },
  {
    id: "chase",
    name: "Clarification and chase",
    short: "Chase",
    blurb: "Missing schedules, scope fights, and refinements.",
  },
  {
    id: "review",
    name: "Internal review",
    short: "Review",
    blurb: "The authority reconsidering its own response.",
  },
  {
    id: "complaint",
    name: "Formal complaint",
    short: "Complaint",
    blurb: "Their complaints procedure, a stage-two decision, or a chief inspector.",
  },
  {
    id: "regulator",
    name: "Independent regulator",
    short: "Regulator",
    blurb: "The ICO, or the Independent Complaints Reviewer for Land Registry.",
  },
  {
    id: "democratic",
    name: "Democratic pressure",
    short: "Democratic",
    blurb: "MP, scrutiny, the council chamber, or the Public Services Ombudsman for Wales.",
  },
  {
    id: "forum",
    name: "Tribunal or court",
    short: "Tribunal",
    blurb: "First-tier Tribunal, Upper Tribunal, or a court order for the record.",
  },
];

export const statusMeta: Record<
  Status,
  { label: string; hint: string; swatch: string }
> = {
  dormant: {
    label: "Dormant",
    hint: "Waiting, or this step has not been taken",
    swatch: "var(--color-dormant)",
  },
  evidence: {
    label: "Evidence in",
    hint: "A record or a locate-result came back",
    swatch: "var(--color-evidence)",
  },
  nuisance: {
    label: "Complicated",
    hint: "Circular, obstructive, or hard to get straight",
    swatch: "var(--color-nuisance)",
  },
  closed: {
    label: "Nothing further",
    hint: "They say there is no more they can do",
    swatch: "var(--color-closed)",
  },
  suspicious: {
    label: "Questionable",
    hint: "The handling itself does not bear looking at",
    swatch: "var(--color-suspicious)",
  },
};

/** Wiki correspondence page. Prefer a post slug + anchor when the email is published. */
const w = (slug?: string, anchor?: string) => {
  const base = "https://greathousefarmwiki.wordpress.com";
  if (!slug) return base;
  const path = slug.startsWith("/") ? slug : `/${slug}`;
  return anchor ? `${base}${path}#${anchor}` : `${base}${path}`;
};

export const parties: Party[] = [
  {
    id: "social",
    name: "Social media artifacts",
    short: "Social",
    kind: "private",
    remit: "Posts, clips, comments and secondary reporting found on X, Facebook, YouTube, local groups and news shares.",
    cells: {
      open: {
        status: "evidence",
        title: "Artifacts harvested",
        date: "ongoing",
        detail:
          "Public posts, shares and secondary reporting that name the farm, the 1988 eviction, or the title dispute. Kept as contemporaneous public record, not as formal disclosure.",
        url: w("category/social-media"),
      },
      reply: {
        status: "evidence",
        title: "Clips and shares logged",
        detail:
          "ITV-era references, local commentary, and later social posts that corroborate or contradict the received account. Indexed against the scene list.",
        url: w("category/social-media"),
      },
      chase: {
        status: "dormant",
        title: "Further scrape pending",
        detail: "Automated harvest continues. New hits are added when they surface.",
      },
    },
  },
];

export const sampledThrough = "12 October 2026";

export function dormantDetail(party: Party, ring: Ring): string {
  if (party.kind === "private" && (ring.id === "regulator" || ring.id === "democratic" || ring.id === "forum")) {
    return `${party.name} is not a public authority. The ICO, the Ombudsman and the Information Rights Tribunal are not a path against them. What is left, if a record is still missing, is a further preservation request or an order in the underlying case. Nothing in the mailbox shows that step.`;
  }
  if (party.kind === "political" && ring.id !== "open" && ring.id !== "reply" && ring.id !== "chase") {
    return "An MP’s office is casework, not a body you take to the ICO. The next step is a chase to the office, or asking them to press the authority that actually holds the file. That chase is not in the mailbox beyond what the other slices show.";
  }
  const next: Record<RingId, string> = {
    open: `No opening request to ${party.name} is in the mailbox sample used for this chart.`,
    reply: `No substantive reply from ${party.name} is in the mailbox yet.`,
    chase: `No clarification or chase to ${party.name} is recorded here.`,
    review: `No internal review has been asked of ${party.name}.`,
    complaint: `No formal complaint to ${party.name} under their own complaints procedure is recorded.`,
    regulator: `Not yet taken to the independent reviewer. For most of these bodies that is the Information Commissioner, after the internal review. For Land Registry it is the Independent Complaints Reviewer.`,
    democratic: `Not yet taken to the MP, the council chamber, scrutiny, or the Public Services Ombudsman for Wales as a complaint about ${party.name}.`,
    forum: `Not yet appealed to the First-tier Tribunal (Information Rights), and not raised as a judicial review.`,
  };
  return next[ring.id];
}

export function resolveCell(party: Party, ring: Ring): Cell {
  return (
    party.cells[ring.id] ?? {
      status: "dormant",
      title: "Not opened",
      detail: dormantDetail(party, ring),
    }
  );
}
