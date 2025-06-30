# Rock RMS - Group Detail Page Redesign

## Overview

This project focused on translating Rock RMS's design direction into a component architecture that is structured, consistent, and developer friendly, while closely adhering to the Figma mockup provided.

A core objective was aligning with the component system defined in the design. I approached the build with a strong separation of concerns and introduced three distinct design system patterns:

- **Composable Pattern**: Developers manually compose components (e.g., `Panel`) for maximum control.
- **Opinionated Pattern**: Developers pass config and let the component manage internal logic (e.g., `RockGridComponent`).
- **Compound Pattern**: State and logic are encapsulated inside a composed set of UI components (e.g., `Tabs`, `TabList`, `TabTrigger`)

This blend of patterns reflects the realities of modern design systems: developers need flexible tools for custom layouts, plug-and-play abstractions for repeated logic, and self-contained UI patterns for common interactive flows.

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

### Compound Pattern: `Tabs`

To support flexible tabbed interfaces, I built a compound component structure using `Tabs`, `TabList`, and `TabTrigger`. This pattern encapsulates state and interaction logic while allowing developers to compose layouts declaratively, striking a balance between reusability and flexibility.

```tsx
<Tabs activeTab={selectedTab} onChange={handleTabChange}>
  <TabList>
    <TabTrigger value="overview">Basic Info</TabTrigger>
    <TabTrigger value="permissions">Permissions</TabTrigger>
  </TabList>
</Tabs>
```

This demonstrates how a component system can support flexible and streamlined development experiences.

## Interpreting the Figma Design

Working from static mockups presented several architectural challenges that required careful interpretation and systematic decision-making:

- Panel-prefixed components (Panel Heading, panel-header-actions) indicated structural panel elements
- Non-prefixed components (footer-actions, Group Edit Actions) seemed to represent reusable content

This suggested a distinction between panel scaffolding and contextual content, though whether this was intentional design system thinking or inconsistent labeling wasn't always clear.

For example, visual inconsistencies in badge and action placement required interpreting intent over literal layout. I grouped related controls together based on function rather than pixel-perfect positioning.

To address these challenges, I invested time into analyzing:

- Visual hierarchy and grouping
- Component boundaries and reusability
- Implicit data and UI state assumptions

When faced with ambiguities, I applied this hierarchy:

- Visual relationships over naming conventions
- Functional grouping over literal placement
- Developer ergonomics over strict Figma fidelity

### `<Tabs />` & Naming Inconsistencies

The Figma mockup labeled the element simply as “Tabs” and placed it beside PanelHeader, with no clear indication of ownership (e.g., it wasn’t labeled PanelTabs). I initially inlined it, then extracted it as primitives with Panel managing tab state. Eventually, I refactored it into a compound pattern (Tabs, TabList, TabTrigger, etc.) and moved it to `/components/patterns/`, because it felt more like a reusable layout behavior than a UI primitive.

While the instruction was to follow the component system closely, some areas of the mockup left room for interpretation. In this case, naming and placement suggested one thing, while the interaction model pointed toward another. I aimed to respect the spirit of the system while making thoughtful architectural calls where the design was open to interpretation.

In a real-world scenario, I would collaborate closely with the design team (as I have on past projects) to align early, clarify ownership patterns, and ensure every component decision reflects both product intent and design direction.

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
