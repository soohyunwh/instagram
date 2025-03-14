export default function ProjectsPage() {
    const projects = [
        { id: "404-game", title: "404 미니게임 탐험", description: "프로젝트 설명 넣기" },
        { id: "blog", title: "개발 블로그", description: "프로젝트 설명 넣기" },
        { id: "shop", title: "쇼핑몰 프로젝트", description: "프로젝트 설명 넣기" }
    ];

    return (
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center", padding: "20px" }}>
            <h1>내 프로젝트</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {projects.map((project) => (
                    <li key={project.id} style={{ margin: "10px 0" }}>
                        <a href={`/projects/${project.id}`} style={{ fontSize: "18px", color: "blue", textDecoration: "none" }}>
                            {project.title}
                        </a>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
