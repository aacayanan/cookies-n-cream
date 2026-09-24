
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

**Date:**  9/24/26

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
| Matthew Guiao         | Des Mgr  |           ☐            |               |         |
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
| 1.1 Scope, requirements, and user flow      | Aaron / Alex             |              20 |            0 |              20 | Includes project scope and requirements organization                            |
| 1.2 Screen and dashboard design             | Matthew — Design Manager |              20 |            0 |              20 | Includes dashboard, navigation, and main-screen designs                         |
| 1.3 Technical and repository setup          | Tony / Nico / Marcos     |              40 |            0 |              40 | Includes React, Flask, Supabase, GitHub Workspace, and configuration management |
| 1.4 Login, roles, navigation, and dashboard | Aaron / Tony             |              45 |            0 |              45 | Initial frontend and backend integration                                        |
| 1.5 Customer, order, and inventory features | Tony / Nico              |              50 |            0 |              50 | Includes customer records, order entry, and inventory checking                  |
| 1.6 Shipment tracking and trouble tickets   | Alex / Tony              |              40 |            0 |              40 | Includes activity logs and issue tracking                                       |
| 1.7 Test planning and execution             | Patricia — Test Manager  |              35 |            0 |              35 | Includes test cases, requirements coverage, and defect testing                  |
| 1.8 Documentation and final demonstration   | Aaron / All members      |              30 |            0 |              30 | Includes project documentation and presentation preparation                     |
| **Total**                                   |                          |         **280** |        **0** |         **280** | Preliminary estimate; update in later deliverables                              |

---

## 6. Requirements

> [!warning] Initial Delivery
> Include all of **6.a** and only a high-level version of **6.b** initially. Expand both in later deliverables.

### 6.a. Statement of Scope / Understanding of the Problem

#### Overall Functionality

ICE TRACK will be a web-based business management application for managing customers, orders, inventory, shipments, and trouble tickets. The system will allow authorized users to log in through administrator-issued invitations and access features based on their assigned role.

The initial delivery will focus on the basic user flow, dashboard, authentication, customer creation, order entry, and the connection between the React frontend, Flask backend, and Supabase database.


#### Performance-Related Requirements

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
| REQ-008        | Shipment tracking and activity logs                 | Application Software / User Process | Sprint 2                                                                | High                | Planning    |        |
| REQ-009        | Trouble-ticket creation and tracking                | Application Software / User Process | Sprint 3                                                                | High                | Proposed    |        |
| REQ-010        | Administrative metrics and account management       | Application Software                | Later increment                                                         | Medium              | Proposed    |        |
| REQ-011        | Data validation, error handling, and basic security | Application Software                | Sprint 1 and later increments                                           | Critical            | Proposed    |        |
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

**Selected architecture style:**  
**Rationale:**  

| Project-specific component | Purpose and scope | Responsibilities | Connected components | Connector/interface |
|---|---|---|---|---|
|  |  |  |  |  |
|  |  |  |  |  |

### 7.b. Database Design

**Entity-relationship diagram:**

![[database-erd.png]]

#### Database Dictionary

| Table | Field / attribute | Data type | Constraints | Primary key? | Foreign key / reference | Indexed? | Definition |
|---|---|---|---|:---:|---|:---:|---|
|  |  |  |  | ☐ |  | ☐ |  |
|  |  |  |  | ☐ |  | ☐ |  |

#### Relationships

| Parent table | Child table | Cardinality | Foreign key | Description |
|---|---|---|---|---|
|  |  |  |  |  |

### 7.c. Requirements-to-Architecture Mapping

> [!note]
> Maintain the complete mapping in the separate requirements matrix/repository.

**Requirements matrix link:** [[Requirements Traceability Matrix]]

### 7.d. User Interface Prototype

<!-- Embed UI sketches, wireframes, mockups, or screenshots below. -->

![[ui-prototype.png]]

**Design notes:**


### 7.e. Detailed Design

<!-- Add component details, class diagrams, sequence diagrams, algorithms, API contracts, and other implementation-level decisions. -->


### 7.f. Informal Design Notes

- 

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

| Test ID | Unit/component | Objective | Setup / data | Procedure | Expected result | Requirement(s) |
|---|---|---|---|---|---|---|
| UT-001 |  |  |  |  |  |  |

### 8.c. Unit Test Review Notes *(Optional)*

- 

### 8.d. Unit Test / Retest Results

| Test ID | Build/version | Execution date | Tester | Actual result | Pass/fail | Defect ID | Retest result |
|---|---|---|---|---|---|---|---|
| UT-001 |  |  |  |  |  |  |  |

### 8.e. Integration Test Plan

| Test ID | Integrated components | Objective | Setup / data | Procedure | Expected result | Requirement(s) |
|---|---|---|---|---|---|---|
| IT-001 |  |  |  |  |  |  |

### 8.f. Integration Test Review Notes *(Optional)*

- 

### 8.g. Integration Test / Retest Results

| Test ID | Build/version | Execution date | Tester | Actual result | Pass/fail | Defect ID | Retest result |
|---|---|---|---|---|---|---|---|
| IT-001 |  |  |  |  |  |  |  |

---

## 9. Risk Status and Open Issues

> [!warning] Living Section
> Update risks, unanswered questions, and resolution plans in subsequent deliverables.

| Risk / issue ID | Description | Category | Probability | Impact | Priority | Mitigation / resolution plan | Owner | Target date | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-001 |  |  |  |  |  |  |  |  |  |

### Areas Needing Further Analysis

- 

### Unanswered Questions

- [ ] 

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

| Date      | Team member         | WBS ID / task | Activity description                                                            | Hours | Deliverable / evidence              |
| --------- | ------------------- | ------------- | ------------------------------------------------------------------------------- | ----: | ----------------------------------- |
| 09/10     | Aaron / All members | 1.1           | Discussed project scope, user flow, technology stack, and team assignments      |     1 | Meeting notes — 9.10                |
| 09/15     | Aaron / All members | 1.3           | Reviewed React/Flask setup, GitHub Workspace, database, dashboard, and Sprint 1 |     1 | Meeting notes — 9.15                |
| 09/17     | Aaron / All members | 1.3           | Confirmed technology decisions, Sprint 1 tasks, and team responsibilities       |     1 | Meeting notes — 9.17                |
| 09/22     | Matthew             | 1.2           | Designed the main application pages and dashboard layout                        |     1 | Page designs/mockups                |
| 09/22     | Patricia            | 1.7           | Developed additional test cases and matched them to requirements                |     1 | Test-case document/code             |
| 09/22     | Alex                | 1.6           | Worked on activity-log and shipment-tracking requirements                       |     1 | Activity-log/shipment design        |
| 09/22     | Aaron               | 1.3           | Worked on Docker setup                                                          |     1 | GitHub Dockerfiles                  |
| 09/24     | Nico                | 1.3           | Researched Supabase and database requirements                                   |     1 | Database research/schema            |
| 09/24     | Tony                | 1.3           | Worked on the React and Flask application setup                                 |     1 | GitHub repository/application setup |
| **Total** |                     |               |                                                                                 | **9** |                                     |

### Hours by Team Member

| Team member           | Current period | Cumulative hours |
| --------------------- | -------------: | ---------------: |
|  Aaron Cayanan        |                |                  |
| Marcos Munez          |                |                  |
| Patricia Alfonso      |                |                  |
| Matthew Guiao         |                |                  |
| Alex Ivaniuk          |                |                  |
| Nicolas Reyasbautista |                |                  |
| **Total**             |          **0** |            **0** |

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
