# Aintegrator Education — Web Application

A modern, responsive landing page web application built with **Angular (latest standalone architecture)** replicating the Figma design for **Aintegrator Education** (*"AI Education For People Who Make Decisions."*).

---

## 🚀 How to Install and Run the Project

### Prerequisites
- **Node.js**: `v18.x`, `v20.x`, or `v22.x` (Recommended: Node `v20+` or `v24+`)
- **npm**: `v9.x` or higher (comes bundled with Node.js)
- **Angular CLI** (Optional globally, included locally in dev dependencies)

### 1. Clone & Navigate to Repository
```bash
git clone https://github.com/Abishani/Angular_Application.git
cd Angular_Application
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
# or
ng serve
```
Open your browser and navigate to **`http://localhost:4200/`**. The application will hot-reload automatically when you make changes.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/aintegrator-app` directory with zero build warnings and a lightweight ~64 kB initial transfer footprint.

### 5. Stopping the Server
- To stop the server running in your terminal, press **`Ctrl + C`** (type `Y` if prompted on Windows).
- If port `4200` is blocked by a background process on Windows PowerShell:
  ```powershell
  Stop-Process -Id (Get-NetTCPConnection -LocalPort 4200).OwningProcess -Force
  ```

---

## 🛠️ Technical Choices Made

### 1. Modern Angular Architecture
- **Standalone Components**: Eliminates legacy `NgModule` boilerplate, providing explicit dependency imports, faster compilation, and improved tree-shaking.
- **Angular Signals (`signal`, `computed`)**: Employs fine-grained reactive state management for UI state (e.g. navigation state, modal visibility, selected program context) without unnecessary change-detection overhead.
- **Built-in Control Flow**: Utilizes modern Angular `@if` and `@for` template syntax with strict tracking (`track item.id`) for optimal DOM rendering performance.

### 2. Zero Code Duplication (DRY Principle)
- **Centralized Data Store (`ContentService`)**: All text, navigation links, client testimonials, partner credentials, and metadata are centralized in a single source of truth, avoiding hardcoded duplicate markup.
- **Reusable Shared UI Library**:
  - `ButtonComponent`: Configurable button component supporting multiple variants (`primary`, `secondary`, `outline`, `link`), sizes (`sm`, `md`, `lg`), loading states, and full-width modes.
  - `AudienceCardComponent`: Reused for the 3 target programs (*Training Institutions*, *Executives*, *Companies*) with image hover zoom, smooth gradient overlay, and interactive action triggers.
  - `TestimonialCardComponent`: Reused across all 3 client endorsements with avatar badges and author metadata.
  - `TrustBannerComponent`: Social proof banner rendering vector logos and partner descriptions.
  - `ContactModalComponent`: Interactive consultation dialog with focus trapping, ESC key listeners, pre-selected program options, and submission animations.
  - `NavbarComponent` & `FooterComponent`: Sticky header with backdrop-filter glassmorphism and dual-bar footer with location credentials and social media channels.

### 3. Styling Architecture & Design Tokens
- **SCSS Modular System**:
  - `_variables.scss`: Color tokens, gradients, elevation shadows, border radii, and transition curves.
  - `_responsive.scss`: Breakpoint mixins (`mobile`, `tablet`, `desktop`, `wide`).
  - `_typography.scss`: Fluid typography using CSS `clamp()` and Google Fonts (*Plus Jakarta Sans*).
  - `_animations.scss`: Subtle entrance, glow, and hover micro-animations.
- **Advanced CSS Visual Overlays**:
  - Uses CSS `mix-blend-mode: color` and `mix-blend-mode: multiply` combined with horizontal gradient masks to apply the signature violet-to-royal-blue glass panel overlay effect directly over raw source photography.

### 4. Comprehensive Responsive Design
- **Desktop (1280px+)**: Full 3-column card grids, horizontal glassmorphism navigation, side-by-side manifesto section.
- **Tablet (640px - 1023px)**: Adaptive 2-column audience grid, fluid typography scaling, stacked partner badges.
- **Mobile (< 640px)**: Single-column stacked layout, slide-in hamburger navigation menu, responsive bottom-sheet modal drawer, and 44px+ touch-friendly tap targets.

---

## 📌 Assumptions Made

1. **Interactive Consultation Flow**: Assumed that clicking `"Contact"`, `"Get In Touch"`, or card action links (`"Build your AI program"`, `"Talk confidentially"`, `"Educate your leadership"`) should open an interactive modal dialog with the corresponding program focus pre-selected.
2. **Smooth Anchor Navigation**: Assumed header links (`Home`, `Institutions`, `Executives`, `Companies`, `Help`) should smoothly scroll to their respective sections on the landing page.
3. **Vector Brand Assets**: Created crisp, pixel-accurate vector SVGs for the Aintegrator logo mark, CEFCO badge, SAWI logo, Switzerland location pin, external link indicators, and social media icons.
4. **Content Extensibility**: Structured the content via typed TypeScript interfaces (`NavItem`, `AudienceCard`, `Testimonial`, `Partner`, `SocialLink`) so that cards and testimonials can be added or edited dynamically from an API or CMS without modifying component templates.

---

## 🔮 What I Would Implement or Improve With More Time

1. **Backend Integration & Lead Delivery**:
   - Connect the contact modal to an API backend (e.g. Node.js / NestJS or AWS Lambda) integrated with email delivery (SendGrid / Postmark) or CRM platforms (HubSpot / Salesforce).
2. **Swiss Market Internationalization (i18n)**:
   - Implement multi-language support for Switzerland’s official languages (**German**, **French**, **Italian**, and **English**) using `@angular/localize` or `ngx-translate`.
3. **Server-Side Rendering (SSR) & Pre-rendering (SSG)**:
   - Configure `@angular/ssr` for automated static generation to maximize SEO indexation, meta-tag sharing, and instant First Contentful Paint (FCP).
4. **Automated Testing & Visual Regression**:
   - Comprehensive unit test suite with Vitest / Jasmine for components and services.
   - End-to-end (E2E) automated tests and visual regression snapshots with **Playwright**.
5. **Headless CMS Integration**:
   - Connect the `ContentService` to a headless CMS (e.g., Strapi, Sanity, or Contentful) allowing non-technical editors to update testimonials, copy, and partner badges in real-time.
6. **Dark / Light Mode Theme Switching**:
   - Add a theme toggle leveraging CSS custom property tokens for users preferring an ultra-dark executive aesthetic.

---

## 🤖 AI Tools Used

- **Google Antigravity**: Used as an AI coding pair programmer to scaffold the Angular application, structure standalone components, craft SCSS design tokens, generate visual assets matching the Figma aesthetic, and execute automated browser subagent verification across desktop, tablet, and mobile viewports.
