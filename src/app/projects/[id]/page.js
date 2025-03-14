import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
    const { id } = useParams();

    const projectDetails = {
        "404-game": {
            title: "에러페이지 만들기",
            description: "프로젝트 설명 넣기",
            link: "/random404"
        },
        "blog": {
            title: "000000",
            description: "프로젝트 설명 넣기 ",
            link: "/blog"
        },
        "shop": {
            title: "쇼핑몰 프로젝트",
            description: "프로젝트 설명 넣기 ",
            link: "/shop"
        }
    };

    const project = projectDetails[id];

    if (!project) return <h1>프로젝트를 찾을 수 없습니다.</h1>;

    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", textAlign: "center" }}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" style={{ color: "blue", textDecoration: "underline" }}>
                프로젝트 보러가기
            </a>
        </div>
    );
}
