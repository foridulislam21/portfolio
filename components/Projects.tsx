"use client";

import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Layers3,
  Database,
  Server,
  Container,
  Activity,
} from "lucide-react";
import { projects } from "@/data/projects";

const projectIcons = {
  "Auction API": Server,
  HelixBus: Layers3,
  "Observability Pipeline": Activity,
  "Developer Portfolio": ExternalLink,
};

const projectThemes = {
  "Auction API": "violet",
  HelixBus: "blue",
  "Observability Pipeline": "emerald",
  "Developer Portfolio": "orange",
};

function ProjectPreview({
  title,
  theme,
}: {
  title: string;
  theme: string;
}) {
  if (title === "Auction API") {
    return (
      <div className={`project-preview project-preview-${theme}`}>
        <div className="browser-bar">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="browser-address">
            auction-api.local/dashboard
          </div>
        </div>

        <div className="auction-dashboard">
          <div className="dashboard-sidebar">
            <div className="dashboard-logo">
              <span />
              Auction
            </div>

            <div className="dashboard-nav active">
              Dashboard
            </div>

            <div className="dashboard-nav">
              Auctions
            </div>

            <div className="dashboard-nav">
              Bids
            </div>

            <div className="dashboard-nav">
              Users
            </div>
          </div>

          <div className="dashboard-main">
            <div className="dashboard-heading">
              <div>
                <span>Overview</span>
                <strong>Live Auctions</strong>
              </div>

              <div className="live-indicator">
                <span />
                LIVE
              </div>
            </div>

            <div className="dashboard-stats">
              <div>
                <span>Active Auctions</span>
                <strong>248</strong>
              </div>

              <div>
                <span>Total Bids</span>
                <strong>12.8K</strong>
              </div>

              <div>
                <span>Revenue</span>
                <strong>$84K</strong>
              </div>
            </div>

            <div className="dashboard-chart">
              <div className="chart-label">
                Auction activity
              </div>

              <div className="chart-bars">
                {[42, 58, 46, 76, 61, 87, 72, 94, 80, 100].map(
                  (height, index) => (
                    <span
                      key={index}
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (title === "HelixBus") {
    return (
      <div className={`project-preview project-preview-${theme}`}>
        <div className="code-window">
          <div className="browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="browser-address">
              HelixBus / Mediator.cs
            </div>
          </div>

          <div className="code-content">
            <div className="code-line">
              <span className="line-number">01</span>
              <span className="code-purple">public</span>{" "}
              <span className="code-blue">ValueTask</span>
            </div>

            <div className="code-line">
              <span className="line-number">02</span>
              <span className="code-purple">async</span>{" "}
              <span className="code-blue">Task</span>
              {" "}
              Send&lt;TResponse&gt;(
            </div>

            <div className="code-line indent">
              <span className="line-number">03</span>
              IRequest&lt;TResponse&gt; request,
            </div>

            <div className="code-line indent">
              <span className="line-number">04</span>
              CancellationToken cancellationToken)
            </div>

            <div className="code-line">
              <span className="line-number">05</span>
              {"{"}
            </div>

            <div className="code-line indent">
              <span className="line-number">06</span>
              <span className="code-purple">return</span>{" "}
              pipeline.Execute(request);
            </div>

            <div className="code-line">
              <span className="line-number">07</span>
              {"}"}
            </div>

            <div className="terminal-status">
              <span className="terminal-dot" />
              Pipeline ready
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (title === "Observability Pipeline") {
    return (
      <div className={`project-preview project-preview-${theme}`}>
        <div className="observability">
          <div className="observability-header">
            <span>APPLICATION LOGS</span>

            <div className="live-indicator">
              <span />
              STREAMING
            </div>
          </div>

          <div className="log-flow">
            <div className="log-node">
              <div className="log-icon">
                <Server size={18} />
              </div>
              <strong>ASP.NET</strong>
              <span>Application</span>
            </div>

            <div className="log-connection">
              <span />
              <span />
              <span />
            </div>

            <div className="log-node">
              <div className="log-icon">
                <Database size={18} />
              </div>
              <strong>Redis</strong>
              <span>Queue</span>
            </div>

            <div className="log-connection">
              <span />
              <span />
              <span />
            </div>

            <div className="log-node">
              <div className="log-icon">
                <Activity size={18} />
              </div>
              <strong>Seq</strong>
              <span>Dashboard</span>
            </div>
          </div>

          <div className="log-terminal">
            <div>
              <span className="log-time">22:41:08</span>
              <span className="log-info">INFO</span>
              Request completed
            </div>

            <div>
              <span className="log-time">22:41:09</span>
              <span className="log-success">OK</span>
              Redis message processed
            </div>

            <div>
              <span className="log-time">22:41:10</span>
              <span className="log-info">INFO</span>
              Event published
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-preview project-preview-${theme}`}>
      <div className="portfolio-preview">
        <div className="portfolio-grid" />

        <div className="portfolio-content">
          <span>SOFTWARE DEVELOPER</span>

          <strong>
            Building software
            <br />
            that scales.
          </strong>

          <div className="portfolio-button">
            View projects
            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.title === "Auction API",
  );

  const secondaryProjects = projects.filter(
    (project) => project.title !== "Auction API",
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">
          <div>
            <p className="projects-eyebrow">
              <span>03</span>
              Projects
            </p>

            <h2 className="projects-title">
              Selected
              <br />
              <span>work.</span>
            </h2>
          </div>

          <div className="projects-intro">
            <p>
              A selection of systems, APIs and applications I've
              designed and built with a focus on performance,
              architecture and real-world usability.
            </p>

            <div className="projects-count">
              <span>04</span>
              Projects
            </div>
          </div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <article className="featured-project">
            <div className="featured-project-top">
              <div className="project-index">
                01
              </div>

              <div className="featured-label">
                <span />
                Featured project
              </div>
            </div>

            <div className="featured-project-content">
              <div className="featured-project-info">
                <div className="project-icon-large">
                  <Server size={26} />
                </div>

                <h3>{featuredProject.title}</h3>

                <p>
                  {featuredProject.description}
                </p>

                <div className="project-tags">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={featuredProject.href}
                    className="project-button primary"
                  >
                    View project
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href="#"
                    className="project-button secondary"
                  >
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </div>

              <ProjectPreview
                title={featuredProject.title}
                theme="violet"
              />
            </div>

            <div className="featured-project-footer">
              <span>Architecture</span>
              <span>API Design</span>
              <span>Data</span>
              <span>Infrastructure</span>
            </div>
          </article>
        )}

        {/* Secondary Projects */}
        <div className="secondary-projects">
          {secondaryProjects.map((project, index) => {
            const Icon =
              projectIcons[
                project.title as keyof typeof projectIcons
              ] ?? Layers3;

            const theme =
              projectThemes[
                project.title as keyof typeof projectThemes
              ] ?? "violet";

            return (
              <article
                key={project.title}
                className="project-card"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="project-card-header">
                  <span className="project-card-number">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <a
                    href={project.href}
                    className="project-card-link"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <ProjectPreview
                  title={project.title}
                  theme={theme}
                />

                <div className="project-card-content">
                  <div className="project-card-title">
                    <div className="project-icon">
                      <Icon size={18} />
                    </div>

                    <h3>{project.title}</h3>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="projects-footer">
          <div>
            <span className="projects-footer-label">
              More on GitHub
            </span>

            <p>
              Explore experiments, libraries and other projects.
            </p>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            <Github size={18} />
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}