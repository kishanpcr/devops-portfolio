# Kishan Kumar — Infrastructure & Automation

A technical portfolio of public infrastructure labs and delivery automation, with direct links to the code behind each project.

**[View the website](https://kishanpcr.github.io/devops-portfolio/)** · **[GitHub profile](https://github.com/kishanpcr)**

## Selected projects

| Project | Implementation | Skills demonstrated |
| --- | --- | --- |
| [Terraform Docker lab](https://github.com/kishanpcr/tf-docker-lab) | Nginx and PostgreSQL containers, a workspace-specific Docker network, host-mounted database data, health checks, and a database-readiness status script. | Terraform resource management, container networking, shell automation, service readiness. |
| [AWS web infrastructure](https://github.com/kishanpcr/AWSWebserverTFScripts) | EC2 instances with Apache bootstrap, security-group rules, and an S3 bucket with versioning, encryption, and public access blocking. | AWS provisioning, configuration through variables, network access rules, storage controls. |
| [Portfolio delivery](https://github.com/kishanpcr/devops-portfolio) | Static HTML/CSS, an Nginx Docker image, a build-and-smoke-test workflow, and a separate GitHub Pages deployment workflow. | Git-based delivery, container packaging, HTTP verification, technical documentation. |

These are personal labs and repository implementations. The source alone does not establish production use, uptime, successful infrastructure deployments, or client outcomes.

## Source evidence

Project descriptions were checked against the following source revisions. Pinned links preserve the implementation used for the write-ups even when the upstream repositories change.

| Description | Source |
| --- | --- |
| Docker resources, workspaces, network, ports, data mount, and health checks | [`tf-docker-lab/main.tf`](https://github.com/kishanpcr/tf-docker-lab/blob/b06fa23c12f2c70b30e324f0bb0d23a4f77f03ac/main.tf) |
| Database readiness and generated status page | [`files/generate_status.sh`](https://github.com/kishanpcr/tf-docker-lab/blob/b06fa23c12f2c70b30e324f0bb0d23a4f77f03ac/files/generate_status.sh) |
| Terraform format, validate, plan, and apply workflow definitions | [`tf-docker-lab/.github/workflows`](https://github.com/kishanpcr/tf-docker-lab/tree/b06fa23c12f2c70b30e324f0bb0d23a4f77f03ac/.github/workflows) |
| EC2, AMI lookup, Apache bootstrap, and security-group rules | [`aws/terraform/main.tf`](https://github.com/kishanpcr/AWSWebserverTFScripts/blob/353053bec17c7119864794a68ec59d982afe49fe/aws/terraform/main.tf) |
| S3 versioning, AES256 encryption, and public access blocking | [`aws/terraform/s3.tf`](https://github.com/kishanpcr/AWSWebserverTFScripts/blob/353053bec17c7119864794a68ec59d982afe49fe/aws/terraform/s3.tf) |
| Portfolio packaging and automation | [`Dockerfile`](Dockerfile), [build and test](.github/workflows/deploy.yml), [Pages](.github/workflows/pages.yml) in this repository |

### Scope and security considerations

- The Docker lab includes an example database password, host-published database ports, and a machine-specific data path. Review these before reuse; it is not a hardened deployment template.
- The AWS lab allows HTTP/HTTPS ingress, restricts SSH to `10.0.0.0/8`, and permits all outbound traffic. Those rules need review for a target environment. A port-443 rule does not implement TLS termination.
- The S3 configuration contains explicit encryption and public-access controls; it does not demonstrate a full security audit or compliance assessment.
- Kubernetes certification preparation and AI agent/infrastructure security are current learning goals. No completed Kubernetes certification or AI security project is claimed.
- This portfolio contains public project material only. Client names, internal systems, credentials, and unsupported impact metrics do not belong in its content.

## Run locally

No package installation or build step is required. Use Python 3 to serve the same directory that Pages publishes:

```bash
git clone https://github.com/kishanpcr/devops-portfolio.git
cd devops-portfolio
python3 -m http.server 8000 --bind 127.0.0.1 --directory src
```

Open <http://127.0.0.1:8000>. Stop the server with `Ctrl+C`.

Or use the existing Dockerfile with Docker installed and running:

```bash
docker build -t devops-portfolio .
docker run --rm --name portfolio-preview -p 127.0.0.1:8080:80 devops-portfolio
```

Open <http://127.0.0.1:8080>. Stop the container with `Ctrl+C`.

## Repository layout

- `src/index.html` — profile, projects, source links, technical focus, and learning goals.
- `src/css/style.css` — responsive layout, typography, focus states, and print styles.
- `Dockerfile` — copies `src/` into an Nginx image.
- `.github/workflows/deploy.yml` — Docker image build and HTTP smoke test.
- `.github/workflows/pages.yml` — publishes `src/` to GitHub Pages.

The site uses system fonts, relative asset paths, and native anchor navigation. There is no runtime JavaScript, third-party font, analytics script, or framework dependency.

## Validation and deployment

Before proposing an update:

1. Serve `src/` locally and inspect desktop and narrow mobile layouts. Check navigation, keyboard focus, project links, and stylesheet loading.
2. Check the repository diff with `git diff --check`.
3. If Docker is available, run the commands above and verify the page and stylesheet:

   ```bash
   curl --fail http://127.0.0.1:8080/
   curl --fail http://127.0.0.1:8080/css/style.css
   ```

4. Open a pull request against `main` and inspect the **Build and Test** workflow result. Its current smoke test checks HTTP availability; it does not check accessibility, link integrity, or visual layout.

The existing workflows are preserved:

- **Build and Test** runs on pull requests targeting `main` and pushes to `main`.
- **Deploy to GitHub Pages** uploads `src/` and deploys on pushes to `main`, using the `github-pages` environment and Pages/OIDC permissions.
- These workflows run independently. Pages deployment is not gated on the build-and-test result. Review the pull-request checks before merging.

Merging a pull request into `main` triggers the existing Pages workflow. Confirm its deployment result in Actions; local preview or a green Docker build alone does not verify publication.

## Maintain the portfolio

Edit the project content in `src/index.html` and layout in `src/css/style.css`. Keep project descriptions concrete: what is configured, how the components interact, and where readers can inspect the implementation. When a supporting project changes, review its code before updating the description and pinned evidence links here and on the site.

Add qualifications only after completion can be verified. Add project outcomes only when supported by public evidence. Keep active learning separate from implemented work.
