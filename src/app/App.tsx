import { useState } from "react";
import "./App.scss";
import imgLogo from "@/imports/Slide1691ShapeFilterV2/95d05dacc025231cf862748a5298ec83ca36e86a.png";
import imgCheckbox from "@/imports/Slide1691ShapeFilterV2/8da2f3f5e012e6a75f2ccca967d773279e658661.png";
import imgPressFit from "@/imports/Slide1691ShapeFilterV2/2c474879bc7cd28aecfec013303e5668b682da02.png";
import imgTapped from "@/imports/Slide1691ShapeFilterV2/b0323cd0bbb97ee68eb484240228a01c083767d0.png";
import imgThreaded from "@/imports/Slide1691ShapeFilterV2/a325a69e0514c94b714511a9016e4577fb4a79db.png";
import imgCircumferenceGroove from "@/imports/Slide1691ShapeFilterV2/17dc8d81d9e3d1aa98ac17deddd6db97728ea6c1.png";
import imgNotchedShank from "@/imports/Slide1691ShapeFilterV2/fc789084657737babfb16adbf322ccd50aee9cc4.png";
import imgSetScrewFlatShank from "@/imports/Slide1691ShapeFilterV2/c2c17cdc5c41365533d5dd7203b8b1e011ed161a.png";
import imgCounterboreHole from "@/imports/Slide1691ShapeFilterV2/04eedfe85141efa7d7287ec359ae2ec56004180f.png";
import imgTipShape1 from "@/imports/Slide1691ShapeFilterV2/f180a96bdffb4f47efe18da88d741afe4bd6e7ba.png";
import imgTipShape2 from "@/imports/Slide1691ShapeFilterV2/c471c444b6f66a7f67a3bcb354db9623e5402802.png";
import imgTipShape3 from "@/imports/Slide1691ShapeFilterV2/e5c0e642ac3cd90401042bca05e93213eeba466b.png";
import imgTipShape4 from "@/imports/Slide1691ShapeFilterV2/16984cffdc76c6c91590e81dea94f272c3037bde.png";
import imgTipShape5 from "@/imports/Slide1691ShapeFilterV2/6d8a2050e061d5987564577347cad06e2073de14.png";
import imgTipShape6 from "@/imports/Slide1691ShapeFilterV2/91737c7e48ce07d05cf6b9bf68770addd27d690e.png";
import imgTipShape7 from "@/imports/Slide1691ShapeFilterV2/da7d0cc3f20d131b080a7e68c6d5bffd90d3e07c.png";
import imgRectangle from "@/imports/Slide1691ShapeFilterV2/eb86d5eec40f90a033f9efd5b7f07c7543e127f5.png";
import imgRectangle1 from "@/imports/Slide1691ShapeFilterV2/fa15ac13103c326b84faef2e319c5a75fefb8b98.png";
import imgStraight from "@/imports/image.png";
import imgItem0 from "@/imports/Slide1691ShapeFilterV2/c2c5c0fea28e0e8b77b2efca4330c39450389d95.png";
import imgItem1 from "@/imports/Slide1691ShapeFilterV2/6eeda7963b86ce81d2a9eed31787721318395340.png";
import imgItem2 from "@/imports/Slide1691ShapeFilterV2/259bf364aa9f475ddb60b040db2e53af8a1eb268.png";
import imgItem3 from "@/imports/Slide1691ShapeFilterV2/e4757f479db485a4c80b86a3f9e7d372072652d1.png";
import imgItem4 from "@/imports/Slide1691ShapeFilterV2/521857f482741dd7397119bc82859e873fd748ca.png";
import imgItem5 from "@/imports/Slide1691ShapeFilterV2/4d7de33117b8c9e0fa72c55e2f9f12111d661319.png";
import imgItem6 from "@/imports/Slide1691ShapeFilterV2/2255dbd180e0913b5e0eed56cc562db16dbc097a.png";
import imgItem7 from "@/imports/Slide1691ShapeFilterV2/7489cd823921ae7a08e5aaa3c4b77b66a0284eec.png";
import imgItem8 from "@/imports/Slide1691ShapeFilterV2/24caced0121abe851c4677cfd6dcf594d5feefb2.png";

type FilterKey = "standard" | "shouldered" | "straight";

const ITEMS = [
  { id: 0, title: "Tapered Tip Press-Fit Shank Locating Pins", desc: "Tapered tip for easy insertion during alignment. Press fit shank for permanent, rigid installation.", count: "6,908 Products", img: imgItem0, filters: ["standard"] as FilterKey[] },
  { id: 1, title: "Tapered Tip Press-Fit Shank Shouldered Locating Pins", desc: "Shouldered to control depth and positioning. Tapered tip for easy insertion during alignment. Press fit shank for permanent, rigid installation.", count: "2,303 Products", img: imgItem1, filters: ["shouldered"] as FilterKey[] },
  { id: 2, title: "Tapered Tip Press-Fit Straight Locating Pins", desc: "Straight pin for compact locating. Tapered tip for easy insertion during alignment. Press fit body for permanent, rigid installation.", count: "367 Products", img: imgItem2, filters: ["straight"] as FilterKey[] },
  { id: 3, title: "Spherical Tip Press-Fit Shank Locating Pins", desc: "A rounded tip for more forgiving alignment. Press fit shank for permanent, rigid installation.", count: "9,326 Products", img: imgItem3, filters: ["standard"] as FilterKey[] },
  { id: 4, title: "Spherical Tip Press-Fit Straight Locating Pins", desc: "Straight pin for compact locating. A rounded tip for more forgiving alignment. Press fit body for permanent, rigid installation.", count: "376 Products", img: imgItem4, filters: ["straight"] as FilterKey[] },
  { id: 5, title: "Taper Radius (R) Tip Press-Fit Shank Locating Pins", desc: "A radius‑blended taper for smoother entry than a sharp taper. Good for delicate or softer mating materials. Press fit shank for permanent, rigid installation.", count: "368 Products", img: imgItem5, filters: ["standard"] as FilterKey[] },
  { id: 6, title: "Taper Radius (R) Tip Press-Fit Shank Shouldered Locating Pins", desc: "A radius‑blended taper for smoother entry than a sharp taper. Shouldered to control depth and positioning. Press fit shank for permanent, rigid installation.", count: "152 Products", img: imgItem6, filters: ["shouldered"] as FilterKey[] },
  { id: 7, title: "Taper Radius (R) Tip Press-Fit Straight Locating Pins", desc: "A radius‑blended taper for smoother entry than a sharp taper. Straight pin for compact locating. Press fit shank for permanent, rigid installation.", count: "19 Products", img: imgItem7, filters: ["straight"] as FilterKey[] },
  { id: 8, title: "Flat Tip Press-Fit Shank Locating Pins", desc: "Flat‑ended pin for precise axial location. Press fit shank for permanent, rigid installation.", count: "5,609 Products", img: imgItem8, filters: ["standard"] as FilterKey[] },
];

const FILTER_CARDS: { key: FilterKey; label: string; img: string }[] = [
  { key: "standard", label: "Standard", img: imgRectangle },
  { key: "shouldered", label: "Shouldered", img: imgRectangle1 },
  { key: "straight", label: "Straight", img: imgStraight },
];

const MOUNTING_METHODS = [
  { img: imgPressFit, label: "Press-Fit" },
  { img: imgTapped, label: "Tapped" },
  { img: imgThreaded, label: "Threaded" },
  { img: imgCircumferenceGroove, label: "Circumference Groove" },
  { img: imgNotchedShank, label: "Notched Shank" },
  { img: imgSetScrewFlatShank, label: "Set Screw Flat Shank" },
  { img: imgCounterboreHole, label: "Counterbore Hole" },
];

const TIP_SHAPES = [
  { img: imgTipShape1, label: "Tapered Tip" },
  { img: imgTipShape2, label: "Spherical Tip" },
  { img: imgTipShape3, label: "Taper Radius (R) Tip" },
  { img: imgTipShape4, label: "Tapered Tip (Shouldered)" },
  { img: imgTipShape5, label: "Taper Radius (R) Tip (Shouldered)" },
  { img: imgTipShape6, label: "Round Tapered" },
  { img: imgTipShape7, label: "Bullet Nose" },
];

const NAV_ITEMS = [
  { label: "All Products", bold: true },
  { label: "Services", bold: true },
  { label: "Supplier Central", bold: false },
  { label: "Blog", bold: false },
  { label: "Catalog", bold: false },
  { label: "Careers", bold: false },
];

const BREADCRUMBS = [
  "MISUMI Home",
  "Automation Components",
  "Locating & Positioning Components",
  "Locating Pins & Bushings",
  "Locating Pins",
];

// ── small pieces ─────────────────────────────────────────────────────────────

function ChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 11L8 5L14 11" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SidebarSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="sidebar-section">
      <div className="sidebar-section__heading">
        <span>{label}</span>
        <ChevronUp />
      </div>
      <div className="sidebar-section__body">{children}</div>
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <div className="check-item">
      <div className="check-item__box">
        <img alt="" src={imgCheckbox} />
      </div>
      <span>{label}</span>
    </div>
  );
}

function SidePanel() {
  return (
    <div className="side-panel">
      <div className="side-panel__card">
        <div className="side-panel__header">
          <div className="side-panel__clear-btn">Clear All</div>
        </div>
        <SidebarSection label="Stock Availability">
          <CheckItem label="Show Products in Stock" />
        </SidebarSection>
        <SidebarSection label="Metric/Inch">
          <div className="check-grid-2">
            <CheckItem label="Metric" />
            <CheckItem label="Inch" />
          </div>
        </SidebarSection>
        <SidebarSection label="Standard/Configurable">
          <div className="check-grid-2">
            <CheckItem label="Standard Dimensions" />
            <div style={{ gridColumnStart: 1 }}>
              <CheckItem label="Configurable Dimensions" />
            </div>
          </div>
        </SidebarSection>
        <SidebarSection label="Mounting Method">
          <div className="method-grid">
            {MOUNTING_METHODS.map((m) => (
              <div key={m.label} className="method-item">
                <div className="method-item__img">
                  <img alt={m.label} src={m.img} />
                </div>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </SidebarSection>
        <SidebarSection label="Tip Shape">
          <div className="tip-grid">
            {TIP_SHAPES.map((t) => (
              <div key={t.label} className="method-item">
                <div className="method-item__img">
                  <img alt={t.label} src={t.img} />
                </div>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </SidebarSection>
      </div>
    </div>
  );
}

function FilterCard({ label, img, active, onClick }: { label: string; img: string; active: boolean; onClick: () => void }) {
  return (
    <button className={`filter-card${active ? " filter-card--active" : ""}`} onClick={onClick}>
      <div className="filter-card__inner">
        <div className="filter-card__image-area">
          <div className="filter-card__image-wrap">
            <img alt={label} src={img} />
          </div>
        </div>
        <div className="filter-card__label">
          <span>{label}</span>
        </div>
      </div>
    </button>
  );
}

function SubcategoryItemCard({ item }: { item: (typeof ITEMS)[0] }) {
  return (
    <div className="subcat-item">
      <div className="subcat-item__inner">
        <p className="subcat-item__title">{item.title}</p>
        <div className="subcat-item__body">
          <div className="subcat-item__img-wrap">
            <img alt="" src={item.img} />
          </div>
          <div className="subcat-item__text">
            <p className="subcat-item__desc">{item.desc}</p>
            <p className="subcat-item__count">{item.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [activeFilters, setActiveFilters] = useState<Set<FilterKey>>(new Set());

  const toggleFilter = (key: FilterKey) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const visibleItems = activeFilters.size === 0
    ? ITEMS
    : ITEMS.filter((item) => item.filters.some((f) => activeFilters.has(f)));

  const subtext = activeFilters.size === 0
    ? "Showing all shapes. Select a shaft profile to narrow the results."
    : `Showing ${[...activeFilters].map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(", ")} shapes.`;

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <img alt="MISUMI | Your Time, Our Priority" src={imgLogo} />
          </div>
          <div className="header__search">
            <div className="header__search-input">
              <p>Search by keyword, nam</p>
            </div>
            <div className="header__search-btn">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M13 21C17.4183 21 21 17.4183 21 13C21 8.58172 17.4183 5 13 5C8.58172 5 5 8.58172 5 13C5 17.4183 8.58172 21 13 21Z" stroke="white" strokeWidth="1.5" />
                <path d="M19 19L27 27" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="header__icons">
            <div className="header__icon-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#474747" strokeWidth="1.5" /><line x1="3" y1="6" x2="21" y2="6" stroke="#474747" strokeWidth="1.5" /><path d="M16 10a4 4 0 01-8 0" stroke="#474747" strokeWidth="1.5" /></svg>
              <span>Quote/Order</span>
            </div>
            <div className="header__icon-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#474747" strokeWidth="1.5" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" /></svg>
              <span>Account</span>
            </div>
            <div className="header__icon-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 2H3L1 10h22L21 2h-3" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" /><path d="M1 10v10a2 2 0 002 2h18a2 2 0 002-2V10" stroke="#474747" strokeWidth="1.5" /></svg>
              <span>Cart</span>
              <div className="header__cart-badge"><span>36</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="navbar">
        <div className="navbar__inner">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className={`navbar__item${item.bold ? " navbar__item--bold" : ""}`}>
              {item.label}
            </div>
          ))}
        </div>
      </nav>

      {/* Main */}
      <div className="main">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="breadcrumb__inner">
            {BREADCRUMBS.map((crumb, i) => (
              <span key={i} className="breadcrumb__crumb">
                <span className="breadcrumb__link">{crumb}</span>
                <span className="breadcrumb__sep">{">"}</span>
              </span>
            ))}
            <span className="breadcrumb__current">Selector</span>
          </div>
        </div>

        {/* Page heading */}
        <div className="page-heading">
          <p>Locating Pins</p>
        </div>

        {/* Content row */}
        <div className="content-row">
          <div className="content-row__inner">
            <SidePanel />

            <div className="right-content">
              {/* Filter panel */}
              <div className="filter-panel">
                <p className="filter-panel__title">Filter by Shape</p>
                <p className="filter-panel__subtitle">{subtext}</p>
                <div className="filter-panel__cards">
                  {FILTER_CARDS.map((card) => (
                    <FilterCard
                      key={card.key}
                      label={card.label}
                      img={card.img}
                      active={activeFilters.has(card.key)}
                      onClick={() => toggleFilter(card.key)}
                    />
                  ))}
                </div>
              </div>

              {/* Subcategory group */}
              <div className="subcategory-group">
                <div className="section-heading">
                  <div className="section-heading__inner">
                    <div className="section-heading__bar">
                      <p>Press-Fit Locating Pins</p>
                    </div>
                  </div>
                </div>
                <div className="items-grid">
                  <div className="items-grid__inner">
                    {visibleItems.map((item) => (
                      <SubcategoryItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
