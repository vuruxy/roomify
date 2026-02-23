import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import Button from "components/ui/Button";
import { ArrowRight, ArrowUpRight, Clock, Layers } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
	  <div className="home">
		<Navbar />
		<section className="hero">
			<div className="announce">
				<div className="dot">
					<div className="pulse"></div>
				</div>

				<p>Introducing AI Agent - The AI Agent for Everyone</p>
			</div>
			<h1>Build faster with AI Agent</h1>

			<p className="subtitle">AI Agent is a free, open-source AI agent that can be used to automate tasks, answer questions, and more. It is built on top of the latest AI models and is constantly being updated with new features.</p>
			<div className="actions">
				<a href="#upload" className="cta">Get Started <ArrowRight className="icon" /></a>
				<Button	variant="secondary" size="lg" className="demo">See it in action</Button>
			</div>
			<div id="upload" className="upload-shell">
				<div className="grid-overlay" />

					<div className="upload-card">
					<div className="upload-head">
						<div className="upload-icon">
						<Layers className="icon"/>
						</div>
						<h3>Upload your documents</h3>
						<p>Drag and drop your documents here or click the button below to upload them.</p>
					</div>
					<p>Upload PDF, DOCX, TXT, and more</p>
				</div>
			</div>
		</section>
		<section className="projects">
			<div className="section-inner">
				<div className="section-head">
					<h2>Projects</h2>
					<p>Here are some projects that have been built with AI Agent:</p>
				</div>
				<div className="projects-grid">
					<div className="project-card group">
						<div className="preview">
						<img src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" alt="Project" 
						/>
						<div className="badge">
							<span>Community</span>
						</div>
						</div>

						<div className="card-body">
							<div>
								<h3>Project Manager</h3>
								
								<div className="meta">
									<Clock size={12} />
									<span>{new Date('01,01,2026').toLocaleDateString()}</span>
									<span>By Vurux</span>
								</div>
						</div>
					</div>
					<div className="arrow">
						<ArrowUpRight size={18} />
					</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	)

}

	