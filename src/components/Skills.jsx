function Skills() {
  const skills = [
    { name: 'React', level: 80 },
    { name: 'React Native', level: 70 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Git/GitHub', level: 75 },
    { name: 'Responsividade', level: 80 }
  ]

  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{width: `${skill.level}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills