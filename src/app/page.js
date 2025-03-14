import Image from "next/image";

export default function HomePage() {
    const projects = [
        { id: "404-game", 
            title: "404 미니게임 탐험", 
            image: "/pink.PNG" },

        { id: "blog", 
            title: "프로젝트1", 
            image: "/ppink.PNG" },

        { id: "shop", 
            title: "프로젝트2", 
            image: "/green.PNG" },
    ];

    return (
        <div className="profile-container">
            {/* 프로필 */}
            <div className="profile-header">
                <div className="profile-pic">
                    <div className="profile-border">
                        <Image 
                            src="/blue.PNG"    
                            alt="프로필 사진" 
                            width={90} 
                            height={90} />
                    </div>
                </div>

                <div className="profile-info">
                    <h1 className="username">
                        cho_soohyun</h1>
                    
                    <div className="profile-stats">
                        <div className="stat">
                            <strong>3</strong>
                        <br></br><span>게시물</span></div>

                        <div className="stat">
                            <strong>8.3만</strong>
                        <br></br><span>팔로워</span></div>

                        <div className="stat">
                            <strong>28</strong>
                        <br></br><span>팔로잉</span></div>
                    </div>
                </div>
            </div>

            {/* 소 */}
            <div className="profile-bio">
                <p> </p><br></br>
                <p><strong>조수현(cho soohyun, 祖 秀 賢)</strong></p>
                <p>개발자 | 프론트엔드 & 백엔드<br></br>
                    안녕하세요~웅앵웅<br></br>
                    웅앵웅앵웅앵우우웅</p>
            
                <a href="https://github.com/soohyunwh" target="_blank" className="github-link">
                    ⌕ https://github.com/soohyunwh
                </a>
            </div>

            <div className="profile-actions">
                        <button className="follow-btn">
                            팔로우</button>
                        <button className="message-btn">
                            메시지</button>
                        <button className="settings-btn">
                            +</button>
                    </div>

            {/* 하이라이트 */}
            <div className="highlights">
                <div className="highlight"><Image src="/blue.PNG" 
                alt="하이라이트1" width={60} height={60} />
                <p>하이라이트1</p></div>

                <div className="highlight"><Image src="/blue.PNG" 
                alt="하이라이트2" width={60} height={60} />
                <p>하이라이트2</p></div>

                <div className="highlight"><Image src="/blue.PNG" 
                alt="하이라이트3" width={60} height={60} />
                <p>하이라이트3</p></div>

                <div className="highlight"><Image src="/blue.PNG" 
                alt="하이라이트4" width={60} height={60} />
                <p>하이라이트4</p></div>
            </div>

            {/* 그 밑에 메뉴 */}
            <div className="tabs">
                <button className="active-tab">게시물</button>
                <button>릴스</button>
                <button>태그됨</button>
            </div>

            {/* 게시물 (프로젝트) */}
            <div className="projects-grid">
                {projects.map((project) => (
                    <a 
                        key={project.id} 
                        href={`/projects/${project.id}`} 
                        className="project-card">

                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            width={300} 
                            height={300} />
                    </a>
                ))}
            </div>
        </div>
    );
}
