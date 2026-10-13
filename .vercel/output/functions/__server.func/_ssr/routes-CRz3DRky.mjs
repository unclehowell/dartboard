import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ExternalLink, i as Minus, n as Scan, r as Plus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRz3DRky.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Outside first. Each step inward is the next route that has to be used up. */
var rings = [
	{
		id: "open",
		name: "Opening enquiry",
		short: "Enquiry",
		blurb: "The first FOI, EIR, subject-access or archive request."
	},
	{
		id: "reply",
		name: "Substantive reply",
		short: "Reply",
		blurb: "What they actually sent back: a record, a refusal, or a holding note."
	},
	{
		id: "chase",
		name: "Clarification and chase",
		short: "Chase",
		blurb: "Missing schedules, scope fights, and refinements."
	},
	{
		id: "review",
		name: "Internal review",
		short: "Review",
		blurb: "The authority reconsidering its own response."
	},
	{
		id: "complaint",
		name: "Formal complaint",
		short: "Complaint",
		blurb: "Their complaints procedure, a stage-two decision, or a chief inspector."
	},
	{
		id: "regulator",
		name: "Independent regulator",
		short: "Regulator",
		blurb: "The ICO, or the Independent Complaints Reviewer for Land Registry."
	},
	{
		id: "democratic",
		name: "Democratic pressure",
		short: "Democratic",
		blurb: "MP, scrutiny, the council chamber, or the Public Services Ombudsman for Wales."
	},
	{
		id: "forum",
		name: "Tribunal or court",
		short: "Tribunal",
		blurb: "First-tier Tribunal, Upper Tribunal, or a court order for the record."
	}
];
var statusMeta = {
	dormant: {
		label: "Dormant",
		hint: "Waiting, or this step has not been taken",
		swatch: "var(--color-dormant)"
	},
	evidence: {
		label: "Evidence in",
		hint: "A record or a locate-result came back",
		swatch: "var(--color-evidence)"
	},
	nuisance: {
		label: "Complicated",
		hint: "Circular, obstructive, or hard to get straight",
		swatch: "var(--color-nuisance)"
	},
	closed: {
		label: "Nothing further",
		hint: "They say there is no more they can do",
		swatch: "var(--color-closed)"
	},
	suspicious: {
		label: "Questionable",
		hint: "The handling itself does not bear looking at",
		swatch: "var(--color-suspicious)"
	}
};
var g = (thread) => `https://mail.google.com/mail/u/0/#all/${thread}`;
var parties = [
	{
		id: "llandough",
		name: "Llandough Community Council",
		short: "Llandough",
		kind: "authority",
		remit: "Clerk Paul Egan. Local minutes, the green, and the 1982 deposit.",
		cells: {
			open: {
				status: "closed",
				title: "Chair: nothing more to add",
				date: "20 Sep 2026",
				correspondent: "Dr Mo Misra, Chair",
				ref: "Email to the Chair, then restated 21 Sep",
				url: g("1a0c1e36871ebfd1"),
				detail: "On 20 September 2026 the Chair wrote that clerk Paul Egan had already directed you to all the information the Council holds, and that “We have nothing more to add.” Your 21 September email answered that this is not a refusal notice. It asked only whether anything is held after the 2002 deposit to Glamorgan Archives: post-2002 minutes and files on Great House Farm (Tŷ Mawr) / Church View Close, village green VG 41, and the verge; any photographs; and what, if anything, came across from Penarth Town Council in 1982. You recorded an earlier clerk’s answer of 14 June 2026 that the minute books from 1982 were deposited with Glamorgan Archives in 2002."
			},
			reply: {
				status: "suspicious",
				title: "Section 12 refusal by the clerk",
				date: "11 Oct 2026",
				correspondent: "Paul R. Egan, Clerk",
				ref: "FOIA s.12 — reply to the 21 Sep request",
				url: g("1a0c1e36871ebfd1"),
				detail: "Paul Egan (clerk@llandough-cc.co.uk) refused under section 12. He priced staff time at £25 an hour, so £450 is 18 hours, then estimated 224 sets of minutes from 2002–2016. The letter says both “about 20 minutes to read each set” and “about 10 minutes to assess each set”, and reaches “over 2240 minutes” (about 37 hours). The request had not asked for a reading of fourteen years of minutes. It asked the Council to say whether post-2002 records are held. He offered a narrower window, for example 2002–2006, and said the other matters would wait for the October meeting."
			},
			chase: {
				status: "dormant",
				title: "Separate EIR, still unanswered",
				date: "11–12 Oct 2026",
				correspondent: "To the clerk",
				ref: "VG 41 / St Dochdwy’s / 89/01396/OUT",
				url: g("1a12aef8151e6cf9"),
				detail: "On 11 October you sent a new EIR request, to be registered on its own clock: works to village green VG 41 and the verge at St Dochdwy’s, 1970–1995, and the green provided under planning permission 89/01396/OUT. The same day and on 12 October you wrote again on preservation, the chronology, and the October meeting. No fresh reply from the clerk is in the mailbox after the section 12 letter."
			},
			review: {
				status: "suspicious",
				title: "Review asked of the same clerk",
				date: "11 Oct 2026",
				correspondent: "Paul Egan",
				ref: "Internal review of the 11 Oct s.12 refusal",
				url: g("1a12af4820f4acb5"),
				detail: "You asked for an internal review of the section 12 refusal on 11 October 2026, and repeated it that evening and on 12 October. The refusal notice tells you to “contact us” for that review. No other reviewer is named. No review outcome is in the mailbox. The questionable point is structural: the clerk who built the 37-hour estimate is the officer the request for review went back to."
			},
			complaint: {
				status: "dormant",
				title: "Subject access, no answer yet",
				date: "11 Oct 2026",
				correspondent: "To the clerk",
				ref: "SAR inside the 11 Oct bundle",
				url: g("1a12ce4cc0f2e15c"),
				detail: "The 11 October bundle to the clerk includes a subject access request alongside the internal review and a fresh records request. No SAR response is in the mailbox. A standards complaint, separate from the FOI review, has not been sent."
			},
			democratic: {
				status: "suspicious",
				title: "Parked to the October meeting",
				date: "11 Oct 2026",
				correspondent: "Paul Egan",
				ref: "October meeting — attendance and papers",
				url: g("1a12af23f85ed2de"),
				detail: "The clerk said the “other matters” in the 21 September email would be considered at the October meeting, and that he would send the Council’s views afterwards. You asked to attend in the proper way and to see the papers. Putting the substantive questions onto a later meeting, rather than answering whether records are held, sits with the same officer whose refusal is under review."
			}
		}
	},
	{
		id: "vale-foi",
		name: "Vale of Glamorgan Council — FOI",
		short: "Vale FOI",
		kind: "authority",
		remit: "Planning register, land charges, conditions, Church View Close.",
		cells: {
			open: {
				status: "dormant",
				title: "Request logged as 00211557",
				date: "28 Sep 2026",
				correspondent: "Information Governance, FOI Unit",
				ref: "00211557, and 00210772, 00211463, 00211483, 00211484",
				url: g("1a0f2d7e013f1d97"),
				detail: "The FOI unit acknowledged on 30 September that a request received on 28 September, reference 00211557, is being considered under FOIA and the EIR. Subject stated on the acknowledgement: Great House Farm / Church View Close — section 52 and land charges, the planning register, environmental-assessment screening, the condition 16–18 chain, and 92/00671/RES. Your later chase also names earlier open requests 00210772, 00211463, 00211483 and 00211484."
			},
			reply: {
				status: "evidence",
				title: "Partial disclosures already in hand",
				date: "Before 10 Oct 2026",
				correspondent: "FOI Unit",
				ref: "Great House / Tŷ Mawr / Church View Close",
				url: g("1a123ef64335cb7c"),
				detail: "On 10 October you wrote that partial disclosures have already been made on Great House Farm / Tŷ Mawr / Church View Close. That is evidence in from the FOI track. The acknowledgement itself promised an answer within 20 working days of 28 September unless the information is not held or is withheld."
			},
			chase: {
				status: "nuisance",
				title: "Appendices C, D and E still missing",
				date: "10 Oct 2026",
				correspondent: "To FoiUnit@valeofglamorgan.gov.uk",
				ref: "Formal chase of 00211557 and earlier requests",
				url: g("1a123ef64335cb7c"),
				detail: "Your 10 October email is a formal chase of three missing planning appendices, C, D and E. The file is open and incomplete: disclosures on one side, three appendices still not supplied on the other."
			}
		}
	},
	{
		id: "vale-scrutiny",
		name: "Vale of Glamorgan — Scrutiny",
		short: "Scrutiny",
		kind: "authority",
		remit: "Task and Finish on the Council-held record.",
		cells: {
			open: {
				status: "dormant",
				title: "Task and Finish suggestion",
				date: "10 Oct 2026",
				correspondent: "Democratic Services",
				ref: "Scrutiny topic — not a new FOI",
				url: g("1a1149d647cb33dc"),
				detail: "You asked Democratic Services for a Scrutiny topic suggestion and a Task and Finish review of the Council-held planning, heritage and public-authority record for Great House Farm / Tŷ Mawr / Church View Close. The FOI unit was copied for information only. You pointed them at greathousefarmwiki.wordpress.com."
			},
			reply: {
				status: "closed",
				title: "Unable to consider the request",
				date: "11 Oct 2026",
				correspondent: "James Langridge-Thomas",
				ref: "Democratic Services refusal",
				url: g("1a1149d647cb33dc"),
				detail: "James Langridge-Thomas replied the next day that Scrutiny will be unable to consider it. His reasons: Task and Finish is for strategic, county-wide policy, not one historical site; Scrutiny should not review evidence of individual historical decisions, particularly planning; and because concerns are already with Welsh Government, Cadw, MSs and MPs, another layer of stakeholders would not be appropriate."
			}
		}
	},
	{
		id: "swp",
		name: "South Wales Police",
		short: "SW Police",
		kind: "authority",
		remit: "Operational records, November–December 1988.",
		cells: {
			open: {
				status: "dormant",
				title: "FOI 1264/26 on the clock",
				date: "10 Oct 2026",
				correspondent: "Owen, Information Rights",
				ref: "1264/26 — deadline 9 Nov 2026",
				url: g("1a12fa8ff526287b"),
				detail: "You asked for non-personal operational records on Great House Farm / Tŷ Mawr, Llandough, for November–December 1988, excluding personal data. On 12 October Owen confirmed FOI 1264/26 and a 20-working-day deadline of 9 November 2026. Until that date this request is dormant, not refused."
			},
			reply: {
				status: "nuisance",
				title: "FOI 1040/26 answered by attachment",
				date: "29 Sep 2026",
				correspondent: "Freedom of Information",
				ref: "1040/26",
				detail: "On 29 September the force wrote that FOI 1040/26 had been considered and that the response was attached. The attachment is not extracted in this chart, so the slice is marked complicated rather than evidence. An earlier request, 719/26, is in internal review rather than closed."
			},
			review: {
				status: "dormant",
				title: "Internal review 1188/26 opened",
				date: "29 Sep 2026",
				correspondent: "FOI review team",
				ref: "1188/26 of FOI 719/26",
				detail: "On 29 September the force confirmed that your email of 27 September, asking for an internal review of FOI 719/26, had been passed to the FOI review team as 1188/26. No outcome is in the mailbox sample."
			}
		}
	},
	{
		id: "glamorgan",
		name: "Glamorgan Archives",
		short: "Glamorgan",
		kind: "authority",
		remit: "Parish, vestry, tithe, and the 2002 minute deposit.",
		cells: { open: {
			status: "dormant",
			title: "Location request, not a viewing",
			date: "10 Oct 2026",
			correspondent: "glamro@cardiff.gov.uk",
			ref: "Llandough-juxta-Penarth, not Cowbridge",
			url: g("1a1158080de15320"),
			detail: "You asked only for a location: parish, vestry and tithe records for Great House / Tŷ Mawr, Llandough-juxta-Penarth, and you said you were not booking a screen room. The clerk’s 14 June position, as you recorded it on 21 September, was that the community minute books from 1982 were deposited here in 2002. No reply from the archives is in the sample."
		} }
	},
	{
		id: "cardiff-reg",
		name: "Cardiff Register Office",
		short: "Registrars",
		kind: "authority",
		remit: "Death registration of Mary Doreen Williams.",
		cells: {
			open: {
				status: "dormant",
				title: "Passed across from the Vale",
				date: "10 Oct 2026",
				correspondent: "Karen Denham, Registrars",
				ref: "Mary Doreen Williams",
				url: g("1a11a41ac938b1a5"),
				detail: "The Vale of Glamorgan Registration Service told you on 30 September 2026 they could not find a death record for Mary Doreen Williams in the Vale, and the search was passed to Cardiff. You wrote to Karen Denham on 10 October."
			},
			reply: {
				status: "closed",
				title: "Cardiff does not hold the entry",
				date: "12 Oct 2026",
				correspondent: "Karen Denham",
				ref: "FreeBMD indexes searched",
				url: g("1a11a41ac938b1a5"),
				detail: "On 12 October Karen Denham wrote that Cardiff Register Office does not hold the registration of death for Mary Doreen Williams, and that the indexes searched included FreeBMD. You replied the same day: “Yes, please pass on.”"
			},
			chase: {
				status: "dormant",
				title: "Asked to pass it on",
				date: "12 Oct 2026",
				correspondent: "You to Karen Denham",
				url: g("1a11a41ac938b1a5"),
				detail: "You agreed that the search should be passed onward. Where it goes next is not yet in the mailbox."
			}
		}
	},
	{
		id: "museum",
		name: "Amgueddfa Cymru — Museum Wales",
		short: "Museum",
		kind: "authority",
		remit: "Archaeological records. FOI 2026-024, 032 and 036.",
		cells: {
			open: {
				status: "dormant",
				title: "Three requests on the farm",
				date: "2026",
				correspondent: "FOI Team",
				ref: "FOI 2026-024, 2026-032, 2026-036",
				url: g("1a1149cc3b8ce394"),
				detail: "The museum has been answering a run of requests on Great House Farm / Tŷ Mawr / Llandough Farm and Church Farm. The live references in the October mail are FOI 2026-024, 2026-032 and 2026-036."
			},
			reply: {
				status: "evidence",
				title: "Records disclosed, including MS 3360/3",
				date: "22 Sep and 5 Oct 2026",
				correspondent: "FOI Team",
				ref: "2026-032 and 2026-036",
				url: g("1a10c2ac609d288e"),
				detail: "You hold disclosures under FOI 2026-032 (22 September) and 2026-036 (5 October). The 5 October letter added records, including Ref 13.2 (a waterwheel) and a page of MS 3360/3. On 12 October the museum wrote that the Church Farm records referred to in the August searches have since been provided, and that “No records remain withheld.”"
			},
			chase: {
				status: "closed",
				title: "No separate note of what was excluded",
				date: "12 Oct 2026",
				correspondent: "FOI Team",
				ref: "Item 7 — recorded basis for “not in scope”",
				url: g("1a1309dc33154ec9"),
				detail: "On 25 August the museum said searches had found records of other archaeological discoveries at Great House Farm and Church Farm, treated as not in scope. You asked for the recorded basis (item 7). On 7, 8 and 12 October they repeated that Amgueddfa Cymru does not hold a separate search log, file note or other document of that assessment. Staff, they say, decided those records were not the alleged discovery of a soldier, horse remains and armour. They say nothing remains withheld. That is their “no more” on the schedule itself."
			},
			review: {
				status: "nuisance",
				title: "Review of 2026-024 did not produce the basis",
				date: "10 Oct 2026",
				correspondent: "FOI Team",
				ref: "Internal review of 2026-024",
				url: g("1a1309dc33154ec9"),
				detail: "Your 10 October email asks that the missing recorded basis be treated as information that should have come out under the internal review of FOI 2026-024. The review is already part of the history, and it did not produce a written rationale. The fight is now about a document they say was never created."
			}
		}
	},
	{
		id: "nlw",
		name: "National Library of Wales",
		short: "NLW",
		kind: "authority",
		remit: "Bute Estate series and the enquiries desk.",
		cells: {
			open: {
				status: "dormant",
				title: "FOI/2026/09 and a LibAnswers enquiry",
				date: "10 Oct 2026",
				correspondent: "NLW enquiries",
				ref: "FOI/2026/09",
				url: g("1a11eaa0af2e3861"),
				detail: "A LibAnswers submission was acknowledged on 10 October. The FOI file is FOI/2026/09, already through internal review by the time of that note."
			},
			reply: {
				status: "evidence",
				title: "Bute Estate series searched",
				date: "Before 10 Oct 2026",
				correspondent: "NLW FOI",
				ref: "D153 and D205",
				url: g("1a11eaa0af2e3861"),
				detail: "You thanked them for searches of the Bute Estate series, including D153 and D205. Those searches are evidence in, whether or not a further box turns up."
			},
			chase: {
				status: "dormant",
				title: "One remaining point",
				date: "10 Oct 2026",
				correspondent: "To enquiry@library.wales",
				ref: "Further Bute or related material",
				url: g("1a11eaa0af2e3861"),
				detail: "On 10 October you asked them to confirm whether any further Bute Estate or related material remains. No answer to that single point is in the sample."
			},
			review: {
				status: "evidence",
				title: "Internal review already given",
				date: "Before 10 Oct 2026",
				correspondent: "NLW FOI",
				ref: "Internal review of FOI/2026/09",
				url: g("1a11eaa0af2e3861"),
				detail: "Your 10 October email thanks them for the internal-review outcome. The review is what sits behind the Bute searches. It is not an open fight in this sample."
			}
		}
	},
	{
		id: "rcahmw",
		name: "RCAHMW — National Monuments Record",
		short: "RCAHMW",
		kind: "authority",
		remit: "NMRW archive scans. RC26-0375.",
		cells: {
			open: {
				status: "dormant",
				title: "September enquiries under RC26-0375",
				date: "8–20 Sep 2026",
				correspondent: "Adam, NMR enquiries",
				ref: "RC26-0375",
				url: g("1a11f562b7880f36"),
				detail: "Requests dated 8, 15, 17 and 20 September sit under RCAHMW reference RC26-0375."
			},
			reply: {
				status: "closed",
				title: "They treat the September asks as finished",
				date: "6 Oct 2026",
				correspondent: "NMR enquiries",
				ref: "RC26-0375",
				url: g("1a11f562b7880f36"),
				detail: "Their further response of 6 October 2026 takes the position that the requests of 8, 15, 17 and 20 September are fully answered. That is a “no more” on those four asks."
			},
			chase: {
				status: "dormant",
				title: "Scans ordered, not yet in",
				date: "10 Oct 2026",
				correspondent: "To nmr.wales@rcahmw.gov.uk",
				ref: "Archives 6048945, 6048943, 6048941",
				url: g("1a11f562b7880f36"),
				detail: "On 10 October you ordered scans of Archives 6048945, 6048943 and 6048941. That order is outstanding in this sample. It is a new step, not a reopening of the four answers they say are finished."
			}
		}
	},
	{
		id: "cadw",
		name: "Cadw and Welsh Government",
		short: "Cadw",
		kind: "authority",
		remit: "1988 listing file, ATISN 27021 and 27589.",
		cells: {
			open: {
				status: "dormant",
				title: "ATISN requests still live",
				date: "10 Oct 2026",
				correspondent: "Welsh Government FOI",
				ref: "ATISN 27021 and ATISN 27589",
				url: g("1a11ea981f52fcb9"),
				detail: "On 10 October you asked the Welsh Government FOI team for retention and destruction schedules for pre-1997 file series on agricultural tenancy, land and rural policy. You tied that to live requests ATISN 27021 and ATISN 27589 (Cadw listing material) and to the Wales Office file 26FOI 103 / IR/26/16."
			},
			reply: {
				status: "closed",
				title: "1988 listing file recorded as destroyed",
				date: "Jul 2026",
				correspondent: "Cadw / Welsh Government",
				ref: "Disposal finding on the 1988 listing file",
				url: g("1a11eb8afe818123"),
				detail: "Your 10 October letter to the Complaints Manager and Chief Inspector refers to a finding that the 1988 listing file was disposed of. That is the “nothing further is held” position on the file itself. You have asked for the existing records that sit behind the finding, which is the chase, not a new concession that the file exists."
			},
			chase: {
				status: "dormant",
				title: "Asking what proves the disposal",
				date: "10 Oct 2026",
				correspondent: "Cadw / Welsh Government Complaints Manager",
				ref: "ATISN 27021",
				url: g("1a11eb8afe818123"),
				detail: "The 10 October letter asks for the existing records behind the disposal finding: the schedule entry, the destruction certificate, or whatever was used to say the 1988 listing file is gone. No answer to that letter is in the sample."
			},
			review: {
				status: "nuisance",
				title: "Three internal reviews already issued",
				date: "2, 10 and 29 Jul 2026",
				correspondent: "Welsh Government",
				ref: "Reviews of the listing-file requests",
				url: g("1a11eb8afe818123"),
				detail: "You refer to internal-review outcomes dated 2, 10 and 29 July 2026. Three reviews and still no underlying destruction record is a complicated file, not a dormant one."
			},
			complaint: {
				status: "nuisance",
				title: "Chief Inspector already written to",
				date: "27 Aug and 4 Sep 2026",
				correspondent: "Chief Inspector",
				ref: "Letters after the July reviews",
				url: g("1a11eb8afe818123"),
				detail: "You refer to the Chief Inspector’s letters of 27 August and 4 September 2026. The complaint stage has been used. The 10 October letter is you going back over what those letters did not produce."
			}
		}
	},
	{
		id: "wales-office",
		name: "Wales Office",
		short: "Wales Office",
		kind: "authority",
		remit: "Pre-devolution file. 26FOI 103.",
		cells: {
			open: {
				status: "dormant",
				title: "Request 26FOI 103",
				date: "2026",
				correspondent: "Wales Office",
				ref: "26FOI 103",
				url: g("1a11ea981f52fcb9"),
				detail: "The Welsh Government chase of 10 October treats a Wales Office response under 26FOI 103 as already in the history of the case. The opening request itself is not restated in the October mail."
			},
			reply: {
				status: "nuisance",
				title: "A response is on the file",
				date: "2026",
				correspondent: "Wales Office",
				ref: "26FOI 103",
				url: g("1a11ea981f52fcb9"),
				detail: "A substantive Wales Office response exists under 26FOI 103. Its text is not in the October sample used for this chart, so the slice is marked complicated: cited, not re-read here."
			},
			review: {
				status: "nuisance",
				title: "Internal review IR/26/16",
				date: "2026",
				correspondent: "Wales Office",
				ref: "IR/26/16",
				url: g("1a11ea981f52fcb9"),
				detail: "Internal review IR/26/16 is cited alongside 26FOI 103. The review has been taken. The outcome is not quoted in the mail this chart was drawn from."
			}
		}
	},
	{
		id: "tna",
		name: "The National Archives",
		short: "TNA",
		kind: "authority",
		remit: "1910 Valuation Office map, and a delayed WDTK request.",
		cells: {
			open: {
				status: "dormant",
				title: "Location-only request for the 1910 map",
				date: "10 Oct 2026",
				correspondent: "FOIRequests@nationalarchives.gov.uk",
				ref: "OS Glamorgan XLVII.6",
				url: g("1a1060d79ae529a6"),
				detail: "You made a Freedom of Information request that was a location request only: the Valuation Office Survey 1910 sheet for OS Glamorgan XLVII.6, covering Llandough / Great House Farm. You were not asking for a copy or a screen-room appointment. A separate WhatDoTheyKnow request, “Great House Farm, Llandough, Cardiff (BP vs Buckler 1987)”, was already late by 1 October."
			},
			reply: {
				status: "evidence",
				title: "They named the Valuation Office map",
				date: "12 Oct 2026",
				correspondent: "FOI Requests, The National Archives",
				ref: "Discovery link for the 1910 sheet",
				url: g("1a1060d79ae529a6"),
				detail: "On 12 October The National Archives wrote that, on the information you gave, they believe they have identified the Valuation Office map covering the property, and they sent a Discovery link. That is evidence in from the location request."
			},
			chase: {
				status: "nuisance",
				title: "The other request is past its deadline",
				date: "1 Oct 2026",
				correspondent: "WhatDoTheyKnow notice",
				ref: "BP vs Buckler 1987 — TNA delay",
				url: g("1a0f5e0903321107"),
				detail: "WhatDoTheyKnow recorded on 1 October 2026 that The National Archives had not replied promptly to “Great House Farm, Llandough, Cardiff (BP vs Buckler 1987)”. That request is a separate, late file sitting next to the map request they did answer."
			}
		}
	},
	{
		id: "hmlr",
		name: "HM Land Registry",
		short: "Land Reg.",
		kind: "authority",
		remit: "Title WA231076, application N610CGV, first registration.",
		cells: {
			open: {
				status: "dormant",
				title: "A run of enquiry numbers",
				date: "Sep–Oct 2026",
				correspondent: "HM Land Registry",
				ref: "N610CGV · WA231076 · WA240304",
				url: g("1a124b25060d556f"),
				detail: "Enquiry references in the mailbox include 260917-6718215 (application N610CGV, title WA231076), 260928-6762800, 260928-6762801, 260929-6766714 and 261007-6799563. One automated reply said an email address is no longer supported. Another mailbox is not monitored."
			},
			reply: {
				status: "nuisance",
				title: "“Already been raised”",
				date: "10 Oct 2026",
				correspondent: "Central, Land Registry",
				ref: "260917-6718215",
				url: g("1a124b25060d556f"),
				detail: "On 10 October, Central wrote on 260917-6718215 that the matter you contacted them about has already been raised. Combined with unmonitored mailboxes, the first-line channel is circular: new enquiry numbers pointing back at an existing file."
			},
			chase: {
				status: "dormant",
				title: "Subject access still inside its deadline",
				date: "1 Oct 2026",
				correspondent: "Data Protection, Land Registry",
				ref: "SAR — WA231076 / WA240304 — due 28 Oct 2026",
				url: g("1a0e3f997bc1bf94"),
				detail: "You sent a subject access request on 28 September for titles WA231076 and WA240304, Williams / Buckler, Great House Farm. On 1 October Data Protection said it would be handled under UK GDPR, with a statutory deadline of 28 October 2026. A preservation notice was also acknowledged automatically."
			},
			complaint: {
				status: "evidence",
				title: "Stage one, stage two, and a 43-document schedule",
				date: "19 Apr and 25 May 2026",
				correspondent: "HM Land Registry complaints",
				ref: "Stage-one and stage-two decisions",
				url: g("1a123ef587a83fad"),
				detail: "On 10 October you told the Independent Complaints Reviewer that you hold the stage-one decision of 19 April 2026, the stage-two decision of 25 May 2026, and a schedule of 43 documents on the first-registration file. The schedule is evidence in. The conclusions of the two decisions are not restated in that email."
			},
			regulator: {
				status: "nuisance",
				title: "ICR/090/26 — a letter that had not arrived",
				date: "12 Oct 2026",
				correspondent: "Independent Complaints Reviewer",
				ref: "ICR/090/26",
				url: g("1a123ef587a83fad"),
				detail: "ICR/090/26 is the independent review of the Land Registry complaint. The office acknowledged further emails on 29 September. On 12 October they wrote that you appeared not to have received their letter of 9 October, and they attached it again. The reviewer is engaged. The correspondence itself is unreliable."
			}
		}
	},
	{
		id: "mod",
		name: "Ministry of Defence",
		short: "MOD",
		kind: "authority",
		remit: "1988 eviction, FOI2026/09019, SAR DPR2026/46503.",
		cells: {
			open: {
				status: "dormant",
				title: "FOI and a subject access request",
				date: "5 Aug 2026 onward",
				correspondent: "MOD FOI and DBS",
				ref: "FOI2026/09019 · DPR2026/46503",
				url: g("1a11eb8cc384c312"),
				detail: "Two tracks. FOI2026/09019 asks about possible UK Armed Forces involvement in the 1988 events at Tŷ Mawr. Subject access request DPR2026/46503 was received by Defence Business Services on 5 August 2026. WhatDoTheyKnow also carries “1988 Dispossession of Great House Farm, Llandough from the Williams/Buckler Family”, which notified a new response on 10 October."
			},
			reply: {
				status: "suspicious",
				title: "Section 23(5), and a SAR with nothing in scope",
				date: "9 Oct 2026",
				correspondent: "MOD FOI and DBS Disclosures",
				ref: "FOI2026/09019 · DPR2026/46503",
				url: g("1a123ef732996ab6"),
				detail: "On the FOI, the Ministry relied on section 23(5) for the Special Forces part: a neither-confirm-nor-deny exemption. On the SAR, DBS wrote on 9 October 2026, late, that no information in scope was held. A blank SAR on an eviction in which armed forces have been asked about, paired with a section 23 exemption, is marked questionable. The “nothing in scope” sentence, taken alone, would have been orange."
			},
			chase: {
				status: "dormant",
				title: "The non-Special-Forces remainder",
				date: "10 Oct 2026",
				correspondent: "To cio-foi@mod.gov.uk",
				ref: "FOI2026/09019 clarification",
				url: g("1a11eb8cc384c312"),
				detail: "On 10 October you asked the FOI team to clarify the non-Special-Forces remainder and the existing retention and search records. No answer to that clarification is in the sample. WhatDoTheyKnow’s 10 October notification of a new response on the 1988 dispossession request is noted, but the response text is not in the Gmail notice."
			},
			review: {
				status: "dormant",
				title: "Internal review of the SAR handling",
				date: "10 Oct 2026",
				correspondent: "To CIO-FOI-IR@mod.gov.uk",
				ref: "DPR2026/46503",
				url: g("1a123ef40f2cf0cd"),
				detail: "On 10 October you requested an internal review of the handling and classification of the request about possible UK Armed Forces involvement in the 1988 eviction, reference DPR2026/46503. No review outcome is in the mailbox."
			}
		}
	},
	{
		id: "nactso",
		name: "National Counter Terrorism Security Office",
		short: "NaCTSO",
		kind: "authority",
		remit: "WhatDoTheyKnow request “BP vs Buckler 1987”.",
		cells: {
			open: {
				status: "dormant",
				title: "WDTK request BP vs Buckler 1987",
				date: "2026",
				correspondent: "NaCTSO via WhatDoTheyKnow",
				ref: "BP vs Buckler 1987",
				url: g("1a120c63de6587c0"),
				detail: "A WhatDoTheyKnow request titled “BP vs Buckler 1987” is with the National Counter Terrorism Security Office. The Gmail record is the notification stream, not the request text."
			},
			reply: {
				status: "nuisance",
				title: "Several responses, text not in Gmail",
				date: "29 Sep, 1 Oct, 9 Oct 2026",
				correspondent: "NaCTSO via WhatDoTheyKnow",
				ref: "New-response notices",
				url: g("1a120c63de6587c0"),
				detail: "WhatDoTheyKnow notified new responses on 29 September, 1 October (twice) and 9 October 2026. The notices do not include the response text, so this slice is marked complicated: something was sent, and it is not yet read into the chart."
			}
		}
	},
	{
		id: "moj",
		name: "Ministry of Justice",
		short: "Justice",
		kind: "authority",
		remit: "FOI 260813002, under internal review.",
		cells: {
			open: {
				status: "dormant",
				title: "FOI 260813002",
				date: "Before 13 Aug 2026",
				correspondent: "Ministry of Justice",
				ref: "FOI 260813002",
				detail: "An FOI to the Ministry of Justice, reference 260813002, is in the mailbox only through the internal-review acknowledgement. The original request text is not in this sample."
			},
			review: {
				status: "dormant",
				title: "Internal review acknowledged",
				date: "9 Oct 2026",
				correspondent: "NSUKilo, Ministry of Justice",
				ref: "Review of FOI 260813002, requested 13 Aug 2026",
				detail: "On 9 October 2026 NSUKilo at justice.gov.uk acknowledged the internal review you requested on 13 August 2026 of FOI 260813002. Acknowledgement is not an outcome. The review is dormant until the decision arrives."
			}
		}
	},
	{
		id: "mp",
		name: "Stephen Doughty MP",
		short: "Doughty",
		kind: "political",
		remit: "Constituency casework on N610CGV.",
		cells: {
			open: {
				status: "evidence",
				title: "Office forwarded the Land Registry letter",
				date: "18 Sep 2026",
				correspondent: "Office of Stephen Doughty MP",
				ref: "HMLR N610CGV",
				url: g("1a11a41c4126f155"),
				detail: "On 18 September the MP’s office forwarded a letter from HM Land Registry’s Chief. That letter is evidence in the casework file. You followed up on 10 October about N610CGV and the casework log."
			},
			reply: {
				status: "dormant",
				title: "Automatic reply only",
				date: "28 Sep 2026",
				correspondent: "stephen.doughty.mp@parliament.uk",
				ref: "Auto-reply on the 719/26 note",
				detail: "An automatic reply on 28 September confirmed a related email (subject access, crime-recording, and a search note on police FOI 719/26) had been received, and that the office is behind on mail. No substantive reply to the 10 October follow-up is in the sample."
			}
		}
	},
	{
		id: "cotswold",
		name: "Cotswold Archaeology",
		short: "Cotswold",
		kind: "private",
		remit: "1994 early-medieval cemetery archive.",
		cells: {
			open: {
				status: "dormant",
				title: "Preservation notice, then a copy request",
				date: "10 Oct 2026",
				correspondent: "Cotswold Archaeology",
				ref: "1994 Llandough cemetery archive",
				url: g("1a11eaa835381426"),
				detail: "A preservation notice had already been served. On 10 October you asked whether they hold any retained copy of the 1994 early-medieval cemetery excavation archive or report for Llandough / Great House Farm."
			},
			reply: {
				status: "evidence",
				title: "The report is on their website",
				date: "12 Oct 2026",
				correspondent: "Paolo Guarino",
				ref: "reports.cotswoldarchaeology.co.uk",
				url: g("1a11eaa835381426"),
				detail: "On 12 October Paolo Guarino wrote that the report is online at reports.cotswoldarchaeology.co.uk, searchable by keyword. That is evidence in from a private holder. Cotswold Archaeology is not a public authority, so the inner FOI rings are not a legal path against them."
			}
		}
	},
	{
		id: "linklaters",
		name: "Linklaters — archives",
		short: "Linklaters",
		kind: "private",
		remit: "BP Properties and BP Pension Trust files, 1982–1988.",
		cells: { open: {
			status: "dormant",
			title: "Preservation and access request",
			date: "10 Oct 2026",
			correspondent: "archives@linklaters.com",
			ref: "BP files 1982–1988",
			url: g("1a11eaa7a327d405"),
			detail: "You referred to a preservation notice already served and asked the records team to confirm whether any client files, pleadings, instructions, disclosure schedules or title papers survive for BP Properties / BP Pension Trust and Great House Farm / Llandough, 1982–1988. No reply is in the sample. Linklaters is not a public authority."
		} }
	},
	{
		id: "itv",
		name: "ITV Archive",
		short: "ITV Archive",
		kind: "private",
		remit: "December 1988 footage of the demolition.",
		cells: {
			open: {
				status: "dormant",
				title: "Archive search for December 1988",
				date: "10 Oct 2026",
				correspondent: "ITV",
				ref: "Tŷ Mawr demolition, about ST 168 733",
				url: g("1a1273c8e61a8b71"),
				detail: "You asked ITV to search for footage of Great House Farm / Tŷ Mawr, Llandough-juxta-Penarth, adjoining St Dochdwy’s, around the December 1988 demolition."
			},
			reply: {
				status: "closed",
				title: "Automated dead end",
				date: "10 Oct 2026",
				correspondent: "ITV clipsales, then viewers.requests",
				ref: "Wrong inbox, then a canned refusal",
				url: g("1a1273c8e61a8b71"),
				detail: "clipsales@itv.com replied automatically that the inbox is only for licensing footage, and pointed personal research at viewers.requests. That address then sent a canned reply: the service is only for viewers wanting copies of programmes. Neither message searched an archive. For a research request, that is them saying there is nothing further this channel will do."
			}
		}
	}
];
var sampledThrough = "12 October 2026";
function dormantDetail(party, ring) {
	if (party.kind === "private" && (ring.id === "regulator" || ring.id === "democratic" || ring.id === "forum")) return `${party.name} is not a public authority. The ICO, the Ombudsman and the Information Rights Tribunal are not a path against them. What is left, if a record is still missing, is a further preservation request or an order in the underlying case. Nothing in the mailbox shows that step.`;
	if (party.kind === "political" && ring.id !== "open" && ring.id !== "reply" && ring.id !== "chase") return "An MP’s office is casework, not a body you take to the ICO. The next step is a chase to the office, or asking them to press the authority that actually holds the file. That chase is not in the mailbox beyond what the other slices show.";
	return {
		open: `No opening request to ${party.name} is in the mailbox sample used for this chart.`,
		reply: `No substantive reply from ${party.name} is in the mailbox yet.`,
		chase: `No clarification or chase to ${party.name} is recorded here.`,
		review: `No internal review has been asked of ${party.name}.`,
		complaint: `No formal complaint to ${party.name} under their own complaints procedure is recorded.`,
		regulator: `Not yet taken to the independent reviewer. For most of these bodies that is the Information Commissioner, after the internal review. For Land Registry it is the Independent Complaints Reviewer.`,
		democratic: `Not yet taken to the MP, the council chamber, scrutiny, or the Public Services Ombudsman for Wales as a complaint about ${party.name}.`,
		forum: `Not yet appealed to the First-tier Tribunal (Information Rights), and not raised as a judicial review.`
	}[ring.id];
}
function resolveCell(party, ring) {
	return party.cells[ring.id] ?? {
		status: "dormant",
		title: "Not opened",
		detail: dormantDetail(party, ring)
	};
}
var CX = 500;
var CY = 500;
var OUTER = 318;
var GAP = .012;
function polar(r, a) {
	return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
}
function arcPath(r0, r1, a0, a1) {
	const large = a1 - a0 > Math.PI ? 1 : 0;
	const [x0, y0] = polar(r1, a0);
	const [x1, y1] = polar(r1, a1);
	const [x2, y2] = polar(r0, a1);
	const [x3, y3] = polar(r0, a0);
	return `M ${x0} ${y0} A ${r1} ${r1} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 ${large} 0 ${x3} ${y3} Z`;
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function RingWheel({ selection, onSelect, filter }) {
	const wrapRef = (0, import_react.useRef)(null);
	const [width, setWidth] = (0, import_react.useState)(640);
	const [view, setView] = (0, import_react.useState)({
		x: 0,
		y: 0,
		k: 1
	});
	const drag = (0, import_react.useRef)(null);
	const suppressClick = (0, import_react.useRef)(false);
	const titleId = (0, import_react.useId)();
	const thickness = 232 / rings.length;
	const slice = Math.PI * 2 / parties.length;
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el) return;
		const measure = () => setWidth(el.clientWidth);
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el) return;
		const onWheel = (event) => {
			event.preventDefault();
			const rect = el.getBoundingClientRect();
			const ox = event.clientX - rect.left;
			const oy = event.clientY - rect.top;
			const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
			setView((current) => {
				const k = clamp(current.k * factor, .85, 5);
				const ratio = k / current.k;
				return {
					k,
					x: ox - ratio * (ox - current.x),
					y: oy - ratio * (oy - current.y)
				};
			});
		};
		el.addEventListener("wheel", onWheel, { passive: false });
		return () => el.removeEventListener("wheel", onWheel);
	}, []);
	const showLabels = width >= 720 || view.k >= 1.65;
	const zoomAt = (factor) => {
		const el = wrapRef.current;
		if (!el) return;
		const ox = el.clientWidth / 2;
		const oy = el.clientHeight / 2;
		setView((current) => {
			const k = clamp(current.k * factor, .85, 5);
			const ratio = k / current.k;
			return {
				k,
				x: ox - ratio * (ox - current.x),
				y: oy - ratio * (oy - current.y)
			};
		});
	};
	const cells = (0, import_react.useMemo)(() => parties.flatMap((party, partyIndex) => rings.map((ring, ringIndex) => {
		const a0 = -Math.PI / 2 + partyIndex * slice + GAP / 2;
		const a1 = -Math.PI / 2 + (partyIndex + 1) * slice - GAP / 2;
		const r1 = OUTER - ringIndex * thickness;
		return {
			party,
			ring,
			ringIndex,
			a0,
			a1,
			r0: r1 - thickness + 2.2,
			r1,
			cell: resolveCell(party, ring)
		};
	})), [slice, thickness]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full min-h-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: wrapRef,
			className: "relative h-full min-h-80 overflow-hidden rounded-2xl border border-line bg-surface touch-none",
			onPointerDown: (event) => {
				if (event.button !== 0) return;
				if (event.target?.closest?.("[data-slice]")) return;
				wrapRef.current?.setPointerCapture(event.pointerId);
				suppressClick.current = false;
				drag.current = {
					x: event.clientX,
					y: event.clientY,
					vx: view.x,
					vy: view.y
				};
			},
			onPointerMove: (event) => {
				const current = drag.current;
				if (!current) return;
				const dx = event.clientX - current.x;
				const dy = event.clientY - current.y;
				if (Math.hypot(dx, dy) > 4) suppressClick.current = true;
				setView((value) => ({
					...value,
					x: current.vx + dx,
					y: current.vy + dy
				}));
			},
			onPointerUp: () => {
				drag.current = null;
			},
			onPointerCancel: () => {
				drag.current = null;
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 1000 1000",
				role: "img",
				"aria-labelledby": titleId,
				className: "h-full w-full",
				style: {
					transform: `translate(${view.x}px, ${view.y}px) scale(${view.k})`,
					transformOrigin: "0 0"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
						id: titleId,
						children: "Disclosure rings for Great House Farm. Outside ring is the first enquiry."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: 326,
						fill: "none",
						stroke: "var(--color-line)",
						strokeWidth: "1"
					}),
					cells.map(({ party, ring, a0, a1, r0, r1, cell }) => {
						const selected = selection?.partyId === party.id && selection.ringId === ring.id;
						const dim = filter !== null && cell.status !== filter;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: arcPath(r0, r1, a0, a1),
							fill: statusMeta[cell.status].swatch,
							opacity: dim ? .16 : selected ? 1 : .94,
							stroke: selected ? "var(--color-brass)" : "var(--color-bg)",
							strokeWidth: selected ? 3 : .6,
							"data-slice": "",
							className: "cursor-pointer outline-none transition-opacity duration-150",
							tabIndex: 0,
							role: "button",
							"aria-pressed": selected,
							"aria-label": `${party.name}, ${ring.name}. ${statusMeta[cell.status].label}. ${cell.title}`,
							onClick: (event) => {
								event.stopPropagation();
								if (suppressClick.current) {
									suppressClick.current = false;
									return;
								}
								onSelect({
									partyId: party.id,
									ringId: ring.id
								});
							},
							onKeyDown: (event) => {
								if (event.key === "Enter" || event.key === " ") {
									event.preventDefault();
									onSelect({
										partyId: party.id,
										ringId: ring.id
									});
								}
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: `${party.short} · ${ring.short} · ${cell.title}` })
						}, `${party.id}-${ring.id}`);
					}),
					showLabels && parties.map((party, index) => {
						const deg = (-Math.PI / 2 + (index + .5) * slice) * 180 / Math.PI;
						const norm = (deg % 360 + 360) % 360;
						const flip = norm > 90 && norm < 270;
						const active = selection?.partyId === party.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							fill: active ? "var(--color-brass)" : "var(--color-muted)",
							fontSize: "15",
							fontFamily: "var(--font-sans)",
							textAnchor: flip ? "end" : "start",
							dominantBaseline: "middle",
							transform: `rotate(${deg} ${CX} ${CY}) translate(332 0)${flip ? " rotate(180)" : ""}`,
							className: "pointer-events-none select-none",
							children: party.short
						}, party.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: 80,
						fill: "var(--color-bg)",
						stroke: "var(--color-line)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: CX,
						y: 484,
						textAnchor: "middle",
						fill: "var(--color-brass)",
						fontFamily: "var(--font-serif)",
						fontSize: "22",
						children: "Tŷ Mawr"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: CX,
						y: 510,
						textAnchor: "middle",
						fill: "var(--color-fg)",
						fontFamily: "var(--font-sans)",
						fontSize: "13",
						children: "Great House Farm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: CX,
						y: 530,
						textAnchor: "middle",
						fill: "var(--color-faint)",
						fontFamily: "var(--font-sans)",
						fontSize: "11",
						children: "outside is the first ask"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-3 right-3 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "rounded-full bg-bg/80 px-2.5 py-1 text-xs text-muted tabular-nums",
				children: [Math.round(view.k * 100), "%"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex overflow-hidden rounded-full border border-line bg-bg/90",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomButton, {
						label: "Zoom out",
						onClick: () => zoomAt(1 / 1.25),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { "aria-hidden": true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomButton, {
						label: "Zoom in",
						onClick: () => zoomAt(1.25),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { "aria-hidden": true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomButton, {
						label: "Fit the rings",
						onClick: () => setView({
							x: 0,
							y: 0,
							k: 1
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scan, { "aria-hidden": true })
					})
				]
			})]
		})]
	});
}
function ZoomButton({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "grid h-11 w-11 place-items-center text-fg transition-colors hover:bg-surface-2 hover:text-brass [&_svg]:size-4",
		children
	});
}
function Home() {
	const [selection, setSelection] = (0, import_react.useState)({
		partyId: "llandough",
		ringId: "reply"
	});
	const [filter, setFilter] = (0, import_react.useState)(null);
	const selected = (0, import_react.useMemo)(() => {
		if (!selection) return null;
		const party = parties.find((item) => item.id === selection.partyId);
		const ring = rings.find((item) => item.id === selection.ringId);
		if (!party || !ring) return null;
		return {
			party,
			ring,
			ringIndex: rings.findIndex((item) => item.id === ring.id),
			cell: resolveCell(party, ring)
		};
	}, [selection]);
	const counts = (0, import_react.useMemo)(() => {
		const tally = {
			dormant: 0,
			evidence: 0,
			nuisance: 0,
			closed: 0,
			suspicious: 0
		};
		for (const party of parties) for (const ring of rings) tally[resolveCell(party, ring).status] += 1;
		return tally;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-7xl flex-col gap-4 px-4 py-4 md:px-6 md:py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.18em] text-brass uppercase",
							children: "Great House Farm · Tŷ Mawr · Llandough"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-serif text-3xl leading-tight text-fg md:text-4xl",
							children: "Disclosure rings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
							children: [
								"Outside is the first enquiry. Each ring inward is the next step that has to be used up before anyone can say the record was properly sought. Drawn from your FOI mail, sampled through ",
								sampledThrough,
								"."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-wrap gap-1.5 text-xs text-muted md:max-w-sm md:justify-end",
					children: rings.map((ring, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-full border border-line bg-surface px-2 py-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint",
								children: index + 1
							}),
							" ",
							ring.short
						]
					}, ring.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "toolbar",
				"aria-label": "Colour key",
				children: Object.keys(statusMeta).map((status) => {
					const meta = statusMeta[status];
					const on = filter === status;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => setFilter(on ? null : status),
						className: `flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${on ? "border-brass bg-surface-2 text-fg" : "border-line bg-surface text-muted hover:text-fg"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-3 rounded-full",
								style: { background: meta.swatch },
								"aria-hidden": true
							}),
							meta.label,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint tabular-nums",
								children: counts[status]
							})
						]
					}, status);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 flex-1 gap-4 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "aspect-square w-full",
					"aria-label": "Ring chart",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingWheel, {
						selection,
						onSelect: setSelection,
						filter
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex min-h-0 flex-col gap-3",
					children: [selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "label-in rounded-2xl border border-line bg-paper p-4 text-dormant-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs tracking-wide uppercase",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2.5 rounded-full",
										style: { background: statusMeta[selected.cell.status].swatch },
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: statusMeta[selected.cell.status].label }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-faint",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Ring ",
										selected.ringIndex + 1,
										" of ",
										rings.length
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-serif text-2xl leading-tight",
								children: selected.cell.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm",
								children: [selected.party.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-faint",
									children: [" · ", selected.ring.name]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm",
								children: [
									selected.cell.date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: selected.cell.date })] }),
									selected.cell.ref && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Ref"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: selected.cell.ref })] }),
									selected.cell.correspondent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Who"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: selected.cell.correspondent })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed",
								children: selected.cell.detail
							}),
							selected.cell.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: selected.cell.url,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-3 inline-flex items-center gap-1.5 text-sm text-brass-ink underline decoration-brass underline-offset-4",
								children: ["Open the thread in Gmail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									className: "size-3.5",
									"aria-hidden": true
								})]
							})
						]
					}, `${selected.party.id}-${selected.ring.id}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl border border-line bg-surface p-4 text-sm text-muted",
						children: "Select a slice. The label for that step will open here."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-auto rounded-2xl border border-line bg-surface lg:max-h-dvh",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sticky top-0 border-b border-line bg-surface px-3 py-2 text-xs tracking-wide text-faint uppercase",
							children: "Each body, outside to inside"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: parties.map((party) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-line last:border-b-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-3 pt-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-fg",
									children: party.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-faint",
									children: party.remit
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 px-3 pt-2 pb-3",
								children: rings.map((ring) => {
									const cell = resolveCell(party, ring);
									const on = selection?.partyId === party.id && selection.ringId === ring.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										title: `${ring.name}: ${cell.title}`,
										"aria-label": `${party.short}, ${ring.name}, ${cell.title}`,
										"aria-pressed": on,
										onClick: () => setSelection({
											partyId: party.id,
											ringId: ring.id
										}),
										className: `h-8 min-w-0 flex-1 rounded-md ${on ? "ring-2 ring-brass ring-offset-1 ring-offset-surface" : ""}`,
										style: { background: statusMeta[cell.status].swatch }
									}, ring.id);
								})
							})]
						}, party.id)) })]
					})]
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
