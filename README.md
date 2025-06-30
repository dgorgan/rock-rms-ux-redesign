# Rock RMS - Group Detail Page Redesign

## Overview

This project focused on translating Rock RMS's design direction into a component architecture that is structured, consistent, and developer friendly, while closely adhering to the Figma mockup provided.

A core objective was aligning with the component system defined in the design. I approached the build with a strong separation of concerns and introduced three distinct design system patterns:

- **Composable Pattern**: Developers manually compose components (e.g., `Panel`) for maximum control.
- **Opinionated Pattern**: Developers pass config and let the component manage internal logic (e.g., `RockGridComponent`).
- **Controlled Pattern**: Parent manages state while components handle presentation (e.g., `Tabs`)

This blend of patterns reflects the realities of modern design systems: developers need flexible tools for custom layouts, plug-and-play abstractions for repeated logic, and controlled interactions that maintain proper visual hierarchy.

To support this flexibility at scale, I organized components across four architectural layers:

- `/ui/` – Stateless primitives (Button, IconButton, Avatar)
- `/patterns/` – Reusable compositions + compounds (Panel, Tabs, RockGrid)
- `/layout/` – App structure (AppShell, Sidebar)
- `/features/` – Domain-specific implementations

## Component System Patterns & Implementation

### Composable Pattern: `Panel`

For flexible layouts such as panels, I opted for a fully composable architecture. This lets developers compose each panel from purpose-built subcomponents while maintaining visual consistency:

```tsx
<Panel>
  <PanelContainer>
    <PanelHeader title="Group Members" actions={<AddButton />} />
    <PanelBody>
      <GroupMembersTable />
    </PanelBody>
    <PanelFooter footerActions={<SaveCancelButtons />} groupEditButtons={<IconButton />} />
  </PanelContainer>
</Panel>
```

### Opinionated Pattern: `RockGridComponent`

Grids and tables often involve complex but predictable logic: filtering, sorting, row actions, and more. For this, I built an opinionated abstraction that simplifies usage:

```tsx
<RockGridComponent
  columns={groupMemberColumns}
  data={groupMemberData}
  onRowClick={handleSelectMember}
/>
```

### Controlled Pattern: `Tabs`

For interactive UI patterns like tabs, I implemented a controlled component approach where the parent manages state and the tabs handle presentation. This maintains visual hierarchy while providing flexible composition:

```tsx
<Tabs activeTab={selectedTab} onChange={handleTabChange}>
  <TabList>
    <TabTrigger value="overview">Basic Info</TabTrigger>
    <TabTrigger value="permissions">Permissions</TabTrigger>
  </TabList>
</Tabs>
```

## Tabs Component Architecture Analysis

<details>
<summary><strong>Click to Expand</strong></summary>

During development, I explored both compound and controlled patterns for Tabs to demonstrate different architectural approaches and their trade-offs.

### Compound Pattern (Encapsulated)

```tsx
<Tabs defaultTab="overview">
  <TabList>
    <TabTrigger value="overview">Basic Info</TabTrigger>
    <TabTrigger value="permissions">Permissions</TabTrigger>
  </TabList>
  <TabContent value="overview">
    <ChannelOverview />
  </TabContent>
  <TabContent value="permissions">
    <ChannelPermissions />
  </TabContent>
</Tabs>
```

**Pros**

- Full encapsulation of tab state
- Clean, declarative API
- Highly reusable across contexts

### Why it’s useful

This pattern is ideal when Tabs control the full layout. It enforces separation of concerns and is easier to maintain in isolation.

### Controlled Pattern (Integrated with Layout)

```tsx
<Tabs activeTab={selectedTab} onChange={setSelectedTab}>
  <TabList>
    <TabTrigger value="overview">Basic Info</TabTrigger>
    <TabTrigger value="permissions">Permissions</TabTrigger>
  </TabList>
</Tabs>
<div className="p-6">
  {selectedTab === 'overview' && <ChannelOverview />}
  {selectedTab === 'permissions' && <ChannelPermissions />}
</div>
```

**Pros**

- Fits cleanly within existing layouts (e.g., Panel)
- Maintains visual and structural fidelity to Figma
- Gives parents layout and rendering control

### Why this pattern was chosen

Rock RMS’s layout requires Tabs to visually connect with PanelHeader and render content inside PanelBody — something the compound model couldn’t support cleanly.

### Design System Takeaway

Both implementations are valid.
A mature design system supports:

- Compound Tabs for standalone tabbed interfaces
- Controlled Tabs for deeper layout integration

In this project, I prioritized fidelity and layout consistency. But both patterns are implemented in the codebase, offering flexibility for future use cases.

</details>

## Interpreting the Figma Design

Working from static mockups presented several architectural challenges that required careful interpretation and systematic decision-making:

Some elements (like `Panel Heading`, `panel-header-actions`) used the Panel prefix, while others (like `footer-actions`, `Group Edit Actions`) did not. Inconsistencies in naming style — including kebab-case (`panel-header-actions`), PascalCase (`Panel Heading`), and plain phrases (`Group Edit Actions`) — added further ambiguity around how components were meant to be grouped or namespaced.

Because of that, it wasn’t immediately clear whether prefixes implied structural ownership, slot-based injection, or were simply naming artifacts. I treated both header and footer regions as injected slots, keeping composition flexible and consistent regardless of naming convention.

I interpreted the overall pattern as a loose separation between panel scaffolding and contextual content — even if that distinction wasn’t explicitly defined in this project’s scope (at least as I understood it).

To address these uncertainties, I focused on:

- Visual hierarchy and grouping

- Component boundaries and reusability

- Implicit data and UI state assumptions

When faced with ambiguities, I prioritized:

- Visual relationships over naming conventions

- Functional grouping over literal placement

- Developer ergonomics over strict Figma fidelity

### `<Tabs />` & Naming Inconsistencies

The mockup labeled this element simply as “Tabs” and placed it beside `PanelHeader`, with no clear ownership (e.g., no `PanelTabs`). I initially tried primitives, then explored a compound pattern (`Tabs`, `TabList`, `TabTrigger`, `TabContent`) — but that structure assumed Tabs owned both layout and state.

This caused a mismatch with the visual hierarchy: the tab content ended up nested inside `Tabs`, rather than rendered alongside as a sibling to `PanelHeader` and `PanelFooter`, as shown in the Figma.

So I reverted to an uncontrolled pattern: `Tabs` manages internal state via context, while `Panel` controls the layout and content rendering. This preserved fidelity to the visual structure while still enabling reuse and composition.

Since the mockup's naming and placement were a bit ambiguous, I leaned on visual grouping and architectural consistency over strict pattern purity (something I’d refine in collaboration with design in a real-world scenario).

### Icon System

The Figma mockups did not define a consistent icon system. I created a centralized `IconButton` component with variant support for different use cases (navigation, actions, filters). This ensures consistent behavior and styling.

## Theming System

- I created a centralized `theme.css` file in the `/design-system/` folder to establish design tokens that match the Rock RMS visual language. This approach uses CSS custom properties with Tailwind CSS v4's `@theme` syntax for semantic token naming (e.g., `--color-rock-primary-500`, `--color-rock-background`).
- While the current single-file theme is sufficient, the structure is designed to scale into granular files (e.g., colors, typography, spacing) as the system grows.

The design token strategy could also influence finer details like consistent icon sizing in IconButton and layout variants in Avatar. These aren't major architectural decisions, but they help ensure visual consistency and component reliability across the system.

## Rock RMS and Frontend Architecture

This project simulates what it might look like to help Rock RMS evolve its front-end design system in code (something the team is actively hiring for). The goal wasn’t to create a final component library, but to demonstrate architectural thinking, reusability, and component composition that could serve as a foundation.

These patterns reflect my initial implementation choices during this technical project. In a real-world production environment, each would naturally evolve through deeper collaboration, iteration, and tradeoff discussions with designers, engineers, and product stakeholders.

In shaping these decisions, I also explored how libraries like Radix UI and Material UI structure their systems - balancing accessibility, flexibility, and developer experience. At Postman, we leaned into an internal design system with a strong visual language and a consistent component library used across web and desktop platforms to ensure brand consistency and seamless UX. At Adobe, I worked on internal tooling for the Tech GRC (CCF Platform) team, where we wrapped Material UI in custom components to move fast under strict legal deadlines tied to compliance and risk assessment.

The combination of composable, opinionated, and compound patterns demonstrated here aligns with Rock’s goal of building something like **Bootstrap for churches**: flexible, scalable, and ready to power real-world UI at scale.
