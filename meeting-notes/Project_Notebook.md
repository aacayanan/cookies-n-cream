
# Project Notebook

### GitHub Repository: https://github.com/aacayanan/cookies-n-cream
## Submission Checklist

- [ ] Cover page completed
- [ ] Signature page completed
- [ ] Project plan documented
- [ ] Development estimate updated
- [ ] Labor-hour estimate updated
- [ ] Requirements updated
- [ ] Design artifacts included
- [ ] Code and test artifacts included
- [ ] Risk status updated
- [ ] Independent system test documented
- [ ] Team timesheets updated
- [ ] At least five optional review items included for an overall teamwork grade of A

---

## 1. Cover Page

### Deliverable Milestone

**Milestone:**  Initial Project Plan and Requirements Specification

### Project

**Project name:** Ice Cream Tracker 
**Project description:**  ICE TRACK is a web based business management application for managing customers, orders, inventory, shipments, and trouble tickets. The system will provide secure, role based access for administrators and members along with a dashboard for viewing business information and tracking order and shipment progress.

### Team

**Team name/number:**  Cookies and Cream
**Team members:** 
* Aaron Justin Garcia Cayanan
* Alex Ivaniuk
* Nicolaus Reyasbautista
* Marco Munoz
* Patricia Alfonso
* Matthew Guiao

### Report Date

**Date:**  10/29/2026

---

## 2. Signature Page

> [!note] Contribution Confirmation
> Each team member who contributed to this project notebook must sign below.

| Team member           | Role     | Contribution confirmed | Signature     | Date    |
| --------------------- | -------- | :--------------------: | ------------- | ------- |
| Aaron Cayanan         | PM       |           ☐            | Aaron Cayanan | 9/24/26 |
| Nicolas Reyasbautista | S/W Mgr  |           ☐            |               |         |
| Marcos Munez          | CM Lead  |           ☐            |               |         |
| Patricia Alfonso      | Test Mgr |           ☐            |               |         |
| Matthew Guiao         | Des Mgr  |           ☐            | Matthew Guiao | 10/29/26 |
| Alex Ivaniuk          | Req Mgr  |           ☐            |               |         |
|                       | S/W Eng  |           ☐            |               |         |

---

## 3. Project Plan

### 3.a. Project Team

> [!important] Required Roles
> The team assignments must include a **Project Manager (PM)** and a **Test Manager**.

| Team member           | Role                 | Responsibilities                                                                                                          | Deliverables owned                                                                                         |
| --------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Aaron Cayanan         | Project Manager      | Coordinate the team, track progress and blockers, organize meetings, manage project scope, and support sprint planning.   | Meeting notes, project scope, sprint plans, Docker/setup coordination, GitHub management and organization. |
| Marcos Munez          | CM Lead              | Manage configuration control, GitHub frontend/backend initialization, and release consistency.                            | Configuration management plan, repository structure.                                                       |
| Patricia Alfonso      | Test Manager         | Identify test areas, create test cases, align tests with requirements, and coordinate testing activities.                 | Initial test plan, requirements-based test cases, test implementation/results.                             |
| Matthew Guiao         | Design Manager       | Design the main user screens, navigation, dashboard layout, and overall user interface sketch.                            | Screen designs, dashboard mockup, navigation/user-flow design.                                             |
| Alex Ivaniuk          | Requirements Manager | Organize and prioritize requirements, distinguish must-have and optional features, and track requirement converage.       | Requirements list, prioritized feature list, requirements traceability information.                        |
| Nicolas Reyasbautista | Software Manager     | Research and help manage the software stack, database approach, dependencies, and development standards.                  | Supabase/database research, software management guidelines, dependency documentation.                      |
| All members           | Software Engineer    | Implement application functionality, connect frontend and backend components, and help develop the core ICE TRACK system. | React/Flask setup, reusable components, API integration, database-connected features.                      |

### 3.b. Development Environment

#### Platform / Operating System

- **Development platform:** Local computers using Conda environments, Docker environment is desired. GitHub, Vite, React and Flask.
- **Operating system:** macOS, Windows, or Linux, depending on the team member's computer.
- **Target environment, if different:** Web browsers that are Chromium based, i.e. Google Chrome, Brave. The application is intended to be web-based.

#### Implementation Languages

- **Primary language(s):** JavaScript and Python
- **Frameworks/libraries:** React with Vite for the frontend. Flask for the backend/API. PyTest for test cases. Additional libraries will be documented in the project repository.
- **Version(s):** Versions will be standardized and recorded in the project repository. The team will used a shared Node.js version for React/Vite and a shared Python version through Conda for Flask.

#### Database Application

- **Database:** PostgreSQL, hosted through Supabase
- **Version:** Managed by Supabase. PostgreSQL version will be recorded from the project dashboard.
- **Hosting/deployment model: ** Supabase cloud hosting for the database. The frontend and Flask backend will run locally during development, with production deployment determined later.

#### Rationale for Selection

The team selected React with Vite because it supports efficient development of a responsive web interface and provides a component-based structure for reusable dashboard, navigation, account, order, inventory, and shipment tracking screens. JavaScript was selected because the team is more familiar with it than TypeScript.

Flask was selected for the backend because it is lightweight, Python-based, and suitable for building the API that connects the React frontend to the database. Python is also accessible to the team and supports rapid development.

PostgresSQL was selected because ICE TRACK requires a structured relational database for users, roles, customers, orders, inventory, shipments, and trouble tickets. Supabase provides managed PostgreSQL hosting, authentication-related services, a web dashboard, and easier collaboration without requiring the team to maintain a database server manually. This technology stack also supports local development through Conda and version control through GitHub.


### 3.c. ICSM Common Case

- **Selected ICSM common case:** Information System / Business Information System
- **Rationale:** ICE TRACK is a web based business information system designed to manage customers, orders, inventory, shipments, and trouble tickets. The system will store and retrieve structured business data, provide different access levels for administrators and regular members, and display information through dashboards and reports. Its primary purpose is to support business operations and workflow management rather than perform scientific calculations, control hardware, or operate under real-time constraints. Therefore, the Information System common case is the best fit for the project.

### 3.d. Development Methodologies and Techniques

| Methodology or technique             | How it will be used                                                                                                                                                                                                                                                                      | Rationale                                                                                                                                                                                                                     |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agile and incremental development    | The team will divide development into short sprints. Each sprint will focus on a small set of features, such as navigation, login, dashboard functionality, customer management, inventory, or shipment tracking. The team will review progress and adjust priorities after each sprint. | This allows the team to develop and test the system gradually instead of attempting to build the entire application at once. It supports flexibility when requirements change and makes it easier to identify problems early. |
| Prototyping and user-centered design | The team will create rough screen designs for the dashboard, navigation bar, account pages, order entry, inventory, shipment tracking, and trouble tickets before fully implementing them. These designs will guide frontend development and be reviewed by the team.                    | Prototyping helps the team visualize the user flow, identify usability issues early, and ensure that the final interface supports the needs of administrators and regular members.                                            |

---

## 4. Project Development Estimate

> [!warning] Living Section
> Update this section in subsequent deliverables.

### 4.a. Software Size

#### Estimation Method

Select one method discussed in class:

- [x] Lines of code
- [ ] Function points
- [ ] Object points

**Selected method:**  Lines of code
**Estimation assumptions:**  Estimates are based on the initial ICE TRACK scope and may change a requirements are refined. The estimates include code written by the team and exclude third-party libraries, frameworks, generated files, and configuration files. The estimates cover the first working version of the system.

#### Component-Level Estimates

| Component                             | Description                                                                       | Complexity (Low/Medium/High) | Estimated size | Unit | Assumptions                                                                             |
| ------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------- | -------------: | ---- | --------------------------------------------------------------------------------------- |
| Frontend interface                    | React pages, dashboard, navigation bar, account pages, and reusable UI components | Medium                       |           1800 | LOC  | Includes the main screens and responsive navigation                                     |
| User authentication and roles         | Login, invited-account onboarding, user roles, and role based dashboard access    | Medium                       |            800 | LOC  | Assumes administrator created invitations                                               |
| Backend API                           | Flask routes and business logic connecting the frontend to the backend            | High                         |           1800 | LOC  | Includes API endpoints for users, customers, orders, inventory, shipments, and tickets  |
| Database integration                  | Supabase/PostgreSQL schema, queries, relationships, and connection logic          | Medium                       |            700 | LOC  | Includes tables for users, customers, orders, inventory, shipments, and trouble tickets |
| Order and inventory mangement         | Customer creation, order entry, inventory checking, and inventory updates         | High                         |           1600 | LOC  | Covers the core order and inventory workflow                                            |
| Shipment tracking and trouble tickets | Shipment activity logs, tracking status, ticket creation, and ticket viewing      | High                         |           1300 | LOC  | Includes basic shipment progress and support ticket funcitonality                       |
| Testing and utilities                 | Test cases, validation, error handling, and helper functions                      | Medium                       |            900 | LOC  | Includes initial functional and integration testing                                     |
| **Total**                             |                                                                                   |                              |       **8900** |      |                                                                                         |

### 4.b. Schedule

**Scheduling tool:**  GitHub Workspace


#### Third-Level Development Tasks

| WBS ID | Major activity     | Third-level task                                                           | Lead                | Planned start | Duration | Predecessor(s) | Successor(s) | Critical path? | Progress/status |
| ------ | ------------------ | -------------------------------------------------------------------------- | ------------------- | ------------- | -------- | -------------- | ------------ | :------------: | --------------- |
| 1.1    | Project planning   | Confirm scope, requirements, and user flow                                 | Alex / Alex         | Week 1        | 2 days   | None           | 1.2, 1.3     |       x        | Completed       |
| 1.2    | Design             | Create dashboard, navigation, and main screen designs                      | Matthew             | Week 1        | 5 days   | 1.1            | 1.4          |       x        | Completed       |
| 1.3    | Technical setup    | Configure React, Flask, Supabase, GitHub Workspace, and local envrionments | Tony / Nico         | Week 1        | 5 days   | 1.1            | 1.4          |       x        | Completed       |
| 1.4    | Core development   | Implement navigation, login, user roles, and dashboard                     | Aaron / Tony        | Week 2        | 5 days   | 1.2, 1.3       | 1.5          |                | In progress     |
| 1.5    | Core workflow      | Implement customer creation, order entry, and inventory checking           | Tony / Nico         | Week 3        | 7 days   | 1.4            | 1.6          |                | Not started     |
| 1.6    | Tracking ffeatures | Implement shipping tracking, activity logs, and trouble tickets            | Alex / Tony         | Week 4        | 7 days   | 1.5            | 1.7          |                | Not started     |
| 1.7    | Testing            | Create and execute test cases, fix defects, and verify requirements        | Patricia            | Week 5        | 5 days   | 1.6            | 1.8          |                | In progress     |
| 1.8    | Finalization       | Complete documentation, final corrections, and demonstration preparation   | Aaron / All members | Week 6        | 5 days   | 1.7            | None         |                | Not started     |

#### Critical Path

**Critical-path tasks:**  1.1 -> 1.3 -> 1.4 -> 1.5 -> 1.6 -> 1.7 -> 1.8
**Expected project duration:**  Approximately six weeks
**Schedule constraints:**  Team members class and work schedules, time required to learn the technology stack, dependency on database and backend setup, testing time, and possible changes to project requirements.

#### Progress Against Plan

| Measure       |                           Planned |                     Actual to date | Variance | Notes                                                                                        |
| ------------- | --------------------------------: | ---------------------------------: | -------: | -------------------------------------------------------------------------------------------- |
| Software size |            Approximately 8900 LOC |                   Not measured yet |      N/A | Initial estimate from the software size section                                              |
| Labor hours   | To be tracked by each team member |                   Not recorded yet |      N/A | Team should being recording hours per sprint                                                 |
| Schedule      |     Six week development schedule | Planning and setup are in progress |      TBD | Frontend and backend setup, requirements, testing, design, database tasks have been assigned |

---

## 5. Total Labor-Hour Estimate

> [!warning] Living Section
> Update this section in subsequent deliverables.

| WBS ID / Task                               | Team member or role      | Estimated hours | Actual hours | Remaining hours | Notes                                                                           |
| ------------------------------------------- | ------------------------ | --------------: | -----------: | --------------: | ------------------------------------------------------------------------------- |
| 1.1 Scope, requirements, and user flow      | Aaron / Alex             |              20 |            1 |              19 | Includes project scope and requirements organization                            |
| 1.2 Screen and dashboard design             | Matthew — Design Manager |              20 |            3 |              17 | Includes dashboard, navigation, and main-screen designs                         |
| 1.3 Technical and repository setup          | Tony / Nico / Marcos     |              40 |            10 |              30 | Includes React, Flask, Supabase, GitHub Workspace, and configuration management |
| 1.4 Login, roles, navigation, and dashboard | Aaron / Tony             |              45 |            10 |              35 | Initial frontend and backend integration                                        |
| 1.5 Customer, order, and inventory features | Tony / Nico              |              50 |            0 |              50 | Includes customer records, order entry, and inventory checking                  |
| 1.6 Shipment tracking and trouble tickets   | Alex / Tony              |              40 |            4 |              36 | Includes activity logs and issue tracking                                       |
| 1.7 Test planning and execution             | Patricia — Test Manager  |              35 |            4 |              31 | Includes test cases, requirements coverage, and defect testing                  |
| 1.8 Documentation and final demonstration   | Aaron / All members      |              30 |            0 |              30 | Includes project documentation and presentation preparation                     |
| **Total**                                   |                          |         **280** |       **32** |         **248** | Actuals rolled up from §11 Team Timesheets as of 10/29/26                       |

---

## 6. Requirements

> [!warning] Initial Delivery
> Include all of **6.a** and only a high-level version of **6.b** initially. Expand both in later deliverables.

### 6.a. Statement of Scope / Understanding of the Problem

#### Overall Functionality

ICE TRACK will be a web-based business management application for managing customers, orders, inventory, shipments, and trouble tickets. The system will allow authorized users to log in through administrator-issued invitations and access features based on their assigned role.

The initial delivery will focus on the basic user flow, dashboard, authentication, customer creation, order entry, and the connection between the React frontend, Flask backend, and Supabase database.

**Implementation status (10/29/26):** The first increment is running: public routes (`/` landing page, `/login`, `/signup`, `/onboarding`) plus a protected app shell (`/dashboard`, `/customers`, `/orders`, `/inventory`, `/shipments`, `/trouble-tickets`, `/account`). Account creation currently uses self-service signup at `/signup` — users are created pre-confirmed through the backend's admin API — while administrator-issued invitations (UC-01) remain planned. Shipment tracking has a first-draft page on branch `Alex---Shipment-Tracking-page` (commit `1744678`).


#### Performance-Related RequirementsFor 7E, the detailed design section, should we add that we are adding Shad CN onto this project? I also don't really know what that section entails. For section 7F, informal design notes, I don't know what to put there. 

The following performance requirements are preliminary and may be refined during later deliverables:
* The login page should respond within approximately three seconds under normal usage.
* Dashboard pages should load within approximately three seconds after successful authenticaiton.
* Common API requests should return a response within two seconds under normal usage.
* The system should support multiple authorized users accessing the application at the same time.
* Inventory and shipment updates should be saved accurately and reflected when the user refreshes the page.
* The system should display a clear error message when a request fail or required information is missing.
* The application should remain usable on current web browsers.


#### Use Cases

**UML use-case diagram:**

* Administrator: invites users, manages accounts and roles, views administrative metrics, and manages system information.
* Member: logs in, views the dashboard, creates customers, enters orders, checks inventory, tracks shipments, and creates trouble tickets.

| Use case ID | Use case name                        | Primary actor          | Goal                                                       | Preconditions                              | Outcome                                               |
| ----------- | ------------------------------------ | ---------------------- | ---------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------- |
| UC-01       | Accept invitation and create account | Member                 | Create an account using an administrator issued invittion  | The member has received a valid invitation | A member account is created and can be used to log in |
| UC-02       | Log in                               | Administrator / member | Access the ICE TRACK applicaiton securely                  | The user has a valid account               | The user is directed to the dashbaord                 |
| UC-03       | View dashboard                       | Administrator / member | View navigation options and relevant account information   | The user is logged in                      | The dashboard and metrics are displayed               |
| UC-04       | Manage customers                     | Administrator / member | Create and view customer records                           | The user is logged in and has permission   | Customer information is stored and displayed          |
| UC-05       | Enter and track order                | Member                 | Create an order and view its status                        | A customer record exists                   | The order is stored and its status can be tracked     |
| UC-06       | Manage inventory                     | Administrator / member | Check available inventory and update inventory information | The user is logged in and has permission   | Inventory quantities are updated                      |
| UC-07       | Track shipment                       | Administrator / member | Record and view shipment progress                          | An order exists and is ready for shipment  | Shipment status and activity history are displayed    |
| UC-08       | Create trouble ticket                | Administrator / member | Report and track an order or shipment issue                | The user is logged in                      | A trouble ticket is created and assigned a status     |

### 6.b. Requirements Analysis

#### Requirements Summary and Allocation

| Requirement ID | Functional area / feature / use case                | Requirement                         | Allocation (Hardware/System Software/Application Software/User Process) | Increment/evolution | Priority    | Status |
| -------------- | --------------------------------------------------- | ----------------------------------- | ----------------------------------------------------------------------- | ------------------- | ----------- | ------ |
| REQ-001        | User account invitation and onboarding              | Application Software / User Process | Sprint 1                                                                | High                | Proposed    |        |
| REQ-002        | Secure login and logout                             | Application Software                | Sprint 1                                                                | Critical            | In progress |        |
| REQ-003        | Role-based access for administrators and members    | Application Software                | Sprint 1                                                                | Critical            | Proposed    |        |
| REQ-004        | Dashboard and navigation                            | Application Software                | Sprint 1                                                                | Critical            | In progress |        |
| REQ-005        | Customer creation and customer viewing              | Application Software / User Process | Sprint 1                                                                | High                | Proposed    |        |
| REQ-006        | Order entry and order status management             | Application Software / User Process | Sprint 2                                                                | Critical            | Proposed    |        |
| REQ-007        | Inventory checking and updating                     | Application Software / User Process | Sprint 2                                                                | Critical            | Proposed    |        |
| REQ-008        | Shipment tracking and activity logs                 | Application Software / User Process | Sprint 2                                                                | High                | In progress |        |
| REQ-009        | Trouble-ticket creation and tracking                | Application Software / User Process | Sprint 3                                                                | High                | Proposed    |        |
| REQ-010        | Administrative metrics and account management       | Application Software                | Later increment                                                         | Medium              | Proposed    |        |
| REQ-011        | Data validation, error handling, and basic security | Application Software                | Sprint 1 and later increments                                           | Critical            | In progress |        |
#### Requirements Quality Discussion

Discuss the following:

- Completeness
	- Identify the major functions: authentication, dashboard access, customers, orders, inventory, shipments, and trouble tickets.
- Consistency
	- Requirements are consistent with the project scope and the user flow.
- Correctness
	- The requirements represent the team's understanding of the business problem.
- Clarity and lack of ambiguity
	- The team must define the exact permissions for administrators and members.
- Feasibility
	- The requirements are feasible using the current tech stack.
- Traceability
	- Each requirement will be connected to one or more use cases, design screens, implementation tasks, and test cases. GitHub will be used to track.
- Testability
	- The requirements can be tested through functional and integration tests.
- Changes required to resolve identified issues
	- The team needs to define detailed role permissions, exact dashboard metrics, required data fields, shipment status values, etc.

**Analysis:**
The requirements are organized around the main ICE TRACK workflow and can be allocated to React frontend components, Flask backend services, Supabase database structures, and user processes. The requirements will be refined as the team completes the screen designs, database schema, test plan, and sprint implementation.

#### Quantitative Requirements Summary

| Functional area                          | Initial count | Added | Deleted | Changed | Final count entering top-level design |
| ---------------------------------------- | ------------: | ----: | ------: | ------: | ------------------------------------: |
| Dashboard and navigation                 |               |       |         |         |                                       |
| Customer and order management            |               |       |         |         |                                       |
| Inventory management                     |               |       |         |         |                                       |
| Shipment tracking and activity logs      |               |       |         |         |                                       |
| Trouble-ticket management                |               |       |         |         |                                       |
| Validation, security, and error handling |               |       |         |         |                                       |
| **Total**                                |         **0** | **0** |   **0** |   **0** |                                 **0** |

---

## 7. Design

### 7.a. Top-Level Architecture

**Architecture diagram:**

![[architecture-diagram.png]]

**Selected architecture style:** Layered three-service architecture — React SPA (presentation) → Flask REST API (application) → Supabase (data & authentication).

**Rationale:** The team separates concerns cleanly: the browser never talks to the database directly, so all data access and business rules live in one Python codebase that can be validated and tested, and Supabase's managed Postgres/GoTrue removes the need to run a database server ourselves. Each layer can be developed and swapped independently (the frontend is mocked against the API in tests; the Supabase client is mocked in pytest), which suits a team distributing work across members.

| Project-specific component | Purpose and scope | Responsibilities | Connected components | Connector/interface |
|---|---|---|---|---|
| React SPA (`frontend/`) | All user-facing pages: landing, login, signup, dashboard, customers, orders, inventory, shipments, trouble tickets, account | Routing (react-router), form input and validation, session storage in localStorage, rendering | Flask REST API | JSON over HTTP (`fetch`, CORS; `VITE_API_URL`, default `http://127.0.0.1:5000`) |
| Flask REST API (`backend/app.py`) | Single backend service in front of Supabase | `/api/health`, `/api/login`, `/api/signup`, `/api/inventory`; request validation, honest error mapping, session serialization | React SPA (client), Supabase (server) | JSON over HTTP from the frontend; `supabase-py` client from the backend |
| Supabase (Postgres + Auth) | Managed database and authentication | 8 tables with RLS enabled, enums, triggers (`handle_new_user`, `set_updated_at`), user sign-in/sign-up via admin API | Flask REST API | HTTPS to `SUPABASE_URL` with the `service_role` secret key |
| Supabase CLI (`supabase/`) | Schema-as-code and local dev config | Versioned migrations (`supabase/migrations/`), `config.toml` environment configuration | Supabase project | `supabase db push` / migration files |

### 7.b. Database Design

**Entity-relationship diagram:**

![[database-erd.png]]

**Source:** `supabase/migrations/20261024000000_initial_schema.sql` (Supabase CLI project with `config.toml`), authored by Marcos Munez — commit `491aada`, 10/25/26. The migration defines **8 tables** and **5 enums** (`user_role`, `order_status`, `shipment_status`, `ticket_priority`, `ticket_status`).

**Design notes:**

- Credentials live in Supabase's `auth.users`; the application-facing `profiles` table extends it 1:1 and holds the app role (`admin`/`member`) — roles are not stored in Supabase auth.
- An `on_auth_user_created` trigger runs `handle_new_user()` to create a `profiles` row for every new auth user, reading `full_name` from the signup metadata (falling back to the email prefix).
- A `set_updated_at` trigger maintains `updated_at` on the seven mutable tables; `shipment_events` is append-only and has no `updated_at`.
- `order_items.line_total` is a generated column (`quantity * unit_price`); unique constraints enforce one line per item per order and unique SKUs/tracking numbers.
- Referential rules: deleting an order cascades to its items and shipments; items referenced by orders and inventory referenced by order lines are `restrict`; `created_by`/`assigned_to` are `set null` so history survives user deletion.
- 14 indexes cover foreign keys and workflow columns (`status`, `category`, `assigned_to`), plus `shipment_events(shipment_id, occurred_at desc)` for shipment timelines.
- Row-level security is **enabled on all 8 tables with no policies yet** — access is intentionally locked down until the team finalizes admin/member permissions; until then, all reads/writes go through the backend's `service_role` key.

#### Database Dictionary

> [!note]
> Primary keys are implicitly indexed; the *Indexed?* column marks additional indexes and unique constraints.

| Table | Field / attribute | Data type | Constraints | Primary key? | Foreign key / reference | Indexed? | Definition |
|---|---|---|---|:---:|---|:---:|---|
| profiles | id | uuid | NOT NULL, cascade delete | ☑ | auth.users(id) | ☐ | Profile for each Supabase Auth user |
| profiles | full_name | text | NOT NULL | ☐ | | ☐ | Display name, set from signup metadata |
| profiles | role | user_role | NOT NULL, default `member` | ☐ | | ☐ | Application role: admin or member |
| profiles | is_active | boolean | NOT NULL, default true | ☐ | | ☐ | Inactive accounts are disabled |
| profiles | created_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Record creation time |
| profiles | updated_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Last update, maintained by trigger |
| customers | id | uuid | NOT NULL, default `gen_random_uuid()` | ☑ | | ☐ | Customer record identifier |
| customers | name | text | NOT NULL, non-blank check | ☐ | | ☐ | Customer/company name |
| customers | email | text | | ☐ | | ☐ | Contact email |
| customers | phone | text | | ☐ | | ☐ | Contact phone |
| customers | address_line_1 | text | | ☐ | | ☐ | Street address line 1 |
| customers | address_line_2 | text | | ☐ | | ☐ | Street address line 2 |
| customers | city | text | | ☐ | | ☐ | City |
| customers | state | text | | ☐ | | ☐ | State/province |
| customers | postal_code | text | | ☐ | | ☐ | ZIP/postal code |
| customers | notes | text | | ☐ | | ☐ | Free-form notes |
| customers | created_by | uuid | on delete set null | ☐ | profiles(id) | ☑ | Profile that created the record |
| customers | created_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Record creation time |
| customers | updated_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Last update, maintained by trigger |
| inventory_items | id | uuid | NOT NULL, default `gen_random_uuid()` | ☑ | | ☐ | Inventory item identifier |
| inventory_items | sku | text | NOT NULL, unique, non-blank check | ☐ | | ☑ | Stock-keeping unit code |
| inventory_items | name | text | NOT NULL, non-blank check | ☐ | | ☐ | Item name |
| inventory_items | description | text | | ☐ | | ☐ | Item description |
| inventory_items | category | text | | ☐ | | ☑ | Item category, used for filtering |
| inventory_items | quantity_on_hand | integer | NOT NULL, default 0, ≥ 0 | ☐ | | ☐ | Units currently in stock |
| inventory_items | reorder_level | integer | NOT NULL, default 0, ≥ 0 | ☐ | | ☐ | Threshold for reorder alerts |
| inventory_items | unit_price | numeric(12,2) | NOT NULL, default 0, ≥ 0 | ☐ | | ☐ | Price per unit |
| inventory_items | is_active | boolean | NOT NULL, default true | ☐ | | ☐ | Inactive items are hidden |
| inventory_items | created_by | uuid | on delete set null | ☐ | profiles(id) | ☑ | Profile that created the record |
| inventory_items | created_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Record creation time |
| inventory_items | updated_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Last update, maintained by trigger |
| orders | id | uuid | NOT NULL, default `gen_random_uuid()` | ☑ | | ☐ | Order identifier |
| orders | order_number | bigint | generated always as identity, unique | ☐ | | ☑ | Human-readable sequential order number |
| orders | customer_id | uuid | NOT NULL, on delete restrict | ☐ | customers(id) | ☑ | Customer who placed the order |
| orders | status | order_status | NOT NULL, default `pending` | ☐ | | ☑ | Workflow status of the order |
| orders | notes | text | | ☐ | | ☐ | Free-form order notes |
| orders | created_by | uuid | on delete set null | ☐ | profiles(id) | ☑ | Profile that entered the order |
| orders | created_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Record creation time |
| orders | updated_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Last update, maintained by trigger |
| order_items | id | uuid | NOT NULL, default `gen_random_uuid()` | ☑ | | ☐ | Line-item identifier |
| order_items | order_id | uuid | NOT NULL, on delete cascade | ☐ | orders(id) | ☑ | Order this line belongs to |
| order_items | inventory_item_id | uuid | NOT NULL, on delete restrict | ☐ | inventory_items(id) | ☑ | Item ordered |
| order_items | quantity | integer | NOT NULL, > 0 | ☐ | | ☐ | Units ordered |
| order_items | unit_price | numeric(12,2) | NOT NULL, ≥ 0 | ☐ | | ☐ | Price per unit at time of order |
| order_items | line_total | numeric(12,2) | generated always as `quantity * unit_price` stored | ☐ | | ☐ | Computed line total |
| order_items | created_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Record creation time |
| order_items | updated_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Last update, maintained by trigger |
| shipments | id | uuid | NOT NULL, default `gen_random_uuid()` | ☑ | | ☐ | Shipment identifier |
| shipments | order_id | uuid | NOT NULL, on delete cascade | ☐ | orders(id) | ☑ | Order being shipped |
| shipments | carrier | text | | ☐ | | ☐ | Shipping carrier name |
| shipments | tracking_number | text | unique | ☐ | | ☑ | Carrier tracking number |
| shipments | status | shipment_status | NOT NULL, default `pending` | ☐ | | ☑ | Current shipment status |
| shipments | shipped_at | timestamptz | | ☐ | | ☐ | Time the shipment left |
| shipments | estimated_delivery_date | date | | ☐ | | ☐ | Estimated delivery date |
| shipments | delivered_at | timestamptz | check ≥ shipped_at | ☐ | | ☐ | Actual delivery time |
| shipments | created_by | uuid | on delete set null | ☐ | profiles(id) | ☐ | Profile that created the record |
| shipments | created_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Record creation time |
| shipments | updated_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Last update, maintained by trigger |
| shipment_events | id | uuid | NOT NULL, default `gen_random_uuid()` | ☑ | | ☐ | Event identifier |
| shipment_events | shipment_id | uuid | NOT NULL, on delete cascade | ☐ | shipments(id) | ☑ | Shipment the event belongs to (with occurred_at desc) |
| shipment_events | status | shipment_status | NOT NULL | ☐ | | ☐ | Status recorded by this event |
| shipment_events | location | text | | ☐ | | ☐ | Where the event occurred |
| shipment_events | notes | text | | ☐ | | ☐ | Event details |
| shipment_events | occurred_at | timestamptz | NOT NULL, default now() | ☐ | | ☑ | When the event occurred (part of timeline index) |
| shipment_events | created_by | uuid | on delete set null | ☐ | profiles(id) | ☐ | Profile that recorded the event |
| shipment_events | created_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Record creation time |
| trouble_tickets | id | uuid | NOT NULL, default `gen_random_uuid()` | ☑ | | ☐ | Ticket identifier |
| trouble_tickets | ticket_number | bigint | generated always as identity, unique | ☐ | | ☑ | Human-readable sequential ticket number |
| trouble_tickets | order_id | uuid | on delete set null, nullable | ☐ | orders(id) | ☑ | Related order, if any |
| trouble_tickets | shipment_id | uuid | on delete set null, nullable | ☐ | shipments(id) | ☑ | Related shipment, if any |
| trouble_tickets | title | text | NOT NULL, non-blank check | ☐ | | ☐ | Ticket summary |
| trouble_tickets | description | text | NOT NULL, non-blank check | ☐ | | ☐ | Full issue description |
| trouble_tickets | priority | ticket_priority | NOT NULL, default `medium` | ☐ | | ☐ | Priority: low/medium/high/urgent |
| trouble_tickets | status | ticket_status | NOT NULL, default `open` | ☐ | | ☑ | Workflow status of the ticket |
| trouble_tickets | created_by | uuid | on delete set null | ☐ | profiles(id) | ☐ | Profile that opened the ticket |
| trouble_tickets | assigned_to | uuid | on delete set null | ☐ | profiles(id) | ☑ | Profile assigned to resolve it |
| trouble_tickets | resolved_at | timestamptz | | ☐ | | ☐ | Time the ticket was resolved |
| trouble_tickets | created_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Record creation time |
| trouble_tickets | updated_at | timestamptz | NOT NULL, default now() | ☐ | | ☐ | Last update, maintained by trigger |

#### Relationships

| Parent table | Child table | Cardinality | Foreign key | Description |
|---|---|---|---|---|
| auth.users | profiles | 1:1 | profiles.id → auth.users(id) | Profile auto-created by `on_auth_user_created` trigger |
| profiles | customers | 1:N | customers.created_by → profiles(id) | Audit trail of who created each customer |
| profiles | inventory_items | 1:N | inventory_items.created_by → profiles(id) | Audit trail of who created each item |
| profiles | orders | 1:N | orders.created_by → profiles(id) | Audit trail of who entered each order |
| profiles | shipment_events | 1:N | shipment_events.created_by → profiles(id) | Audit trail of who logged each event |
| profiles | trouble_tickets | 1:N | trouble_tickets.created_by / assigned_to → profiles(id) | Ticket opener and assignee |
| customers | orders | 1:N | orders.customer_id → customers(id) | A customer places many orders; deletion restricted while orders exist |
| orders | order_items | 1:N | order_items.order_id → orders(id) | Orders contain many line items; delete order → delete its lines |
| inventory_items | order_items | 1:N | order_items.inventory_item_id → inventory_items(id) | An item appears on many order lines; deletion restricted while referenced |
| orders | shipments | 1:N | shipments.order_id → orders(id) | An order can have many shipments |
| shipments | shipment_events | 1:N | shipment_events.shipment_id → shipments(id) | Append-only progress history per shipment |
| orders | trouble_tickets | 1:N | trouble_tickets.order_id → orders(id) | Tickets may reference an order; reference cleared if order deleted |
| shipments | trouble_tickets | 1:N | trouble_tickets.shipment_id → shipments(id) | Tickets may reference a shipment; reference cleared if shipment deleted |

### 7.c. Requirements-to-Architecture Mapping

> [!note]
> Maintain the complete mapping in the separate requirements matrix/repository.

**Requirements matrix link:** [[Requirements Traceability Matrix]]

### 7.d. User Interface Prototype

<!-- Embed UI sketches, wireframes, mockups, or screenshots below. -->

![[homesketch.jpg]]

**Design notes:**

Home-page sketch by Matthew Guiao (commit `b01b0dc`, file `ui-sketches/homesketch.jpg`). This mockup is the prototype overview because it defines the app shell shared by every screen — the persistent main navigation bar (logo, home, shipping and tracking, administrator access, profile icon), the landing hero content, and the overall design direction (simple, non-intrusive layout with a 90s/Y2K-inspired look). It also notes that background styling varies page to page to help users orient, and that admin-only controls appear only for administrator accounts.

The remaining sketches in `ui-sketches/` cover individual pages in the same style: `logincreateaccountsketch.jpg` (login/create-account form), `orderssketch.jpg` (order cards with active/cancelled/complete states), `specificorderssketch.jpg` and `specificorderssketch_cancelled.jpg` (order detail views), and `accountinformationsketch.jpg` (profile, password change, and delivery addresses).


### 7.e. Detailed Design

<!-- Add component details, class diagrams, sequence diagrams, algorithms, API contracts, and other implementation-level decisions. -->

#### UI stack — shadcn/ui + Tailwind CSS v4

The frontend uses **Tailwind CSS v4** with **shadcn/ui** components (on Base UI primitives). Components (`Button`, `Card`, `Input`, `Label`) are copied into the repo under `frontend/src/components/ui/` and styled by design tokens (`--background`, `--foreground`, etc.) defined in `frontend/src/index.css`, so the team owns and can modify the source rather than depending on an external component library. Login and signup pages were built against this stack first, and new pages should match it. Note: Base UI's `Button` does not support `asChild` — links styled as buttons use `buttonVariants()` as their `className` instead.

#### Frontend component structure

- `App.jsx` — route table in two groups: public (`/`, `/login`, `/signup`, `/onboarding`) and a protected layout route rendering `AppLayout` (`/dashboard`, `/customers`, `/orders`, `/inventory`, `/shipments`, `/trouble-tickets`, `/account`); unknown paths redirect to `/`.
- `AppLayout.jsx` — sidebar shell holding a single `NAV_ITEMS` array (label, path, icon), active-link styling, auth guard (redirects to `/login` when no session), and sign-out. Adding a page = one `NAV_ITEMS` entry + one `<Route>`.
- `lib/auth.js` — session helpers over `localStorage` under the key `ice-track.session`; stores `{ user, session }` as returned by the API.

#### API contract (Flask, `backend/app.py`)

| Endpoint | Request | Success | Errors |
|---|---|---|---|
| `GET /api/health` | — | 200 `{"status":"ok"}` | — |
| `POST /api/login` | `{email, password}` | 200 `{message, user:{id,email}, session:{access_token, refresh_token, expires_at, token_type}}` | 400 validation · 401 invalid credentials · 403 email not confirmed · 502 auth down · 503 not configured |
| `POST /api/signup` | `{full_name, email, password}` | 201 `{message, user, session}` (`session` may be `null` if auto sign-in fails — account still created) | 400 validation/weak password · 409 email exists · 502 creation failed/unavailable · 503 not configured |
| `GET /api/inventory` | — | 200 `{"data":[...]}` | 500 query failed · 503 not configured |

Route pattern: validate input → acquire Supabase client → JSON response with explicit status code; auth-specific failures are caught (`AuthApiError` / `AuthWeakPasswordError`) and mapped to friendly messages rather than leaked library errors.

#### Authentication flow

1. **Signup**: backend calls `auth.admin.create_user(email_confirm=True)` — users are created **pre-confirmed** (no email verification, works even when the project's confirm-email setting is on). `full_name` travels in `user_metadata` so the `on_auth_user_created` DB trigger can populate `profiles`.
2. Backend then calls `sign_in_with_password` to return a session immediately; if that rare step fails, the response still returns 201 with `session: null` and the frontend tells the user to sign in.
3. **Login**: `sign_in_with_password`; errors are mapped honestly — `invalid_credentials` → 401, `email_not_confirmed` → 403.
4. Frontend stores the `{user, session}` block in `localStorage` and routes to `/dashboard`; `AppLayout` guards protected routes client-side.

### 7.f. Informal Design Notes

- **Why the admin API for signup**: Supabase's regular `sign_up` honors the project's "confirm email" setting (which is on for the hosted project), so new users got stuck unconfirmed. Creating users via `auth.admin.create_user(email_confirm=True)` sidesteps verification entirely — a product decision, not a hack.
- **Honest error mapping**: login deliberately distinguishes "invalid credentials" (401) from "email not confirmed" (403) instead of masking everything as invalid credentials — the original masking made a real account look nonexistent.
- **Sessions live in `localStorage`** (`ice-track.session`) as a placeholder: the backend returns Supabase tokens but there is no refresh logic yet. TODO: refresh the token when `expires_at` passes (noted in `lib/auth.js`).
- **RLS is enabled but policy-less**: all 8 tables have row-level security on with zero policies, so direct client access is denied; the backend's `service_role` key bypasses RLS. Policies are pending finalized admin/member permissions — this is intentional "secure by default."
- **Roles live in `profiles`, not Supabase auth**: `user_role` (admin/member) is a column on `profiles`; Supabase auth only holds credentials.
- **Known mismatch**: `/api/inventory` queries a table named `Inventory`, but the schema defines `inventory_items` — reconcile when wiring real inventory data.
- **Unused env vars**: `SUPABASE_PUBLISHABLE_KEY` and `SUPABASE_JWKS_URL` are defined in `.env.example` but unused so far (reserved for future JWT validation).
- **Route renames**: original flat routes (`OrderEntry`, `ShipmentTracking`, …) were renamed (`Orders`, `Shipments`, …) when the protected shell landed — old paths 404 → redirect to `/`.
- **Legacy template CSS removed**: the Vite starter's unlayered `h1`/`#root` rules were overriding Tailwind utilities; `index.css` now contains only shadcn tokens + theme, and the unused `App.css` was deleted.
- **Landing page (`/`) is a placeholder** — basic hero + auth links for now; polish is deferred to a later pass.
- **Shipment page duplication risk**: Alex's draft (`Alex---Shipment-Tracking-page` branch) builds its own navbar/order-card styling; when merging, it should be rebased onto the shadcn/Tailwind shell and `NAV_ITEMS` instead of introducing a second navigation.

### 7.g. Design Review Notes *(Optional)*

- [ ] Top-level design review completed
- [ ] Detailed design review completed

| Date | Review type | Participants | Findings | Action items | Owner | Status |
|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |

---

## 8. Code and Test

### 8.a. Code Review Notes *(Optional)*

| Date | Component / change | Reviewer(s) | Findings | Action items | Status |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### 8.b. Unit Test Plan

Test suite: `backend/tests/` (pytest) — `test_login.py` and `test_signup.py`. Run with `cd backend && source env/bin/activate && python -m pytest tests/ -v`. The Supabase client is mocked, so no `.env` or live database is required.

> [!note] Implemented vs. planned
> **UT-001–UT-011** (health/login) and **UT-033–UT-041** (signup) are implemented and passing as of build `c568b28` — 32 pytest cases (the validation rows are parametrized), executed 10/29/26. **UT-012–UT-032** are planned coverage for endpoints that are not built yet (logout, auth guards, roles, invitations, customers, orders) — added by Patricia Alfonso in commit `0cf6f9c`, 10/28/26.

| Test ID | Unit/component | Objective | Setup / data | Procedure | Expected result | Requirement(s) |
|---|---|---|---|---|---|---|
| UT-001 | `GET /api/health` | Health check responds | Flask test client | `GET /api/health` | 200, `{"status":"ok"}` | REQ-011 |
| UT-002 | `POST /api/login` input validation | Reject missing credentials | JSON body with one or both of `email`/`password` absent (empty object, missing email only, missing password only) | `POST /api/login` for each case | 400, `{"error":"Email and password are required"}` | REQ-011 |
| UT-003 | `POST /api/login` input validation | Reject blank credentials | Empty email, empty password, whitespace-only email | `POST /api/login` for each case | 400, same error message | REQ-011 |
| UT-004 | `POST /api/login` input validation | Reject null credentials | `email: null` and `password: null` in body | `POST /api/login` for each case | 400, same error message (no 500 crash) | REQ-011 |
| UT-005 | `POST /api/login` input validation | Reject non-object request bodies | Non-JSON form-encoded body; JSON array; JSON string | `POST /api/login` with each body type | 400 with JSON error, no 500 | REQ-011 |
| UT-006 | `POST /api/login` input validation | Normalize email whitespace | `"  user@example.com  "` with a mocked auth client | `POST /api/login`, inspect credentials passed to auth | 200; auth client receives stripped email `user@example.com` | REQ-011 |
| UT-007 | `POST /api/login` success path | Valid credentials log in | Mocked Supabase returning a user (`id`, `email`) | `POST /api/login` with valid email/password | 200, `{"message":"Login successful","user":{...}}` | REQ-002 |
| UT-008 | `POST /api/login` failure path | Wrong password rejected | Mocked auth raising `AuthApiError` (invalid credentials) | `POST /api/login` with wrong password | 401, `{"error":"Invalid email or password"}` | REQ-002 |
| UT-009 | `POST /api/login` failure path | No-user response rejected | Mocked auth returning `user=None` | `POST /api/login` | 401, same invalid-credentials error | REQ-002 |
| UT-010 | `POST /api/login` failure path | Supabase not configured | Client factory patched to return `None` (missing `.env`) | `POST /api/login` with valid payload | 503, `{"error":"Supabase is not configured"}` | REQ-011 |
| UT-011 | `POST /api/login` failure path | Unexpected service failure handled | Mocked auth raising an unexpected `RuntimeError` | `POST /api/login` | 502, `{"error":"Authentication service is unavailable"}` (no stack trace leaked) | REQ-011 |
| UT-012 | `POST /api/logout` | Logout ends the session | Mocked Supabase `sign_out`; valid session token | `POST /api/logout` | 200, `{"message":"Logged out"}`; `sign_out` called once | REQ-002 |
| UT-013 | `POST /api/logout` | Logout without a session is handled | No session token | `POST /api/logout` | 401 with JSON error, no 500 | REQ-002, REQ-011 |
| UT-014 | Auth guard (protected routes) | Reject unauthenticated requests | No token or invalid token | `GET /api/customers` | 401, `{"error":"Authentication required"}` | REQ-002, REQ-003 |
| UT-015 | Session timeout | Expired session is rejected | Token with expired timestamp (mocked clock) | `GET /api/customers` with expired token | 401, session-expired message | REQ-002, REQ-011 |
| UT-016 | Role check helper | Admin allowed on admin-only route | Mocked user with role `admin` | `GET /api/admin/users` | 200 | REQ-003, REQ-010 |
| UT-017 | Role check helper | Member blocked from admin-only route | Mocked user with role `member` | `GET /api/admin/users` | 403, `{"error":"Forbidden"}` | REQ-003, REQ-010 |
| UT-018 | Role check helper | Missing or unknown role denied | Mocked user with no role / role `"guest"` | `GET /api/admin/users` | 403 (deny by default) | REQ-003, REQ-011 |
| UT-019 | `POST /api/invitations` | Admin creates an invitation | Mocked admin; body `{"email":"new@example.com","role":"member"}` | `POST /api/invitations` | 201, invitation record returned | REQ-001, REQ-010 |
| UT-020 | `POST /api/invitations` | Member cannot create invitations | Mocked member user | `POST /api/invitations` | 403 | REQ-001, REQ-003 |
| UT-021 | `POST /api/invitations` | Reject invalid invitation email | Body with `"not-an-email"` and with missing email | `POST /api/invitations` for each case | 400 with reason and minimum requirement | REQ-001, REQ-011 |
| UT-022 | `POST /api/accept-invite` | Valid invitation creates account | Mocked valid, unused invitation token; strong password | `POST /api/accept-invite` | 201, account created, invitation marked used | REQ-001 |
| UT-023 | `POST /api/accept-invite` | Invalid, expired, or reused token rejected | Unknown token; expired token; already-used token | `POST /api/accept-invite` for each case | 400/410 with clear error; no account created | REQ-001, REQ-011 |
| UT-024 | `POST /api/customers` | Create customer with valid data | Mocked insert; name, shipping address, billing address, status `preferred` | `POST /api/customers` | 201, customer returned with an id | REQ-005 |
| UT-025 | `POST /api/customers` | Reject missing required fields | Body missing name; body missing shipping address | `POST /api/customers` for each case | 400, error states reason and minimum requirements | REQ-005, REQ-011 |
| UT-026 | `POST /api/customers` | Accept hyphenated names | `"Mary-Jane"` first name, `"Smith-Lee"` last name | `POST /api/customers` | 201, name stored unchanged | REQ-005 |
| UT-027 | `POST /api/customers` | Reject invalid customer status | Status `"vip"` (not preferred/ok/shaky) | `POST /api/customers` | 400, lists allowed values | REQ-005, REQ-011 |
| UT-028 | `GET /api/customers?search=` | Wildcard name search | Mocked customers "Smith-Lee", "Smyth", "Jones"; search `Sm*` | `GET /api/customers?search=Sm*` | 200, returns Smith-Lee and Smyth only | REQ-005 |
| UT-029 | `GET /api/customers/<id>` | Unknown customer id handled | Mocked empty result | `GET /api/customers/999` | 404 with JSON error | REQ-005, REQ-011 |
| UT-030 | `POST /api/orders` | Order total calculation | Two line items (cost 100.00 and 50.00) plus shipping 10.00 | `POST /api/orders` | 201, total = 160.00 | REQ-006 |
| UT-031 | `POST /api/orders` | Order requires an existing customer | Body with nonexistent `customer_id` | `POST /api/orders` | 400/404, order not created | REQ-006, REQ-011 |
| UT-032 | `POST /api/orders` | Reject empty or invalid line items | No line items; quantity 0; negative quantity | `POST /api/orders` for each case | 400 with reason | REQ-006, REQ-011 |
| UT-033 | `POST /api/login` failure path | Unconfirmed email reported distinctly | Mocked auth raising `AuthApiError` (code `email_not_confirmed`) | `POST /api/login` | 403, `{"error":"Confirm your email before signing in"}` — not masked as invalid credentials | REQ-002, REQ-011 |
| UT-034 | `POST /api/signup` input validation | Reject missing/blank name or email and short/missing password | Payloads with absent name, blank name, absent/empty email, password < 8 chars, no password | `POST /api/signup` for each case | 400 with the specific message (e.g. `"Full name is required"`, `"Password must be at least 8 characters"`) | REQ-001, REQ-011 |
| UT-035 | `POST /api/signup` input validation | Reject non-object request body | JSON array body | `POST /api/signup` | 400 with JSON error, no 500 | REQ-001, REQ-011 |
| UT-036 | `POST /api/signup` success path | Creates a pre-confirmed user and returns a session | Mocked `admin.create_user` + `sign_in_with_password` returning a session | `POST /api/signup` with valid payload | 201; `email_confirm` is `True`; `user_metadata.full_name` set; `session` block returned | REQ-001 |
| UT-037 | `POST /api/signup` success path | Account creation survives auto sign-in failure | `create_user` succeeds; sign-in raises `AuthApiError` | `POST /api/signup` | 201 with `session: null` and a message telling the user to sign in | REQ-001, REQ-011 |
| UT-038 | `POST /api/signup` failure path | Duplicate email rejected | Mocked `create_user` raising code `email_exists` | `POST /api/signup` | 409, `{"error":"An account with that email already exists"}` | REQ-001, REQ-011 |
| UT-039 | `POST /api/signup` failure path | Weak password rejected | Mocked `create_user` raising `AuthWeakPasswordError` | `POST /api/signup` | 400 with the reason | REQ-001, REQ-011 |
| UT-040 | `POST /api/signup` failure path | Supabase not configured | Client factory patched to return `None` (missing `.env`) | `POST /api/signup` with valid payload | 503, `{"error":"Supabase is not configured"}` | REQ-011 |
| UT-041 | `POST /api/signup` failure path | Unexpected service failure handled | Mocked `create_user` raising an unexpected `RuntimeError` | `POST /api/signup` | 502, `{"error":"Account creation is unavailable"}` (no stack trace leaked) | REQ-011 |


### 8.c. Unit Test Review Notes *(Optional)*

- 

### 8.d. Unit Test / Retest Results

Executed 10/29/26 against build `c568b28` with `python -m pytest tests/ -v`: **32 passed** (0.16s). Rows UT-012–UT-032 are not executed — those endpoints are not implemented yet.

| Test ID | Build/version | Execution date | Tester | Actual result | Pass/fail | Defect ID | Retest result |
|---|---|---|---|---|:---:|---|---|
| UT-001 | c568b28 | 10/29/26 | Aaron | 200, `{"status":"ok"}` — as expected | Pass | — | — |
| UT-002 | c568b28 | 10/29/26 | Aaron | 400 for all missing-credential cases — as expected | Pass | — | — |
| UT-003 | c568b28 | 10/29/26 | Aaron | 400 for all blank-credential cases — as expected | Pass | — | — |
| UT-004 | c568b28 | 10/29/26 | Aaron | 400 for null credentials, no 500 — as expected | Pass | — | — |
| UT-005 | c568b28 | 10/29/26 | Aaron | 400 for non-JSON and non-object bodies, no 500 — as expected | Pass | — | — |
| UT-006 | c568b28 | 10/29/26 | Aaron | 200; auth client received stripped email — as expected | Pass | — | — |
| UT-007 | c568b28 | 10/29/26 | Aaron | 200 with user and full session block — as expected | Pass | — | — |
| UT-008 | c568b28 | 10/29/26 | Aaron | 401, `{"error":"Invalid email or password"}` — as expected | Pass | — | — |
| UT-009 | c568b28 | 10/29/26 | Aaron | 401, invalid-credentials error — as expected | Pass | — | — |
| UT-010 | c568b28 | 10/29/26 | Aaron | 503, `{"error":"Supabase is not configured"}` — as expected | Pass | — | — |
| UT-011 | c568b28 | 10/29/26 | Aaron | 502, no stack trace leaked — as expected | Pass | — | — |
| UT-033 | c568b28 | 10/29/26 | Aaron | 403, unconfirmed-email message — as expected | Pass | — | — |
| UT-034 | c568b28 | 10/29/26 | Aaron | 400 with specific messages for all 6 invalid payloads — as expected | Pass | — | — |
| UT-035 | c568b28 | 10/29/26 | Aaron | 400 for JSON array body, no 500 — as expected | Pass | — | — |
| UT-036 | c568b28 | 10/29/26 | Aaron | 201; `email_confirm: True`, `full_name` in metadata, session returned — as expected | Pass | — | — |
| UT-037 | c568b28 | 10/29/26 | Aaron | 201 with `session: null` and sign-in fallback message — as expected | Pass | — | — |
| UT-038 | c568b28 | 10/29/26 | Aaron | 409, duplicate-email message — as expected | Pass | — | — |
| UT-039 | c568b28 | 10/29/26 | Aaron | 400, weak-password reason — as expected | Pass | — | — |
| UT-040 | c568b28 | 10/29/26 | Aaron | 503, not-configured message — as expected | Pass | — | — |
| UT-041 | c568b28 | 10/29/26 | Aaron | 502, `{"error":"Account creation is unavailable"}` — as expected | Pass | — | — |

### 8.e. Integration Test Plan

Unlike the unit tests in 8.b (Supabase mocked, single endpoint in isolation), integration tests exercise two or more real layers together. **Environment:** a dedicated Supabase test instance — the local stack from `config.toml` (`supabase start`) or a separate test project — with the backend's `.env` pointed at it; run the frontend (`npm run dev`) and backend (`python app.py`) for the UI tests. Tools: pytest + `requests`/Flask test client for backend↔Supabase, Playwright for frontend↔backend. Never execute against live team data — use unique test emails per run.

| Test ID | Integrated components | Objective | Setup / data | Procedure | Expected result | Requirement(s) |
|---|---|---|---|---|---|---|
| IT-001 | Flask backend ↔ Supabase Auth ↔ Postgres trigger | Account creation flows through all three layers into `profiles` | Test Supabase instance; backend `.env` configured; unused test email | `POST /api/signup` with full_name/email/password; then query `auth.users` and `profiles` | 201 with session block; auth.users row exists pre-confirmed; `profiles` row created by the `on_auth_user_created` trigger with the submitted `full_name` and `role='member'` | REQ-001, REQ-011 |
| IT-002 | Flask backend ↔ Supabase Auth | Credentials created by IT-001 authenticate and yield usable tokens | Account from IT-001 | `POST /api/login` with correct password; repeat with wrong password | 200 with `user` + full `session` (access/refresh/expires_at/token_type); wrong password → 401 `Invalid email or password` | REQ-002 |
| IT-003 | React login page ↔ Flask API ↔ Supabase | Complete login flow persists the session and enters the app | Frontend + backend running against the test instance; test account | Open `/login`, enter credentials, submit | Request reaches Flask and returns 200; `ice-track.session` written to localStorage with tokens; redirected to `/dashboard`; sidebar shell renders | REQ-002, REQ-004 |
| IT-004 | React signup page ↔ Flask API ↔ Supabase | Complete signup flow creates the account and auto-signs in | Both servers running; unique test email | Open `/signup`, fill all fields, submit; then repeat with the same email | First run: 201 → session stored → lands on `/dashboard` without a separate login. Repeat: 409 surfaced as "An account with that email already exists" | REQ-001, REQ-011 |
| IT-005 | Flask API ↔ Postgres (schema) | Inventory endpoint reads the real database schema | Seeded rows in `inventory_items` | `GET /api/inventory` | 200 with the seeded rows. **Expected to fail today** — endpoint queries `Inventory` but the table is `inventory_items` (risk R-005); passing this test is the exit criterion for that fix | REQ-007 |
| IT-006 | React route guard ↔ Flask API authentication | Unauthenticated access is rejected at both layers | Cleared localStorage (no session) | Visit `/dashboard` directly; then call a data API endpoint with no token | Frontend immediately redirects to `/login`; API returns 401 with a JSON error. **API half is blocked** until JWT validation lands (risk R-002) — the frontend half runs today | REQ-002, REQ-003, REQ-011 |

**Sequencing:** IT-001 → IT-002 establish the backend against the test instance; IT-003 → IT-004 add the UI layer on top; IT-005 and IT-006 are independent checks that gate the inventory fix (R-005) and API authentication work (R-002) respectively.

### 8.f. Integration Test Review Notes *(Optional)*

- First run 10/29/26 (Aaron): the full stack holds together — signup → `auth.users` (pre-confirmed) → `profiles` trigger → login → UI session → route guard is one unbroken chain end-to-end. The auth contract implemented in commit `c568b28` behaves identically against a fresh database as in mocks.
- Both planned-to-fail tests failed for the *right* reasons: IT-005 reproduced the `Inventory` / `inventory_items` mismatch (PGRST205), and IT-006's API probe showed a data endpoint accepting requests with no token at all — R-002 is a confirmed live gap, not a hypothetical one.
- Environment notes for the next tester: use `supabase start` from `config.toml` and point a **throwaway** `.env` at `localhost:54321`; never run these against the hosted project (that is what caused R-009). On this machine port 5000 on the host is claimed by macOS AirPlay, so run the test backend on an alternate port (5050 worked); Vite binds IPv6-only, so Playwright should target `localhost`, not `127.0.0.1`.
- Retest scope after fixes: IT-005 (single endpoint, minutes), IT-006 API half (once JWT validation lands, assert 401 JSON on tokenless calls), and rerun IT-001/IT-002 after any migration changes.

### 8.g. Integration Test / Retest Results

First execution **10/29/26** on build `c568b28`, tester Aaron, against the local test stack from 8.e: `supabase start` (project `cookies-n-cream-current`, initial migration applied), test backend on port 5050 pointed at the local instance, test Vite instance on port 5175 (`VITE_API_URL` → test backend), Playwright 1.63 headless Chromium. Unique test emails (`it001+…@example.com`, `it004+…@example.com`), no live team data touched. **IT-001–IT-004 and the IT-006 frontend half passed; IT-005 failed exactly as predicted (R-005); the IT-006 API half confirmed R-002.**

| Test ID | Build/version | Execution date | Tester | Actual result | Pass/fail | Defect ID | Retest result |
|---|---|---|---|---|:---:|---|---|
| IT-001 | c568b28 | 10/29/26 | Aaron | `POST /api/signup` → 201 with full session block; `auth.users` row pre-confirmed (`email_confirmed_at` set immediately); `profiles` row created by the trigger with `full_name="Integration Tester"`, `role=member` | Pass |  |  |
| IT-002 | c568b28 | 10/29/26 | Aaron | Correct password → 200 with `user` + `access_token`/`refresh_token`/`expires_at`/`token_type`; wrong password → 401 `Invalid email or password` | Pass |  |  |
| IT-003 | c568b28 | 10/29/26 | Aaron | Login page submitted the IT-001 credentials → redirected to `/dashboard`; `ice-track.session` written to localStorage with all four token fields; sidebar nav rendered | Pass |  |  |
| IT-004 | c568b28 | 10/29/26 | Aaron | Signup form → 201 → auto sign-in landed on `/dashboard` with session stored, no separate login; repeated same email → 409 surfaced as "An account with that email already exists", stayed on `/signup` with no session | Pass |  |  |
| IT-005 | c568b28 | 10/29/26 | Aaron | Precheck: `inventory_items` table reachable on the local instance. `GET /api/inventory` → **500** `Could not find the table 'public.Inventory' in the schema cache (PGRST205)` — predicted failure reproduced | **Fail (expected)** | R-005 | Pending fix: retest after query renamed to `inventory_items` |
| IT-006 | c568b28 | 10/29/26 | Aaron | Frontend half: direct `/dashboard` visit with cleared localStorage → immediate redirect to `/login`. API half: data endpoint called with no token was **not rejected with 401** (responded 500 via the R-005 table bug) — no authentication is enforced, confirming R-002 rather than being blocked by it | Frontend: Pass / API: **Fail** | R-002 | Pending fix: retest both halves after JWT validation lands; API half should return 401 JSON |

---

## 9. Risk Status and Open Issues

> [!warning] Living Section
> Update risks, unanswered questions, and resolution plans in subsequent deliverables.

| Risk / issue ID | Description | Category | Probability | Impact | Priority | Mitigation / resolution plan | Owner | Target date | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-001 | All 8 tables have row-level security **enabled with no policies**, and the backend's `service_role` key bypasses RLS entirely — until policies exist, any client-side access is denied outright, and a leaked secret key would expose every table. Blocked on the admin/member permissions being defined (REQ-003). | Security | Medium | High | High | Define the admin/member permission matrix per entity, then write RLS policies in a new timestamped migration. Keep `service_role` backend-only (`.env` is gitignored, never sent to the frontend). | Alex (permissions) / Nico (policies) | Week 3 | Open |
| R-002 | API endpoints (e.g. `GET /api/inventory`) have no server-side authentication, and Flask runs with wide-open CORS (`CORS(app)`) — any origin can call any endpoint today. Harmless while only auth endpoints exist, but becomes a data-exposure risk the moment real records are served. | Security | High | High | High | Validate Supabase JWTs on protected routes (the reserved `SUPABASE_JWKS_URL` is for exactly this) and restrict CORS to the frontend origin. | Tony / Nico | Week 3 | Open |
| R-003 | Sessions are stored in `localStorage` with **no refresh flow** — once `expires_at` passes, users hit a dead session, and a token in `localStorage` is readable by any injected script (XSS). | Technical | High | Medium | Medium | Implement the refresh-token flow (TODO in `frontend/src/lib/auth.js`) before login/signup are called done; revisit httpOnly cookies as a hardening step before launch. | Aaron | Week 3 | Open (documented in code) |
| R-004 | Requirements call for administrator-issued invitations (REQ-001, UC-01), but the shipped flow is open self-service signup — requirements and implementation have diverged. | Requirements / Scope | High | Medium | Medium | Either build the invitation flow before auth is declared complete, or get stakeholder sign-off to re-scope REQ-001 as self-service signup for this deliverable. | Alex / Aaron | Week 3 | Open |
| R-005 | `GET /api/inventory` queries a table named `Inventory`, but the schema defines `inventory_items` — the endpoint returns 500 whenever it is exercised against the real database. | Quality | High (when used) | Low | Low | Rename the query to `inventory_items` when wiring the Inventory page; add an integration test so the mismatch cannot return. | Tony | Week 3 | Open (known) |
| R-006 | Alex's shipment-tracking branch diverged before the route restructure and shadcn adoption (own navbar, own CSS, old routes) — merging it as-is would create a second navigation and conflict with `AppLayout`/`NAV_ITEMS`. | Technical / Integration | Medium | Medium | Medium | Rebase `Alex---Shipment-Tracking-page` onto current `main`; port the sketch's content into `AppLayout` + shadcn components instead of carrying parallel styles. | Alex / Aaron | Week 3 (before merge) | Open |
| R-007 | The unit test plan (UT-001–UT-041) far exceeds implemented coverage: UT-012–UT-032 target endpoints that do not exist yet (logout, auth guards, roles, invitations, customers, orders). Defects could slip through those areas. | Quality | Medium | Medium | Medium | Track implemented vs. planned explicitly (done in §8.b); pair every new endpoint with its planned test rows in the same PR. | Patricia | Week 5 | In progress (plan tracked) |
| R-008 | Local and hosted Supabase configurations drifted: `config.toml` disables email confirmations locally, but the hosted project has them on — this already caused the "confirm email" bug during signup testing. | Configuration | Low | Medium | Low | Signup no longer depends on the setting (admin API pre-confirms every user, so behavior is deterministic); document hosted auth settings in the repo so drift is caught in review. | Nico | Done | Mitigated |
| R-009 | User accounts created before the admin-API change exist on the hosted project as unconfirmed and cannot log in (observed during live testing 10/29). | Operations | Low | Low | Low | Delete affected users in Supabase Dashboard → Authentication → Users (or confirm them via the admin API), then re-sign-up with the current flow. | Aaron | 10/31/26 | Open (one-off cleanup) |

### Areas Needing Further Analysis

- Admin vs. member permission matrix per table/operation — this blocks R-001 (RLS policies) and REQ-003; needs a decision before Week 3.
- Session storage strategy: keep `localStorage` (simple, XSS-exposed) vs. move to httpOnly cookies (more infrastructure) before launch.
- Token refresh design: silent client-side refresh vs. proxying refreshes through the Flask backend.
- Production deployment target — today everything runs locally with only Supabase in the cloud; hosting for frontend and backend is undetermined (noted in §3.b).
- Reconcile the `Inventory` / `inventory_items` naming once and for all (code vs. schema).

### Unanswered Questions

- [ ] Do we keep self-service signup alongside the invitation flow when it is built, or does it replace one of them? (R-004)
- [ ] Must the backend validate JWTs before any non-auth data endpoint goes live, or is the open-API phase acceptable until launch? (R-002)
- [ ] Which hosted Supabase auth settings do we standardize on (confirm-email off?), and who documents them? (R-008)
- [ ] Disposition of Alex's branch: rebase onto the shadcn shell, or treat the sketch as design-only and rebuild the page? (R-006)

---

## 10. Independent System Test

> [!important]
> Your team prepares **10.a–10.c** for your system. Include **10.d** from the team that independently tested your system.

### 10.a. Test Plan / Strategy

#### Requirements Test Strategy

| Requirement ID | Test method | Test level/type | Tools required | Test data required | Planned test case(s) |
|---|---|---|---|---|---|
| REQ-001 |  |  |  |  |  |

#### Informal Test-Planning Notes

- 

#### Test Plan Review Notes *(Optional)*

| Date | Reviewer(s) | Findings | Action items | Owner | Status |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### 10.b. Test Procedures

#### Test Case Template

##### Test Case `ST-001` — Test Case Name

| Field | Details |
|---|---|
| Description |  |
| Requirements tested |  |
| Preconditions |  |
| Inputs / test data |  |
| Tools / environment |  |
| Expected result |  |
| Pass/fail criteria |  |

**Procedure:**

1. 
2. 
3. 

#### Test Procedure Review / Inspection Notes *(Optional)*

- 

### 10.c. Test Tool Development *(If Applicable)*

#### Test Tool Design

- **Tool name:**
- **Purpose:**
- **Design:**
- **Inputs/outputs:**
- **Implementation environment:**

#### Test Tool Design Review / Inspection Notes *(Optional)*

- 

#### Test Tool Testing Results

| Tool test ID | Objective | Expected result | Actual result | Pass/fail | Notes |
|---|---|---|---|---|---|
| TT-001 |  |  |  |  |  |

### 10.d. Test Results Report

#### Executed Tests and Results

| Test ID | Requirement(s) | Execution date | Tester | Build/version | Result | Defect ID | Notes |
|---|---|---|---|---|---|---|---|
| ST-001 |  |  |  |  |  |  |  |

#### Defect Discovery Profile

| Reporting period | New defects | Severity 1 | Severity 2 | Severity 3 | Severity 4 | Cumulative defects |
|---|---:|---:|---:|---:|---:|---:|
|  |  |  |  |  |  |  |

#### Defect Closure Profile

| Reporting period | Defects opened | Defects closed | Remaining open | Reopened | Average closure time |
|---|---:|---:|---:|---:|---:|
|  |  |  |  |  |  |

---

## 11. Team Timesheets

> [!warning] Living Section
> Update this section in every deliverable.

| Date      | Team member         | WBS ID / task | Activity description                                                                                                                                      |  Hours | Deliverable / evidence                                                                           |
| --------- | ------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -----: | ------------------------------------------------------------------------------------------------ |
| 09/10     | Aaron / All members | 1.1           | Discussed project scope, user flow, technology stack, and team assignments                                                                                |      1 | Meeting notes — 9.10                                                                             |
| 09/15     | Aaron / All members | 1.3           | Reviewed React/Flask setup, GitHub Workspace, database, dashboard, and Sprint 1                                                                           |      1 | Meeting notes — 9.15                                                                             |
| 09/16     | Nico                | 1.3           | Set up the Flask backend with Supabase client integration (initial `app.py`)                                                                              |      2 | GitHub commit `0e00dc4` — `backend/app.py`                                                       |
| 09/17     | Aaron / All members | 1.3           | Confirmed technology decisions, Sprint 1 tasks, and team responsibilities                                                                                 |      1 | Meeting notes — 9.17                                                                             |
| 09/22     | Matthew             | 1.2           | Designed rough sketches of the main application pages and dashboard layout                                                                                |      1 | GitHub commit `b01b0dc` — `ui-sketches/*.jpg` (6 page sketches)                                  |
| 09/22     | Patricia            | 1.7           | Developed additional test cases and matched them to requirements                                                                                          |      1 | Test-case document/code                                                                          |
| 09/22     | Alex                | 1.6           | Worked on activity-log and shipment-tracking requirements                                                                                                 |      1 | Activity-log/shipment design                                                                     |
| 09/22     | Aaron               | 1.3           | Worked on Docker setup                                                                                                                                    |      1 | GitHub Dockerfiles                                                                               |
| 09/24     | Nico                | 1.3           | Researched Supabase and database requirements                                                                                                             |      1 | Database research/schema                                                                         |
| 09/24     | Tony                | 1.3           | Worked on the React and Flask application setup                                                                                                           |      1 | GitHub repository/application setup                                                              |
| 10/21     | Tony                | 1.4           | Cleaned up project setup/README and added the initial login page                                                                                          |      2 | GitHub commit `075b11a` — `Login.jsx`, `app.py`, `README.md`                                     |
| 10/24     | Tony                | 1.4           | Connected the login flow to Supabase authentication (frontend ↔ Flask ↔ GoTrue)                                                                           |      2 | GitHub commit `c296296` — `app.py`, `Login.jsx`                                                  |
| 10/25     | Tony                | 1.3           | Authored the initial Supabase database schema: 8 tables, 5 enums, triggers, indexes, and RLS                                                              |      3 | GitHub commit `491aada` — `supabase/migrations/20261024000000_initial_schema.sql`, `config.toml` |
| 10/27     | Alex                | 1.6           | First draft of the shipment tracking page: navbar, order cards, status styling                                                                            |      3 | GitHub commit `1744678` — `ShipmentTracking.jsx`/`.css` (branch `Alex---Shipment-Tracking-page`) |
| 10/28     | Patricia            | 1.7           | Added planned unit tests to the test plan: logout, session handling, role checks, invitations, customers, orders (UT-012–UT-032)                          |      2 | GitHub commit `0cf6f9c` — `Project_Notebook.md` §8.b                                             |
| 10/28     | Aaron               | 1.4           | Restructured routes: public landing page at `/` plus protected shell for Dashboard, Customers, Orders, Inventory, Shipments, Trouble Tickets, and Account |      2 | GitHub commits — `App.jsx`, `AppLayout.jsx`                                                      |
| 10/28     | Aaron               | 1.4           | Built the shadcn signup page and wired signup/login to the backend, persisting session tokens in localStorage                                             |      2 | GitHub commits — `Signup.jsx`, `Login.jsx`, `auth.js`                                            |
| 10/29     | Aaron               | 1.4           | Integrated Supabase auth in Flask: pre-confirmed admin signup (no email verification) with session serialization and honest login error mapping           |      2 | GitHub commits — `app.py`, `.env.example`                                                        |
| 10/29     | Aaron               | 1.7           | Added and ran pytest coverage for the signup and login endpoints (32 tests passing)                                                                       |      1 | `backend/tests/` — signup/login test cases                                                       |
| **Total** |                     |               |                                                                                                                                                           | **30** |                                                                                                  |

### Hours by Team Member

| Team member           | Current period | Cumulative hours |
| --------------------- | -------------: | ---------------: |
|  Aaron Cayanan        |              7 |               11 |
| Marcos Munez          |              7 |                8 |
| Patricia Alfonso      |              2 |                3 |
| Matthew Guiao         |              0 |                1 |
| Alex Ivaniuk          |              3 |                4 |
| Nicolas Reyasbautista |              0 |                3 |
| **Total**             |         **19** |           **30** |

---

## Optional-Item Tracker

> [!tip] Grade Target
> At least **five optional items** from Sections 7, 8, and 10 are expected for an overall teamwork grade of A.

| Optional item | Included? | Location / link |
|---|:---:|---|
| 7.g. Top-level design review notes | ☐ |  |
| 7.g. Detailed design review notes | ☐ |  |
| 8.a. Code review notes | ☐ |  |
| 8.c. Unit test review notes | ☐ |  |
| 8.f. Integration test review notes | ☐ |  |
| 10.a. Test plan review notes | ☐ |  |
| 10.b. Test procedure review/inspection notes | ☐ |  |
| 10.c. Test tool design review/inspection notes | ☐ |  |

**Optional items completed:** 0 / 5 minimum

---

## Appendix / Supporting Artifacts

- [[Requirements Traceability Matrix]]
- [[Project Schedule]]
- [[Risk Register]]
- [[Decision Log]]
- [[Meeting Notes]]
- [[References]]
