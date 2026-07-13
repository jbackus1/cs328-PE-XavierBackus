import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <header className="header">
        <h1>Joshua "Xavier" Backus</h1>
        <p>Cybersecurity Analyst | Seattle, WA | Joshua.Backus@outlook.com | (619) 400-7993 | linkedin.com/in/yourprofile</p>
      </header>

      <section className="education">
        <h2>Education</h2>
        <h3>Bachelor of Science in Cybersecurity</h3>
        <p>City University of Seattle</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Microsoft Sentinel, Microsoft Defender for Endpoint, Rapid7, KQL</li>
          <li>Entra ID, PowerShell, C# / .NET</li>
          <li>Power Automate, SharePoint Administration</li>
          <li>CompTIA Sec+ (In Progress)</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <h3>Cybersecurity Analyst, Veteran Fellow</h3>
        <p>Port of Seattle</p>
        <ul>
          <li>Monitored and investigated security events using Microsoft Sentinel, Defender for Endpoint, and Rapid7, writing detection queries in KQL</li>
          <li>Administered Entra ID and supported SETA (security education, training, and awareness) program initiatives</li>
          <li>Built a digital InfoSec glossary using SharePoint and Power Apps, and developed a Power Automate document approval workflow</li>
          <li>Automated SSRS report generation and distribution across multiple instances using a C# / Windows Forms application</li>
          <li>Supported security policy development and GRC activities using RSA Archer</li>
        </ul>
        <h3>Gunnery Sergeant, Unit Training Supervisor</h3>
        <p>United States Marine Corps</p>
        <ul>
          <li>Led training and readiness programs for assigned units as a senior enlisted leader</li>
          <li>Served as SharePoint Administrator, managing information systems and site architecture</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <h3>Daedalus Suite</h3>
        <p>
          Designed an AI framework for hospital operations comprising four components: Isis (patient triage), Hygeia (staff burnout prediction), Heka (vitals anomaly detection), and Eunomia (resource allocation).
        </p>

        <h3>Personal AI Assistant</h3>
        <p>
          Built a local Windows-based AI assistant integrating the Claude API with Microsoft Graph (Outlook/Calendar) using a Blazor and WinForms front end, DPAPI-secured token storage, and a SQLite-backed memory store.
        </p>

        <h3>SSRS Report Automation Tool</h3>
        <p>
          Developed a Windows Forms application in C# to automate quarterly SSRS report generation and email distribution across multiple SSRS instances, with department-specific templates and section management.
        </p>
      </section>
    </div>
  );
}

export default Resume;