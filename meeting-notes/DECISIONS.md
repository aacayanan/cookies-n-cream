# ICE TRACK Decision Log

> [!important] Living Document
> Append decisions as they are made. Each entry records the decision, rationale, approver,
> date, and the requirement/risk IDs it affects. This log exists since **2026-11-27**;
> earlier team decisions (Supabase, JavaScript, invitation model) live in
> `meeting-notes/9.17.md` and are referenced where relevant.

---

## DEC-002 — Permission matrix (admin/member) and record ownership

**Status:** Approved · **Date:** 2026-11-27 · **Approver:** aacayanan (team decision session)

### Framing clarification (material)

A **member is a customer organization**, not internal staff. ICE TRACK is a B2B
enterprise solution: *we are the supplier of ice cream and members buy from us.*
Consequences of this framing:

- Members must **not** see other organizations' records (competitive sensitivity).
  Record visibility is scoped per organization, not per individual user.
- Members do not manage "customers" in the CRM sense — their organization's
  customer record is created/maintained by the administrator.
- Cancellation/changes to orders go through **trouble tickets**, not direct edits.

### Permission matrix

| Resource       | Member (customer org)                                   | Admin (supplier staff)              |
| -------------- | ------------------------------------------------------- | ----------------------------------- |
| Customers      | Read only (own organization record)                     | Full CRUD + export/print            |
| Orders         | Create + read (own only)                                | Full CRUD + export/print (all)      |
| Inventory      | Read only (supplier availability)                       | Full CRUD                           |
| Shipments      | Read + update (own only; e.g. acknowledge/receipt)      | Full CRUD + tracking (all)          |
| Trouble tickets| Create + update (own only)                              | Full CRUD (all; assignment/status)  |
| Accounts       | Own profile only                                        | CRUD users, send invitations, roles |
| Metrics        | None (operational status on own dashboard only)         | Full (revenue/profits, GEN-007)     |

### Record sharing — DEC-002b

**Decision:** Ownership-restricted, **strict** interpretation: a member sees only
the records belonging to their own organization; the administrator sees everything.
Rationale (verbatim from decision session): *"A member is one organization … If
they wish to cancel an order then they can send in a ticket. Members can't see
other organization orders (competitor sake)."*

- Each business table carries an owning-organization reference (`created_by` /
  organization id) — schema migration required; see B1 scope.
- RLS policies (R-001) follow directly from this matrix: per-table policies for
  `admin` (unrestricted) and `member` (own-organization rows, permitted operations
  only).

**Affected requirements:** REQ-003, REQ-005, REQ-006, REQ-007, REQ-008, REQ-009, REQ-010.
**Affected risks:** R-001 (unblocks RLS policy design). **Affected tickets:** B1, A1 follow-up role checks.

**Resulting acceptance criteria for B1:**
- [ ] Permission matrix above is enforced server-side (403 on forbidden operations, deny-by-default for unknown roles — matches UT-016/UT-017/UT-018).
- [ ] Every business table has an owning-organization column and queries filter member access to own rows only.
- [ ] RLS policies written in a new timestamped migration encoding the matrix (R-001 mitigation).

---

## DEC-003 — Invitation flow replaces open signup

**Status:** Approved · **Date:** 2026-11-27 · **Approver:** aacayanan (team decision session)

**Decision:** Confirm the 2025-09-17 team decision (`meeting-notes/9.17.md`: *"Administrator
account will send out invite to members to create their own member accounts"*). The shipped
open self-service signup (`POST /api/signup`, pre-confirmed emails) is **removed** and replaced
by the invitation flow.

### Invitation lifecycle

1. **Generation** — Admin creates an invitation via `POST /api/invitations` (email + role).
   Admin-only (UT-019/UT-020).
2. **Redemption** — Invitee receives a single-use token link → `/accept-invite`; sets
   name + password; account is created with the role from the invitation (UT-022).
3. **Expiry** — Tokens expire after **7 days**. Expired tokens return a clear error and
   create no account (UT-023).
4. **Reuse** — Tokens are single-use; a used token is rejected (UT-023).
5. **Admin bootstrap** — The first administrator account is created by seed (migration /
   seed script), never through the invitation flow.

**Signup retirement:** `POST /api/signup` is removed (return **410 Gone**). Test rows
UT-033–UT-041 are retired from the plan; UT-019–UT-023 remain the coverage for this area.

**Affected requirements:** REQ-001 (scoped to invite-only onboarding), REQ-010 (invitation
administration), NB-001 (scope confirmed). **Affected risks:** R-004 → **Closed: build the
flow (option A)**; R-008 note becomes moot once signup is removed (email-confirmation
setting no longer affects onboarding).

**Resulting acceptance criteria:**
- [ ] `/api/signup` removed (410 Gone) and frontend signup page replaced by accept-invite.
- [ ] Invitation endpoints + expiry/reuse behavior implemented with UT-019–UT-023 passing.
- [ ] REQ-001 status updated; R-004 closed in notebook §9.

---

## DEC-004 — Idle session timeout (GEN-008)

**Status:** Approved · **Date:** 2026-11-27 · **Approver:** aacayanan (team decision session)

**Decision:**

- **Who configures:** The interval is set by the **administrator**. There will be an
  **easy admin-facing way to configure it** (an admin settings control), backed by an
  environment default so the system works out of the box.
- **Default interval:** **5 minutes** of inactivity.
- **What resets it:** Any **authenticated API request** resets the inactivity timer. The API
  is the source of truth; the frontend runs no parallel client timer.
- **Effect:** On expiry the next request returns **401 with a session-expired message**
  (matches UT-015) and the frontend redirects to `/login`.
- **Tabs:** All tabs share the same session/token and therefore **one timer** — activity in
  any tab keeps every tab alive. Logging out ends the session everywhere.

**Affected requirements:** REQ-002 (session handling), REQ-010 (admin settings surface), REQ-011, GEN-008.
**Affected tickets:** A2 acceptance criteria.

**Resulting acceptance criteria for A2:**
- [ ] Session tokens carry last-activity timestamps; 5 min (admin-configurable) of inactivity yields 401 + session-expired message.
- [ ] Every authenticated API request refreshes the timer.
- [ ] Frontend redirects to `/login` on 401 and shows the session-expired state.
- [ ] Admins can change the inactivity interval through an easy admin-facing control; the value persists and takes effect without redeploy.
- [ ] Cross-tab behavior documented (shared session, single timer).

---

## Cross-references

| Decision | Blocks | Resolves |
|---|---|---|
| DEC-002 / DEC-002b | B1, A1 role checks | R-001 design path |
| DEC-003 | B1 auth scope, NB-001 | R-004 |
| DEC-004 | A2, REQ-010 admin settings surface | UT-015 alignment |
